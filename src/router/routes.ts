import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home'
      }
    ]
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('@/views/sign/index.vue')
  },
  {
    path: '/upgrade',
    name: 'upgrade',
    component: () => import('@/views/upgrade/index.vue')
  },
  {
    path: '/verify',
    name: 'verify',
    component: () => import('@/views/verify/index.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any'
  }
]

export default routes
