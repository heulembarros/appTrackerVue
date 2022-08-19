import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'

const route: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tafefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: route
})

export default router