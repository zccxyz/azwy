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
    Thumbnail, Text, Form, FooterTab, Footer, Item, Label, Input, Radio,
} from 'native-base';
import Color from "../Color";
import Picker2 from 'react-native-picker';
import area from './area.json';

export default class Cooperation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
            certificate_type: 1,
            zt: false,
            zt2: false,
            area: {city: '', a: '', c: ''},

            firm_name: '',
            certificate_number: '',
            principal: '',
            phone: '',
            scale: 1,
            contacts: '',
            advantage: '',
            arr: [],
            url: '',
        }
    }

    componentDidMount() {
        this._getLy();
    }

    _sub() {
        POST(METHOD.cooperation, ``)
            .then(rs=>{
                console.log(rs);
            })
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
                    <Title>律所合作申请</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Form>
                        <Item fixedLabel>
                            <Label>律所名称</Label>
                            <Input onChangeText={e=>this.setState({firm_name: e})}/>
                        </Item>
                        <Item fixedLabel >
                            <Label>律所类型</Label>
                            <Picker style={{width: WIDTH/2}}
                                selectedValue={this.state.type}
                                onValueChange={(lang) => this.setState({type: lang})}>
                                <Picker.Item label="请选择" value="0" />
                                <Picker.Item label="个人所" value="1" />
                                <Picker.Item label="合伙制" value="2" />
                                <Picker.Item label="国资所" value="3" />
                            </Picker>
                        </Item>
                        <Item fixedLabel >
                            <Label>证件类型</Label>
                            <Picker style={{width: WIDTH/2}} enabled={false}
                                    selectedValue={this.state.certificate_type}
                                    onValueChange={(lang) => this.setState({certificate_type: lang})}>
                                <Picker.Item label="营业执照" value="1" />
                            </Picker>
                        </Item>
                        <Item fixedLabel>
                            <Label>证件号码</Label>
                            <Input onChangeText={e=>this.setState({certificate_number: e})}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>优势领域</Label>
                            <Text style={{padding: 20}} onPress={()=>this.setState({zt2: true})}>选择您的优势领域</Text>
                        </Item>
                        <Item fixedLabel>
                            <Label>所在地区</Label>
                            <Text style={{width: WIDTH/2, paddingTop: 20, paddingBottom:20}} onPress={()=>this._change()}>
                                {this.state.area.city===''?'请选择地区':this.state.area.city+'-'+this.state.area.a+'-'+this.state.area.c}
                            </Text>
                        </Item>
                        <Item fixedLabel>
                            <Label>负责人</Label>
                            <Input onChangeText={e=>this.setState({principal: e})}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>联系人</Label>
                            <Input onChangeText={e=>this.setState({contacts: e})}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>手机号</Label>
                            <Input onChangeText={e=>this.setState({phone: e})}/>
                        </Item>
                        <Item fixedLabel >
                            <Label>律所规模</Label>
                            <Picker style={{width: WIDTH/2}}
                                    selectedValue={this.state.scale}
                                    onValueChange={(lang) => this.setState({scale: lang})}>
                                <Picker.Item label="1-10人" value="1" />
                                <Picker.Item label="10-30人" value="2" />
                                <Picker.Item label="30-50人" value="3" />
                                <Picker.Item label="50-100人" value="4" />
                                <Picker.Item label="100人以上" value="5" />
                            </Picker>
                        </Item>
                        <Item fixedLabel>
                            <Label>律所网址</Label>
                            <Input onChangeText={e=>this.setState({url: e})}/>
                        </Item>
                    </Form>
                </Content>

                <Modal animationType={'slide'} onRequestClose={()=>this.setState({zt2: false})} transparent={true} visible={this.state.zt2}>
                    <View style={{backgroundColor: 'rgba(0,0,0,.5)', height: HEIGHT+20, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{backgroundColor: Color.modalColor, width: WIDTH-20, height: HEIGHT-80}}>
                            <View style={{flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginRight: 10}}>
                                <Text>请选择您擅长的类型，最多选择4项</Text>
                                <Icon name={'ios-close-circle-outline'} type={'Ionicons'} style={{fontSize: 40}} onPress={()=>this.setState({zt2: false})}/>
                            </View>
                            <Text style={{backgroundColor: 'gray', height: 0.5, marginBottom: 10}}/>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, flexWrap: 'wrap'}}>
                                {this.state.arr.map((v, k)=>{
                                    return <Text key={k} style={{padding: 10, backgroundColor: v.zt?Color.navColor:Color.btn, color: 'white', marginBottom: 5}}
                                                 onPress={()=>{
                                                     let arr = [];
                                                     for(let v of this.state.arr){
                                                         if(v.zt) {
                                                             arr.push(v);
                                                         }
                                                     }
                                                     if(arr.length>=4) {
                                                         return;
                                                     }
                                                     this.state.arr[k].zt=!v.zt;
                                                     this.setState({arr: this.state.arr})}}>{v.name}</Text>
                                })}
                            </View>
                            <Button full style={{position: 'absolute', bottom: 0, width: WIDTH}} onPress={()=>this.setState({zt2: false})}>
                                <Text>确认选择</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>

                <Footer>
                    <FooterTab>
                        <Button full onPress={()=>this._sub()}>
                            <Text style={{color: 'white', fontSize: 15}}>确认提交</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }

    _getLy() {
        GET(METHOD.field)
            .then(rs=>{
                if(rs.code==1) {
                    let arr = [];
                    for(let v of rs.data) {
                        arr.push({zt: false, name: v});
                    }
                    /*if(User.good_at.length>0) {
                        for(let v of User.good_at) {
                            for(let k of arr) {
                                if(v == k.name) {
                                    k.zt = true;
                                    break;
                                }
                            }
                        }
                    }*/
                    this.setState({arr: arr});
                }else{
                    err(rs.data)
                }
            })
    }

    _sub() {
        if(!User) {
            err('请登录');
            return
        }
        const s = this.state;
        if(!s.area.a || !s.certificate_number || !s.firm_name || !s.type || !s.principal || s.phone.length!=11 || !s.contacts) {
            msg('请填完以上信息');
            return
        }
        let a = [];
        for(let v of s.arr) {
            if(v.zt) {
                a.push(v.name);
            }
        }
        if(a.length<=0) {
            msg('请选择优势区域');
            return;
        }
        POST(METHOD.cooperation, `firm_name=${s.firm_name}&type=${s.type}&certificate_type=${s.certificate_type}&certificate_number=${s.certificate_number}
        &advantage=${a}&province=${s.area.city}&city=${s.area.a}&area=${s.area.c}&principal=${s.principal}&phone=${s.phone}
        &scale=${s.scale}&url=${s.url}&user_id=${User.id}&contacts=${s.contacts}&class=add`)
            .then(rs=>{
                console.log(rs);
            })
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

    _change() {
        Picker2.init({
            pickerData: this._createAreaData(),
            //selectedValue: ['河北', '唐山', '古冶区'],
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            pickerTitleText: '选择地区',
            onPickerConfirm: v => {
                //console.log('area', pickedValue);
                this.state.area.city = v[0];
                this.state.area.a = v[1];
                this.state.area.c = v[2];
                this.setState({area: this.state.area});
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
}