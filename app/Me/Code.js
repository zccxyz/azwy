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
    Thumbnail, Text
} from 'native-base';
import Color from "../Color";

export default class Code extends Component {
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
                    <Title>我的消息</Title>
                    </Body>
                </Header>

                <Content>
                    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Thumbnail style={{width: 200, height: 200, marginBottom:10}} square source={{uri: 'http://img4.duitang.com/uploads/item/201602/21/20160221142008_JazZE.jpeg'}}/>
                        <Text>我的二维码</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}