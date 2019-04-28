import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import MyFastfood from '@/components/fastfood/MyFastfood'
// import MySearch from '@/components/fastfood/MySearch'
// import MyOrder from '@/components/fastfood/MyOrder'
// import MyMine from '@/components/fastfood/MyMine'
// import MyDetails from '@/components/fastfood/MyDetails'
// import SearchCity from '@/components/fastfood/SearchCity'
// import MyCity from '@/components/fastfood/MyCity'
// import MyDetailsA from '@/components/fastfood/MyDetailsA'
// import MyDetailsB from '@/components/fastfood/MyDetailsB'
import CityId from '@/city/city'
import MyHeader from '@/components/groups/MyHeader'
import MyApp from '../App'
const fastfood = resolve =>require(['../components/fastfood/MyFastfood.vue'],resolve)
const search = resolve =>require(['../components/fastfood/MySearch.vue'],resolve)
const mymine =resolve =>require(['../components/fastfood/MyMine.vue'],resolve)
const order =resolve =>require(['../components/fastfood/MyOrder.vue'],resolve)
const mydetails =resolve =>require(['../components/fastfood/MyDetails.vue'],resolve)
const mydetailsa =resolve =>require(['../components/fastfood/MyDetailsA.vue'],resolve)
const mydetailsb =resolve =>require(['../components/fastfood/MyDetailsB.vue'],resolve)
const mycity =resolve =>require(['../components/fastfood/MyCity.vue'],resolve)
const searchcity =resolve =>require(['../components/fastfood/SearchCity.vue'],resolve)
const adminlogin =resolve =>require(['../components/admin/AdminLogin.vue'],resolve)

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      component: MyApp,
      children:[
        {
          path: '',
          redirect:'/mycity',
        },
        {
          path: '/fastfood/:latitude/:longitude/:id',
          name: 'MyFastfood',
          component: fastfood
        },
        {
          path: '/search',
          name: 'MySearch',
          component: search
        },
        {
          path: '/order',
          name: 'MyOrder',
          component: order
        },
        {
          path: '/mymine',
          name: 'MyMine',
          component: mymine
        },
        {
          path: '/mydetails/:latitude,:longitude/:id',
          name: 'MyDetails',
          component: mydetails
        },
        {
          path: '/searchcity/:id',
          name: 'SearchCity',
          component: searchcity
        },
        {
          path: '/mycity',
          name: 'MyCity',
          component: mycity
        },
        {
          path: '/cityid',
          name: 'CityId',
          component: CityId
        },
        {
          path: '/adminlogin',
          name: 'AdminLogin',
          component: adminlogin
        }
      ]
    }
    
  ]
})
