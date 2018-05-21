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
    Thumbnail, Text
} from 'native-base';
import Color from "../Color";

export default class Index extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={{flex: 1}}>
                <Header style={{backgroundColor: Color.navColor}} androidStatusBarColor={Color.navColor}
                        noShadow={true}>
                    <Body>
                    <Title>我的萤火虫</Title>
                    </Body>
                </Header>

                <Content style={{flex: 1}}>
                    <List style={{backgroundColor: Color.navColor}}>
                        <ListItem onPress={()=>navigate('Login')}>
                            <Thumbnail square size={80} source={require('../img/1.jpg')}/>
                            <Body>
                            <Text style={{color: Color.meFontColor}}>立即登录</Text>
                            <Text style={{color: Color.meFontColor}} note>登陆后销售更多特权</Text>
                            </Body>
                            <Right>
                                <Icon style={{color: Color.meFontColor}} name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                    </List>

                    <List style={{backgroundColor: Color.listColor}}>
                        <ListItem icon>
                            <Left>
                                <Icon name="documents" type={'Entypo'} style={{fontSize: 20, color: Color.navColor}}/>
                            </Left>
                            <Body>
                            <Text>我的案件</Text>
                            </Body>
                            <Right>
                                <Icon style={{color: Color.meListColor}} name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="emoji-sad" style={{fontSize: 20, color: Color.navColor}} type={'Entypo'}/>
                            </Left>
                            <Body>
                            <Text>我的不良资产</Text>
                            </Body>
                            <Right>
                                <Icon style={{color: Color.meListColor}} name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="md-person" style={{fontSize: 20, color: Color.navColor}} type={'Ionicons'}/>
                            </Left>
                            <Body>
                            <Text>我承接的案源</Text>
                            </Body>
                            <Right>
                                <Icon style={{color: Color.meListColor}} name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="heart" style={{fontSize: 20, color: Color.navColor}} type={'Entypo'}/>
                            </Left>
                            <Body>
                            <Text>我的收藏</Text>
                            </Body>
                            <Right>
                                <Icon style={{color: Color.meListColor}} name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="message" style={{fontSize: 20, color: Color.navColor}} type={'Entypo'}/>
                            </Left>
                            <Body>
                            <Text>我的消息</Text>
                            </Body>
                            <Right>
                                <Icon style={{color: Color.meListColor}} name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="qrcode" style={{fontSize: 20, color: Color.navColor}} type={'FontAwesome'}/>
                            </Left>
                            <Body>
                            <Text>我的二维码</Text>
                            </Body>
                            <Right>
                                <Icon style={{color: Color.meListColor}} name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="new" style={{fontSize: 20, color: Color.navColor}} type={'Entypo'}/>
                            </Left>
                            <Body>
                            <Text>关于我们</Text>
                            </Body>
                            <Right>
                                <Icon style={{color: Color.meListColor}} name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="ios-help-circle" style={{fontSize: 20, color: Color.navColor}} type={'Ionicons'}/>
                            </Left>
                            <Body>
                            <Text>帮助</Text>
                            </Body>
                            <Right>
                                <Icon style={{color: Color.meListColor}} name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}