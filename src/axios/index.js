import Vue from 'vue';
import axios from 'axios';
import httpConfig from '../config/http'
// import store from '../vuex/store'
import router from '../router'

// axios.defaults.withCredentials=true;
let axiosRequset = axios.create({
    baseURL: httpConfig.apiHost
})

axiosRequset.interceptors.request.use((config) => {
    // config.headers["sessionId"] = !!localStorage.sessionId ? localStorage.sessionId : "";
    config.headers["Authorization"] = "www.bluestone.club";
    // config.headers["Content-Type"] = "application/json";
    return config
})

axiosRequset.interceptors.response.use((result) => {
    switch (result.status) {
        case 200:
            break;
        default:
            return Promise.reject(result)
            break;
    }

    switch (result.data.status) {
        case -2:
            // store.dispatch('setLogout');
            router.go(0)
            break;
        default:
            return Promise.resolve(result.data)
            break;
    }
}, result => {
    return Promise.reject(result)
})

Vue.prototype.$axios = axiosRequset;

export default ({
});
