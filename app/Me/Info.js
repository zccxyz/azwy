import React, {Component} from 'react';
import {
    DeviceEventEmitter,
    Alert,
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
    Thumbnail, Text, Separator, Form, ActionSheet, Footer, FooterTab
} from 'native-base';
import Color from "../Color";

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zt: false,
            user: User,
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
                    <Title>账户信息</Title>
                    </Body>
                </Header>

                <Content>
                    <List style={{backgroundColor: Color.listColor, marginBottom: 10}}>
                        <ListItem onPress={()=>navigate('EditName')}>
                            <Left>
                                <Text>用户昵称</Text>
                            </Left>
                            <Body style={{alignItems: 'flex-end'}}><Text note style={{fontSize: 12}}>{User.nickname}</Text></Body>
                            <Right style={{alignItems: 'flex-end'}}>
                                <Icon name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                        <ListItem onPress={()=>navigate('EditTel')}>
                            <Left>
                                <Text>手机号</Text>
                            </Left>
                            <Body style={{alignItems: 'flex-end'}}><Text note>{this.state.user.phone}</Text></Body>
                            <Right style={{alignItems: 'flex-end'}}>
                                <Icon name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                    </List>

                    <List style={{backgroundColor: Color.listColor}}>
                        <ListItem onPress={()=>this._alert()}>
                            <Left>
                                <Text>登录密码</Text>
                            </Left>
                            <Body style={{alignItems: 'flex-end'}}><Text note>修改</Text></Body>
                            <Right style={{alignItems: 'flex-end'}}>
                                <Icon name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                        <ListItem onPress={()=>navigate('MeInfo')}>
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

                <Footer>
                    <FooterTab>
                        <Button full onPress={()=>this._logout()}>
                            <Text style={{color: 'white'}}>退出登录</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }

    _alert() {
        ActionSheet.show({
                options: ['通过旧密码方式', '通过手机验证方式', '取消'],
                cancelButtonIndex: 2,
            },
            i => {
                if(i==0) {
                    this.props.navigation.navigate('EditPw');
                }else if(i==1) {
                    this.props.navigation.navigate('EditPw2')
                }
            })
    }

    _logout() {
        Alert.alert(
            '提示',
            '确定退出吗？',
            [
                {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: '确定', onPress: () => {
                        SAVE.remove({
                            key: 'user',
                        });
                        DeviceEventEmitter.emit('User', null);
                        this.props.navigation.goBack();
                    }},
            ],
            { cancelable: false }
        )
    }
}