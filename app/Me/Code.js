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
    constructor(props) {
        super(props);
        this.state={
            url: '',
        };
    }

    componentDidMount() {
        this._get();
    }

    _get() {
        POST(METHOD.my_qrcode, `id=${User.id}`).then(rs=>{
            if(rs.code==1){
                this.setState({url: rs.data})
            }else{
                err(rs.data);
            }
            //console.log(rs);
        })
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
                    <Title>我的二维码</Title>
                    </Body>
                </Header>

                <Content>
                    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Thumbnail style={{width: 200, height: 200, marginBottom:10}} square source={{uri: this.state.url}}/>
                        <Text>我的二维码</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}