import React, {Component} from 'react';
import {
    FlatList,
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

export default class Keep extends Component {
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
                    <Title>不良资产列表</Title>
                    </Body>
                </Header>

                <Content>
                    <FlatList data={this.state.list} renderItem={({item})=>this._item(item)}
                              keyExtractor={(v, k)=>k} extraData={this.state}/>
                </Content>
            </Container>
        )
    }

    _item(v) {
        return(
            <List style={{backgroundColor:'white'}}>
                <ListItem onPress={()=>this.props.navigation.navigate('BadInfo', {data: v})}>
                    <Body>
                    <Text>{v.name}</Text>
                    <Text note>资产包价格：{v.assets_price}元</Text>
                    </Body>
                    <Right>
                        <Icon name={'ios-arrow-forward'}/>
                    </Right>
                </ListItem>
            </List>
        )
    }

    _getCase() {
        POST(METHOD.assets, `class=myassets&id=${User.id}`)
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