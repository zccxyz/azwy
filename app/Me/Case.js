import React, {Component} from 'react';
import {
    FlatList,
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
    Thumbnail, Text
} from 'native-base';
import Color from "../Color";

export default class Case extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }

    componentDidMount() {
        this._getCase()
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
                    <Title>案件列表</Title>
                    </Body>
                </Header>

                <Content>
                    <List>
                        <FlatList data={this.state.list} renderItem={({item})=>this._item(item)}
                                  keyExtractor={(v, k)=>k} extraData={this.state}/>
                    </List>
                </Content>
            </Container>
        )
    }

    _item(v) {
        return(
            <ListItem style={{backgroundColor: 'white', marginLeft:0}} onPress={()=>this.props.navigation.navigate('CaseInfo', {id: v.id})}>
                <Body>
                <Text>{v.type_name} {v.plaintiff} VS {v.defendant}</Text>
                <Text note>案件标的：{v.money/10000}万元</Text>
                </Body>
                <Right style={{flexDirection: 'row'}}>
                    <Text>
                        {v.audit_type==0?'待审核':''}
                        {v.audit_type==1?'审核通过':''}
                        {v.audit_type==2?'审核不通过':''}
                    </Text>
                    <Icon name={'chevron-right'} type={'Entypo'}/>
                </Right>
            </ListItem>
        )
    }

    _getCase() {
        POST(METHOD.apply, `class=myapply&id=${User.id}`)
            .then(rs=>{
                if(rs.code==1) {
                    this.setState({list: rs.data});
                }else{
                    err(rs.data);
                }
                console.log(rs);
            })
    }
}