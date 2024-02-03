import { ConfigServer } from '@app/interfaces/config.interface'
import { redisConf } from '../dev.config'

const config: ConfigServer = {

    /* 接口请求相关配置 */
    requestTimeout: 300000,

    // 代理接口域名
    apiPrefix: {
        baseApi: 'http://192.168.0.4:3004',
    },

    redisConf: {
        port: 10121,
        host: '10.130.87.26', // https://s.sysop.duowan.com/commonComps/dbms/manage/26435/instances/overview
        no_ready_check: true,
    
    },


    /* 微信相关配置 */
    wxOpenAppId: 'wxc2b795ed9de3592a',

}

module.exports = config;
