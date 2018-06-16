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

export default class Keep extends Component {
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
                    <List style={{backgroundColor:'white'}}>
                        <ListItem onPress={()=>navigate('BadInfo')}>
                            <Body>
                            <Text>测试</Text>
                            <Text note>资产包价格：50000.00元</Text>
                            </Body>
                            <Right> 
                                <Icon name={'ios-arrow-forward'}/>
                            </Right>
                        </ListItem>
                        <ListItem onPress={()=>navigate('BadInfo')}>
                            <Body>
                            <Text>测试2</Text>
                            <Text note>资产包价格：52000.00元</Text>
                            </Body>
                            <Right>
                                <Icon name={'ios-arrow-forward'}/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}