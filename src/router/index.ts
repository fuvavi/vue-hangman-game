import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/themes',
      name: 'themes',
      children: [
        {
          path: '',
          name: 'themes-list',
          components: {
            default: () => import('@/views/ThemeView.vue'),
            header: () => import('@/components/TheHeader.vue'),
          },
        },
        {
          path: ':slug',
          name: 'theme-detail',
          components: {
            default: () => import('@/views/ThemeDetailView.vue'),
            header: () => import('@/components/TheHeader.vue'),
          },
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    }
  ]
})

export default router;
