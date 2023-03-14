//初始化路由
//导入router的路由模式
import {createRouter, createWebHistory} from 'vue-router'
//导入进度条组件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//引入layout布局
import Layout from "@/layout/Layout"

//定义路由规则
const routers = [
    {
        path: '/',
        redirect: '/home' //重定向
    },
    {
        path: "/home",
        //引入布局组件
        component: Layout,
        children: [
            {
                path: "/home",
                name: "概览",
                icon: "fund-outlined",
                meta: {title: "概览"}
                component: () => import('@views/home/Home.vue')
            }
        ]
    }
]