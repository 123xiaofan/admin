// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from "axios"
import store from './store/index'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
import '../src/config/rem'
import FastClick from 'FastClick'

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

if('addEventListener' in document){
	document.addEventListener('DOMContentLoaded',function(){
	FastClick.attach(document.body)
},false)
}

Vue.config.productionTip = false
Vue.prototype.axios=axios

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
