import React, {Component} from 'react';
import {
    Platform,
    StyleSheet, TouchableOpacity,
    View, FlatList
} from 'react-native';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Content,
    List,
    ListItem,
    Thumbnail, Text, } from 'native-base';
import Color from "../Color";

export default class Keep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }

    componentDidMount() {
        this._getKeep();
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return(
            <Container style={{flex: 1}}>
                <Header style={{backgroundColor: Color.navColor}} androidStatusBarColor={Color.navColor}
                        noShadow={true}>
                    <Left>
                        <Icon onPress={()=>goBack()} style={{color: Color.listColor}} name={'chevron-thin-left'} type={'Entypo'}/>
                    </Left>
                    <Body>
                    <Title>我的收藏</Title>
                    </Body>
                </Header>

                <Content>
                    <FlatList data={this.state.list} renderItem={({item})=>this._item(item)}
                              keyExtractor={(v, k)=>k} extraData={this.state}/>
                </Content>
            </Container>
        )
    }

    _item(v) {
        return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('CaseInfo2', {data: v.apply})}>
                <View style={{height: 80, flexDirection:'row',elevation: 1, backgroundColor: 'white', marginBottom:5}}>
                    <View style={{flex: 4,justifyContent:'space-between', padding:5}}>
                        <Text style={{fontSize: 20}}>{v.apply.plaintiff} VS {v.apply.defendant}</Text>
                        <View style={{justifyContent:'space-between', alignItems:'center', flexDirection:'row'}}>
                            <Text style={{fontSize:13, color:'gray'}}>待委托</Text>
                            {/*<Text style={{fontSize:13, color:'gray'}}>北京市某某法院</Text>*/}
                        </View>
                    </View>
                    <View style={{flex: 1, backgroundColor: Color.navColor, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color: 'white', fontSize:25}}>{v.apply.money/10000}</Text>
                        <Text style={{color: 'white'}}>万元</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _getKeep() {
        POST(METHOD.collect, `class=select&uid=${User.id}`)
            .then(rs=>{
                if(rs.code==1){
                    this.setState({list: rs.data})
                } else {
                    msg(rs.data);
                }
                console.log(rs)
            });
    }
}