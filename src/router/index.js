import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '@/views/StartPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/For-yu',
            name: 'start',
            component: StartPage,   // P01 Start Page
        }
    ],
});

export default router;