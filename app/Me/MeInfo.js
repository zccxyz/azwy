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

export default class MeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
            type2: 2,
            zt: false,

            user_name: '',
            status: User.status,
            certificate: '',
            genre: 1,
            lawyer: '',
            lawyer_name: '',
            province: '',
            city: '',
            area: '',
            arr: [],
            email: '',
        }
    }

    componentDidMount() {
        this.setState({user_name: User.user_name, status: User.status, certificate: User.certificate, genre: User.genre,
            lawyer: User.lawyer, lawyer_name: User.lawyer_name, province: User.province, city: User.city, area: User.area,
        email: User.email});
        this._getLy();
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
                    <Title>个人信息</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Form>
                        <Item fixedLabel>
                            <Label>真实姓名</Label>
                            <Input onChangeText={e=>this.setState({user_name: e})} defaultValue={this.state.user_name}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>证件类型</Label>
                            <Picker style={{width: WIDTH/2}}
                                selectedValue={this.state.genre}
                                onValueChange={(lang) => this.setState({genre: lang})}>
                                <Picker.Item label="身份证" value="1" />
                                <Picker.Item label="营业执照" value="2" />
                            </Picker>
                        </Item>
                        <Item fixedLabel>
                            <Label>证件号</Label>
                            <Input onChangeText={e=>this.setState({certificate: e})} defaultValue={this.state.certificate}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>电子邮箱</Label>
                            <Input onChangeText={e=>this.setState({email: e})} defaultValue={this.state.email}/>
                        </Item>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <ListItem style={{width: WIDTH/2}}>
                                <Text>普通用户</Text>
                                <Right>
                                    <Radio selected={this.state.status==1?true:false} onPress={()=>this.setState({status: 1})}/>
                                </Right>
                            </ListItem>
                            <ListItem style={{width: WIDTH/2}}>
                                <Text>升级为律师</Text>
                                <Right>
                                    <Radio selected={this.state.status==2?true:false}  onPress={()=>this.setState({status: 2})}/>
                                </Right>
                            </ListItem>
                        </View>

                        {this.state.status==2?(
                            <View>
                                <Item fixedLabel>
                                    <Label>律师证号</Label>
                                    <Input onChangeText={e=>this.setState({lawyer: e})} defaultValue={this.state.lawyer}/>
                                </Item>
                                <Item fixedLabel>
                                    <Label>律所名称</Label>
                                    <Input onChangeText={e=>this.setState({lawyer_name: e})} defaultValue={this.state.lawyer_name}/>
                                </Item>
                                <Item style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Label>优势地区</Label>
                                    {this.state.province?<Text style={{width: WIDTH/2, paddingTop: 20, paddingBottom:20}} onPress={()=>this._change()}>
                                            {this.state.province+this.state.city}
                                        </Text>:
                                        <Text style={{width: WIDTH/2, paddingTop: 20, paddingBottom:20}} onPress={()=>this._change()}>请选择地区</Text>}
                                </Item>
                                <Item style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Label>擅长领域</Label>
                                    <Text style={{padding: 20}} onPress={()=>this.setState({zt: true})}>点击选择您擅长的案件类型</Text>
                                </Item>
                            </View>
                        ):null}
                    </Form>
                </Content>

                <Modal animationType={'slide'} onRequestClose={()=>this.setState({zt: false})} transparent={true} visible={this.state.zt}>
                    <View style={{backgroundColor: 'rgba(0,0,0,.5)', height: HEIGHT+20, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{backgroundColor: Color.modalColor, width: WIDTH-20, height: HEIGHT-80}}>
                            <View style={{flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginRight: 10}}>
                                <Text>请选择您擅长的类型，最多选择4项</Text>
                                <Icon name={'ios-close-circle-outline'} type={'Ionicons'} style={{fontSize: 40}} onPress={()=>this.setState({zt: false})}/>
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
                            <Button full style={{position: 'absolute', bottom: 0, width: WIDTH}} onPress={()=>this.setState({zt: false})}>
                                <Text>确认选择</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>

                <Footer>
                    <FooterTab>
                        <Button full onPress={()=>this._save()}>
                            <Text style={{color: 'white'}}>完成修改</Text>
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
                    if(User.good_at.length>0) {
                        for(let v of User.good_at) {
                            for(let k of arr) {
                                if(v == k.name) {
                                    k.zt = true;
                                    break;
                                }
                            }
                        }
                    }
                    this.setState({arr: arr});
                }else{
                    err(rs.data)
                }
            })
    }

    _save() {
        if(this.state.status==1) {
            if(!this.state.user_name || !this.state.certificate || !this.state.email) {
                err('请填完以上内容');
            }else{
                POST(METHOD.amend, `user_name=${this.state.user_name}&certificate=${this.state.certificate}&status=${this.state.status}&email=${this.state.email}
        &genre=${this.state.genre}&id=${User.id}`)
                    .then(rs=>{
                        console.log(rs);
                    });
            }
        }else{
            if(!this.state.user_name || !this.state.certificate || !this.state.email || !this.state.lawyer ||
            !this.state.lawyer_name || !this.state.province || !this.state.city) {
                err('请填完以上信息2');
            }else{
                let arr = [];
                for(let v of this.state.arr) {
                    if(v.zt) {
                        arr.push(v.name);
                    }
                }
                if(arr.length==0 || arr.length>4) {
                    err('请选择擅长领域');
                    return;
                }
                POST(METHOD.amend, `user_name=${this.state.user_name}&certificate=${this.state.certificate}&status=${this.state.status}&email=${this.state.email}
        &genre=${this.state.genre}&id=${User.id}&lawyer=${this.state.lawyer}&lawyer_name=${this.state.lawyer_name}&province=${this.state.province}&city=${this.state.city}&
        area=${this.state.area}&good_at=${arr}`)
                    .then(rs=>{
                        if(rs.code==1) {
                            msg('修改成功');
                            User = rs.data;
                            SAVE.save({
                                key: 'user',
                                data: rs.data,
                            })
                        }else{
                            err(rs.data);
                        }
                        console.log(rs);
                    });
            }
        }
    }

    _createAreaData(n) {
        let data = [];
        let len = area.length;console.log(area);
        for (let i=0;i<len;i++) {
            let city = [];
            for (let j = 0; j < area[i]['city'].length; j++) {
                city.push(area[i]['city'][j].name);
            }
            let a = {};
            a[area[i].name] = city;
            data.push(a)
        }
        /*for(let i=0;i<len;i++){
            let city = [];
            for(let j=0,cityLen=area[i]['city'].length;j<cityLen;j++){
                let _city = {};
                _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
                city.push(_city);
            }
            console.log(city);return
            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }*/
        return data;
    }

    _change() {
        Picker2.init({
            pickerData: this._createAreaData(),
            //selectedValue: ['河北', '唐山', '古冶区'],
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            pickerTitleText: '选择地区',
            onPickerConfirm: e => {
                this.setState({province: e[0], city: e[1]});
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: e => {
                //Picker.select(['山东', '青岛', '黄岛区'])
            }
        });
        Picker2.show();
    }
}