import Vue from 'vue'
import Router from 'vue-router'
import MyApp from '@/views/myapp'
import Home from '@/views/home/home'
import Cake from '@/views/cake/cake'
import Bread from '@/views/bread/bread'
import Area from '@/views/area/area'
import Give from '@/views/give/give'
import Icecream from '@/views/icecream/icecream'
import Tea from '@/views/tea/tea'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'myapp',
    component: MyApp,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: "/cake",
      name: "cake",
      component: Cake
    }, {
      path: "/bread",
      name: "bread",
      component: Bread
    }, {
      path: "/area",
      name: "area",
      component: Area
    }, {
      path: "/give",
      name: "give",
      component: Give
    }, {
      path: "/tea",
      name: "tea",
      component: Tea
    }, {
      path: "/icecream",
      name: "icecream",
      component: Icecream
    }]
  }]

})
