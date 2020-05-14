import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=>import('../views/Home/Home.vue'),
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
        component: () => import('../views/Personal/PersonalSet/Settings.vue'),
        children:[
          {
            path: '/personal/settings/sizeInfo',
            name: 'SizeInfo',
            component: () => import('../views/Personal/PersonalSet/SizeInfo.vue')
          },
          {
            path: '/personal/settings/showPanel',
            name: 'ShowPanel',
            component: () => import('../views/Personal/PersonalSet/ShowPanel.vue')
          },
          {
            path: '/personal/settings',
            name: 'PersonalInfo',
            component: () => import('../views/Personal/PersonalSet/PersonalInfo.vue')
          },
          {
            path: '/personal/settings/account',
            name: 'Account',
            component: () => import('../views/Personal/PersonalSet/Account.vue')
          },
        ]
      },
    ]
  },
  {
    path: '/consult',
    name: 'Consult',
    component: () => import('../views/Consult/Consult.vue'),
    children:[
      {
          path: '/consult',
          name: 'consultRecommend',
          component: () => import('../views/Consult/Recommend.vue')
      },
      {
          path: '/consult/following',
          name: 'consultFollow',
          component: () => import('../views/Consult/Follow.vue')
      },
      {
          path: '/consult/classify',
          name: 'consultClassify',
          component: () => import('../views/Consult/Classify.vue')
      }
    ]
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../views/Store/Store.vue'),
    children:[
      {
        path: '/store',
        name: 'storeLady',
        component: () => import('../views/Store/AllGoods.vue')
      },
      {
        path: '/store/lady',
        name: 'storeLady',
        component: () => import('../views/Store/Lady.vue')
      },
      {
        path: '/store/man',
        name: 'storeMan',
        component: () => import('../views/Store/Man.vue')
      },
      {
        path: '/store/acce',
        name: 'storeAcce',
        component: () => import('../views/Store/Acce.vue')
      },
      {
        path: '/store/shoes-bags',
        name: 'storeShoesBags',
        component: () => import('../views/Store/ShoesBags.vue')
      },
      {
        path: '/store/loan',
        name: 'storeLoan',
        component: () => import('../views/Store/Loan.vue')
      },
    ]
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () => import('../views/Forum/Forum.vue'),
    children:[
      {
        path: '/forum',
        name: 'forumRecommend',
        component: () => import('../views/Forum/Recommend.vue')
      },
      {
        path: '/forum/newest',
        name: 'forumNewest',
        component: () => import('../views/Forum/Newest.vue')
      },
      {
        path: '/forum/following',
        name: 'forumFollowing',
        component: () => import('../views/Forum/Following.vue')
      },
    ]
  },
  {
    path: '/forum/writer',
    name: 'forumWriter',
    component: () => import('../views/Forum/Writer.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
