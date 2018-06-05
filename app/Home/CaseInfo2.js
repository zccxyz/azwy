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
        }
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
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
                            <Icon name={this.state.star?'ios-star':'ios-star-outline'} style={{fontSize: 30, padding:10, color: 'white'}}/>
                        </TouchableOpacity>
                        <Icon name={'md-share'} style={{fontSize: 30, padding:10, color: 'white'}}/>
                    </Right>
                </Header>

                <Content>
                    <View style={{height:150,backgroundColor:Color.navColor, flexDirection:'row', padding:10}}>
                        <View style={{flex:2, justifyContent:'space-around'}}>
                            <Text style={{fontSize:15, color:'white'}}>被告：马云</Text>
                            <Text style={{fontSize:15, color:'white'}}>案件类型：民间借贷纠纷</Text>
                            <Text style={{fontSize:15, color:'white'}}>案件阶段：执行</Text>
                        </View>
                        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:30, color:'white'}}>10</Text>
                            <Text style={{fontSize:20, color:'white'}}>万元</Text>
                        </View>
                    </View>
                    <View style={{padding:10, flexDirection:'column'}}>
                        <Text style={{marginBottom:5}}>管辖法院：江苏省东海县人民法院</Text>
                        <Text>案件状态：待委托</Text>
                    </View>
                    <ListItem style={{marginLeft:10}}>
                        <Text style={{fontSize:18}}>案件详情</Text>
                    </ListItem>
                    <Text style={{padding:10}}>原告与被告民间借贷纠纷一案，原告与被告民间借贷纠纷一案原告与被告民间借贷纠纷一案原告与被告民间借贷纠纷一案原告与被告民间借贷纠纷一案原告与被告民间借贷纠纷一案</Text>
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
                                    <Textarea style={{width: WIDTH-120, color: 'white'}} rowSpan={4} placeholder="阐述您对此案的独有观点，限100字" placeholderTextColor='#ddd'/>
                                </Item>
                                <Item fixedLabel style={{}}>
                                    <Label style={{fontSize: 16, color:'white'}}>沟通优势</Label>
                                    <Textarea style={{width: WIDTH-120}} rowSpan={4} placeholder="阐述您对此案的沟通渠道的优势，限100字"  placeholderTextColor='#ddd'/>
                                </Item>
                                <Item fixedLabel style={{}}>
                                    <Label style={{fontSize: 16, color:'white'}}>对债务人的了解优势</Label>
                                    <Textarea style={{width: WIDTH-120}} rowSpan={4} placeholder="阐述您对此案债务人的了解优势，限100字"  placeholderTextColor='#ddd'/>
                                </Item>
                                <Item fixedLabel style={{}}>
                                    <Label style={{fontSize: 16, color:'white'}}>其他优势</Label>
                                    <Textarea style={{width: WIDTH-120}} rowSpan={3} placeholder="阐述您的其他优势，限100字"  placeholderTextColor='#ddd'/>
                                </Item>
                                <Button full onPress={()=>this.setState({zt: true})}>
                                    <Text style={{color: 'white', fontSize: 15}}>提交申请</Text>
                                </Button>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </Container>
        )
    }
}