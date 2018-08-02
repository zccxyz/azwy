import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, NativeModules, DeviceEventEmitter, ToastAndroid
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
    Thumbnail, Text, H1, Footer, FooterTab
} from 'native-base';
import Color from "../Color";

export default class About extends Component {
    componentWillMount() {
        this._check();
    }


    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <Container style={{flex: 1}}>
                <Header style={{backgroundColor: Color.navColor}} androidStatusBarColor={Color.navColor}
                        noShadow={true}>
                    <Left>
                        <Icon onPress={() => goBack()} style={{color: Color.listColor}} name={'chevron-thin-left'}
                              type={'Entypo'}/>
                    </Left>
                    <Body>
                    <Title>关于我们</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: 'white'}}>
                    <View style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <H1>安枕无忧简介</H1>
                    </View>
                    <View style={{padding: 20, justifyContent: 'center'}}>
                        <Text>
                            安枕无忧是由创投资本等斥巨资打造的“第三方诉讼融资服务品台”。核心团队由顶尖律师和资深投资人士组成的，深耕法律和金融领域，创设平台的初衷，就旨在解决诉讼的行业痛点。   平台一方面服务当事人，可为其制服诉讼全程费用（内容涵盖诉讼费、保全费、保险费、鉴定评估费、律师代理费等），而当事人仅在其约定诉讼结果实现时，需无息返还平台垫资；反之，则由平台自行承担垫资风险。    平台另一方面服务律师，可根据其擅长服务领域及优势执业区域，精准推介案源；同时，平台将垫付基本律师代理费，而律师仅在其实现与当事人约定的诉讼结果时，将风险律师代理收益与平台按比列分享。    平台以推动法律服务业供给侧结构性改革为愿景，借助大数据，开创互联网 法律 金融的创新性法律服务行业！
                        </Text>
                    </View>
                    <View style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>当前版本：1.0.0</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <View>
                            <Button onPress={() => this._check()} style={{backgroundColor: Color.navColor}}>
                                <Text style={{color: 'white'}}>检测更新</Text>
                            </Button>
                        </View>
                    </View>
                </Content>

                <Footer style={{backgroundColor: 'white'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Copyright 2015-2018</Text>
                        <Text>安枕无忧版权所有</Text>
                    </View>
                </Footer>
            </Container>
        )
    }

    _check() {
        POST(METHOD.release, "name=1.0.0&class=select")
            .then(rs=>{
                if(rs.code==1){
                    NativeModules.DownloadApk.downloading(rs.data, "update.apk");
                }else{
                    msg('暂无新版本');
                }
               //console.log(rs)
            });
        //NativeModules.DownloadApk.downloading("http://gdown.baidu.com/data/wisegame/514060bd1b715ddc/tengxunshipin_16028.apk", "azwy.apk");
    }
}