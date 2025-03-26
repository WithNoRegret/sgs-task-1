export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home'),
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/pages/form')
  }
] 