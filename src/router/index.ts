import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/Tarefas.vue'

const route: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tafefas',
        component: Tarefas
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: route
})

export default router