<template>
  <div>
    <!-- <div class="header">
      <mt-header fixed title="搜索">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div> -->
    <div id="head"><my-head :show4="showcity4"></my-head></div>
    <div class="ipt">
        <p><input type="text" placeholder="请输入商家名称或没事名称"><button>提交</button></p>
        <p>搜索历史</p>
        <ul>
            <li><span>牛肉</span><span>&times</span></li>
            <li><span>羊肉</span><span>&times</span></li>
            <li><span>猪肉</span><span>&times</span></li>
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
  data(){
    return{
      showcity4:true
    }
    
  }
};
</script>

<style lang="scss" scoped>
#head{
  margin-bottom: 2rem;
}
.ipt{
    width: 100%;
    margin-top: 34px;
    p:nth-of-type(1){
        width: 100%;
        padding: 8px;
        input{
            width: 70%;
            height: 40px;
            background-color: #f2f2f2;
            border: none;
            outline: none;
            border-radius: 6px;
            border: 1px solid #999999;
            padding-left: 10px;
        }
        button{
            width: 30%;
            background-color: #3792e5;
            border: none;
            border-radius: 6px;
            width: 100px;
            height: 40px;
        }

    }
    p:nth-of-type(2){
        background-color: #f5f5f5;
        padding-left: 8px;
        width: 100%;
        height: 50px;
        font-size: 18px;
        line-height: 50px;
    }
    ul{
        width: 100%;
        li{
            width: 100%;
            height: 50px;
            line-height: 50px;
            padding-left: 10px;
            border-bottom: 1px solid #f5f5f5;
            font-size: 18px;
            span:nth-of-type(1){
                display: inline-block;
                width: 90%;
            }
        }
    }
}
</style>
