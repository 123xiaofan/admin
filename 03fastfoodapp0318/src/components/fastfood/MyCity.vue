<template>
  <div>
    <!-- <div class="header">
      <mt-header fixed title>
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div> -->
    <div id="head"><my-head :show1="showcity1"></my-head></div>
    <div class="content">
      <p>
        <span>当前定位城市:</span>
        <span></span>
        <span>定位不准时，请在城市列表中选择</span>
      </p>
      <p>
        <span>{{currentcity}}</span>
        <span></span>
        <!-- <span><img src="../../static/src/15.png"></span> -->
        <router-link tag="span" to="/">
          <img src="../../assets/details_05.jpg">
        </router-link>
      </p>
    </div>
    <div class="hr"></div>
    <div class="con">
      <p>热门城市</p>
      <ul>
        <!-- <li v-for="item in hot">{{item}}</li> -->
        <router-link tag="li" :to="{name:'SearchCity',params:{id:item.id}}" v-for="item in hot" :key="item.id">{{item.name}}</router-link>
      </ul>
    </div>
    <div class="hr"></div>
    <div class="coe" v-for="(value,key,index) in sortgroupcity" :key="key">
      <p >
        <span>{{key}}</span>
        <span v-if="index==0">(按字母排序)</span>
      </p>
      <ul>
        <router-link tag="li" :to="{name:'SearchCity',params:{id:item.id}}" v-for="item in value" :key="item.id">{{item.name}}</router-link>
      </ul>
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
      hot:[],
      currentcity:'',
      groupcity:[],
      showcity1:true
    };
  },
  mounted() {
    this.axios.get("http://elm.cangdu.org/v1/cities?type=hot").then(res => {
      // console.log(res.data)
      if (res.data) {        
          this.hot=res.data
      }
    });
    this.axios.get("http://elm.cangdu.org/v1/cities?type=guess").then(res => {
      // console.log(res.data)
      if (res.data) {
        // console.log(res.data.name)
        this.currentcity=res.data.name
      }
    });
    this.axios.get("http://elm.cangdu.org/v1/cities?type=group").then(res => {
    //   console.log(res.data)
      if (res.data) {
        // console.log(res.data.name)
            this.groupcity=res.data
            // console.log(this.groupcity)
            
      }
    });
  
  },
   computed:{
       sortgroupcity(){
           let sortcity={}
           for(let p=65;p<=90;p++){
            //    console.log(p)
              if(this.groupcity[String.fromCharCode(p)]){
                //   console.log(this.groupcity[String.fromCharCode(p)])
                  sortcity[String.fromCharCode(p)]=this.groupcity[String.fromCharCode(p)]
              }

           }
           return sortcity
       }
   }
//    ,
//    beforeRouteLeave(){

//    }
};
</script>

<style lang="scss" scoped>
#head{
  margin-bottom: 20px;
}
header {
  width: 100%;
  height: 2.5rem;
  background: #3792e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.6rem;
  p:nth-of-type(1) {
    font-size: 1rem;
    color: white;
  }
  p:nth-of-type(3) {
    img {
      width: 1.3rem;
      height: 1.6rem;
    }
  }
}
.content {
  width: 100%;
  & > p:nth-of-type(1) {
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0.6rem 0.3rem 0.6rem;
    border-bottom: 1px solid #cccccc;
    span {
      display: block;
      font-size: 0.5rem;
      color: #bebebe;
    }
  }
  p:nth-of-type(2) {
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 0.6rem;
    span {
      display: block;
      font-size: 0.5rem;
      color: #3792e5;
      img {
        width: 1.3rem;
        height: 1.4rem;
      }
    }
  }
}
.hr {
  width: 100%;
  height: 1rem;
  background: #f5f5f5;
  border-bottom: 1px solid #f2f2f2;
  border-top: 1px solid #f2f2f2;
}
.con {
  width: 100%;
  p {
    font-size: 0.5rem;
    color: #6d6d6d;
    padding: 0.3rem;
  }
  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 25%;
      line-height: 2rem;
      text-align: center;
      color: #3792e5;
      font-size: 0.5rem;
      border: 1px solid #f5f5f5;
    }
  }
}
.coe {
  width: 100%;
  p {
    font-size: 0.5rem;
    color: #6d6d6d;
    padding: 0.3rem;
    span {
      font-size: 0.5rem;
      color: #b7b7b7;
    }
  }
  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 25%;
      font-size: 0.5rem;
      line-height: 2rem;
      text-align: center;
      color: #b7b7b7;
      border: 1px solid #f5f5f5;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
