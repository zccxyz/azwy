import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
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
    Thumbnail, Text
} from 'native-base';
import Color from "../Color";

export default class Accept extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    componentDidMount() {
        this._get();
    }

    _get() {
        POST(METHOD.my_continue, `class=select&uid=${User.id}`).then(rs=>{
            if(rs.code==1) {
                this.setState({list: rs.data})
            }else{
                err(rs.data)
            }
        });
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
                    <Title>我承接的案源</Title>
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
            <List style={{backgroundColor:'white'}}>
                <ListItem onPress={()=>this.props.navigation.navigate('AcceptInfo', {data: v})}>
                    <Body>
                    <Text>{v.apply.plaintiff} VS {v.apply.defendant}</Text>
                    </Body>
                    <Right style={{flexDirection:'row'}}>
                        <Text style={{marginRight:10, color: Color.navColor}}>{v.type!=1?'待审核':'已审核'}</Text>
                        <Icon name={'ios-arrow-forward'}/>
                    </Right>
                </ListItem>
            </List>
        )
    }
}