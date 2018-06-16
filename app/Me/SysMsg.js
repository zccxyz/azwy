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

export default class SysMsg extends Component {
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
                    <Title>系统消息</Title>
                    </Body>
                </Header>

                <Content>
                    <View style={{height:HEIGHT/2,justifyContent:'center', alignItems:'center'}}>   
                        <Text>暂无系统消息</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}