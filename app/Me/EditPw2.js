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
    constructor(props) {
        super(props);
        this.state = {
            yzm: '',
            time: 0,
            tel: User.phone,
            pw: '',
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

                <Content style={{backgroundColor: Color.listColor}}>
                    <Text style={{marginBottom: 10}}>手机号{User.tel}</Text>
                    <Item>
                        <Input placeholder="请输入验证码" keyboardType={'numeric'} onChangeText={e => this.setState({yzm: e})} />
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
                    <Item last>
                        <Input placeholder="请输入新密码" secureTextEntry onChangeText={e => this.setState({pw: e})} />
                    </Item>
                    <Button block style={{marginBottom: 10,backgroundColor: Color.navColor}} onPress={()=>this._edit()}>
                        <Text>修改</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

    _edit() {
        if(!this.state.yzm || !this.state.pw){
            msg('请正确填写以上内容');
            return;
        }
        POST(METHOD.verify_password, `uid=${User.id}&code=${this.state.yzm}&phone=${User.phone}&password=${this.state.pw}`).then(rs=>{
            console.log(rs)
            if(rs.code==1) {
                msg('修改成功');
                this.props.navigation.goBack()
            }else{
                err(rs.data);
            }
            console.log(rs);
        })
    }

    _send() {
        if(this.state.tel.length!=11) {
            msg('请正确填写手机号码');
            return;
        }
        //POST(METHOD.sms, `phone=${this.state.tel}`);
        fetch(YM + METHOD.sms, {
            method: 'POST', body: `phone=${this.state.tel}`, headers: {
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