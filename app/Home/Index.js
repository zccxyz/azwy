import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View, TouchableOpacity, DeviceEventEmitter,
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
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    componentDidMount() {
        this.up = DeviceEventEmitter.addListener('Up', (a) => {
            this._getCase();
        });
        this._getCase();
    }

    componentWillUnmount() {
        this.up.remove();
    }

    _getCase() {
        POST(METHOD.apply, `class=4list`)
            .then(rs=>{
                if(rs.code==1) {
                    this.setState({list: rs.data});
                }else{
                    err(rs.data);
                }
                console.log(rs);
            })
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={{flex: 1}}>
                <Header style={{backgroundColor: Color.navColor}} androidStatusBarColor={Color.navColor}>
                    <Left/>
                    <Body>
                    <Title>
                        先赢官司
                        <Thumbnail source={require('../img/logo.jpg')}/>
                        回款后付费
                    </Title>
                    </Body>
                </Header>

                <Content style={{flex: 1}}>
                    <List style={{backgroundColor: Color.listColor}}>
                        <ListItem avatar onPress={()=>navigate('Jian', {type: 1})}>
                            <Left>
                                <Thumbnail square size={80} source={require('../img/icon1.png')}/>
                            </Left>
                            <Body>
                            <Text>案件诊断</Text>
                            <Text note>预防风险，防范于未然胜诉回款有力保障</Text>
                            </Body>
                            <Right style={{justifyContent: 'center'}}>
                                <Button bordered small onPress={()=>navigate('Jian', {type: 1})} style={{borderColor: Color.navColor}}>
                                    <Text style={{color: Color.navColor}}>立即申请</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem avatar onPress={()=>navigate('Jian', {type: 2})}>
                            <Left>
                                <Thumbnail square size={80} source={require('../img/icon2.png')}/>
                            </Left>
                            <Body>
                            <Text>诉讼投资</Text>
                            <Text note>因为诉讼，所以更用心敢于诉讼源于实力</Text>
                            </Body>
                            <Right style={{justifyContent: 'center'}}>
                                <Button bordered small onPress={()=>navigate('Jian', {type: 2})} style={{borderColor: Color.navColor}}>
                                    <Text style={{color: Color.navColor}}>立即申请</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem avatar onPress={()=>navigate('Jian', {type: 3})}>
                            <Left>
                                <Thumbnail square size={80} source={require('../img/icon3.png')}/>
                            </Left>
                            <Body>
                            <Text>案件执行</Text>
                            <Text note>强力措施，老赖无所遁我们只会做的更好</Text>
                            </Body>
                            <Right style={{justifyContent: 'center'}}>
                                <Button bordered small onPress={()=>navigate('Jian', {type: 3})} style={{borderColor: Color.navColor}}>
                                    <Text style={{color: Color.navColor}}>立即申请</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem avatar onPress={()=>navigate('Jian', {type: 4})}>
                            <Left>
                                <Thumbnail square size={80} source={require('../img/icon4.png')}/>
                            </Left>
                            <Body>
                            <Text>债权收购</Text>
                            <Text note>债权拖累，一次性解决快速收购快速变现</Text>
                            </Body>
                            <Right style={{justifyContent: 'center'}}>
                                <Button bordered small onPress={()=>navigate('Jian', {type: 4})} style={{borderColor: Color.navColor}}>
                                    <Text style={{color: Color.navColor}}>立即申请</Text>
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
                    {this.state.list.length>0?(
                        <Swiper style={{height: 110}} autoplay={true} showsPagination={false}>
                            {this.state.list.map((v, k)=>{
                                return (
                                    <TouchableOpacity key={k} onPress={()=>navigate('Case')}>
                                        <ListItem style={{backgroundColor: Color.listColor, marginLeft: 0}} onPress={()=>navigate('Case')}>
                                            <Body>
                                            <Text>{v.plaintiff}</Text>
                                            <Text note>待委托</Text>
                                            </Body>
                                            <Right>
                                                <Text note><Text style={{fontSize: 20}}>{v.money/10000}</Text>万元</Text>
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
                                                <Text style={{fontSize: 15}}>{v.type_name}</Text>
                                            </View>
                                            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                                                <Icon name={'controller-record'} type={'Entypo'} style={{color: Color.tabIcon, fontSize: 15}}/>
                                                <Text style={{fontSize: 15}}>{v.court}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </Swiper>
                    ):null}
                </Content>
            </Container>
        )
    }
}