import React, {Component} from 'react';
import {
    DeviceEventEmitter, View
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
    constructor(props) {
        super(props);
        this.state = {
            zt: 1, //1未登录，2登录
            user: null,
        };
    }

    componentDidMount() {
        this.deEmitter = DeviceEventEmitter.addListener('User', (a) => {
            User = a;
            if(a) {
                this.setState({user: a, zt: 2});
            }else{
                this.setState({user: null, zt: 1});
            }
        });
        SAVE.load({
            key: 'user'
        }).then(rs=>{
            User = rs;
            this.setState({zt: 2, user: rs});
            console.log(rs, '数据');
        }).catch(e=>{
            console.log(111);
        });

    }
    componentWillUnmount() {
        this.deEmitter.remove();
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={{flex: 1}}>
                <Header style={{backgroundColor: Color.navColor}} androidStatusBarColor={Color.navColor}
                        noShadow={true}>
                    <Body>
                    <Title>我的安枕无忧</Title>
                    </Body>
                </Header>

                <Content style={{flex: 1}}>
                    <List style={{backgroundColor: Color.navColor}}>
                        <ListItem onPress={()=>navigate(this.state.zt==1?'Login':'Info')}>
                            {this.state.zt==2?<Thumbnail large source={require('../img/1.jpg')}/>:<Icon name={'ios-person-outline'} style={{fontSize: 60, color: 'white'}}/>}
                            <Body>
                                {this.state.user?<Text style={{color: Color.meFontColor}}>{this.state.user.nickname}</Text>:<Text style={{color: Color.meFontColor}}>立即登录</Text>}
                                {this.state.user?<Text style={{color: Color.meFontColor}}>{this.state.user.tel}</Text>:<Text style={{color: Color.meFontColor}} note>登录后享受更多特权</Text>}
                            </Body>
                            <Right>
                                <Icon style={{color: Color.meFontColor}} name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                    </List>

                    <List style={{backgroundColor: Color.listColor}}>
                        {!User || User.status==2?(
                            <View>
                                <ListItem icon onPress={()=>{
                                    if(User){
                                        navigate('MyCase')
                                    }else {
                                        navigate('Login')
                                    }
                                }}>
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
                                <ListItem icon onPress={()=>{
                                    if(User){
                                        navigate('Bad')
                                    }else {
                                        navigate('Login')
                                    }
                                }}>
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
                                <ListItem icon onPress={()=>{
                                    if(User){
                                        navigate('Accept')
                                    }else {
                                        navigate('Login')
                                    }
                                }}>
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
                            </View>
                        ):null}
                        <ListItem icon onPress={()=>{
                            if(User){
                                navigate('Keep')
                            }else {
                                navigate('Login')
                            }
                        }}>
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
                        <ListItem icon onPress={()=>{
                            if(User){
                                navigate('Message')
                            }else {
                                navigate('Login')
                            }
                        }}>
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
                        <ListItem icon onPress={()=>{
                            if(User){
                                navigate('Code')
                            }else {
                                navigate('Login')
                            }
                        }}>
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
                        <ListItem icon onPress={()=>{
                            if(User){
                                navigate('Cooperation')
                            }else {
                                navigate('Login')
                            }
                        }}>
                            <Left>
                                <Icon name="handshake-o" style={{fontSize: 20, color: Color.navColor}} type={'FontAwesome'}/>
                            </Left>
                            <Body>
                            <Text>律所合作申请</Text>
                            </Body>
                            <Right>
                                <Icon style={{color: Color.meListColor}} name={'chevron-thin-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={()=>navigate('About')}>
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
                        <ListItem icon onPress={()=>navigate('Help')}>
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