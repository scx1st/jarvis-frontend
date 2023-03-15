<template>
    <a-layout>
        <!-- 头部做成固钉 -->
        <a-affix>
            <!-- 布局头部 -->
            <a-layout-header>
                <!-- 平台信息 -->
                <div style="float:left;">
                    <img style="height:40px;margin-bottom:10px;" :src="kubeLogo"/>
                    <span style="font-size:25px; padding:0 50px 0 20px; font-weight:bold;color:#fff;">Jarvis</span>
                </div>
                <!-- 集群信息 -->
                <a-menu
                    style="float:left; width:250px; line-height:64px;"
                    v-model:selectedKeys="selectedKeysl"
                    theme="dark"
                    mode="horizontal">
                    <a-menu-item v-for="item in clusterList" :key="item">
                        {{ item }}
                    </a-menu-item>
                </a-menu>
                <!-- 用户信息 -->
                <div style="float:right;">
                    <img style="height:40px; border-radius:50%;margin-right:10px;" :src="avator"/>
                    <a-dropdown :overlayStyle="{paddingTop: '20px'}">
                        <a>
                            Admin
                            <down-outlined/>
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>
                                    <a @click="logout()">退出登录</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a>修改密码</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </div>
            </a-layout-header>
        </a-affix>
        <!-- 中部，高度永远是窗口最大高度减去68px，68是header的高度 -->
        <a-layout style="height:calc(100vh - 68px)">
            <!-- ***侧边栏*** -->
            <a-layout-sider width="240"  v-model:collapsed="collapsed" collapsible>
            </a-layout-sider>
            <a-layout style="padding: 0 24px">
                <!-- main部分 -->
                <a-layout-content
                :style="{
                    background: 'rgb(31, 30, 30)',
                    padding: '24px',
                    margin: 0,
                    minHeight: '280px',
                    overflowY: 'auto'}">
                    <!-- 路由占位符 -->
                    <router-view></router-view>
                </a-layout-content>
                <!-- footer部分 -->
                <a-layout-footer style="text-align: center">
                    ©2023 Created by IvanS DevOps
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<script>
import {ref} from 'vue'
import kubeLogo from '@/assets/k8s-metrics.png'
import avator from '@/assets/avator.png'

export default ({
    setup() {
        const collapsed = ref(false)
        const selectedKeysl = ref([])
        const clusterList = ref([
            'TST-1',
            'TST-2'
        ])

        //【这里开始是方法】
        function logout(){
            //移除用户名
            localStorage.removeItem('username')
            //移除token
            localStorage.removeItem('token')
            //跳转导login页面
            // router.push('/login')
        }
        return {
            collapsed,
            kubeLogo,
            avator,
            selectedKeysl,
            clusterList,
            logout
        }
    },
})
</script>

<style scoped>
    /* 头部内边距 */
    .ant-layout-header {
        padding: 0 30px !important;
    }
    .ant-layout-footer {
        padding: 5px 50px !important;
        color: rgb(239, 239, 239);
    }
</style>