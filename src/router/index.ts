import { createRouter, createWebHistory } from 'vue-router'



const HOME = () => import('../views/home.vue')
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HOME,
      redirect:'Dashboard',
      children: [
        { 
          path:'dashboard',
          name:'Dashboard',
          component:() =>import('../views/dashboard/index.vue')
        },
        {
          path: 'asm',
          name:'Asm',
          component:() =>import('../views/asm/index.vue')
        }
      ]
    },
  ],
})


export default router;