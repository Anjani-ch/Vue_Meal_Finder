import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SingleMealPage from '../views/SingleMealPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'SingleMealPage',
    component: SingleMealPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
