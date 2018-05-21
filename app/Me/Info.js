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
    Thumbnail, Text, Separator, Form,
} from 'native-base';
import Color from "../Color";

export default class Info extends Component {
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
                    <Title>账户信息</Title>
                    </Body>
                </Header>

                <Content>
                    <List style={{backgroundColor: Color.listColor, marginBottom: 10}}>
                        <ListItem onPress={()=>navigate('EditName')}>
                            <Left>
                                <Text>用户昵称</Text>
                            </Left>
                            <Body style={{alignItems: 'flex-end'}}><Text note>瑞氨基酸</Text></Body>
                            <Right style={{alignItems: 'flex-end'}}>
                                <Icon name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>手机号</Text>
                            </Left>
                            <Body style={{alignItems: 'flex-end'}}><Text note>185****1547</Text></Body>
                            <Right style={{alignItems: 'flex-end'}}>
                                <Icon name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                    </List>

                    <List style={{backgroundColor: Color.listColor}}>
                        <ListItem>
                            <Left>
                                <Text>登录密码</Text>
                            </Left>
                            <Body style={{alignItems: 'flex-end'}}><Text note>修改</Text></Body>
                            <Right style={{alignItems: 'flex-end'}}>
                                <Icon name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>个人信息</Text>
                            </Left>
                            <Body style={{alignItems: 'flex-end'}}><Text note>修改</Text></Body>
                            <Right style={{alignItems: 'flex-end'}}>
                                <Icon name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}