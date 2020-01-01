import axios from 'axios'
export function loadProducts() {
    return axios.get("http://www.wayxuan.wang:1314/api/detail")
}