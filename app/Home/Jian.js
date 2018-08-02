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
                        {this.state.type===2?'诉讼投资':null}
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
                                {this.state.type===2?'诉讼投资':null}
                                {this.state.type===3?'案件执行':null}
                                {this.state.type===4?'债权收购':null}
                            </Text>
                        </ListItem>
                        <View style={{padding:20}}>
                            {this.state.type==1?<Text>由各行业知名律师制定出诉讼和执行的标准化模板，免费为企业、个人快速诊断出案件症结所在,并给出具体应对措施（包括但不限于胜诉所需的证据材料清单以及相应的材料范本）和详细操作流程。</Text>:null}
                            {this.state.type==2?<Text>安枕无忧投资诉讼过程中的诉讼费、鉴定费、财产保全费、取证费等费用，采用"先赢官司，回款后付费"的模式。"垫资诉讼"捆绑律师利益，使得案件得以高效办理。</Text>:null}
                            {this.state.type==3?<Text>安枕无忧凭借十六年办理执行案件的经验，掌握丰富的强制执行措施，强有力地帮助企业、个人实现债权。全国律师联盟提供全面丰富的财产线索查询渠道和属地司法渠道优势，有效解决异地执行难题。</Text>:null}
                            {this.state.type==4?<Text>赢火虫专注债权收购与处置20年，累计处置金额超200亿，拥有雄厚的资金实力。针对不同的债权案件，提供全收购、半收购等多种个性化解决方案。凭借丰富的债权收购处置渠道，实现快速收购、快速变现</Text>:null}
                        </View>

                        <ListItem>
                            <Text style={{fontSize: 20}}>
                                2.{this.state.type===1?'案件诊断':null}
                                {this.state.type===2?'诉讼投资':null}
                                {this.state.type===3?'案件执行':null}
                                {this.state.type===4?'债权收购':null}优势
                            </Text>
                        </ListItem>
                        <View style={{padding:20}}>
                            {this.state.type==1?<Text>快速诊断案件，免费“开方” 预防风险；强力执行合作，重拳出击 实现债权；全国律师联盟，整合资源 异地联网。</Text>:null}
                            {this.state.type==2?<Text>安枕无忧提供诉讼投资，包括诉讼费和律师费等释放资金；安枕无忧提供全国资源，无论异地诉讼异地执行安枕无忧根据案件情况提供多种合作模式个性定制</Text>:null}
                            {this.state.type==3?<Text>安枕无忧按法院架构设立了执行事业部，由五十余名执行律师组成专业执行团队，专司执行；企业法务无调查资格，传统律师疲于承接新案。安枕无忧律师专业执行，穷尽调查手段和执行措施，强力高效的使案件得以执行；企业的案件或债务人遍布各地，企业法务及律师难以全面企及，安枕无忧利用“资本+互联网”，整合全国600城律师资源，属地办案，联合执行。</Text>:null}
                            {this.state.type==4?<View><Text>集团背景强大资金支持</Text><Text>专业团队多种收购方案</Text><Text>丰富渠道债权快速变现</Text></View>:null}
                        </View>

                        <ListItem>
                            <Text style={{fontSize: 20}}>
                                3.{this.state.type===1?'案件诊断':null}
                                {this.state.type===2?'诉讼投资':null}
                                {this.state.type===3?'案件执行':null}
                                {this.state.type===4?'债权收购':null}申请流程
                            </Text>
                        </ListItem>
                        <View style={{padding:20}}>
                            {this.state.type==1?<Text>点击“立即申请”按钮，根据表格内容提交申请，安枕无忧联盟专业的风控审核团队依据各行业标准化程序，对案件进行风控评估。3个工作日内给予正式诊断报告，提供专业合作建议。</Text>:null}
                            {this.state.type==2?<Text>提交案件申请由风控团队审核案件通过诉讼执行执行回款后进行收益比例分配</Text>:null}
                            {this.state.type==3?<Text>申请案件执行由执行团队评估，案件签订代理协议后，确定执行方案，根据执行团队执行结果回款分配收益</Text>:null}
                            {this.state.type==4?<View><Text>申请债权收购业务</Text><Text>风控团队立项评估</Text><Text>签订合作协议</Text><Text>执行收购分配收益</Text></View>:null}
                        </View>
                    </List>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button style={{backgroundColor: Color.navColor}} full onPress={()=>{
                            if(User){
                                if(this.state.type == 4 && User.status != 2) {
                                    err('您还不是律师，请在个人中心升级为律师!');
                                    return;
                                }
                                navigate('Apply', {type: this.state.type})
                            }else{
                                navigate('Login')
                            }
                        }}>
                            <Text style={{color: 'white', fontSize: 15}}>
                                立即申请{this.state.type===1?'案件诊断':null}
                                {this.state.type===2?'诉讼投资':null}
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