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
    Thumbnail, Text, Form, FooterTab, Footer, Item, Label, Input, Radio,
} from 'native-base';
import Color from "../Color";

export default class MeInfo extends Component {
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
                    <Title>申请表</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: Color.listColor}}>
                    <Form>
                        <Item fixedLabel>
                            <Label>真实姓名</Label>
                            <Input defaultValue={'亚索'} disabled/>
                        </Item>
                        <Item fixedLabel >
                            <Label>证件类型</Label>
                            <Picker style={{width: WIDTH/2}} enabled={false}
                                    selectedValue={this.state.type}
                                    onValueChange={(lang) => this.setState({type: lang})}>
                                <Picker.Item label="身份证" value="1" />
                                <Picker.Item label="营业执照" value="2" />
                            </Picker>
                        </Item>
                        <Item fixedLabel>
                            <Label>证件号</Label>
                            <Input defaultValue={'132123132123'} disabled />
                        </Item>
                        <Item fixedLabel>
                            <Label>联系方式</Label>
                            <Input defaultValue={'15577852486'} disabled />
                        </Item>
                    </Form>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>下一步</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}