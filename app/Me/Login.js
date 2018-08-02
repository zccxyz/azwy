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
                    <Button block style={{marginBottom: 10, backgroundColor: Color.navColor}} onPress={() => this._login()}>
                        <Text>登录</Text>
                    </Button>
                    <Button bordered style={{borderColor: Color.navColor}} block onPress={() => navigate('Reg')}>
                        <Text style={{color: Color.navColor}}>注册新用户</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

class Login2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tel: '',
            yzm: '',
            time: 0,
        };
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Form style={{marginBottom: 10}}>
                        <Item>
                            <Input placeholder="手机号" onChangeText={e => this.setState({tel: e})} keyboardType={'numeric'}/>
                        </Item>
                        <Item last>
                            <Input placeholder="验证码" keyboardType={'numeric'} onChangeText={e => this.setState({yzm: e})}/>
                            <Right>
                                {this.state.time > 0 ?
                                    <Button bordered small style={{borderColor: Color.navColor}}>
                                        <Text style={{color:Color.navColor}}>{this.state.time}秒</Text>
                                    </Button> :
                                    <Button style={{borderColor: Color.navColor}} bordered small onPress={() => this._send()}>
                                        <Text style={{color:Color.navColor}}>发送验证码</Text>
                                    </Button>}
                            </Right>
                        </Item>
                    </Form>
                    <Button block style={{marginBottom: 10, backgroundColor: Color.navColor}} onPress={()=>this._login()}>
                        <Text>登录</Text>
                    </Button>
                    <Button bordered block onPress={() => navigate('Reg')} style={{borderColor: Color.navColor}}>
                        <Text style={{color: Color.navColor}}>注册新用户</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

    _login() {
        if(this.state.tel.length!=11 || !this.state.yzm) {
            msg('请填完以上内容');
            return;
        }
        POST(METHOD.verify_login, `code=${this.state.yzm}&phone=${this.state.tel}`).then(rs=>{
            if(rs.code==1){
                SAVE.save({
                    key: 'user',
                    data: rs.data,
                });
                msg('登录成功');
                DeviceEventEmitter.emit('User', rs.data);
                this.props.navigation.navigate('MeIndex');
            }else{
                err(rs.data);
            }
            //console.log(rs)
        })
    }

    _send() {
        if(this.state.tel.length!=11) {
            msg('请正确填写手机号码');
            return;
        }
        //POST(METHOD.sms, `phone=${this.state.tel}`);
        fetch(YM + METHOD.sms, {
            method: 'POST', body: `phone=${this.state.tel}`, headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            if (response.status == 200) {
                this.setState({time: 60});
                setInterval(()=>{
                    if(this.state.time>0){
                        this.setState({time: this.state.time-1})
                    }
                    clearInterval();
                }, 1000);
            }
        }).catch(e => {
            console.log(e, '失败');
        });
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