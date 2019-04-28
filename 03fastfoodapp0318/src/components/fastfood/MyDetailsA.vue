<template>
  <div class="hot">
   <div class="notice"></div>

        <div class="goods">

            <div class="left" ref="left">

                <ul>

                    <li v-for="(item, index) in data" 

                        :key="index" 

                        :class="{click: selector==index}"

                        @click="toHash(item, index)"

                        ><a :href="'#'+item.id">{{item.name}}</a></li>

                </ul>

            </div>

            <div class="right" @scroll="listScroll">

                <ul>

                    <li  v-for="(ite, index1) in data" :key="index1">

                        <h1 class="goodTitle"><span><a :name="ite.id"></a>{{ite.name}}</span><span>{{ite.description}}</span></h1>

                        <ul class="good" v-for="(i,index2) in ite.foods" :key="index2">

                            <li>

                                <div>
                                  <dl>
                                    <dt><img :src="'http://elm.cangdu.org/img/'+i.image_path" alt=""></dt>
                                    <dd>
                                      <p>{{i.name}}</p>
                                      <p>{{i.description}}</p>
                                      <p>{{i.tips}}好评率{{i.satisfy_rate}}</p>
                                      <p><span v-if="i.activity">{{i.activity.image_text}}</span></p>
                                      <p v-if="index==0" v-for="(it,index) in i.specfoods">{{it.price}}</p>
                                    </dd>
                                  </dl>
                                    
                                </div>

                                <div id="pop">        

                                    <div :class="{pop: true, mov: i.__v>0}">

                                        <i class="fa fa-fw fa-minus-circle" @click="reduce(i)"></i>

                                        {{i.__v}}

                                    </div>

                                    <i class="fa fa-fw fa-plus-circle" @click="increase(i,$event)"></i>

                                </div>

                            </li>

                        </ul>

                    </li> 

                </ul>

            </div>

        </div>



        <!-- 运动的小球 -->

        <div id="points">

            <div class="pointOuter pointPre">

                <div class="point-inner"></div>

            </div>  

            <div class="pointOuter pointPre">

                <div class="point-inner"></div>

            </div>  

            <div class="pointOuter pointPre">

                <div class="point-inner"></div>

            </div>  

            <div class="pointOuter pointPre">

                <div class="point-inner"></div>

            </div>  

            <div class="pointOuter pointPre">

                <div class="point-inner"></div>

            </div>  

            <div class="pointOuter pointPre">

                <div class="point-inner"></div>

            </div>  

            <div class="pointOuter pointPre">

                <div class="point-inner"></div>

            </div>  

        </div>

        

        <div class="footer">

            <div>

                <i class="fa fa-shopping-cart"></i>

                <!--记录订单总数  -->

                <div class="total" v-show="total>0">{{total}}</div>

            </div>

            <div :class="{pay: true, notPay: total==0}">去结算</div>

        </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
       
        selector: 0,
        total: 0,  // 购买总量
    };
  },
  mounted() {
      
  },
methods: {

        // 点击右侧导航栏

        toHash(item, index) {

            this.selector = index;

            window.location.hash = item;

            // 导航栏向上滚动相应距离，一个li的高度为54px

            this.$refs.left.scrollTop = (index > 7 ? index-7 : 0)*54;

        },

        // 食品选购按钮

        increase(i) { 

            this.total++;

            i.__v++;



            // 小球动画 

            var top = event.clientY, // 小球降落起点

                left = event.clientX,

                endTop = window.innerHeight - 30,  // 小球降落终点

                endLeft = 20; 



            // // 小球到达起点

            var outer = $('#points .pointPre').first().removeClass("pointPre").css({

                left: left + 'px',

                top: top + 'px'

            });

            var inner = outer.find(".point-inner"); 

 

            setTimeout(function() { 

                // 将jquery对象转换为DOM对象

                outer[0].style.webkitTransform = 'translate3d(0,' + (endTop - top) + 'px,0)';

                inner[0].style.webkitTransform = 'translate3d(' + (endLeft - left) + 'px,0,0)';

                

                // 小球运动完毕恢复到原点

                setTimeout(function() {

                    outer.removeAttr("style").addClass("pointPre");

                    inner.removeAttr("style");

                }, 1000);  //这里的延迟值和小球的运动时间相关

            }, 1);

        },

        reduce(i) {

            this.total--;

            i.__v--;

        },

        // 右侧菜单滑动

        listScroll() {

            // 为了达到联动效果，右侧滑动则改变左侧导航栏样式

            var titles = document.getElementsByClassName('goodTitle');

            for(var i = 0; i < titles.length; i++) {

                var style = titles[i].getBoundingClientRect();
                // console.log(style.top)
                // console.log(i)

                if(style.top == 211) {

                    this.toHash(titles[i].innerHTML, i);
                    console.log(titles[i].innerHTML)

                }

            }

        }

    } 
};
</script>

<style lang="scss" scoped>
* {

    padding: 0;

    margin: 0;

    color: #494949;
    
    font-size: transition scale(0.6);

}

