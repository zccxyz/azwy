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
    Thumbnail, Text, Form, Item, Input,
} from 'native-base';
import Color from "../Color";

export default class Index extends Component {
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
                    <Title>注册</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Item>
                        <Input placeholder="手机号" />
                    </Item>
                    <Item last>
                        <Input placeholder="验证码" />
                        <Right>
                            <Button bordered small>
                                <Text>发送验证码</Text>
                            </Button>
                        </Right>
                    </Item>
                    <Item>
                        <Input placeholder="密码，6-15字符" />
                    </Item>
                    <Button block style={{marginBottom: 10}}>
                        <Text>注册并登录</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}