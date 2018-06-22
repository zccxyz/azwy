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
import Success from "./Success";

export default class Apply2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
            type2: 2,
            zt: false,

            plaintiff: '',
            defendant: '',
            phase: 0,
            court: '',
            money: '',
            is_lawyer: 2,
            abstract: '',
            arr: [],
            apply_type: 1,
        }
    }

    componentDidMount() {
        this._getType();
        this.setState({apply_type: this.props.navigation.state.params.type})
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
                                <Picker.Item label="请选择" value="0" />
                                {this.state.arr.map((v, k)=>{
                                    return <Picker.Item key={k} label={v.name} value={v.id} />
                                })}
                            </Picker>
                        </Item>
                        <Item fixedLabel>
                            <Label>原告名称</Label>
                            <Input onChangeText={e=>this.setState({plaintiff: e})}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>被告名称</Label>
                            <Input onChangeText={e=>this.setState({defendant: e})}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>案件阶段</Label>
                            <Picker style={{width: WIDTH/2}}
                                    selectedValue={this.state.phase}
                                    onValueChange={(lang) => this.setState({phase: lang})}>
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
                            <Input onChangeText={e=>this.setState({court: e})}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>案件标的</Label>
                            <Input placeholder={'请填写案件标的（元）'} onChangeText={e=>this.setState({money: e})}/>
                        </Item>
                        <Item fixedLabel >
                            <Label>是否有律师</Label>
                            <Picker style={{width: WIDTH/2}}
                                    selectedValue={this.state.is_lawyer}
                                    onValueChange={(lang) => this.setState({is_lawyer: lang})}>
                                <Picker.Item label="否" value="2" />
                                <Picker.Item label="是" value="1" />
                            </Picker>
                        </Item>
                        <Item fixedLabel>
                            <Label>案情简介</Label>
                            <Textarea rowSpan={5} style={{width: WIDTH-100}} bordered placeholder="请输入案情简介" onChangeText={e=>this.setState({abstract: e})}/>
                        </Item>
                    </Form>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full onPress={()=>this._sub()}>
                            <Text style={{color: 'white', fontSize: 15}}>下一步</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }

    _sub() {
        if(!User) {
            err('请登录');
            return
        }
        const s = this.state;
        if(!s.plaintiff || !s.defendant || !s.court || !s.money || !s.abstract || !s.phase || !s.type) {
            err('请填完以上信息');
            return
        }
        POST(METHOD.apply, `plaintiff=${s.plaintiff}&defendant=${s.defendant}&court=${s.court}&money=${s.money}
        is_lawyer=${s.is_lawyer}&abstract=${s.abstract}&phase=${s.phase}&user_id=${User.id}&class=add&type=${s.type}
        &apply_type=${this.state.apply_type}`)
            .then(rs=>{
                if(rs.code==1){
                    this.props.navigation.navigate('Success');
                }else{
                    err(rs.data);
                }
            });
    }

    _getType() {
        POST(METHOD.case_type, `class=select`)
            .then(rs=>{
                if(rs.code==1){
                    this.setState({arr: rs.data});
                }else{
                    err(rs.data);
                }
            })
    }
}