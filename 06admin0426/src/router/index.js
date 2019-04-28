import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Manage from '@/components/manage/Manage'
import Index from '@/components/manage/Index'
import FoodList from '@/components/main/foodList'
import ShopList from '@/components/main/shopList'
import AddGoods from '@/components/main/addGoods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    ,
    {
      path:'/manage',
      name:'Manage',
      component:Manage,
      children:[
        {
          path:'/index',
          name:'Index',
          component:Index,
        },
        {
          path:'/foodlist',
          name:'FoodList',
          component:FoodList,
        },
        {
          path:'/shoplist',
          name:'ShopList',
          component:ShopList,
        },
        {
          path:'/addgoods',
          name:'AddGoods',
          component:AddGoods,
        }
      ]
    }
  ]
})
