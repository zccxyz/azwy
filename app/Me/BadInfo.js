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
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        }
    }

    componentDidMount() {
        if(this.props.navigation.state.params){
            console.log(this.props.navigation.state.params.data);
            this.setState({data: this.props.navigation.state.params.data});
        }else{
            msg('参数错误');
        }
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        const s = this.state.data;
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
                            <Input disabled defaultValue={s.id}/>
                        </Item>
                        {/*<Item fixedLabel>
                            <Label>律师邀请码</Label>
                            <Input disabled defaultValue={''}/>
                        </Item>*/}
                        <Item fixedLabel>
                            <Label>执业证号</Label>
                            <Input disabled defaultValue={s.profession}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>申请人</Label>
                            <Input disabled defaultValue={s.proposer}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>律所名称</Label>
                            <Input disabled defaultValue={s.attorney_name}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>手机号</Label>
                            <Input disabled defaultValue={s.phone}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>资产包名称</Label>
                            <Input disabled defaultValue={s.name}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>资产包持有</Label>
                            <Input disabled defaultValue={s.assets_name}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>资产包价格</Label>
                            <Input disabled defaultValue={s.assets_price}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>标的物总金</Label>
                            <Input disabled defaultValue={s.total_price}/>
                        </Item>
                        {/*<Item fixedLabel>
                            <Label>抵押率</Label>
                            <Input disabled defaultValue={'100%'}/>
                        </Item>*/}

                        {s.mortgage?(
                            s.mortgage.map((v, k)=>{
                                return(
                                    <View>
                                        <Item fixedLabel>
                                            <Label>抵押物{k+1}</Label>
                                            <Input disabled defaultValue={v.mortgage_name}/>
                                        </Item>
                                        <Item fixedLabel>
                                            <Label>抵押物类型</Label>
                                            <Input disabled defaultValue={v.mortgage_type_name}/>
                                        </Item>
                                        <Item fixedLabel>
                                            <Label>抵押物地址</Label>
                                            <Input disabled defaultValue={v.city+v.a+v.c}/>
                                        </Item>
                                        <Item fixedLabel>
                                            <Label>详细地址</Label>
                                            <Input disabled defaultValue={v.detail}/>
                                        </Item>
                                        <Item fixedLabel>
                                            <Label>抵押物金额</Label>
                                            <Input disabled defaultValue={v.money}/>
                                        </Item>
                                    </View>
                                )
                            })
                        ):null}



                        <Item fixedLabel>
                            <Label>原债权人</Label>
                            <Input disabled defaultValue={s.original}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>合作方式</Label>
                            {s.cooperation==1?<Input disabled defaultValue={'联合收购'}/>:null}
                            {s.cooperation==2?<Input disabled defaultValue={'联合清收'}/>:null}
                            {s.cooperation==3?<Input disabled defaultValue={'作为中介'}/>:null}
                        </Item>
                        <Item fixedLabel>
                            <Label>上传资料邮</Label>
                            <Input disabled defaultValue={'123@qq.com'}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>业务员ID</Label>
                            <Input disabled defaultValue={s.salesman}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>业务员姓名</Label>
                            <Input disabled defaultValue={s.salesman_name}/>
                        </Item>
                        <Item fixedLabel>
                            <Label>业务员手机</Label>
                            <Input disabled defaultValue={s.salesman_phone}/>
                        </Item>
                        {/*<Item fixedLabel>
                            <Label>跟踪记录明细</Label>
                            <Input disabled defaultValue={'点击查看记录明细'}/>
                        </Item>*/}
                    </Form>
                </Content>
            </Container>
        )
    }
}