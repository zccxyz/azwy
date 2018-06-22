import React, {Component} from 'react';
import {
    DeviceEventEmitter,
} from 'react-native';
import {
    Container,
    Right,
    Button,
    Content, Text, Item, Form, Input
} from 'native-base';
import Color from "../Color";
import {TabNavigator} from "react-navigation";

class Login1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tel: '',
            pw: '',
        };
    }

    _login() {
        const state = this.state;
        if (state.tel.length != 11) {
            alert('请正确填写手机号码');
            return;
        }
        if (!state.pw) {
            alert('请正确填写以上内容');
            return;
        }
        POST(METHOD.login, `phone=${state.tel}&password=${state.pw}`).then(rs=>{
            if(rs.code==1) {
                msg('登录成功');
                SAVE.save({
                    key: 'user',
                    data: rs.data,
                });
                DeviceEventEmitter.emit('User', rs.data);
                this.props.navigation.navigate('MeIndex');
                console.log(rs);
            }else{
                msg(rs.data);
            }
        })
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Form style={{marginBottom: 10}}>
                        <Item>
                            <Input placeholder="手机号" onChangeText={e => this.setState({tel: e})}
                                   keyboardType={'numeric'}/>
                        </Item>
                        <Item last>
                            <Input placeholder="密码" secureTextEntry onChangeText={e => this.setState({pw: e})}/>
                        </Item>
                    </Form>
                    <Button block style={{marginBottom: 10}} onPress={() => this._login()}>
                        <Text>登录</Text>
                    </Button>
                    <Button bordered block onPress={() => navigate('Reg')}>
                        <Text>注册新用户</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

class Login2 extends Component {
    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Form style={{marginBottom: 10}}>
                        <Item>
                            <Input placeholder="手机号"/>
                        </Item>
                        <Item last>
                            <Input placeholder="验证码"/>
                            <Right>
                                <Button bordered small>
                                    <Text>发送验证码</Text>
                                </Button>
                            </Right>
                        </Item>
                    </Form>
                    <Button block style={{marginBottom: 10}} onPress={()=>goBack()}>
                        <Text>登录</Text>
                    </Button>
                    <Button bordered block onPress={() => navigate('Reg')}>
                        <Text>注册新用户</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default Tab2 = TabNavigator({
    Login1: {
        screen: Login1,
        navigationOptions: {
            tabBarLabel: '密码登录',
        }
    },
    Login2: {
        screen: Login2,
        navigationOptions: {
            tabBarLabel: '动态密码登录',
        }
    },
}, {
    tabBarOptions: {
        style: {
            height: 50,
            backgroundColor: Color.navColor
        },
        indicatorStyle: {
            backgroundColor: Color.listColor
        }
    },
    backBehavior: 'none',
});