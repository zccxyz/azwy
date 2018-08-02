import React, {Component} from 'react';
import {
    DeviceEventEmitter,
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
    constructor(props) {
        super(props);
        this.state = {
            tel: '',
            yzm: '',
            time: 0,
            old: User.tel,

            zt: false,
        };
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
                    <Title>换绑手机</Title>
                    </Body>
                </Header>

                <Content>
                    <Text style={{marginBottom: 10}}>手机号{this.state.old}</Text>
                    <Item last style={{marginBottom: 10}}>
                        <Input placeholder="请输入验证码"  keyboardType={'numeric'} onChangeText={e => this.setState({yzm: e})}/>
                        <Right>
                            {this.state.time > 0 ?
                                <Button bordered small style={{borderColor: Color.navColor}}>
                                    <Text style={{color:Color.navColor}}>{this.state.time}秒</Text>
                                </Button> :
                                <Button style={{borderColor: Color.navColor}} bordered small onPress={() => this._send()}>
                                    <Text style={{color:Color.navColor}}>发送验证码</Text>
                                </Button>}
                        </Right>
                    </Item>
                    <Item>
                        <Input placeholder="请输入新手机号"  onChangeText={e => this.setState({tel: e})} keyboardType={'numeric'}/>
                    </Item>
                    <Button block style={{marginBottom: 10,backgroundColor: Color.navColor}} onPress={()=>this._edit()}>
                        <Text>验证后绑定手机</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

    _edit() {
        if(this.state.tel.length!=11 || !this.state.yzm) {
            msg('请填完以上内容');
            return;
        }
        POST(METHOD.verify_phone, `code=${this.state.yzm}&phone_new=${this.state.tel}&uid=${User.id}&phone=${User.phone}`).then(rs=>{
            console.log(rs);
            if(rs.code==1){
                msg('修改成功');
                SAVE.save({
                    key: 'user',
                    data: rs.data,
                });
                User = rs.data;
                DeviceEventEmitter.emit('User', rs.data);
                this.props.navigation.goBack();
            }else{
                err(rs.data);
            }
        })
    }

    _send() {
        if(User.phone.length!=11) {
            msg('请正确填写手机号码');
            return;
        }
        //POST(METHOD.sms, `phone=${this.state.old}`);
        fetch(YM + METHOD.sms, {
            method: 'POST', body: `phone=${User.phone}`, headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            if (response.status == 200) {
                this.setState({time: 60});
                setInterval(()=>{
                    if(this.state.time>0){
                        this.setState({time: this.state.time-1})
                    }
                    clearInterval();
                }, 1000);
            }
        }).catch(e => {
            console.log(e, '失败');
        });
    }
}