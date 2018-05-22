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
                    <Title>个人信息</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Form>
                        <Item fixedLabel>
                            <Label>真实姓名</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel >
                            <Label>证件类型</Label>
                            <Picker style={{width: WIDTH/2}}
                                selectedValue={this.state.type}
                                onValueChange={(lang) => this.setState({type: lang})}>
                                <Picker.Item label="身份证" value="1" />
                                <Picker.Item label="营业执照" value="2" />
                            </Picker>
                        </Item>
                        <Item fixedLabel>
                            <Label>证件号</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel>
                            <Label>电子邮箱</Label>
                            <Input />
                        </Item>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <ListItem style={{width: WIDTH/2}}>
                                <Text>普通用户</Text>
                                <Right>
                                    <Radio selected={this.state.type2==1?true:false} onPress={()=>this.setState({type2: 1})}/>
                                </Right>
                            </ListItem>
                            <ListItem style={{width: WIDTH/2}}>
                                <Text>升级为律师</Text>
                                <Right>
                                    <Radio selected={this.state.type2==2?true:false}  onPress={()=>this.setState({type2: 2})}/>
                                </Right>
                            </ListItem>
                        </View>

                        {this.state.type2==2?(
                            <View>
                                <Item fixedLabel>
                                    <Label>律师证号</Label>
                                    <Input />
                                </Item>
                                <Item fixedLabel>
                                    <Label>律所名称</Label>
                                    <Input />
                                </Item>
                                <Item style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Label>优势地区</Label>
                                    <Text style={{width: WIDTH/2, paddingTop: 20, paddingBottom:20}} onPress={()=>this._change()}>请选择地区</Text>
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
                                <Text style={{padding: 10, backgroundColor: Color.btn, color: 'white', marginBottom: 5}}>债权债务</Text>
                                <Text style={{padding: 10, backgroundColor: Color.btn, color: 'white', marginBottom: 5}}>建设工程</Text>
                                <Text style={{padding: 10, backgroundColor: Color.btn, color: 'white', marginBottom: 5}}>知识产权</Text>
                                <Text style={{padding: 10, backgroundColor: Color.btn, color: 'white', marginBottom: 5}}>合同纠纷</Text>
                            </View>
                            <Button full style={{position: 'absolute', bottom: 0, width: WIDTH}}>
                                <Text>确认选择</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>完成修改</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
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
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                console.log('area', pickedValue);
            }
        });
        Picker2.show();
    }
}