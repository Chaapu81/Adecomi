import Vue from 'vue'
import VueRouter from 'vue-router'

/* Vistas */
import Usuario from '../views/Usuario.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Usuario,
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  next();
})

export default router
