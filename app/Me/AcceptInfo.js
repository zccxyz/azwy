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

let d = '';
class Case extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }

    componentDidMount() {
        console.log(this.props.navigation.state.params.data)
        this.setState({data: this.props.navigation.state.params.data})
    }

    render() {
        const {navigate}=this.props.navigation;
        const s = this.state.data;
        if(s){
            return(
                <Container style={{flex: 1}}>

                    <Content style={{backgroundColor: Color.listColor}}>
                        <View style={{flexDirection:'row', justifyContent:"space-between", alignItems:'center', height:50, marginLeft:15, marginRight:15}}>
                            <Text>{s.type!=1?'待审核':'已审核'}</Text>
                            <Text>申请时间：{s.apply_time}</Text>
                        </View>
                        <Form style={{backgroundColor: 'white'}}>
                            <Item fixedLabel>
                                <Label>原告</Label>
                                <Input disabled defaultValue={s.apply.plaintiff}/>
                            </Item>
                            <Item fixedLabel>
                                <Label>被告</Label>
                                <Input disabled defaultValue={s.apply.defendant}/>
                            </Item>
                            <Item fixedLabel>
                                <Label>案件类型</Label>
                                <Input disabled defaultValue={s.apply.type_name}/>
                            </Item>
                            <Item disabled>
                                <Label>案情简介</Label>
                                <Right>
                                    <Text style={{width:WIDTH-120, fontSize: 14}}>
                                        {s.abstract}
                                    </Text>
                                </Right>
                            </Item>
                            <Item fixedLabel>
                                <Label>案号</Label>
                                <Input disabled defaultValue={s.apply.reference_number}/>
                            </Item>
                            <Item fixedLabel>
                                <Label>案件阶段</Label>
                                {s.apply.phase==1?<Input disabled defaultValue={'未立案'}/>:null}
                                {s.apply.phase==2?<Input disabled defaultValue={'一审'}/>:null}
                                {s.apply.phase==3?<Input disabled defaultValue={'二审'}/>:null}
                                {s.apply.phase==4?<Input disabled defaultValue={'重审'}/>:null}
                                {s.apply.phase==5?<Input disabled defaultValue={'执行'}/>:null}
                                {s.apply.phase==6?<Input disabled defaultValue={'再审'}/>:null}

                            </Item>
                            <Item fixedLabel>
                                <Label>管辖法院</Label>
                                <Input disabled defaultValue={s.apply.court}/>
                            </Item>
                            <Item fixedLabel>
                                <Label>依据案号</Label>
                                <Input disabled defaultValue={s.apply.gist}/>
                            </Item>
                        </Form>
                    </Content>
                </Container>
            )
        }else{
            return null;
        }
    }
}

class Check extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }

    componentDidMount() {
        this.setState({data: this.props.navigation.state.params.data})
    }

    render() {
        const {navigate}=this.props.navigation;
        const s = this.state.data;
        return(
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor, paddingLeft:15, paddingRight:15}}>
                    <View style={{flexDirection:'row', justifyContent:"space-between", alignItems:'center', height:50}}>
                        <Text>{s.type!=1?'待审核':'已审核'}</Text>
                        <Text>申请时间：{s.apply_time}</Text>
                    </View>
                    <View>
                        <Text style={{paddingTop: 5, paddingBottom:5}}>观点优势：</Text>
                        <Text style={{backgroundColor: '#dedede', height: 0.5}}/>
                        <Text style={{fontSize:13,paddingTop: 5, paddingBottom:5}}>{s.viewpoint?s.viewpoint:'暂无'}</Text>
                    </View>
                    <View>
                        <Text style={{paddingTop: 5, paddingBottom:5}}>沟通优势：</Text>
                        <Text style={{backgroundColor: '#dedede', height: 0.5}}/>
                        <Text style={{fontSize:13,paddingTop: 5, paddingBottom:5}}>{s.linkup?s.linkup:'暂无'}</Text>
                    </View>
                    <View>
                        <Text style={{paddingTop: 5, paddingBottom:5}}>对债务人的了解优势：</Text>
                        <Text style={{backgroundColor: '#dedede', height: 0.5}}/>
                        <Text style={{fontSize:13,paddingTop: 5, paddingBottom:5}}>{s.intimacy?s.intimacy:'暂无'}</Text>
                    </View>
                    <View>
                        <Text style={{paddingTop: 5, paddingBottom:5}}>其他优势：</Text>
                        <Text style={{backgroundColor: '#dedede', height: 0.5}}/>
                        <Text style={{fontSize:13,paddingTop: 5, paddingBottom:5}}>{s.rests?s.rests:'暂无'}</Text>
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