import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "Login",
    redirect: "/login"
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  // {
  //   path: "/",
  //   name: "Recommend",
  //   redirect: "/recommend"
  // },
  {
    path: '/recommend',
    name: 'Recommend',
    component: () => import('../views/recommend/index.vue')
  },
  {
    path: '/rank',
    name: 'Rank',
    component: () => import('../views/rank/index.vue')
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import('../views/singer/index.vue'),
   
  },
  {
    path: '/singDeatil',
    name: 'singDeatil',
    component: () => import('../views/singDeatil/index.vue')
  },
  {
    path: '/deatil',
    name: 'Deatil',
    component: () => import('../views/deatil/index.vue')
  },
  {
    path: '/play',
    name: 'Play',
    component: () => import('../views/play/index.vue')
  },
  {
    path: '/more',
    name: 'More',
    component: () => import('../views/more/index.vue'),
    redirect: "/more/like",
    children: [{
      path: "like",
      name: "Like",
      component: () => import("../views/more/like/index.vue")
    },
    {
      path: "mine",
      name: "Mine",
      component: () => import("../views/more/mine/index.vue")
    },
  ]
  },

]

const router = new VueRouter({
  mode: "history",
  routes,
  linkActiveClass: "active"
})

export default router