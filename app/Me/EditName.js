import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
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
    Thumbnail, Text, Input, Item,
} from 'native-base';
import Color from "../Color";

export default class EditName extends Component {
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
                    <Title>修改昵称</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Item style={{marginBottom: 10}}><Input placeholder="请输入用户名" /></Item>
                    <Text style={{marginBottom: 10}}>用户只能修改一次（1-10个字）</Text>
                    <Button block style={{marginBottom: 10}}>
                        <Text>确认修改</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}