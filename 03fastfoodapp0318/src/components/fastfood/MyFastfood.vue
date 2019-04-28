<template>
  <div>
    <!-- <div class="header">
      <mt-header fixed title="北京吉利大学">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>-->
    <div id="head">
      <my-head :show3="showcity3" :title="this.$route.params.id"></my-head>
    </div>
    <div class="content">
      <div class="main">
        <div id="b1" class="swiper-container">
          <ul class="swiper-wrapper a1">
            <li class="swiper-slide" v-for="(item,index) in data" :key="index">
              <router-link :to="{path:'/mydetails'}" v-for="i in item" :key="i.id">
                <img :src=" 'https://fuss10.elemecdn.com'+i.image_url" alt>
                <span>{{i.title}}</span>
              </router-link>
            </li>
          </ul>
          <div class="swiper-pagination"></div>
        </div>
        <div class="sec" ref="wrapper" >
          <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
            <div class="mui-table-view mui-grid-view">
            <dl v-for="(item,index) in listdata" :key="index" class="mui-table-view-cell mui-media mui-col-xs-6" @click="param(item,index)">
              <dt>
                <img :src="'http://elm.cangdu.org/img/'+item.image_path" alt="fruit03">
              </dt>
              <dd>
                <p>
                  <span>品牌</span>
                  <span>{{item.name}}</span>
                  <span v-for="i in item.supports">{{i.icon_name}}</span>
                  <!-- <span>准</span>
                  <span>票</span>-->
                </p>
                <p>
                  <i class="fa fa-fw fa-star"></i>
                  <i class="fa fa-fw fa-star"></i>
                  <i class="fa fa-fw fa-star"></i>
                  <i class="fa fa-fw fa-star"></i>
                  <i class="fa fa-fw fa-star"></i>
                  <span>{{item.rating}}</span>
                  <span>月售{{item.recent_order_num}}单</span>
                  <span v-if="item.delivery_mode" class="send">{{item.delivery_mode.text}}</span>
                  

                  <span class="ontime">准时达</span>
                </p>
                <p>
                  <span>￥{{item.float_minimum_order_amount}}元起送/{{item.piecewise_agent_fee.tips}}</span>
                  <span>{{item.distance}}/</span>
                  <span>{{item.order_lead_time}}</span>
                </p>
              </dd>
            </dl>
            </div>
            <div slot="bottom" class="mint-loadmore-bottom">
      <span v-if="show">loading...</span>
      <span v-else>没有数据了</span>
    </div>
          </mt-loadmore>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHead from "../groups/MyHeader";
import "../../../static/swiper.min.css";
import Swiper from "swiper";
// import swiper from '../../config/swiper.min'
// import swiper2 from '../../style/swiper.min'

