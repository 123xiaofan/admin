<template>
  <div>
    <!-- <div class="header">
      <mt-header fixed title="搜索">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div> -->
    <div id="head"><my-head :show5="showcity5"></my-head></div>
    <div class="ipt">
        <p><input type="text" placeholder="牛肉"><button>提交</button></p>
        <p>搜索历史</p>
        <dl>
            <dt><img src="../../assets/nav_03.jpg" alt="nav03"></dt>
            <dd>
                <p>我的牛肉面<span>支付</span></p>
                <p>月售601单</p>
                <p><span>5元起送/距离22.1公里</span></p>
            </dd>
        </dl>
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
          showcity5:true
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
    &>p:nth-of-type(1){
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
    &>p:nth-of-type(2){
        background-color: #f5f5f5;
        padding-left: 8px;
        width: 100%;
        height: 50px;
        font-size: 18px;
        line-height: 50px;
    }
    dl{
        width: 100%;
        display: flex;
        dt{
            width: 140px;
            img{
                width: 110px;
                text-align: center;
            }
        }
        dd{
            flex: 1;
            p:nth-of-type(1){
                font-size: 14px;
                line-height: 30px;
                span{
                    display: inline-block;
                    width: 40px;
                    height: 18px;
                    border: 1px solid red;
                    color: red;
                    font-size: 12px;
                    text-align: center;
                    line-height: 18px;
                }
            }
            p:nth-of-type(2){
                font-size: 14px;
                line-height: 30px;
            }
            p:nth-of-type(3){
                 font-size: 14px;
                 line-height: 30px;
            }
        }
    }
}
</style>
