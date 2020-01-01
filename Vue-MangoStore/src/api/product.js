import {get, post } from "../utils/request"

export function products(page) {
    return get("http://www.wayxuan.wang:1314/api/detail", {
        page
    })
}