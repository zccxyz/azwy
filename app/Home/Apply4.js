import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Picker, Modal, ScrollView, FlatList,
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
    Thumbnail, Text, Form, FooterTab, Footer, Item, Label, Input,
} from 'native-base';
import Color from "../Color";
import Picker2 from "react-native-picker/index";
import area from '../Me/area';

export default class Apply4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {content: 0, classify: 0, city: '', a: '', c: '', detail: '', money: ''}
            ],
            method: 0,
            mortgage_type: [],
            mortgage: [],
            original: '',
            cooperation: 0,

            certificate: '',
            user_name: '',
            lawyer_name: '',
            phone: '',

            name: '',
            assets_name: '',
            assets_price: '',
            total_price: '',
        }
    }

    componentDidMount() {
        this._getMortgage();
        this._getType();
    }

    _getMortgage() {
        POST(METHOD.mortgage, `class=select`)
            .then(rs=>{
                if(rs.code==1){
                    this.setState({mortgage: rs.data});
                }else{
                    err(rs.data)
                }
            });
    }

    _getType() {
        POST(METHOD.mortgage_type, `class=select`)
            .then(rs=>{
                if(rs.code==1){
                    this.setState({mortgage_type: rs.data});
                }else{
                    err(rs.data)
                }
            });
    }

    _add() {
        this.state.list.push({content: 0, classify: 0, city: '', a: '', c: '', detail: '', money: ''});
        this.setState({list: this.state.list});
    }

    _del(k) {
        this.state.list.splice(k, 1);
        this.setState({list: this.state.list});
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
                    <Title style={{fontSize: 17}}>不良资产申请({this.state.list.length})</Title>
                    </Body>
                    <Right>
                        <Text style={{color:'white', paddingLeft:20, paddingTop:20, paddingBottom:20, paddingRight:10,fontSize: 15}} onPress={()=>this._add()}>添加</Text>
                    </Right>
                </Header>

                <Content>
                    <View style={{justifyContent:'center', alignItems:'center', height: 50}}><Text style={{fontSize: 20}}>填写抵押物内容信息</Text></View>
                    <FlatList data={this.state.list} renderItem={({item, index})=>this._item(item, index)} extraData={this.state} keyExtractor={(v, k)=>k}/>
                    <Form style={{backgroundColor: 'white'}}>
                        <Item fixedLabel>
                            <Label style={{fontSize: 16}}>原债权人</Label>
                            <Input defaultValue={this.state.original} onChangeText={e=>{
                                this.setState({original: e})
                            }}/>
                        </Item>
                        <Item fixedLabel>
                            <Label style={{fontSize: 16}}>合作方式</Label>
                            <Picker style={{width: WIDTH-130}} enabled={true}
                                    selectedValue={this.state.cooperation}
                                    onValueChange={(e) => {
                                        this.setState({cooperation: e});
                                    }}>
                                <Picker.Item label="--请选择合作方式--" value="0" />
                                <Picker.Item label="联合收购" value="1" />
                                <Picker.Item label="联合清收" value="2" />
                                <Picker.Item label="作为中介" value="3" />
                            </Picker>
                        </Item>
                    </Form>
                    <Text style={{color:'red', fontSize: 14, marginLeft:15, marginTop:15}}>特别提示：以上金额单位为'万元'</Text>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button style={{backgroundColor: Color.navColor}} full onPress={()=>this._next()}>
                            <Text style={{color: 'white', fontSize: 15}}>下一步</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }

    _item(v, k) {
        return(
            <Form style={{backgroundColor:'white', marginBottom:10}}>
                <Item fixedLabel>
                    <Label style={{fontSize: 16}}>抵押物内容</Label>
                    <Picker style={{width: WIDTH-130}} enabled={true}
                            selectedValue={v.content}
                            onValueChange={(lang) => {
                                this.state.list[k]['content'] = lang;
                                this.setState({list: this.state.list});
                            }}>
                        <Picker.Item label="--请选择抵押内容--" value="0" />
                        {this.state.mortgage.map((v, k)=>{
                            return <Picker.Item key={k} label={v.name} value={v.id} />
                        })}
                    </Picker>
                </Item>
                <Item fixedLabel>
                    <Label style={{fontSize: 16}}>抵押物类型</Label>
                    <Picker style={{width: WIDTH-130}} enabled={true}
                            selectedValue={v.classify}
                            onValueChange={(lang) => {
                                this.state.list[k]['classify'] = lang;
                                this.setState({list: this.state.list});
                            }}>
                        <Picker.Item label="--请选择抵押物类型--" value="0" />
                        {this.state.mortgage_type.map((v, k)=>{
                            return <Picker.Item key={k} label={v.name} value={v.id} />
                        })}
                    </Picker>
                </Item>
                <Item fixedLabel>
                    <Label style={{fontSize: 16}}>抵押物地址</Label>
                    <Text style={{width: WIDTH/2, paddingTop: 20, paddingBottom:20, fontSize: 14}} onPress={()=>this._change(k)}>
                        {v.city===''?'请选择地区':v.city+'-'+v.a+'-'+v.c}
                    </Text>
                </Item>
                <Item fixedLabel>
                    <Label style={{fontSize: 16}}>详细地址</Label>
                    <Input defaultValue={v.detail} onChangeText={e=>{
                        this.state.list[k]['detail'] = e;
                        this.setState({list: this.state.list})
                    }}/>
                </Item>
                <Item fixedLabel>
                    <Label style={{fontSize: 16}}>抵押物金额</Label>
                    <Input defaultValue={v.money} onChangeText={e=>{
                        this.state.list[k]['money'] = e;
                        this.setState({list: this.state.list})
                    }}/>
                    {this.state.list.length>1?<Icon name={'ios-trash-outline'} style={{fontSize: 35}} onPress={()=>this._del(k)}/>:null}
                </Item>
            </Form>
        )
    }

    _createAreaData(n) {
        let data = [];
        let len = area.length;
        for(let i=0;i<len;i++){
            let city = [];
            for(let j=0,cityLen=area[i]['city'].length;j<cityLen;j++){
                let _city = {};
                _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
                city.push(_city);
            }
            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }
        return data;
    }

    _change(k) {
        Picker2.init({
            pickerData: this._createAreaData(),
            //selectedValue: ['河北', '唐山', '古冶区'],
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            pickerTitleText: '选择地区',
            onPickerConfirm: v => {
                //console.log('area', pickedValue);
                this.state.list[k]['city'] = v[0];
                this.state.list[k]['a'] = v[1];
                this.state.list[k]['c'] = v[2];
                this.setState({list: this.state.list});
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                //console.log('area', pickedValue);
            }
        });
        Picker2.show();
    }

    _next(){
        const s = this.state;
        const p = this.props.navigation.state.params;
        if(!s.original || !s.cooperation){
            msg('请填完以上信息');
            return;
        }
        for(let v of s.list){
            if(!v.content || !v.classify || !v.city || !v.a || !v.c || !v.detail || !v.money){
                msg('请填完以上信息');
                return;
            }
        }
        this.props.navigation.navigate('Apply5', {
            list: s.list, certificate: p.certificate, user_name: p.user_name, lawyer_name: p.lawyer_name, phone: p.phone,
            name: p.name, assets_name: p.assets_name, assets_price: p.assets_price, total_price: p.total_price, original: s.original, cooperation: s.cooperation
        })
    }
}