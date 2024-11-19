import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ProductDetail from '../views/ProductDetailPage.vue'
import SearchView from '@/views/SearchView.vue'
import SearchResult from '@/views/SearchResult.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/products/:id',
      name: 'productDetail',
      component: ProductDetail
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/searchResult',
      name: 'searchResult',
      component: SearchResult,
      props: (route) => ({ query: route.query.q })
    }
  ]
})

export default router
