import Vue from 'vue';

let devApiHost = "http://localhost:3000/";
// let devApiHost = "http://192.168.0.159:3000/";
let betaApiHost = "http://192.168.200.22:3000/";
let releaseApiHost = "//www.bluecat.club:3000/";
// let releaseApiHost = "//www.bluecat.club:3000/";

let httpConfig = {
    apiHost: ""
}
switch (process.env.NODE_ENV) {
    case "development"://本地调试环境
        httpConfig.apiHost = devApiHost;
        break;
    case "bata_development"://开发环境
        httpConfig.apiHost = devApiHost;
        break;
    case "bata_production"://测试环境
        httpConfig.apiHost = betaApiHost;
        break;
    case "productions"://正式环境
        // httpConfig.apiHost = window.location.protocol + releaseApiHost;
        httpConfig.apiHost = window.location.origin + ':3000/';
        break;
}

export default httpConfig
