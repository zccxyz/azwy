import React, {Component} from 'react';
import {
    Platform,
    StyleSheet, TouchableOpacity,
    View
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
    Thumbnail, Text, } from 'native-base';
import Color from "../Color";

export default class Keep extends Component {
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
                    <Title>我的收藏</Title>
                    </Body>
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
            </Container>
        )
    }
}