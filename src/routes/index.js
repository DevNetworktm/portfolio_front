import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '',
        component: () => import('#/Index.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;