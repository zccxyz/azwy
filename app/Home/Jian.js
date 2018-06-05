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
    Thumbnail, Text, Footer, FooterTab
} from 'native-base';
import Color from "../Color";

export default class Jian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
        }
    }

    componentDidMount() {
        if(this.props.navigation.state.params) {
            this.setState({type: this.props.navigation.state.params.type});
        }
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return(
            <Container style={{flex: 1, backgroundColor: 'white'}}>
                <Header style={{backgroundColor: Color.navColor}} androidStatusBarColor={Color.navColor}
                        noShadow={true}>
                    <Left>
                        <Icon onPress={()=>goBack()} style={{color: Color.listColor}} name={'chevron-thin-left'} type={'Entypo'}/>
                    </Left>
                    <Body>
                    <Title>
                        {this.state.type===1?'案件诊断':null}
                        {this.state.type===2?'垫资诉讼':null}
                        {this.state.type===3?'案件执行':null}
                        {this.state.type===4?'债权收购':null}简介
                    </Title>
                    </Body>
                </Header>

                <Content>
                    <List>
                        <ListItem>
                            <Text style={{fontSize: 20}}>               
                                1.什么是{this.state.type===1?'案件诊断':null}
                                {this.state.type===2?'垫资诉讼':null}
                                {this.state.type===3?'案件执行':null}
                                {this.state.type===4?'债权收购':null}
                            </Text>
                        </ListItem>
                        <View style={{padding:20}}>
                            <Text>由各行业知名律师制定出诉讼和执行的标椎化模板，免费为企业，个人快速诊断出案件症结所在</Text>
                        </View>

                        <ListItem>
                            <Text style={{fontSize: 20}}>
                                2.{this.state.type===1?'案件诊断':null}
                                {this.state.type===2?'垫资诉讼':null}
                                {this.state.type===3?'案件执行':null}
                                {this.state.type===4?'债权收购':null}优势
                            </Text>
                        </ListItem>
                        <View style={{padding:20}}>
                            <Text>由各行业知名律师制定出诉讼和执行的标椎化模板，免费为企业，个人快速诊断出案件症结所在</Text>
                        </View>

                        <ListItem>
                            <Text style={{fontSize: 20}}>
                                3.{this.state.type===1?'案件诊断':null}
                                {this.state.type===2?'垫资诉讼':null}
                                {this.state.type===3?'案件执行':null}
                                {this.state.type===4?'债权收购':null}申请流程
                            </Text>
                        </ListItem>
                        <View style={{padding:20}}>
                            <Text>由各行业知名律师制定出诉讼和执行的标椎化模板，免费为企业，个人快速诊断出案件症结所在</Text>
                        </View>
                    </List>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full onPress={()=>navigate('Apply', {type: this.state.type})}>
                            <Text style={{color: 'white', fontSize: 15}}>
                                立即申请{this.state.type===1?'案件诊断':null}
                                {this.state.type===2?'垫资诉讼':null}
                                {this.state.type===3?'案件执行':null}
                                {this.state.type===4?'债权收购':null}
                            </Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}