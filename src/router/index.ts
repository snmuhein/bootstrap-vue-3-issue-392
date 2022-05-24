import { createRouter, createWebHashHistory } from 'vue-router';

import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
