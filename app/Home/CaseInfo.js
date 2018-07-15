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

let sj = '';
class Sp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            data: '',
        };
    }

    componentDidMount() {
        this.setState({id: this.props.navigation.state.params?this.props.navigation.state.params.id:0});
        this._find(this.props.navigation.state.params.id);
    }

    _find(id) {
        POST(METHOD.apply, `class=find&id=${id}`).then(rs=>{
            if(rs.code==1){
                sj = rs.data;
                console.log(sj, '我的')
                this.setState({data: rs.data});
            }else{
                err(rs.data);
            }
        })
    }

    render() {
        const s = this.state.data;
        const {navigate}=this.props.navigation;
        return(
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <View style={{justifyContent:'space-between', padding:10, flexDirection:'row', paddingLeft:20, paddingRight:20}}>
                        <Text>{s.audit_type==0?'待审核':''}
                            {s.audit_type==1?'审核通过':''}
                            {s.audit_type==2?'审核不通过':''}</Text>
                        <Text>申请时间：{s.creation_time}</Text>
                    </View>
                    <Text style={{backgroundColor:"#ccc", height:0.5}}/>

                    <List>
                        <ListItem>
                            <Left>
                                <Text>意见函：</Text>
                            </Left>
                            <View style={{width: WIDTH-150}}>
                                <Text style={{paddingLeft: 20, fontSize:14}}>
                                    {s.letter}
                                </Text>
                            </View>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>审批意见：</Text>
                            </Left>
                            <View style={{width: WIDTH-150}}>
                                <Text style={{paddingLeft: 20, fontSize:14}}>
                                    {s.audit_letter}
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
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({data: sj})
        }, 500)
    }

    render() {
        const {navigate}=this.props.navigation;
        const s = this.state.data;
        return(
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <View style={{justifyContent:'space-between', padding:10, flexDirection:'row', paddingLeft:20, paddingRight:20}}>
                        <Text>{s.audit_type==0?'待审核':''}
                            {s.audit_type==1?'审核通过':''}
                            {s.audit_type==2?'审核不通过':''}</Text>
                        <Text>申请时间：{s.creation_time}</Text>
                    </View>
                    <Text style={{backgroundColor:"#ccc", height:0.5}}/>

                    <ListItem>
                        <Left>
                            <Text>原告：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                {s.plaintiff}
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>被告：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                {s.defendant}
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>案件类型：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                {s.type_name}
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>案情简介：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                {s.abstract}
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>案号：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                {s.reference_number}
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>拟结案期限：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                {s.deadline} 个月
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>案件阶段：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                {s.phase==1?'未立案':''}
                                {s.phase==2?'一审':''}
                                {s.phase==3?'二审':''}
                                {s.phase==4?'重审':''}
                                {s.phase==5?'执行':''}
                                {s.phase==6?'再审':''}
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>被管辖法院：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                {s.court}
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>承接律师姓名：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                {s.user_name}
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>承接律师所名称：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                {s.lawyer_name}
                            </Text>
                        </View>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}

class Fy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({data: sj})
        }, 500)
    }

    render() {
        const s = this.state.data;
        const {navigate}=this.props.navigation;
        return(
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <View style={{justifyContent:'space-between', padding:10, flexDirection:'row', paddingLeft:20, paddingRight:20}}>
                        <Text>{s.audit_type==0?'待审核':''}
                            {s.audit_type==1?'审核通过':''}
                            {s.audit_type==2?'审核不通过':''}</Text>
                        <Text>申请时间：{s.creation_time}</Text>
                    </View>
                    <Text style={{backgroundColor:"#ccc", height:0.5}}/>

                    <ListItem>
                        <Left>
                            <Text>案件标的：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                {s.money} 元
                            </Text>
                        </View>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}

class Zl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({data: sj})
        }, 500)
    }

    render() {
        const s = this.state.data;
        const {navigate}=this.props.navigation;
        return(
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <View style={{justifyContent:'space-between', padding:10, flexDirection:'row', paddingLeft:20, paddingRight:20}}>
                        <Text>{s.audit_type==0?'待审核':''}
                            {s.audit_type==1?'审核通过':''}
                            {s.audit_type==2?'审核不通过':''}</Text>
                        <Text>申请时间：{s.creation_time}</Text>
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
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({data: sj})
        }, 500)
    }

    render() {
        const s = this.state.data;
        const {navigate}=this.props.navigation;
        return(
            <Container style={{flex: 1}}>

                <Content style={{backgroundColor: Color.listColor}}>
                    <View style={{justifyContent:'space-between', padding:10, flexDirection:'row', paddingLeft:20, paddingRight:20}}>
                        <Text>{s.audit_type==0?'待审核':''}
                            {s.audit_type==1?'审核通过':''}
                            {s.audit_type==2?'审核不通过':''}</Text>
                        <Text>申请时间：{s.creation_time}</Text>
                    </View>
                    <Text style={{backgroundColor:"#ccc", height:0.5}}/>

                    <ListItem>
                        <Left>
                            <Text>真是姓名：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                {User.user_name}
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
                                {User.certificate}
                            </Text>
                        </View>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>联系方式：</Text>
                        </Left>
                        <View style={{width: WIDTH-150}}>
                            <Text style={{paddingLeft: 20, fontSize:14}}>
                                {User.phone}
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