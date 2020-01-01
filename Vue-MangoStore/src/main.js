import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/iconfont/font_banner-nav/iconfont.css'
import './assets/iconfont/font_page-right/iconfont.css'
import product from './store/modules/product'
import Axios from 'axios'
import './style/style2/indexIndex.css'
import './jj/abc.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css';
Vue.use(VueAwesomeSwiper);
Vue.prototype.$axios = Axios;



import { loadProducts } from './api_2/product'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        productsList: [],
        sreachProducts: [],
        nanxie: [],
        nvXie: [],
        childer: [],
        yunDong: [],
        xiangBao: [],
        login:false,
        userName:""
    },
    mutations: {
        add(state, payload) {
            // console.log(payload)
            state.productsList = payload;
        },
        login(state, payload) {
            console.log(payload)
            state.login = payload.userLogin;
            state.userName =payload.userName;
        },
        sreach(state, payload) { //搜索
            state.sreachProducts = state.productsList.filter(item => item.title.indexOf(payload) > -1);
            console.log(state.sreachProducts)
        },
        nanxie(state, payload) { //男鞋
            state.nanxie = state.productsList.filter(item => item.name.indexOf('男鞋') > -1);
            // console.log(state.nanxie)
        },
        nvXie(state, payload) { //女鞋
            state.nvXie = state.productsList.filter(item => item.name.indexOf('女鞋') > -1);
            // console.log(state.nvXie)
        },
        childer(state, payload) { //儿童
            state.childer = state.productsList.filter(item => item.name.indexOf('儿童') > -1);
            // console.log(state.childer)
        },
        yunDong(state, payload) { //运动
            state.yunDong = state.productsList.filter(item => item.name.indexOf('运动') > -1);
            // console.log(state.yunDong)
        },
        xiangBao(state, payload) { //箱包
            state.xiangBao = state.productsList.filter(item => item.name.indexOf('箱包') > -1);
            // console.log(state.xiangBao)

        },

    },
    actions: {
        // 调用action获取商品数据
        async loadData({ commit }, payload) {
            let result = await loadProducts();
            commit('add', result.data)
        }
    }
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    components: {},
}).$mount('#app')