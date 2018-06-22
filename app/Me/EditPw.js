import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View
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
    Thumbnail, Text, Input, Item,
} from 'native-base';
import Color from "../Color";

export default class EditName extends Component {
    constructor(props) {
        super(props);
        this.state={
            pw: '',
            new: '',
        };
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
                    <Title>修改密码</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Item style={{marginBottom: 10}}><Input placeholder="旧密码" onChangeText={e=>this.setState({pw: e})}/></Item>
                    <Item style={{marginBottom: 10}}><Input placeholder="新密码" onChangeText={e=>this.setState({new: e})}/></Item>
                    <Button block style={{marginBottom: 10}} onPress={()=>this._editPw()}>
                        <Text>确认修改</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

    _editPw() {
        if(!this.state.pw || !this.state.new) {
            err('请填写用户名');
            return
        }
        POST(METHOD.amend, `password=${this.state.pw}&newPassword=${this.state.new}&type=2&id=${User.id}`)
            .then(rs=>{
                console.log(rs);
                /*if(rs.code==1) {
                    msg('修改成功');
                    this.props.navigation.goBack();
                }else{
                    err(rs.data);
                }*/
            })
    }
}