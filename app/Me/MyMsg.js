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

export default class MyMsg extends Component {
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
                    <Title>业务通知</Title>
                    </Body>
                </Header>

                <Content>
                    <View style={{height:HEIGHT/2,justifyContent:'center', alignItems:'center'}}>
                        <Text>暂无业务通知</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}