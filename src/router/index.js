import Vue from 'vue'
import VueRouter from 'vue-router'
import MainMenu from '../views/MainMenu/MainMenu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainMenu
  },
  {
    path: '/Arena',
    name: 'Arena',
    component: () => import(/* webpackChunkName: "about" */ '../views/Arena/Arena.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
