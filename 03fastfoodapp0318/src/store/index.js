import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

// import VuePersist from 'vuex-persist'
// const vuexLocal = new VuePersist({
//   storage: window.localStorage
// })

export default new vuex.Store({
//   state: {
//     data: []
//   },
//   mutations: {
//     find(state, item) {
//         state.data.push(item)
//         let ck=false;
//         if(state.data){
//             for(let i in state.data){
                
//                 if(state.data.indexOf(item)!=-1){
//                     ck=true
                   
//                 }
                
//             }
            
//         }
//         if(ck==false){
//             state.data.push(item)
//          }
      
//     },
//     clearhistory(state){
//         state.data.splice(0)
//     }
//   },
//   plugins: [vuexLocal.plugin]
})
