import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Picker, Modal, DeviceEventEmitter,
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

export default class Success extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
            type2: 2,
            zt: false,
        }
    }

    componentDidMount() {
        SAVE.load({
            key: 'msg',
        }).then(rs=>{
            let arr = rs;
            arr.unshift({time: this._getTime()});
            SAVE.save({
                key: 'msg',
                data: arr,
            })
            console.log(rs)
        }).catch(e=>{
            SAVE.save({
                key: 'msg',
                data: [{time: this._getTime()}],
            })
        });
    }

    _getTime() {
        let t = new Date();
        let y = t.getFullYear();
        let m = t.getMonth()+1;
        let d = t.getDate();
        let h = t.getHours();
        let min = t.getMinutes();
        return y+'-'+m+'-'+d+' '+h+':'+min;
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

                <Content style={{backgroundColor: Color.listColor, paddingLeft: 10, paddingRight: 10}}>
                    <View style={{flexDirection:'row', height: 80, justifyContent:'flex-start', alignItems:'center'}}>
                        <Icon style={{marginRight: 20, fontSize: 50, color: Color.navColor}} name={'check-circle'} type={'Feather'}/>
                        <View>
                            <Text style={{fontSize: 18}}>提交成功，请等待平台审核</Text>
                            <Text style={{color: 'gray'}}>我方会在2个工作日审核完毕</Text>
                        </View>
                    </View>

                    <Text style={{fontSize: 18}}>本案可能需要资料附件：</Text>
                    <View style={{marginLeft: 10}}>
                        <Text style={{color: 'gray', padding:5}}>1.当事人主体资料</Text>
                        <Text style={{color: 'gray', padding:5}}>2.起诉状或案情介绍</Text>
                        <Text style={{color: 'gray', padding:5}}>3.法律服务合同/法律服务确认单</Text>
                        <Text style={{color: 'gray', padding:5}}>4.证据材料</Text>
                        <Text style={{color: 'gray', padding:5}}>5.生效法律文书（调解书/判决书/裁定书）</Text>
                        <Text style={{color: 'gray', padding:5}}>6.执行申请书</Text>
                        <Text style={{color: 'gray', padding:5}}>7.执行程序材料</Text>
                    </View>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button style={{backgroundColor: Color.navColor}} full onPress={()=>{navigate('Home');DeviceEventEmitter.emit('Up');}}>
                            <Text style={{color: 'white', fontSize: 15}}>确 定</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}