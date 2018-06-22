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
                        <ListItem style={{backgroundColor: 'white', marginLeft:0}} onPress={()=>navigate('CaseInfo')}>
                            <Body>
                            <Text>买合同纠纷 阿里巴巴 VS 腾讯</Text>
                            <Text note>案件标的：12万元</Text>
                            </Body>
                            <Right style={{flexDirection: 'row'}}>
                                <Text>已提交</Text>
                                <Icon name={'chevron-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>

                        <ListItem style={{backgroundColor: 'white', marginLeft:0}} onPress={()=>navigate('CaseInfo')}>
                            <Body>
                            <Text>买合同纠纷 阿里巴巴 VS 腾讯</Text>
                            <Text note>案件标的：12万元</Text>
                            </Body>
                            <Right style={{flexDirection: 'row'}}>
                                <Text>已提交</Text>
                                <Icon name={'chevron-right'} type={'Entypo'}/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }

    _getCase() {
        POST(METHOD.apply)
            .then(rs=>{
                console.log(rs);
            })
    }
}