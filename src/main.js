import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import App from './App.vue'
// import env from './env'

//mock开关
const mock = true;
if(mock){
  require('../public/mock/api');
}

//根据前端的跨域方式做调整 /api/a/b => /a/b
axios.defaults.baseURL = './api'
axios.defaults.timeout = 8000;
//根据环境变量不同获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  let path = location.hash;
  if(res.status == 0){
    return res.data;
  }
  else if(res.status == 10){
    if(path != '/#/index'){
      window.location.href = '/#/login'
    }
  }else{
    this.$message.warning(res.msg);
    return Promise.reject(res);
  }
});

Vue.use(VueAxios,axios);
Vue.use(VueCookie);
Vue.use(ElementUI);
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: '/imgs/loading-svg/loading-bars.svg',
  // attempt: 1
})
Vue.config.productionTip = true//开发环境提示

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