li {

    list-style: none;

}

a {

    display: block;

    height: 100%;

    width: 100%;

    text-decoration: none;

    color: #000;

} 

header {

    height: 65px;

    line-height: 65px;

    color: #fff;

    font-size: 17px;

    text-align: center;

    background-color: #00a0dc;

    position: relative;

}

.notice {

    height: 40px; 
   

}

.goods {

    display: flex;

    position: absolute;

    top: 209px;

    bottom: 46px;

    width: 100%;

    background-color: #eee;

    padding-top: 2px;

    /* overflow: hidden; */

}

.left {

    /* grow  shrink basis */

    flex: 0 0 80px;    

    width: 80px;

    background: #f3f5f7;

    overflow: scroll;
    
  font-size: 0.6rem;
}  

.left>ul>li { 

    height: 54px;

    line-height: 54px;

    text-align: center;  

    border-bottom: 1px solid #ccc;

    box-sizing: border-box;

    

}    

.click {

    background-color: #fff;

}

.right {

    flex: 1;

    background-color: #fff;

    overflow: scroll;

} 

.right li h1 {

    padding-left: 5%;

    background-color: #f3f5f7;

    position: sticky;

    top: 0;

    z-index: 10;

    font-size: 1rem;

    line-height: 2rem;

    span:nth-of-type(2){
      font-size: 0.6rem;
      color: #ccc;
    }

}
#pop{
  display: flex;
  margin-top: 3rem;
}
.right{
  &>ul{
    &>li{
      div:nth-of-type(1){
        dl{
          display: flex;
          dt{
            width: 2.4rem;
            text-align: center;
            img{
              width: 2rem;
            }
          }
          dd{
            flex: 1;
            p:nth-of-type(1){
                font-size: 0.6rem;
            }
            p:nth-of-type(2){
               font-size: 0.6rem;
               color: #ccc;
            }
            p:nth-of-type(3){
               font-size: 0.6rem;
            }
            p:nth-of-type(4){
               font-size: 0.6rem;
               span{
                   display: inline-block;
                //    width: 1rem;
                   height: 0.6rem;
                   line-height: 0.6rem;
                   border: 0.02rem solid orangered;
                   border-radius: 4px;
                   text-align: center;
                   font-size: 0.4rem;
                   color: orangered;
               }
            }
            p:nth-of-type(5){
               font-size: 0.6rem;
               color: orange;
            }
          }
        }
      }
    }
  }
}
.good {

    // min-height: 300px;

    background-color: #fff;

    // margin: 0 5%;

}

.good li {

    border-bottom: 1px solid #ccc; 

    // height: 80px;

    // font-size: 21px;

    // line-height: 80px;

    // text-align: right; 

    display: flex;

    justify-content: space-between;

    overflow: hidden;

} 

.good li i {

    font-size: 18px;

    line-height: 80px; 

    color: #00a0dc;

    padding: 0 4px;

} 

/* 点击添加按钮缓慢弹出订单个数以及减少按钮 */

.pop {

    display: inline-block;

    position: relative;

    left: 8px;

    opacity: 0;

    transition: all ease .5s;

    

}

.pop i {

    transform: rotate(0deg); 

    transition: all ease .5s;

}

.mov {

    left: 0;

    opacity: 1;

}

.pop.mov i {

    transform: rotate(-360deg);

}

.good li>div>i {

    position: relative; 

    background-color: #fff;

    // z-index: 5;

} 









.footer {

    background-color: #555;

    width: 100%;

    height: 46px;

    line-height: 46px;

    bottom: 0;

    position: fixed;

    font-size: 45px;

    padding-left: 10px;

    display: flex;

    justify-content: space-between;

    box-sizing: border-box;

}

.footer i {

    color: #fff;

}

.footer .total {

    position: absolute;

    width: 20px;

    height: 20px;

    top: 0px;

    left: 46px;

    color: #fff;

    line-height: 20px;

    text-align: center;

    border-radius: 10px;

    background-color: #00a0dc;

    font-size: 10px;

}

.pay {

    /* background-color: rgb(78, 207, 45); */

    background-color: #00a0dc;

    color: #fff;

    font-size: 18px;

    padding: 0 20px;

}

.notPay {

    background-color: #bbb;

}



/* 运动小球 */

.pointPre {  /* 动画的小球 */

    display: none;

}

.pointOuter {

    position: absolute;  

    // z-index: 114;  

    /* 当小球抛出时遵循贝塞尔曲线过渡 */

    -webkit-transition: all 1s cubic-bezier(0.39,-0.4,0.83,0.23) 0s;

    transition: all 1s cubic-bezier(0.39,-0.4,0.83,0.23) 0s; 

}



.point-inner {

    width: 15px;

    height: 15px;

    border-radius: 50%;

    background-color: #00a0dc;

    /* 过渡属性名称 过渡时间 过渡曲线 延迟时间 */

    transition: all 1s ease 0s;

    -webkit-transition: all 1s ease 0s;     

}  
</style>
