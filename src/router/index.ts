import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '/',
        meta:{title:'Nacos'},
        component:()=>import('@/layout/index.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                meta:{title:"首页"},
                component: () => import('@/views/Home.vue')
            },
            {
                path:'/test',
                name:'test',
                meta:{title:"测试"},
                component: ()=>import('@/views/Test.vue')
            },
            {
                path:'/one',
                name:'one',
                meta:{title:"测试1"},
                component:()=>import('@/views/One.vue')
            },
            {
                path:'/two',
                name:'two',
                meta:{title:"测试2"},
                component:()=>import('@/views/Two.vue')
            }
        ]

    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;