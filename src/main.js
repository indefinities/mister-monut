import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createRouter, createWebHashHistory } from 'vue-router'

import {
    monutHome,
    monutMenu,
} from './sections/sections-export.js';


const routes = [
    { path: '/', component: monutHome },
    { path: '/menu/', component: monutMenu },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
});

const app = createApp(App)

app.use(AOS.init())
app.use(router)
app.mount('#app')
