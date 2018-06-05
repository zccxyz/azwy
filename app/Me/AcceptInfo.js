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
    Thumbnail, Text, Item, Form, Input, Label, Textarea,
} from 'native-base';
import Color from "../Color";
import {TabNavigator, StackNavigator} from "react-navigation";

class Case extends React.Component {

    render() {
        const {navigate}=this.props.navigation;
        return(
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <View style={{flexDirection:'row', justifyContent:"space-between", alignItems:'center', height:50, marginLeft:15, marginRight:15}}>
                        <Text>申请中</Text>
                        <Text>申请时间：2018-04-15</Text>
                    </View>
                    <Form style={{backgroundColor: 'white'}}>
                        <Item fixedLabel>
                            <Label>原告</Label>
                            <Input disabled defaultValue={'马云'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>被告</Label>
                            <Input disabled defaultValue={'马云'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>案件类型</Label>
                            <Input disabled defaultValue={'马云'}/>
                        </Item>
                        <Item disabled>
                            <Label>案情简介</Label>
                            <Right>
                                <Text style={{width:WIDTH-120, fontSize: 14}}>
                                    原告与被告民间借贷纠纷一案，原告与被告民间借贷纠纷一案原告与被告民间借贷纠纷一案原告与被告民间借贷纠纷一案原告与被告民间借贷纠纷一案
                                </Text>
                            </Right>
                        </Item>
                        <Item fixedLabel>
                            <Label>案号</Label>
                            <Input disabled defaultValue={'不详'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>案件阶段</Label>
                            <Input disabled defaultValue={'执行'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>管辖法院</Label>
                            <Input disabled defaultValue={'江苏省东海县人民法院'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>依据案号</Label>
                            <Input disabled defaultValue={'苏0722'}/>
                        </Item>
                    </Form>
                </Content>
            </Container>
        )
    }
}

class Check extends Component {
    render() {
        const {navigate}=this.props.navigation;
        return(
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor, paddingLeft:15, paddingRight:15}}>
                    <View style={{flexDirection:'row', justifyContent:"space-between", alignItems:'center', height:50}}>
                        <Text>申请中</Text>
                        <Text>申请时间：2018-04-15</Text>
                    </View>
                    <View>
                        <Text style={{paddingTop: 5, paddingBottom:5}}>观点优势：</Text>
                        <Text style={{backgroundColor: '#dedede', height: 0.5}}/>
                        <Text style={{fontSize:13,paddingTop: 5, paddingBottom:5}}>暂无</Text>
                    </View>
                    <View>
                        <Text style={{paddingTop: 5, paddingBottom:5}}>沟通优势：</Text>
                        <Text style={{backgroundColor: '#dedede', height: 0.5}}/>
                        <Text style={{fontSize:13,paddingTop: 5, paddingBottom:5}}>暂无</Text>
                    </View>
                    <View>
                        <Text style={{paddingTop: 5, paddingBottom:5}}>对债务人的了解优势：</Text>
                        <Text style={{backgroundColor: '#dedede', height: 0.5}}/>
                        <Text style={{fontSize:13,paddingTop: 5, paddingBottom:5}}>暂无</Text>
                    </View>
                    <View>
                        <Text style={{paddingTop: 5, paddingBottom:5}}>其他优势：</Text>
                        <Text style={{backgroundColor: '#dedede', height: 0.5}}/>
                        <Text style={{fontSize:13,paddingTop: 5, paddingBottom:5}}>暂无</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default tab = TabNavigator({
    Case: {
        screen: Case,
        navigationOptions: {
            tabBarLabel: '案件信息',
        }
    },
    Check: {
        screen: Check,
        navigationOptions: {
            tabBarLabel: '审批信息',
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
    initialRouteName: 'Case',
});