import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/checklist',
            name: 'checklist',
            component: () => import('./views/Checklist.vue')
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: () => import('./views/Feedback.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        }
    ]
})
