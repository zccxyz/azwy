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
            type2: 2,
            zt: false,
            area: {city: '', a: '', c: ''}
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
                    <Title>律所合作申请</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Form>
                        <Item fixedLabel>
                            <Label>律所名称</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel >
                            <Label>律所类型</Label>
                            <Picker style={{width: WIDTH/2}}
                                selectedValue={this.state.type}
                                onValueChange={(lang) => this.setState({type: lang})}>
                                <Picker.Item label="请选择" value="0" />
                                <Picker.Item label="个人所" value="1" />
                                <Picker.Item label="合伙制" value="2" />
                                <Picker.Item label="国资所" value="2" />
                            </Picker>
                        </Item>
                        <Item fixedLabel >
                            <Label>证件类型</Label>
                            <Picker style={{width: WIDTH/2}} enabled={false}
                                    selectedValue={this.state.type}
                                    onValueChange={(lang) => this.setState({type: lang})}>
                                <Picker.Item label="营业执照" value="1" />
                            </Picker>
                        </Item>
                        <Item fixedLabel>
                            <Label>证件号码</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel>
                            <Label>优势领域</Label>
                            <Text style={{padding: 20}} onPress={()=>this.setState({zt: true})}>选择您的优势领域</Text>
                        </Item>
                        <Item fixedLabel>
                            <Label>所在地区</Label>
                            <Text style={{width: WIDTH/2, paddingTop: 20, paddingBottom:20}} onPress={()=>this._change()}>
                                {this.state.area.city===''?'请选择地区':this.state.area.city+'-'+this.state.area.a+'-'+this.state.area.c}
                            </Text>
                        </Item>
                        <Item fixedLabel>
                            <Label>负责人</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel>
                            <Label>联系人</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel>
                            <Label>手机号</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel >
                            <Label>律所规模</Label>
                            <Picker style={{width: WIDTH/2}}
                                    selectedValue={this.state.type}
                                    onValueChange={(lang) => this.setState({type: lang})}>
                                <Picker.Item label="1-10人" value="1" />
                                <Picker.Item label="10-30人" value="2" />
                                <Picker.Item label="30-50人" value="3" />
                                <Picker.Item label="50-100人" value="4" />
                                <Picker.Item label="100人以上" value="5" />
                            </Picker>
                        </Item>
                        <Item fixedLabel>
                            <Label>律所网址</Label>
                            <Input />
                        </Item>
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
                            <Text style={{color: 'white', fontSize: 15}}>确认提交</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
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