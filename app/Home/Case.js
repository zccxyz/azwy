import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Picker, TouchableOpacity,
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
    Thumbnail, Text, Fab, Card,
} from 'native-base';
import Color from "../Color";
import Picker2 from "react-native-picker/index";
import area from '../Me/area.json';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            area: '',
        };
    }

    _createAreaData(n) {
        let data = [];
        let len = area.length;
        for (let i=0;i<len;i++) {
            data.push(area[i].name);
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
            onPickerConfirm: pickedValue => {
                //console.log('area', pickedValue);
                this.setState({area: pickedValue});
            },
            onPickerCancel: pickedValue => {
                //console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                //this.setState({area: pickedValue});
            }
        });
        Picker2.show();
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return(
            <Container style={{flex: 1}}>
                <Header style={{backgroundColor: Color.navColor}} androidStatusBarColor={Color.navColor}>
                    <Left>
                        <Icon onPress={()=>goBack()} style={{color: Color.listColor}} name={'chevron-thin-left'} type={'Entypo'}/>
                    </Left>
                    <Body>
                    <Title>案件列表</Title>
                    </Body>
                    <Right>
                        <Text style={{color: 'white'}} onPress={()=>this._change()}>{this.state.area==''?'点击选择区域':this.state.area}</Text>
                    </Right>
                </Header>

                <Content>
                    <TouchableOpacity onPress={()=>navigate('CaseInfo2')}>
                        <View style={{height: 80, flexDirection:'row',elevation: 1, backgroundColor: 'white', marginBottom:5}}>
                            <View style={{flex: 4,justifyContent:'space-between', padding:5}}>
                                <Text>阿里巴巴科技有限公司合同纠纷案</Text>
                                <View style={{justifyContent:'space-between', alignItems:'center', flexDirection:'row'}}>
                                    <Text style={{fontSize:13, color:'gray'}}>带委托</Text>
                                    <Text style={{fontSize:13, color:'gray'}}>北京市某某法院</Text>
                                </View>
                            </View>
                            <View style={{flex: 1, backgroundColor: Color.navColor, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color: 'white', fontSize:25}}>10</Text>
                                <Text style={{color: 'white'}}>万元</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Content>

                <Fab
                    active={this.state.active}
                    direction="up"
                    style={{ backgroundColor: Color.navColor }}
                    position="bottomRight"
                    onPress={() => navigate('Apply', {type: 1})}>
                    <Icon name="ios-add" />
                </Fab>
            </Container>
        )
    }
}