
import { loadProducts } from '../../api_2/product'

export default{
    namespaced: true,
    state: {
        list:[],
        keyword:""
    },
    mutations: {
        loadDataEnd(state,payload){
            state.list = payload
        },
        searchProduct(state,payload){
           console.log(payload)
        }
    },
    actions: {
        // 调用action获取商品数据
        async loadData({commit},payload){
            let result = await loadProducts()
            commit('loadDataEnd',result.data)
        }
    }
}