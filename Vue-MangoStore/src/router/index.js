import Vue from 'vue'
import VueRouter from 'vue-router'
import Shopping from "../views/Shopping.vue"
import Particulars from "../views/Particulars.vue"
import Person from '../views/person.vue'
import Mymango from '../views/person/Mymango.vue'
import Account from '../views/person/Account.vue'
import Advices from '../views/person/Advices.vue'
import Allorder from '../views/person/Mymango/Allorder.vue'
import Collect from '../views/person/Mymango/Collect.vue'
import Intransit from '../views/person/Mymango/Intransit.vue'
import Obligation from '../views/person/Mymango/Obligation.vue'
import Residue from '../views/person/Mymango/Residue.vue'
import Mydd from '../views/person/Mymango/Mydd.vue'
// hot
import index from '../views/index.vue'
import indexIndex from '../components/index_index.vue'
import Hot from '../components/hot.vue'

import Address from '../views/person/Account/Address.vue'
import Basics from '../views/person/Account/Basics.vue'
import Binding from '../views/person/Account/Binding.vue'
import Security from '../views/person/Account/Security.vue'
import Withdraw from '../views/person/Account/Withdraw'
import search from '../components/indexSearch.vue'
import login from '../views/Login/login.vue'
// 分类++++++++++++++
import nanXie from '../components/menShoesProductsList.vue'
import nvXie from '../components/womenShoesProductsList.vue'
import children from '../components/childrenProductsList.vue'
import yunDong from '../components/ExerciseProductsList.vue'
import xiangBao from '../components/xiangbaoProductsList.vue'

import Test from "../components/test.vue"

import Lijigoumai from '../views/lijigoumai.vue'
import Dizhi from '../views/person/Account/Dizhi.vue'
import Compile from '../views/person/Account/Compile.vue'
import Winmsd from '../views/person/Advices/Winmsd.vue'

import register from '../views/Login/register.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/test',
        name: 'test',
        component: Test
    },
    {
        path: '/lijigoumai',
        name: 'lijigoumai',
        component: Lijigoumai
    }, {
        path: '/',
        name: 'index',
        component: index,
        children: [{ //热搜
                path: '/Hot',
                name: 'Hot',
                component: Hot
            },
            { //首页
                path: '/',
                name: 'indexIndex',
                component: indexIndex
            },
            { //搜索
                path: '/search',
                name: 'search',
                component: search
            },
            { //男鞋
                path: '/nanXie',
                name: 'nanXie',
                component: nanXie
            },
            { //女鞋
                path: '/nvXie',
                name: 'nvXie',
                component: nvXie
            },
            { //儿童
                path: '/children',
                name: 'children',
                component: children
            },
            { //运动
                path: '/yunDong',
                name: 'yunDong',
                component: yunDong
            },
            { //箱包
                path: '/xiangBao',
                name: 'xiangBao',
                component: xiangBao
            },
        ]
    }, //以上首页路由+++++++++++++++++++++++
    {
        path: '/Login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/particulars',
        name: 'particulars',
        component: Particulars
    },
    {
        path: '/shopping',
        name: 'shopping',
        component: Shopping
    },
    { //个人中心=================
        path: '/person',
        name: 'proson',
        component: Person,
        meta: {
            islogin: true
        },
        children: [{
            path: 'my',
            name: 'Mymango',
            component: Mymango,
            children: [{
                    path: 'mydd',
                    name: 'Mydd',
                    component: Mydd,
                    meta: {
                        islogin: true
                    }
                },
                {
                    path: 'allorder',
                    name: 'Allorder',
                    component: Allorder
                }, {
                    path: 'collect',
                    name: 'Collect',
                    component: Collect,
                    meta: {
                        islogin: true
                    }
                }, {
                    path: 'intransit',
                    name: 'Intransit',
                    component: Intransit
                }, {
                    path: 'obligation',
                    name: 'Obligation',
                    component: Obligation,
                    meta: {
                        islogin: true
                    }
                }, {
                    path: 'residue',
                    name: 'Residue',
                    component: Residue
                }

            ]
        }, {
            path: 'acc',
            name: 'Account',
            component: Account,
            children: [{
                path: 'address',
                name: 'Address',
                component: Address,
                children: [{
                    path: 'dizhi',
                    name: 'Dizhi',
                    component: Dizhi
                }]
            }, {
                path: 'basics',
                name: 'Basics',
                component: Basics
            }, {
                path: 'binding',
                name: 'Binding',
                component: Binding
            }, {
                path: 'security',
                name: 'Security',
                component: Security
            }, {
                path: 'withdraw',
                name: 'Withdraw',
                component: Withdraw
            }]
        }, {
            path: 'adv',
            name: 'Advices',
            component: Advices,
            children: [{
                path: 'winmsd',
                name: 'Winmsd',
                component: Winmsd
            }]
        }]
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    // console.group('路由跳转之前')
    // console.log('to',to)
    // console.log('from',from)
    // console.groupEnd()
    if (to.meta.islogin) {
        let token = localStorage.getItem('token')
        if (token) {
            next()
        } else {
            next({
                name: 'login'
            })
        }
    } else {
        next()
    }
})

export default router