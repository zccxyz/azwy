import {Alert, AppRegistry, DeviceEventEmitter, Dimensions, ToastAndroid} from 'react-native';
import App from './App';
import Save from './app/Save';
import Request from './app/Request';

GLOBAL.HEIGHT = Dimensions.get('window').height;
GLOBAL.WIDTH = Dimensions.get('window').width;
GLOBAL.SAVE = Save;
GLOBAL.YM = 'http://39.105.85.127/azwy/home/';
GLOBAL.METHOD = Request;
GLOBAL.POST = function (method, params) {
    return fetch(`${YM + method}`, {
        method: "POST",
        body: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
        .then(r => r.json())
        .then(rs => {
            return rs;
        }).catch(e => {
            console.log(e);
            alert('请求出错');
        })
};
GLOBAL.GET = function (method, params) {
    return fetch(`${YM + method}?${params}`)
        .then(r => r.json())
        .then(rs => {
            return rs;
        }).catch(e => {
            alert('请求出错');
        })
};
GLOBAL.msg = function (msg) {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
};
GLOBAL.err = function (msg) {
    Alert.alert(
        '提示',
        msg,
        [
            {text: '确定', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        {cancelable: false}
    );
};
GLOBAL.User = null;

AppRegistry.registerComponent('azwyazwy', () => App);
