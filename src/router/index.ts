import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import('@/views/Home/index.vue'),
        name: 'Home',
    },
    {
        path: "/about",
        component: () => import('@/views/About/index.vue'),
        name: 'About',
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;