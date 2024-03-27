import { createWebHistory, createRouter } from 'vue-router';
import Login from "./view/LoginView.vue";
import ForgotPassword from "./view/ForgotPassword";
import App from "./App.vue";

const routes = [
  {
    path: '/',
    name: 'App',
    redirect: '/login',
    component: App
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

function isLoggedIn() {
  const token = localStorage.getItem('token');
  return !!token; 
}

export default router;