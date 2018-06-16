/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StackNavigator, TabNavigator} from 'react-navigation';
import { Icon, Root } from 'native-base';
import Color from './app/Color';

import HomeIndex from './app/Home/Index';
import Case from './app/Home/Case';
import Apply from './app/Home/Apply';
import Apply2 from './app/Home/Apply2';
import Apply3 from './app/Home/Apply3';
import Apply4 from './app/Home/Apply4';
import Apply5 from './app/Home/Apply5';
import Success from './app/Home/Success';
import Jian from './app/Home/Jian';
import CaseInfo from './app/Home/CaseInfo';
import CaseInfo2 from './app/Home/CaseInfo2';

import MeIndex from './app/Me/Index';
import Login from './app/Me/Login';
import Reg from './app/Me/Reg';
import Info from './app/Me/Info';
import EditName from './app/Me/EditName';
import EditTel from './app/Me/EditTel';
import EditPw from './app/Me/EditPw';
import EditPw2 from './app/Me/EditPw2';
import MeInfo from './app/Me/MeInfo';
import Keep from './app/Me/Keep';
import Message from './app/Me/Message';
import Code from './app/Me/Code';
import About from './app/Me/About';
import Help from './app/Me/Help';
import MyCase from './app/Me/Case';
import Cooperation from './app/Me/Cooperation';
import Bad from './app/Me/Bad';
import BadInfo from './app/Me/BadInfo';
import Accept from './app/Me/Accept';
import AcceptInfo from './app/Me/AcceptInfo';
import MyMsg from './app/Me/MyMsg';
import SysMsg from './app/Me/SysMsg';

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
    initialRouteName: 'HomeIndex',
});

const Main = StackNavigator({
    SysMsg: {
        screen: SysMsg,
        navigationOptions: {
            header: null
        },
    },
    MyMsg: {
        screen: MyMsg,
        navigationOptions: {
            header: null
        },
    },
    BadInfo: {
        screen: BadInfo,
        navigationOptions: {
            header: null
        },
    },
    CaseInfo2: {
        screen: CaseInfo2,
        navigationOptions: {
            header: null
        },
    },
    Apply5: {
        screen: Apply5,
        navigationOptions: {
            header: null
        },
    },
    Apply4: {
        screen: Apply4,
        navigationOptions: {
            header: null
        },
    },
    Apply3: {
        screen: Apply3,
        navigationOptions: {
            header: null
        },
    },
    Accept: {
        screen: Accept,
        navigationOptions: {
            header: null
        },
    },
    Bad: {
        screen: Bad,
        navigationOptions: {
            header: null
        },
    },
    Cooperation: {
        screen: Cooperation,
        navigationOptions: {
            header: null
        },
    },
    CaseInfo: {
        screen: CaseInfo,
        navigationOptions:(e)=> ({
            headerTitle: '案件详情',
            headerStyle: {
                backgroundColor: Color.navColor, elevation: 0, color: Color.listColor
            },
            headerLeft: <Icon onPress={()=>e.navigation.goBack()} style={{color: Color.listColor}} name={'chevron-left'} type={'Entypo'}/>,
            headerTitleStyle: {
                color: Color.listColor
            }
        })
    },
    MyCase: {
        screen: MyCase,
        navigationOptions: {
            header: null
        },
    },
    Jian: {
        screen: Jian,
        navigationOptions: {
            header: null
        },
    },
    Success: {
        screen: Success,
        navigationOptions: {
            header: null
        },
    },
    Apply2: {
        screen: Apply2,
        navigationOptions: {
            header: null
        },
    },
    Apply: {
        screen: Apply,
        navigationOptions: {
            header: null
        },
    },
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
    },
    AcceptInfo: {
        screen: AcceptInfo,
        navigationOptions:(e)=> ({
            headerTitle: '案件详情',
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

export default class App extends Component {
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
