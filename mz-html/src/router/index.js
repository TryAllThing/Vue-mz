import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/views/detail.vue'),
      beforeEnter (to, from, next) {
        // console.log('我是一个路由独享的钩子函数')
        next()
      }
    },
    {
      path: '/buy/:id',
      name: 'buy',
      component: () => import('@/views/buy.vue')
    },
    {
      path: '/ptuan',
      name: 'ptuan',
      component: () => import('@/views/ptuan.vue')
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('@/views/success.vue')
    },
    {
      path: '/set',
      name: 'set',
      component: () => import('@/views/set.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/views/city.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/search.vue')
    },
    {
      path: '/upOrder/:id',
      name: 'upOrder',
      component: () => import('@/views/upOrder.vue')
    },
    {
      path: '/user',
      component: () => import('@/views/user.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/second-user/login.vue')
        },
        {
          path: 'card',
          name: 'card',
          component: () => import('@/views/second-user/third-login/card.vue')
        },
        {
          path: 'money',
          name: 'money',
          component: () => import('@/views/second-user/third-login/money.vue')
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('@/views/second-user/third-login/order.vue')
        },
        {
          path: '',
          redirect: '/user/login'
        }
      ]
    },
    {
      path: '/',
      component: () => import('@/views/home.vue'),
      children: [
        {
          name: 'films',
          path: 'films',
          component: () => import('@/views/second-home/films.vue'),
          children: [
            {
              path: '',
              redirect: '/films/nowPlay'
            },
            {
              path: 'nowPlay',
              component: () => import('@/components/nowPlay.vue')
            },
            {
              path: 'futurePlay',
              component: () => import('@/components/futurePlay.vue')
            }
          ]
        },
        {
          name: 'cinemas',
          path: 'cinemas',
          component: () => import('@/views/second-home/cinemas.vue')
        },
        {
          name: 'center',
          path: 'center',
          component: () => import('@/views/second-home/center.vue')
        },
        {
          path: '',
          redirect: '/films/nowPlay'
        }
      ]
    },
    {
      path: '*',
      redirect: '/films/nowPlay'
    }
  ]
})
/**
 * 全局前置守卫
 * @param {Object} to 要去哪里
 * @param {Object} from 从哪里来
 * @param {Function} next 结束当前的钩子函数，进入到下一个相应的钩子函数，如果没有的话，即最终来控制是否可以切换路由
 *  */
router.beforeEach((to, from, next) => {
  if (to.name === 'card' || to.name === 'order' || to.name === 'money' || to.name === 'upOrder' || to.name === 'set' || to.name === 'success') {
    if (localStorage.getItem('nickname')) {
      next()
    } else {
      next('/user/login')
    }
  }
  next()
})

/**
 * 全局后置守卫
 * @param {Object} to 要去哪里
 * @param {Object} from 从哪里来
 */
router.afterEach((to, from) => {
})
export default router
