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
    Thumbnail, Text, Form, Item, Label, Input,
} from 'native-base';
import Color from "../Color";

export default class BadInfo extends Component {
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
                    <Title>不良资产列表</Title>
                    </Body>
                </Header>

                <Content>
                    <Form style={{backgroundColor: 'white'}}>
                        <Item fixedLabel>
                            <Label>申请ID</Label>
                            <Input disabled defaultValue={'27'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>律师邀请码</Label>
                            <Input disabled defaultValue={'27'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>执业证号</Label>
                            <Input disabled defaultValue={'27'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>申请人</Label>
                            <Input disabled defaultValue={'test'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>律所名称</Label>
                            <Input disabled defaultValue={'test'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>手机号</Label>
                            <Input disabled defaultValue={'27'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>资产包名称</Label>
                            <Input disabled defaultValue={'27'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>资产包持有</Label>
                            <Input disabled defaultValue={'27'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>资产包价格</Label>
                            <Input disabled defaultValue={'27'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>标的物总金</Label>
                            <Input disabled defaultValue={'27'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>抵押率</Label>
                            <Input disabled defaultValue={'100%'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>抵押物一</Label>
                            <Input disabled defaultValue={'商业土地'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>抵押物类型</Label>
                            <Input disabled defaultValue={'不动产抵押'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>抵押物地址</Label>
                            <Input disabled defaultValue={'重庆'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>详细地址</Label>
                            <Input disabled defaultValue={'重庆'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>抵押物金额</Label>
                            <Input disabled defaultValue={'27'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>原债权人</Label>
                            <Input disabled defaultValue={'27'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>合作方式</Label>
                            <Input disabled defaultValue={'中介'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>上传资料邮</Label>
                            <Input disabled defaultValue={'123@qq.com'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>业务员ID</Label>
                            <Input disabled defaultValue={'27'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>业务员姓名</Label>
                            <Input disabled defaultValue={'27'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>业务员手机</Label>
                            <Input disabled defaultValue={'27'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>跟踪记录明细</Label>
                            <Input disabled defaultValue={'点击查看记录明细'}/>
                        </Item>
                    </Form>
                </Content>
            </Container>
        )
    }
}