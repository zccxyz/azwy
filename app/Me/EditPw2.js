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
    Thumbnail, Text, Input, Item
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
                    <Title>换绑手机</Title>
                    </Body>
                </Header>

                <Content>
                    <Item>
                        <Input placeholder="请输入原手机号" />
                    </Item>
                    <Item last style={{marginBottom: 10}}>
                        <Input placeholder="请输入验证码" />
                        <Right>
                            <Button bordered small>
                                <Text>发送验证码</Text>
                            </Button>
                        </Right>
                    </Item>
                    <Button disabled={true} block style={{marginBottom: 10}}>
                        <Text>验证后绑定手机</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}