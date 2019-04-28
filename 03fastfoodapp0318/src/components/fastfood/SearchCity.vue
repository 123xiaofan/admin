

<template>
  <div>
    <!-- <mt-header :title="data.name">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right">切换城市</mt-button>
    </mt-header> -->
<div id="head"><my-head :show2="showcity2" :title="data.name"></my-head></div>
    <div class="ll">
      <ul>
        <li>
          <input type="text" placeholder="输入学校、商务楼、地址" v-model="search">
        </li>
        <li>
          <input type="submit" value="提交" @click="find">
        </li>
      </ul>
      <p>搜索历史</p>
      
      <ol class="history">
        <li v-for="(item,index) in searchdata" @click="detail(item,index)">
          <div>{{item.name}}</div>
          <p>{{item.address}}</p>
        </li>
      </ol>
      <p class="k2" @click="clearhistory">清空历史</p>
    </div>
  </div>
</template>


<script>
import MyHead from "../groups/MyHeader";

export default {
  components: {
    MyHead
  },
  data() {
    return {
      data: "",
      searchdata: [],
      search: "",
      showcity2:true,
      addresslist:[]
    };
  },
  mounted() {
    this.axios
      .get("http://elm.cangdu.org/v1/cities/" + this.$route.params.id)
      .then(res => {
        // console.log(res.data);
        if (res.data) {
          this.data = res.data;
          // console.log(this.data)
        }
      });
      this.initdata()
  }
 ,
  methods: {
    find() {
      this.axios
        .get(
          "http://elm.cangdu.org/v1/pois?type=search&city_id=" +
            this.$route.params.id +
            "&keyword=" +
            this.search
        )
        .then(res => {
          // console.log(res.data)
          if (res.data) {
            this.searchdata = res.data;
            console.log(this.searchdata);
          }
        });
    }
    
    ,
    clearhistory(){
      localStorage.removeItem('localdata');
      this.searchdata=[]
    },

    detail(it){
      // console.log(it)
      this.search=it.name
      let ck=false
      if(localStorage.getItem('localdata')){
        for(let i=0;i<=this.addresslist.length;i++){
          if(it.name==i.name){
            ck=true
          }
          
        }
        if(ck==false){
            this.addresslist.push(it)
            localStorage.setItem('localdata',JSON.stringify(this.searchdata))
          }
      }else{
        this.addresslist.push(it)
        // localStorage.setItem('localdata',JSON.stringify(this.addresslist))
      }
     
      this.$router.push({name:'MyFastfood',params:{id:it.name,id1:it.geohash,latitude:it.latitude,longitude:it.longitude}})
      // console.log(it)
    },
    initdata(){
      if(localStorage.getItem('localdata')){
        this.searchdata=JSON.parse(localStorage.getItem('localdata'))
      }else{
        this.searchdata=[]
      }
     }
  }
};
</script>


<style lang="scss" scoped>
#head{
  margin-bottom: 2rem;
}
.ll {
  width: 100%;
  height: 20rem;
  background: #f5f5f5;
  padding-top: 0.3rem;
  ul {
    width: 100%;
    background: white;
    li {
      text-align: center;
      padding: 0.4rem 0;
      input {
        width: 90%;
        height: 1.5rem;
        border: 1px solid gainsboro;
        outline: none;
      }
      input[type="submit"] {
        background: #3792e5;
        color: white;
        border: none;
      }
    }
  }
  p {
    padding: 0.2rem;
    font-size: 0.6rem;
  }
  ol {
    background: white;
    li {
      padding-left: 0.3rem;
      border-bottom: 0.5px solid gainsboro;
      div {
        font-size: 0.7rem;
      }
      p {
        font-size: 0.5rm;
        color: gainsboro;
      }
    }
  }
  .k2 {
    text-align: center;
    height: 2rem;
    background-color: white;
    line-height: 2rem;
  }
  .history{
    font-size: 0.6rem;
    margin-bottom: 0.8rem;
    li{
      line-height: 2rem;
    }
  }
}
</style>
