import { createWebHashHistory, createRouter, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import('@/view/index.vue'),
        name: 'Home',
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;