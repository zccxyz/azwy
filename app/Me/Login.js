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
    Thumbnail, Text, Item, Form, Input
} from 'native-base';
import Color from "../Color";
import {TabNavigator, StackNavigator} from "react-navigation";

class Login extends React.Component {

    render() {
        const {navigate}=this.props.navigation;
        return(
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Form style={{marginBottom: 10}}>
                        <Item>
                            <Input placeholder="手机号" />
                        </Item>
                        <Item last>
                            <Input placeholder="密码" />
                        </Item>
                    </Form>
                    <Button block style={{marginBottom: 10}}>
                        <Text>登录</Text>
                    </Button>
                    <Button bordered block  onPress={()=>navigate('Reg')}>
                        <Text>注册新用户</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

class Login2 extends Component {
    render() {
        const {navigate}=this.props.navigation;
        return(
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Form style={{marginBottom: 10}}>
                        <Item>
                            <Input placeholder="手机号" />
                        </Item>
                        <Item last>
                            <Input placeholder="验证码" />
                            <Right>
                                <Button bordered small>
                                    <Text>发送验证码</Text>
                                </Button>
                            </Right>
                        </Item>
                    </Form>
                    <Button block style={{marginBottom: 10}}>
                        <Text>登录</Text>
                    </Button>
                    <Button bordered block onPress={()=>navigate('Reg')}>
                        <Text>注册新用户</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default tab = TabNavigator({
    Login: {
        screen: Login,
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
    initialRouteName: 'Login',
});