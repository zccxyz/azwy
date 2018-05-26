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

export default class Message extends Component {
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

                <Content style={{backgroundColor: 'white'}}>
                    <ListItem icon>
                        <Left>
                            <Icon name="emoji-sad" style={{fontSize: 20, color: Color.navColor}} type={'Entypo'}/>
                        </Left>
                        <Body>
                        <Text>系统消息</Text>
                        </Body>
                        <Right>
                            <Icon style={{color: Color.meListColor}} name={'chevron-thin-right'} type={'Entypo'}/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="md-person" style={{fontSize: 20, color: Color.navColor}} type={'Ionicons'}/>
                        </Left>
                        <Body>
                        <Text>业务通知</Text>
                        </Body>
                        <Right>
                            <Icon style={{color: Color.meListColor}} name={'chevron-thin-right'} type={'Entypo'}/>
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}