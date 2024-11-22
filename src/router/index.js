import ClothDetail from '../components/cloth/clothDetail.vue'
import HomePage from '../components/HomePage.vue'
import ManageCloth from '../components/cloth/manageCloth.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/homepage",
      name: "homepagetoo",
      component: HomePage,
    },
    {
      path: '/clothdetail/:id',
      name: 'clothdetail',
      component: ClothDetail,
      props: true,
    },
    {
      path: '/manage-products',
      name: 'manageproducts',
      component: ManageCloth
    }
  ],
})

export default router
