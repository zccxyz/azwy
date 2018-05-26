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

class Sp extends React.Component {

    render() {
        const {navigate}=this.props.navigation;
        return(
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <View style={{justifyContent:'space-between', padding:10, flexDirection:'row', paddingLeft:20, paddingRight:20}}>
                        <Text>已提交</Text>
                        <Text>申请时间：2018-05-25</Text>
                    </View>
                    <Text style={{backgroundColor:"#ccc", height:0.5}}/>

                    <List>
                        <ListItem>
                            <Left>
                                <Text>意见函：</Text>
                            </Left>
                            <View style={{width: WIDTH-150}}>
                                <Text style={{paddingLeft: 20, fontSize:14}}>
                                    安慰句容玩我亲爱额UR玩偶觉得首付款建安街收到付款24123卡接收到风口浪尖阿萨德开了房间技法上看到了
                                </Text>
                            </View>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>审批意见：</Text>
                            </Left>
                            <View style={{width: WIDTH-150}}>
                                <Text style={{paddingLeft: 20, fontSize:14}}>
                                    安慰句容玩我亲爱额UR玩偶觉得首付款建安街收到付款24123卡接收到风口浪尖阿萨德开了房间技法上看到了
                                </Text>
                            </View>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

class Aj extends Component {
    render() {
        const {navigate}=this.props.navigation;
        return(
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <View style={{justifyContent:'space-between', padding:10, flexDirection:'row', paddingLeft:20, paddingRight:20}}>
                        <Text>已提交</Text>
                        <Text>申请时间：2018-05-25</Text>
                    </View>
                    <Text style={{backgroundColor:"#ccc", height:0.5}}/>

                    <ListItem>
                        <Left>
                            <Text>原告：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                阿达是打发
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>被告：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                阿里巴巴公司
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>案件类型：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                阿里巴巴公司
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>案情简介：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                全文URIQ无诶肉气温日欧权威玩啊无诶u11氨甲环酸大家反馈哈四大皆空氨基酸地方哈就是东方红哈就是的
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>案号：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                阿里巴巴公司
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>拟结案期限：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                8 个月
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>案件阶段：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                立案
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>被管辖法院：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                阿里巴巴公司
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>承接律师姓名：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                阿里巴巴公司
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>承接律师所名称：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                阿里巴巴公司
                            </Text>
                        </View>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}

class Fy extends Component {
    render() {
        const {navigate}=this.props.navigation;
        return(
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <View style={{justifyContent:'space-between', padding:10, flexDirection:'row', paddingLeft:20, paddingRight:20}}>
                        <Text>已提交</Text>
                        <Text>申请时间：2018-05-25</Text>
                    </View>
                    <Text style={{backgroundColor:"#ccc", height:0.5}}/>

                    <ListItem>
                        <Left>
                            <Text>案件标的：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                5.00 元
                            </Text>
                        </View>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}

class Zl extends Component {
    render() {
        const {navigate}=this.props.navigation;
        return(
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <View style={{justifyContent:'space-between', padding:10, flexDirection:'row', paddingLeft:20, paddingRight:20}}>
                        <Text>已提交</Text>
                        <Text>申请时间：2018-05-25</Text>
                    </View>
                    <Text style={{backgroundColor:"#ccc", height:0.5}}/>

                    <ListItem>
                        <Left>
                            <Text>资料附件：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                暂无
                            </Text>
                        </View>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}

class Gr extends Component {
    render() {
        const {navigate}=this.props.navigation;
        return(
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <View style={{justifyContent:'space-between', padding:10, flexDirection:'row', paddingLeft:20, paddingRight:20}}>
                        <Text>已提交</Text>
                        <Text>申请时间：2018-05-25</Text>
                    </View>
                    <Text style={{backgroundColor:"#ccc", height:0.5}}/>

                    <ListItem>
                        <Left>
                            <Text>真是姓名：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                test
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>证件类型：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                身份证号
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>证件号：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                1324156456456
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>联系方式：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                1456456465
                            </Text>
                        </View>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}

export default tab = TabNavigator({
    Sp: {
        screen: Sp,
        navigationOptions: {
            tabBarLabel: '审批信息',
        }
    },
    Aj: {
        screen: Aj,
        navigationOptions: {
            tabBarLabel: '案件信息',
        }
    },
    Fy: {
        screen: Fy,
        navigationOptions: {
            tabBarLabel: '费用信息',
        }
    },
    Zl: {
        screen: Zl,
        navigationOptions: {
            tabBarLabel: '资料附件',
        }
    },
    Gr: {
        screen: Gr,
        navigationOptions: {
            tabBarLabel: '个人信息',
        }
    },
}, {
    tabBarOptions: {
        style: {
            height: 50,
            backgroundColor: Color.navColor,
        },
        indicatorStyle: {
            backgroundColor: Color.listColor
        },
        labelStyle: {
            fontSize: 13,
            width: 100
        }
    },
    initialRouteName: 'Sp',
});