import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Picker, Modal, ScrollView,
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
    Thumbnail, Text, Form, FooterTab, Footer, Item, Label, Input, Radio, Textarea,
} from 'native-base';
import Color from "../Color";

export default class Apply2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
            type2: 2,
            zt: false,
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
                    <Title>申请表</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Form>
                        <Item fixedLabel >
                            <Label>案件类型</Label>
                            <Picker style={{width: WIDTH/2}}
                                    selectedValue={this.state.type}
                                    onValueChange={(lang) => this.setState({type: lang})}>
                                <Picker.Item label="身份证" value="1" />
                                <Picker.Item label="营业执照" value="2" />
                            </Picker>
                        </Item>
                        <Item fixedLabel>
                            <Label>原告名称</Label>
                            <Input/>
                        </Item>
                        <Item fixedLabel>
                            <Label>被告名称</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel >
                            <Label>案件阶段</Label>
                            <Picker style={{width: WIDTH/2}}
                                    selectedValue={this.state.type}
                                    onValueChange={(lang) => this.setState({type: lang})}>
                                <Picker.Item label="请选择" value="0" />
                                <Picker.Item label="未立案" value="1" />
                                <Picker.Item label="一审" value="2" />
                                <Picker.Item label="二审" value="3" />
                                <Picker.Item label="重审" value="4" />
                                <Picker.Item label="执行" value="5" />
                                <Picker.Item label="再审" value="6" />
                            </Picker>
                        </Item>
                        <Item fixedLabel>
                            <Label>管辖法院</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel>
                            <Label>案件标的</Label>
                            <Input placeholder={'请填写案件标的（元）'}/>
                        </Item>
                        <Item fixedLabel >
                            <Label>是否有律师</Label>
                            <Picker style={{width: WIDTH/2}}
                                    selectedValue={this.state.type}
                                    onValueChange={(lang) => this.setState({type: lang})}>
                                <Picker.Item label="否" value="1" />
                                <Picker.Item label="是" value="2" />
                            </Picker>
                        </Item>
                        <Item fixedLabel>
                            <Label>案情简介</Label>
                            <Textarea rowSpan={5} style={{width: WIDTH-100}} bordered placeholder="请输入案情简介"/>
                        </Item>
                    </Form>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full onPress={()=>navigate('Success')}>
                            <Text style={{color: 'white', fontSize: 15}}>下一步</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}