import React, {Component} from 'react';
import {
    View, Picker
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

export default class Apply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
            type2: 2,
            zt: false,
            type3: 1,
        }
    }

    componentDidMount() {
        this.setState({type3: this.props.navigation.state.params.type})
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
                    <Title>{this.state.type3===4?'不良资产申请':'申请表'}</Title>
                    </Body>
                    {this.state.type3===4?null:<Right><Text style={{padding:5, color:'white'}} onPress={()=>navigate('MeInfo')}>修改</Text></Right>}
                </Header>

                <Content style={{backgroundColor: Color.listColor}}>
                    {this.state.type3===4?(
                        <Form>
                            <View style={{justifyContent:'center', alignItems:'center', height: 50}}><Text style={{fontSize: 20}}>填写申请人基本信息</Text></View>
                            <Item fixedLabel>
                                <Label>执业证号</Label>
                                <Input defaultValue={'132123132123'} />
                            </Item>
                            <Item fixedLabel>
                                <Label>申请人</Label>
                                <Input defaultValue={'test'}  />
                            </Item>
                            <Item fixedLabel>
                                <Label>律所名称</Label>
                                <Input defaultValue={'test'}  />
                            </Item>
                            <Item fixedLabel>
                                <Label>联系手机号</Label>
                                <Input defaultValue={'15577852486'}  />
                            </Item>
                        </Form>
                        ):(
                        <Form>
                            <View style={{justifyContent:'center', alignItems:'center', height: 50}}><Text style={{fontSize: 20}}>个人信息</Text></View>
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
                                <Label>律师执业证号</Label>
                                <Input defaultValue={'132123132123'} disabled />
                            </Item>
                            <Item fixedLabel>
                                <Label>律所名称</Label>
                                <Input defaultValue={'毛利小五郎'} disabled />
                            </Item>
                            <Item fixedLabel>
                                <Label>联系方式</Label>
                                <Input defaultValue={'15577852486'} disabled />
                            </Item>
                        </Form>
                    )}
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full onPress={()=>navigate(this.state.type3===4?'Apply3':'Apply2')}>
                            <Text style={{color: 'white', fontSize: 15}}>下一步</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}