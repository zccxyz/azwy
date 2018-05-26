import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, FlatList,
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

export default class Help extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {name: '一、如何联系客服', content: '气我饿UR五我去问权威去爱恶如一日期为瑞维权日', zt: false},
                {name: '二、账户注册类', content: '气我饿UR五我去问权威去爱恶如一日期为瑞维权日', zt: false},
                {name: '三、免息贷业务', content: '气我饿UR五我去问权威去爱恶如一日期为瑞维权日', zt: false},
                {name: '四、申请代理案件', content: '气我饿UR五我去问权威去爱恶如一日期为瑞维权日', zt: false},
                {name: '五、案件发布类', content: '气我饿UR五我去问权威去爱恶如一日期为瑞维权日', zt: false},
                {name: '六、安枕无忧亮度等级规则类', content: '气我饿UR五我去问权威去爱恶如一日期为瑞维权日', zt: false},
            ],
        };
    }

    _change(item) {
        for(let v of this.state.list) {
            if(v.name === item.name) {
                v.zt = !v.zt;
                break;
            }
        }
        console.log(this.state.list);
        this.setState({list: this.state.list})
    }

    _item(item) {
        return(
            <View>
                <ListItem onPress={()=>this._change(item)}>
                    <Left>
                        <Text style={{fontSize:16}}>{item.name}</Text>
                    </Left>
                    <Right>
                        {item.zt?<Icon name="chevron-small-down" type={'Entypo'} />:<Icon name="chevron-right" type={'Entypo'} />}
                    </Right>
                </ListItem>
                {item.zt?(
                    <Text style={{marginLeft: 20, fontSize:14}}>
                        {item.content}
                    </Text>
                ):null}
            </View>
        );
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
                    <Title>帮助</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: 'white'}}>
                    <List>
                        <FlatList data={this.state.list} renderItem={({item})=>this._item(item)}
                                  keyExtractor={(v, k)=>k} extraData={this.state}/>
                    </List>
                </Content>
            </Container>
        )
    }
}