import React, {Component} from 'react';
import {
    DeviceEventEmitter,
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
            name: '',
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
                    <Title>修改昵称</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Item style={{marginBottom: 10}}><Input placeholder="请输入用户名" onChangeText={e=>this.setState({name: e})}/></Item>
                    {/*<Text style={{marginBottom: 10}}>用户只能修改一次（1-10个字）</Text>*/}
                    <Button block style={{marginBottom: 10, backgroundColor: Color.navColor}} onPress={()=>this._modify()}>
                        <Text style={{color: 'white'}}>确认修改</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

    _modify() {
        if(!this.state.name) {
            err('请填写用户名');
            return
        }
        POST(METHOD.amend, `nickname=${this.state.name}&id=${User.id}&type=1`)
            .then(rs=>{
                if(rs.code==1) {
                    msg('修改成功');
                    SAVE.save({
                        key: 'user',
                        data: rs.data,
                    });
                    DeviceEventEmitter.emit('User', rs.data);
                    this.props.navigation.goBack();
                }else{
                    err(rs.data);
                }
            })
    }
}