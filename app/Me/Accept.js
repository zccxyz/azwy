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

export default class Accept extends Component {
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
                    <Title>我承接的案源</Title>
                    </Body>
                </Header>

                <Content>
                    <List style={{backgroundColor:'white'}}>
                        <ListItem onPress={()=>navigate('AcceptInfo')}>
                            <Body>
                            <Text>阿里巴巴 VS 腾讯</Text>
                            </Body>
                            <Right style={{flexDirection:'row'}}>
                                <Text style={{marginRight:10, color: Color.navColor}}>申请中</Text>
                                <Icon name={'ios-arrow-forward'}/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}