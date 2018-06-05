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
                    <Title>不良资产申请</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Form>
                        <Item fixedLabel>
                            <Label style={{fontSize: 16}}>资产包名称</Label>
                            <Input/>
                        </Item>
                        <Item fixedLabel>
                            <Label style={{fontSize: 16}}>资产包所有者</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel>
                            <Label style={{fontSize: 16}}>资产包价格</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel>
                            <Label style={{fontSize: 16}}>资产包所有者</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Text style={{color:'red', fontSize: 14, marginLeft:15, marginTop:15}}>特别提示：以上金额单位为'万元'</Text>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full onPress={()=>navigate('Apply4')}>
                            <Text style={{color: 'white', fontSize: 15}}>下一步</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}