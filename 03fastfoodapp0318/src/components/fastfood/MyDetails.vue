<template>
  <div class="box">
    <div class="head">
      
      <dl>
        <dt>
          <img src="../../assets/details_05.jpg" alt="details05">
        </dt>
        <dd>
          <p>{{$route.params.it.name}}</p>
          <p>商家配送/分钟送达/{{$route.params.it.piecewise_agent_fee.tips}}</p>
          <p>公告{{$route.params.it.promotion_info}}</p>
        </dd>
      </dl>
      <p>
        <span>减</span>
        <span v-for="a in this.$route.params.it.activities">{{a.description}}（会员专享）</span>
        <span>两个活动</span>
      </p>
    </div>

    <div class="sec">
    <div class="section">
        <ul>
          <li @click="chose(item,index)" v-for="(item,index) in choice" :key="index"><a>{{item}}</a></li>
        </ul>
    </div>
    <my-details-a v-if="isshow" :data="data"></my-details-a>
    <my-details-b v-else></my-details-b>
</div>
  </div>
  
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
import MyDetailsA from './MyDetailsA'
import MyDetailsB from './MyDetailsB'
export default {
  components:{
    MyDetailsA,MyDetailsB
  },
  data(){
    return{
      choice:['商品','评价'],
      isshow:true,
      data:[]
    }
  },
  methods:{
    chose(it,n){
      if(n==0){
        this.isshow=true;
      }else{
        this.isshow=false;       
      }
      // console.log(n)
     

    }
  },
  mounted(){
    this.axios
    .get('http://elm.cangdu.org/shopping/v2/menu?restaurant_id='+this.$route.params.id)
    .then((res)=>{
      if(res){
        console.log(res.data)
        this.data=res.data
        for(var i in this.data){
          console.log(this.data[i].foods)
        }
        
      }
      
    })
  }
};
</script>

<style lang="scss" scoped>
.box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.sec{
  width: 100%;
  flex: 1;
  z-index: 9;
}
.head {
  width: 100%;
  height: 160px;
  background: url(../../assets/details_02.jpg) repeat-x;
  padding-bottom: 10px;
  dl {
    display: flex;
    padding-top: 10px;
    dt {
      width: 140px;
      text-align: center;
      img {
        width: 110px;
      }
    }
    dd {
      flex: 1;
      p:nth-of-type(1) {
        font-size: 18px;
        line-height: 30px;
        color: white;
      }
      p:nth-of-type(2) {
        font-size: 16px;
        line-height: 30px;
        color: white;
      }
      p:nth-of-type(3) {
        font-size: 12px;
        line-height: 30px;
        color: white;
      }
    }
  }
  & > p {
    span:nth-of-type(1) {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: orange;
      color: white;
      text-align: center;
      line-height: 20px;
      font-size: 14px;
    }
    span:nth-of-type(2) {
      color: white;
      font-size: 14px;
    }
    span:nth-of-type(3) {
      color: white;
      font-size: 14px;
    }
  }
  
}
.section{
    width: 100%;
    position: sticky;
    top: 0;
    // z-index: 9;
    &>ul{
      display: flex;
      height: 2rem;
      li{
        flex: 1;
        text-align: center;
        font-size: 0.8rem;
        height: 2rem;
        line-height: 2rem;
      }
    }
  }
 
</style>
