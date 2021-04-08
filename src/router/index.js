import {createRouter, createWebHistory} from "vue-router"
// import {createWebHistory,createWebHashHistory} from "vue-router"

// 定义路由组件 和 路由配置
const routes = [
  {
    path:'/',
    component:()=> import('../views/to-do/index.vue')
  },
  {
      path:'/todo-list',
      name:'todoList',
      component:()=> import('../components/editTodoList.vue')
  }
//   {
//     path: '/a',
//     component: () => import('../components/a.vue'),
//     children: [
//       {
//         path: '',
//         name: 'a1',
//         component: () => import( '../components/a1.vue')
//       },
//       {
//         path: 'a2',
//         name: 'a2',
//         component: () => import('../components/a2.vue')
//       }
//     ]
//   }
]

// 创建路由实例
const router = createRouter({
  // 采用hash 模式
  // history: createWebHashHistory(),
  // 采用 history 模式
  history: createWebHistory(),
  routes, //使用上方定义的路由配置
});

// const router = new Router({ mode: 'history', routes })

// 导出路由
export default router