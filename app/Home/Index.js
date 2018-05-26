import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, TouchableOpacity,
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
import Color from '../Color';
import Swiper from 'react-native-swiper';

export default class Index extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={{flex: 1}}>
                <Header style={{backgroundColor: Color.navColor}} androidStatusBarColor={Color.navColor}>
                    <Body>
                    <Title>先赢官司回款后付费</Title>
                    </Body>
                </Header>

                <Content style={{flex: 1}}>
                    <List style={{backgroundColor: Color.listColor}}>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail square size={80} source={require('../img/1.jpg')}/>
                            </Left>
                            <Body>
                            <Text>案件诊断</Text>
                            <Text note>预防风险，防范于未然胜诉回款有力保障</Text>
                            </Body>
                            <Right style={{justifyContent: 'center'}}>
                                <Button bordered small>
                                    <Text>立即申请</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail square size={80} source={require('../img/1.jpg')}/>
                            </Left>
                            <Body>
                            <Text>垫资诉讼</Text>
                            <Text note>因为垫资，所以更用心敢于垫资源于实力</Text>
                            </Body>
                            <Right style={{justifyContent: 'center'}}>
                                <Button bordered small>
                                    <Text>立即申请</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail square size={80} source={require('../img/1.jpg')}/>
                            </Left>
                            <Body>
                            <Text>案件执行</Text>
                            <Text note>强力措施，老赖无所遁我们只会做的更好</Text>
                            </Body>
                            <Right style={{justifyContent: 'center'}}>
                                <Button bordered small>
                                    <Text>立即申请</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail square size={80} source={require('../img/1.jpg')}/>
                            </Left>
                            <Body>
                            <Text>债权收购</Text>
                            <Text note>债权拖累，一次性解决快速收购快速变现</Text>
                            </Body>
                            <Right style={{justifyContent: 'center'}}>
                                <Button bordered small>
                                    <Text>立即申请</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 40,
                        backgroundColor: Color.listColor,
                        width: WIDTH,
                        marginTop: 10,
                        padding: 10
                    }}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name={'sound'} type={'Entypo'} style={{color: Color.tabIcon, fontSize: 20}}/>
                            <Text>最新案源</Text>
                        </View>
                        <TouchableOpacity onPress={()=>navigate('Case')}>
                            <Text>进入案源库 >></Text>
                        </TouchableOpacity>
                    </View>
                    <Swiper style={{height: 110}} autoplay={true} showsPagination={false}>
                        <View>
                            <ListItem style={{backgroundColor: Color.listColor, marginLeft: 0}} onPress={()=>navigate('Case')}>
                                <Body>
                                <Text>阿里巴巴有限公司</Text>
                                <Text note>待委托</Text>
                                </Body>
                                <Right>
                                    <Text note><Text style={{fontSize: 20}}>126</Text>万元</Text>
                                </Right>
                            </ListItem>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: 30,
                                backgroundColor: Color.listColor,
                                width: WIDTH,
                                padding: 10
                            }}>
                                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                                    <Icon name={'controller-record'} type={'Entypo'} style={{color: Color.tabIcon, fontSize: 15}}/>
                                    <Text style={{fontSize: 15}}>买卖合同纠纷</Text>
                                </View>
                                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                                    <Icon name={'controller-record'} type={'Entypo'} style={{color: Color.tabIcon, fontSize: 15}}/>
                                    <Text style={{fontSize: 15}}>北京市日本县</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>navigate('Case')}>
                            <ListItem style={{backgroundColor: Color.listColor, marginLeft: 0}}>
                                <Body>
                                <Text>阿里巴巴有限公司</Text>
                                <Text note>待委托</Text>
                                </Body>
                                <Right>
                                    <Text note><Text style={{fontSize: 20}}>126</Text>万元</Text>
                                </Right>
                            </ListItem>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: 30,
                                backgroundColor: Color.listColor,
                                width: WIDTH,
                                padding: 10
                            }}>
                                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                                    <Icon name={'controller-record'} type={'Entypo'} style={{color: Color.tabIcon, fontSize: 15}}/>
                                    <Text style={{fontSize: 15}}>买卖合同纠纷</Text>
                                </View>
                                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                                    <Icon name={'controller-record'} type={'Entypo'} style={{color: Color.tabIcon, fontSize: 15}}/>
                                    <Text style={{fontSize: 15}}>北京市日本县</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Swiper>
                </Content>
            </Container>
        )
    }
}