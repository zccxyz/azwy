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
                    <Title style={{fontSize: 17}}>不良资产申请</Title>
                    </Body>
                </Header>

                <Content>
                    <View style={{justifyContent:'center', width:WIDTH, flexDirection:'column', alignItems:'center'}}>
                        <Text style={{fontSize: 20}}>不良资产上传资料清单</Text>
                        <View style={{width:WIDTH-50, marginBottom:20}}>
                            <Text style={{padding:5}}>1.原始债权文件（借款合同、保证合同、抵押担保合同、放款凭证等）</Text>
                            <Text style={{padding:5}}>2.抵押物、质押物等担保物的权属证明（产权证、他项证券）</Text>
                            <Text style={{padding:5}}>3.诉讼和执行资料（民事判决书、民事裁定书、执行裁定书、执行证书等）</Text>
                            <Text style={{padding:5}}>4.债权处置公告、债权转让合同等手续处置资料</Text>
                            <Text style={{padding:5}}>5.其他相关资料</Text>
                        </View>
                        <Text>请将以上资料上传至下面邮箱</Text>
                        <Text style={{fontSize: 25, color:'red'}}>test@qq.com</Text>
                    </View>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full onPress={()=>alert('提交成功')}>
                            <Text style={{color: 'white', fontSize: 15}}>提交申请</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}