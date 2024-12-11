import { createRouter, createWebHistory } from 'vue-router';
import Menu from '@/components/Menu.vue';
import Cart from '@/components/Cart.vue';
import AdminPanel from '@/components/AdminPanel.vue';

const routes = [
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/admin', name: 'AdminPanel', component: AdminPanel },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
