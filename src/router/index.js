import { createRouter, createWebHistory } from 'vue-router';
import Layout from "@/views/layout/Layout.vue";

//暴露layoutChildren 方便页面拿到里面的值
export const layoutChildren = [{
    path: '/index',
    name: "Index",
    //meta 可以使用到页面上 使用userRouter 里面的getRoutes()方法 获取到meta 具体看Layout页面
    meta: { test: '测试' },
    component: () => import("../components/Index.vue"),
},
{
    path: '/lottery',
    name: "Lottery",
    //meta 可以使用到页面上 使用userRouter 里面的getRoutes()方法 获取到meta 具体看Layout页面
    meta: { test: 'Lottery' },
    component: () => import("../components/Lottery.vue"),
},
    //children止
]

const routes = [
    {
        path: '/',
        name: "Layout",
        component: Layout,
        redirect: "/index",
        //layoutChildren 使我们自定义的数组
        children: layoutChildren,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
