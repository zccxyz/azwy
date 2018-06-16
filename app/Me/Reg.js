import React, {Component} from 'react';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Content, Text, Item, Input,
} from 'native-base';
import Color from "../Color";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tel: '',
            yzm: '',
            pw: '',
        };
    }

    _reg() {
        const state = this.state;
        if(state.tel.length!=11) {
            alert('请正确填写手机号码');
            return;
        }
        if(!state.yzm || !state.pw) {
            alert('请正确填写以上内容');
            return;
        }
        POST(METHOD.reg, `phone=${state.tel}&password=${state.pw}`).then(rs=>{
            console.log(rs);
            if(rs.code==1) {
                msg('注册成功');
                this.props.navigation.navigate('MeInfo');
            }else{
                msg(rs.data);
            }
        })
    }

    _send() {

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
                        <Title>注册</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Item>
                        <Input placeholder="手机号" onChangeText={e=>this.setState({tel: e})} keyboardType={'numeric'}/>
                    </Item>
                    <Item last>
                        <Input placeholder="验证码" keyboardType={'numeric'} onChangeText={e=>this.setState({yzm: e})}/>
                        <Right>
                            <Button bordered small onPress={()=>this._send()}>
                                <Text>发送验证码</Text>
                            </Button>
                        </Right>
                    </Item>
                    <Item>
                        <Input placeholder="密码，6-15字符" secureTextEntry onChangeText={e=>this.setState({pw: e})}/>
                    </Item>
                    <Button block style={{marginBottom: 10}} onPress={()=>this._reg()}>
                        <Text>注册并登录</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}