<template>
    <a-layout>
        <!-- 头部做成固钉 -->
        <a-affix>
            <a-layout-header>
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

export default ({
    setup() {
        const collapsed = ref(false)
        return {
            collapsed
        }
    },
})
</script>
