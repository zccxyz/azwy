/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {StackNavigator, TabNavigator} from 'react-navigation';
import { Icon, Root } from 'native-base';
import Color from './app/Color';

import HomeIndex from './app/Home/Index';
import MeIndex from './app/Me/Index';
import Login from './app/Me/Login';
import Reg from './app/Me/Reg';
import Info from './app/Me/Info';
import EditName from './app/Me/EditName';
import EditTel from './app/Me/EditTel';
import EditPw from './app/Me/EditPw';
import EditPw2 from './app/Me/EditPw2';
import MeInfo from './app/Me/MeInfo';
import Case from './app/Me/Case';
import Keep from './app/Me/Keep';
import Message from './app/Me/Message';
import Code from './app/Me/Code';
import About from './app/Me/About';
import Help from './app/Me/Help';

const tab = TabNavigator({
    HomeIndex: {
        screen: HomeIndex,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor,focused})=>{
                return <Icon name={focused?'ios-home':'ios-home-outline'} type={'Ionicons'} style={{fontSize: 25, color: Color.tabIcon}}/>
            }
        }
    },
    MeIndex: {
        screen: MeIndex,
        navigationOptions: {
            tabBarLabel: '个人中心',
            tabBarIcon: ({tintColor,focused})=>{
                return <Icon name={focused?'ios-person':'ios-person-outline'} type={'Ionicons'} style={{fontSize: 25, color: Color.tabIcon}}/>
            }
        }
    },
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        style: {
            height: 50,
            backgroundColor: Color.tabColor
        },
        indicatorStyle: {height:0},
        labelStyle: {
            height: 35,
            color: Color.tabIcon
        },
        iconStyle: {
            height: 15,
        }
    },
    initialRouteName: 'MeIndex',
});

const Main = StackNavigator({
    Help: {
        screen: Help,
        navigationOptions: {
            header: null
        },
    },
    About: {
        screen: About,
        navigationOptions: {
            header: null
        },
    },
    Code: {
        screen: Code,
        navigationOptions: {
            header: null
        },
    },
    Message: {
        screen: Message,
        navigationOptions: {
            header: null
        },
    },
    Keep: {
        screen: Keep,
        navigationOptions: {
            header: null
        },
    },
    Case: {
        screen: Case,
        navigationOptions: {
            header: null
        },
    },
    MeInfo: {
        screen: MeInfo,
        navigationOptions: {
            header: null
        },
    },
    EditPw2: {
        screen: EditPw2,
        navigationOptions: {
            header: null
        },
    },
    EditPw: {
        screen: EditPw,
        navigationOptions: {
            header: null
        },
    },
    EditTel: {
        screen: EditTel,
        navigationOptions: {
            header: null
        },
    },
    EditName: {
        screen: EditName,
        navigationOptions: {
            header: null
        },
    },
    Info: {
        screen: Info,
        navigationOptions: {
            header: null
        },
    },
    Reg: {
        screen: Reg,
        navigationOptions: {
            header: null
        },
    },
    Home: {
        screen: tab,
        navigationOptions: {
            header: null
        },
    },
    Login: {
        screen: Login,
        navigationOptions:(e)=> ({
            headerTitle: '登录',
            headerStyle: {
                backgroundColor: Color.navColor, elevation: 0, color: Color.listColor
            },
            headerLeft: <Icon onPress={()=>e.navigation.goBack()} style={{color: Color.listColor}} name={'chevron-left'} type={'Entypo'}/>,
            headerTitleStyle: {
                color: Color.listColor
            }
        })
    }
}, {
    initialRouteName: 'Home',
});

type Props = {};
export default class App extends Component<Props> {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <Root>
                <Main/>
            </Root>
        );
    }
}
