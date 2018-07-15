import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Picker, Modal, ScrollView, TouchableOpacity
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
    Thumbnail, Text, Form, FooterTab, Footer, Item, Label, Input, Textarea,
} from 'native-base';
import Color from "../Color";
import Picker2 from "react-native-picker/index";
import area from '../Me/area';

export default class CaseInfo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zt: false,
            star: false,
            case: null,

            viewpoint: '',
            linkup: '',
            intimacy: '',
            rests: '',
        }
    }

    componentDidMount() {
        console.log(this.props.navigation.state.params.data)
        this.setState({case: this.props.navigation.state.params.data});
        this._isKeep(this.props.navigation.state.params.data.id);
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        const s = this.state.case;
        if(this.state.case) {
            return(
                <Container style={{flex: 1}}>
                    <Header style={{backgroundColor: Color.navColor}} androidStatusBarColor={Color.navColor}
                            noShadow={true}>
                        <Left>
                            <Icon onPress={()=>goBack()} style={{color: Color.listColor}} name={'chevron-thin-left'} type={'Entypo'}/>
                        </Left>
                        <Body>
                        <Title style={{fontSize: 17}}>案件概况</Title>
                        </Body>
                        <Right>
                            <TouchableOpacity onPress={()=>this.setState({star: !this.state.star})}>
                                <Icon onPress={()=>this._keep()} name={this.state.star?'ios-star':'ios-star-outline'} style={{fontSize: 30, padding:10, color: 'white'}}/>
                            </TouchableOpacity>
                            {/*<Icon name={'md-share'} style={{fontSize: 30, padding:10, color: 'white'}}/>*/}
                        </Right>
                    </Header>

                    <Content>
                        <View style={{height:150,backgroundColor:Color.navColor, flexDirection:'row', padding:10}}>
                            <View style={{flex:2, justifyContent:'space-around'}}>
                                <Text style={{fontSize:15, color:'white'}}>被告：{s.plaintiff}</Text>
                                <Text style={{fontSize:15, color:'white'}}>案件类型：{s.type_name}</Text>
                                <Text style={{fontSize:15, color:'white'}}>
                                    案件阶段：{s.phase==1?'未立案':null}
                                    {s.phase==2?'一审':null}
                                    {s.phase==3?'二审':null}
                                    {s.phase==4?'重审':null}
                                    {s.phase==5?'执行':null}
                                    {s.phase==6?'再审':null}
                                    </Text>
                            </View>
                            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:30, color:'white'}}>{s.money/10000}</Text>
                                <Text style={{fontSize:20, color:'white'}}>万元</Text>
                            </View>
                        </View>
                        <View style={{padding:10, flexDirection:'column'}}>
                            <Text style={{marginBottom:5}}>管辖法院：{s.court}</Text>
                            <Text>案件状态：{s.zt==0?'待委托':'已委托'}</Text>
                        </View>
                        <ListItem style={{marginLeft:10}}>
                            <Text style={{fontSize:18}}>案件详情</Text>
                        </ListItem>
                        <Text style={{padding:10}}>{s.abstract}</Text>
                    </Content>

                    <Footer>
                        <FooterTab>
                            <Button full onPress={()=>this.setState({zt: true})}>
                                <Text style={{color: 'white', fontSize: 15}}>申请承接此案</Text>
                            </Button>
                        </FooterTab>
                    </Footer>

                    <Modal animationType={"slide"}
                           transparent={true}
                           visible={this.state.zt}
                           onRequestClose={() => this.setState({zt: false})}>

                        <View style={{backgroundColor:'rgba(0,0,0,.5)', flex:1}}>
                            <View style={{flex:1}}></View>
                            <View style={{flex:7, backgroundColor:'#263441',padding: 10}}>
                                <View style={{justifyContent:'space-between', heght:30, flexDirection:'row', marginBottom:15}}>
                                    <View>
                                        <Thumbnail large source={require('../img/1.jpg')}/>
                                    </View>
                                    <View style={{width: 200}}>
                                        <Text style={{fontSize: 18, color: 'white'}}>名字：</Text>
                                        <Text style={{color: 'white',fontSize:12}}>众多律师选择此案，请阐述您的优势可提接案高成功率！（可选填）</Text>
                                    </View>
                                    <Icon name={'ios-close-circle-outline'} style={{fontSize: 35,color: 'white'}} onPress={()=>this.setState({zt: false})}/>
                                </View>
                                <ScrollView>
                                    <Item fixedLabel style={{}}>
                                        <Label style={{fontSize: 16, color:'white'}}>观点优势</Label>
                                        <Textarea style={{width: WIDTH-120, color: 'white'}} maxLength={100} rowSpan={4} placeholder="阐述您对此案的独有观点，限100字" placeholderTextColor='#ddd' onChangeText={e=>{this.setState({viewpoint: e})}}/>
                                    </Item>
                                    <Item fixedLabel style={{}}>
                                        <Label style={{fontSize: 16, color:'white'}}>沟通优势</Label>
                                        <Textarea style={{width: WIDTH-120}} rowSpan={4} maxLength={100} placeholder="阐述您对此案的沟通渠道的优势，限100字"  placeholderTextColor='#ddd' onChangeText={e=>{this.setState({linkup: e})}}/>
                                    </Item>
                                    <Item fixedLabel style={{}}>
                                        <Label style={{fontSize: 16, color:'white'}}>对债务人的了解优势</Label>
                                        <Textarea style={{width: WIDTH-120}} rowSpan={4} maxLength={100} placeholder="阐述您对此案债务人的了解优势，限100字"  placeholderTextColor='#ddd' onChangeText={e=>{this.setState({intimacy: e})}}/>
                                    </Item>
                                    <Item fixedLabel style={{}}>
                                        <Label style={{fontSize: 16, color:'white'}}>其他优势</Label>
                                        <Textarea style={{width: WIDTH-120}} rowSpan={3} maxLength={100} placeholder="阐述您的其他优势，限100字"  placeholderTextColor='#ddd' onChangeText={e=>{this.setState({rests: e})}}/>
                                    </Item>
                                    <Button full onPress={()=>this._sub()}>
                                        <Text style={{color: 'white', fontSize: 15}}>提交申请</Text>
                                    </Button>
                                </ScrollView>
                            </View>
                        </View>
                    </Modal>
                </Container>
            )
        }else{
            return null;
        }
    }

    _sub() {
        POST(METHOD.my_continue, `class=add&uid=${User.id}&apply_id=${this.state.case.id}&viewpoint=${this.state.viewpoint}
        &linkup=${this.state.linkup}&intimacy=${this.state.intimacy}&rests=${this.state.rests}`).then(rs=>{
            if(rs.code==1) {
                msg('申请成功，请等待审核！');
            }else{
                err(rs.data);
            }
            //console.log(rs);
        });
    }

    _keep() {
        if(this.state.star) {
            POST(METHOD.collect, `uid=${User.id}&apply_id=${this.state.case.id}&class=delete`)
                .then(rs=>{
                    if(rs.code==1) {
                        this.setState({star: false})
                    }else{
                        err(rs.data);
                    }
                    console.log(rs);
                });
        }else{
            POST(METHOD.collect, `uid=${User.id}&apply_id=${this.state.case.id}&class=add`)
                .then(rs=>{
                    if(rs.code==1) {
                        this.setState({star: true})
                    }else{
                        err(rs.data);
                    }
                    console.log(rs);
                });
        }
    }

    _isKeep(id) {
        POST(METHOD.collect, `uid=${User.id}&apply_id=${id}&class=judge`).then(rs=>{
            if(rs.code==1) {
                this.setState({star: rs.data})
            }else{
                err(rs.data);
            }
            console.log(rs);
        })
    }
}