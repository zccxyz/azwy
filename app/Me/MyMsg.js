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

export default class MyMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }

    componentDidMount() {
        SAVE.load({
            key: 'msg'
        }).then(rs=>{
            this.setState({list: rs});
        })
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
                    <Title>业务通知</Title>
                    </Body>
                </Header>

                <Content style={{padding: 10}}>
                    <FlatList data={this.state.list} renderItem={({item})=>this._item(item)}
                              keyExtractor={(v, k)=>k} extraData={this.state}/>
                    {/*<View style={{height:HEIGHT/2,justifyContent:'center', alignItems:'center'}}>
                        <Text>暂无业务通知</Text>
                    </View>*/}
                </Content>
            </Container>
        )
    }

    _item(v) {
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text>{v.time}</Text>
                <View style={{width: WIDTH-10, backgroundColor: 'white', height: 80, padding:5}}>
                    <View><Text>业务申请成功</Text></View>
                    <View><Text style={{fontSize: 13}}>尊敬的用户，您的案件申请成功，工作人员将尽快处理</Text></View>
                </View>
            </View>
        )
    }
}