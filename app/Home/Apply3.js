import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, Picker, Modal, ScrollView,
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
    Thumbnail, Text, Form, FooterTab, Footer, Item, Label, Input, Radio, Textarea,
} from 'native-base';
import Color from "../Color";

export default class Apply3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
            type2: 2,
            zt: false,
            certificate: '',
            user_name: '',
            lawyer_name: '',
            phone: '',

            name: '',
            assets_name: '',
            assets_price: '',
            total_price: '',
        }
    }

    componentDidMount() {
        let p = this.props.navigation.state.params;
        this.setState({certificate: p.certificate, user_name: p.user_name, lawyer_name: p.lawyer_name, phone: p.phone});
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
                    <Title>不良资产申请</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Form>
                        <Item fixedLabel>
                            <Label style={{fontSize: 16}}>资产包名称</Label>
                            <Input defaultValue={this.state.name} onChangeText={e=>this.setState({name: e})}/>
                        </Item>
                        <Item fixedLabel>
                            <Label style={{fontSize: 16}}>资产包所有者</Label>
                            <Input defaultValue={this.state.assets_name} onChangeText={e=>this.setState({assets_name: e})}/>
                        </Item>
                        <Item fixedLabel>
                            <Label style={{fontSize: 16}}>资产包价格</Label>
                            <Input keyboardType={'numeric'} defaultValue={this.state.assets_price} onChangeText={e=>this.setState({assets_price: e})}/>
                        </Item>
                        <Item fixedLabel>
                            <Label style={{fontSize: 16}}>标的物总额</Label>
                            <Input keyboardType={'numeric'} defaultValue={this.state.total_price} onChangeText={e=>this.setState({total_price: e})}/>
                        </Item>
                    </Form>
                    <Text style={{color:'red', fontSize: 14, marginLeft:15, marginTop:15}}>特别提示：以上金额单位为'万元'</Text>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button style={{backgroundColor: Color.navColor}} full onPress={()=>{
                            let s = this.state;
                            if(!this.state.name || !this.state.assets_name || !this.state.assets_price || !this.state.total_price){
                                msg('请填完以上信息');
                                return;
                            }
                            navigate('Apply4', {
                                certificate: s.certificate, user_name: s.user_name, lawyer_name: s.lawyer_name, phone: s.phone,
                                name: s.name, assets_name: s.assets_name, assets_price: s.assets_price*10000, total_price: s.total_price*10000
                            });
                        }}>
                            <Text style={{color: 'white', fontSize: 15}}>下一步</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}