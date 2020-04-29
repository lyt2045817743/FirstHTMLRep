import Vue from 'vue'
import VueRouter from 'vue-router'
import {getCookie} from '../util/cookie'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: ()=>{
      if(!getCookie("username")){
        return import('../views/Index.vue');
      }
      else if(getCookie("username")){
        return import('../views/Home/Home.vue');
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/Login.vue'),
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('../views/Personal/Personal.vue'),
    children:[
      {
        path: '/personal',
        name: 'Moment',
        component: () => import('../views/Personal/Moment.vue')
      },
      {
        path: '/personal/goodsOrder',
        name: 'GoodsOrder',
        component: () => import('../views/Personal/GoodsOrder.vue')
      },
      {
        path: '/personal/consultOrder',
        name: 'ConsultOrder',
        component: () => import('../views/Personal/ConsultOrder.vue')
      },
      {
        path: '/personal/myFollowings',
        name: 'MyFollowings',
        component: () => import('../views/Personal/MyFollowings.vue')
      },
      {
        path: '/personal/myPoints',
        name: 'MyPoints',
        component: () => import('../views/Personal/MyPoints.vue')
      },
      {
        path: '/personal/trainingCenter',
        name: 'TrainingCenter',
        component: () => import('../views/Personal/TrainingCenter.vue')
      },
      {
        path: '/personal/settings',
        name: 'Settings',
        component: () => import('../views/Personal/Settings.vue')
      },
    ]
  },
  {
    path: '/consult',
    name: 'Consult',
    component: () => import('../views/Consult/Consult.vue')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../views/Store/Store.vue')
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () => import('../views/Forum/Forum.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