export default {
  components: {
    MyHead
  },
  data() {
    return {
      showcity3: true,
      data: [],
      listdata: [],
      topStatus: "",
     
       datas: [],
      //可以进行上拉
      allLoaded: false,
      //是否自动触发上拉函数
      isAutoFill: false,
      show:true,
      n: 0
    };
  },
  methods: { //   下拉刷新
    loadTop() {
      this.loadFrist();
    },
    // 上拉加载
    loadBottom() {
      this.loadMore();
    },
    // 下来刷新加载
    loadFrist() {
        
    },
    // 加载更多
    param(it,n){
      this.$router.push({name:'MyDetails',params:{latitude:it.latitude,longitude:it.longitude,id:it.id,it:it}})
      console.log(it)
    }
    ,
loadMore() {// 
      this.n+=8;
      this.axios
      .get(
        "http://elm.cangdu.org/shopping/restaurants?latitude=" +
            this.$route.params.latitude +
            "&longitude=" +
            this.$route.params.longitude +
            "&offset="+this.n+"&limit=8&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]="
      )
       
        .then(response => {
          // concat数组的追加
          if(response.data.length<8){
                this.show=false;
          }
          this.listdata = this.listdata.concat(response.data);
      
          this.$refs.loadmore.onBottomLoaded();
        })
        .catch(error => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    }
  },
  mounted() {
    var that = this;
    this.axios
      .all([
        this.axios.get(
          "http://elm.cangdu.org/v2/index_entry?geohash=" +
            this.$route.params.id1 +
            "&group_type=1&flags[]=F"
        ),
        this.axios.get(
          "http://elm.cangdu.org/shopping/restaurants?latitude=" +
            this.$route.params.latitude +
            "&longitude=" +
            this.$route.params.longitude +
            "&offset=0&limit=8&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]="
        )
      ])
      .then(
        this.axios.spread(function(autores, listres) {
          // console.log("auto", autores.data);
          // console.log(listres.data);

          if (autores.data) {
            let l = autores.data.length;
            let arr = autores.data;
            let arr2 = [];
            for (let i = 0, j = 0; i < l; i += 8, j++) {
              // this.data[0]=res.data.splice(0,8)
              // this.data[1]=res.data.splice(0,8)
              arr2[j] = arr.splice(0, 8);
            }
            that.data = arr2;
            // console.log(this.data)
            // for (let k = 0; k < this.data.length; k++) {
            //   console.log(this.data[k]);
            //   for(let r=0;r<this.data[k].length;r++){
            //     console.log(this.data[k][r])
            //   }
            // }
          }
          if (listres.data) {
            that.listdata = listres.data;
            // console.log(that.listdata)
          }
        })
      )
      .then(() => {
        new Swiper(".swiper-container", {
          pagination: {
            el: ".swiper-pagination"
          },
          loop: true,
          autoplay: {
            delay: 1000
          }
        });
      });
  }
  
  
};
</script>

<style lang="scss" scoped>
.main-body {
  /* 加上这个才会有当数据充满整个屏幕，可以进行上拉加载更多的操作 */
  overflow: scroll;
}
#head {
  margin-bottom: 2rem;
}
.header {
  width: 100%;
  height: 60px;
}
.content {
  width: 100%;
  flex: 1;
  overflow: auto;
  background-color: #f5f5f5;
  .main {
    width: 100%;
    #b1 {
      background-color: #fff;
      width: 100%;
      height: 260px;
      padding-top: 20px;
      font-size: 12px;
      .a1 {
        padding: 0px 10px 0px 0px;
        width: 100%;
        li {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          text-align: center;
          a {
            width: 25%;
            text-decoration: none;
            color: black;
          }
          img {
            width: 55px;
          }
          span {
            display: block;
          }
        }
      }
      .swiper-pagination {
        width: 405px;
        height: 22px;
        color: red;
        z-index: 999;
      }
    }
    .sec {
      width: 100%;
      background-color: white;
      margin-top: 14px;
      padding-top: 8px;
      dl {
        display: flex;
        width: 100%;
        border-bottom: 1px solid #f3f3f3;
        padding-bottom: 6px;
        margin-bottom: 8px;
        dt {
          width: 3.6rem;
          text-align: center;
          img {
            width: 3.2rem;
          }
        }
        dd {
          flex: 1;
          p:nth-of-type(1) {
            span:nth-of-type(1) {
              display: inline-block;
              width: 30px;
              height: 20px;
              background-color: gold;
              line-height: 20px;
              text-align: center;
              font-size: 0.2rem;
            }
            span:nth-of-type(2) {
              font-size: 0.6rem;
              font-weight: bold;
            }
            span:nth-of-type(3) {
              display: inline-block;
              width: 0.6rem;
              height: 0.6rem;
              font-size: 0.2rem;
              color: #999999;
              border: 1px solid #999999;
              text-align: center;
              line-height: 0.6rem;
            }
            span:nth-of-type(4) {
              display: inline-block;
              width: 0.6rem;
              height: 0.6rem;
              font-size: 0.2rem;
              color: #999999;
              border: 1px solid #999999;
              text-align: center;
              line-height: 0.6rem;
            }
            span:nth-of-type(5) {
              display: inline-block;
              width: 0.6rem;
              height: 0.6rem;
              font-size: 0.2rem;
              color: #999999;
              border: 1px solid #999999;
              text-align: center;
              line-height: 0.6rem;
            }
          }
          p:nth-of-type(2) {
            .fa {
              color: orange;
              font-size: 12px;
            }
            span:nth-of-type(1) {
              color: #fd986e;
              font-size: 14px;
            }
            span:nth-of-type(2) {
              color: #737373;
              font-size: 12px;
            }
            .send {
              background-color: #3792e5;
              color: white;
              text-align: center;
              display: inline-block;
              width: 50px;
              height: 20px;
              line-height: 20px;
              border-radius: 4px;
              font-size: 12px;
            }
            .ontime {
              border: 1px solid #3792e5;
              font-size: 12px;
              color: #3792e5;
              border-radius: 4px;
            }
          }
          p:nth-of-type(3) {
            span:nth-of-type(1) {
              font-size: 12px;
              color: #737373;
            }
            span:nth-of-type(2) {
              font-size: 12px;
              color: #999999;
            }
            span:nth-of-type(3) {
              font-size: 12px;
              color: #3792e5;
            }
          }
        }
      }
    }
  }
}
</style>
