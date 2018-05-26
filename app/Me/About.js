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
    Thumbnail, Text, H1, Footer, FooterTab
} from 'native-base';
import Color from "../Color";

export default class About extends Component {
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
                    <Title>关于我们</Title>
                    </Body>
                </Header>

                <Content style={{backgroundColor: 'white'}}>
                    <View style={{height: 50, justifyContent:'center', alignItems:'center'}}>
                        <H1>安枕无忧简介</H1>
                    </View>
                    <View style={{padding: 20, justifyContent: 'center'}}>
                        <Text>
                            接受对方可垃圾似的疯狂了阿斯加德方可垃圾看见爱上对方空间阿萨德咖技术的开发建设的跨境速度快放假啊加上的纠纷，
                            接受对方可垃圾似的疯狂了阿斯加德方可垃圾看见爱上对方空间阿萨德咖技术的开发建设的跨境速度快放假啊加上的纠纷，
                            接受对方可垃圾似的疯狂了阿斯加德方可垃圾看见爱上对方空间阿萨德咖技术的开发建设的跨境速度快放假啊加上的纠纷
                        </Text>
                    </View>
                    <View style={{height: 50, justifyContent:'center', alignItems:'center'}}>
                        <Text>当前版本：1.0.0</Text>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <View>
                            <Button>
                                <Text>检测更新</Text>
                            </Button>
                        </View>
                    </View>
                </Content>

                <Footer style={{backgroundColor: 'white'}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text>Copyright 2015-2018</Text>
                        <Text>安枕无忧版权所有</Text>
                    </View>
                </Footer>
            </Container>
        )
    }
}