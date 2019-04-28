<template>
  <div>
    <div class="a">
      <h1>数据统计</h1>
      <div class="a1">
        <p class="nowdata">当日数据：</p>
        <p class="gray">
          <span
            ><span>{{ count1 }}</span
            >新增用户</span
          >
        </p>
        <p class="gray">
          <span
            ><span>{{ count2 }}</span
            >新增订单</span
          >
        </p>
        <p class="gray">
          <span
            ><span>{{ count3 }}</span
            >新增管理员</span
          >
        </p>
      </div>
      <div class="a2">
        <p class="totaldata">总数据：</p>
        <p class="gray">
          <span
            ><span>{{ count4 }}</span
            >注册用户</span
          >
        </p>
        <p class="gray">
          <span
            ><span>{{ count5 }}</span
            >订单</span
          >
        </p>
        <p class="gray">
          <span
            ><span>{{ count6 }}</span
            >管理员</span
          >
        </p>
      </div>
    </div>
    <div class="b" id="myChart"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "asset",
  data() {
    return {
      count1: "",
      count2: "",
      count3: "",
      count4: "",
      count5: "",
      count6: ""
    };
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "走势图"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["新注册用户", "新增订单", "新增管理员"]
        },
        toolbox: {
          show: true, //是否显示工具栏组件
          feature: {
            dataZoom: {
              //数据区域缩放。目前只支持直角坐标系的缩放
              yAxisIndex: false //指定哪些 yAxis 被控制。如果缺省则控制所有的y轴。如果设置为 false 则不控制任何y轴。如果设置成 3 则控制 axisIndex 为 3 的y轴。如果设置为 [0, 3] 则控制 axisIndex 为 0 和 3 的y轴
            },
            dataView: {
              //数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新
              readOnly: false //是否不可编辑（只读）
            },
            magicType: {
              //动态类型切换
              type: ["line", "bar"] //启用的动态类型，包括'line'（切换为折线图）, 'bar'（切换为柱状图）, 'stack'（切换为堆叠模式）, 'tiled'（切换为平铺模式）
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category", //坐标轴类型。'value' 数值轴，适用于连续数据。'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
          boundaryGap: false, //类目轴中 boundaryGap 可以配置为 true 和 false。非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效['20%', '20%']
          data: [
            "2019-04-21",
            "2019-04-22",
            "2019-04-23",
            "2019-04-24",
            "2019-04-25",
            "2019-04-26",
            "2019-04-27"
          ] //类目数据，在类目轴（type: 'category'）中有效。
        },
        yAxis: [
          {
            type: "value",
            min: 0, //坐标轴刻度最小值。可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度。不设置时会自动计算最小值保证坐标轴刻度的均匀分布。在类目轴中，也可以设置为类目的序数
            max: 200, //坐标轴刻度最大值。可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。不设置时会自动计算最大值保证坐标轴刻度的均匀分布。在类目轴中，也可以设置为类目的序数
            name: "用户", //坐标轴名称
            axisLabel: {
              //修改Y轴坐标字体颜色
              formatter: "{value}",
              textStyle: {
                color: "#A2A2A2"
              }
            }
          },
          {
            type: "value",
            min: 0,
            max: 200,
            name: "订单",
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#A2A2A2"
              }
            }
          }
        ],
        //三条折线
        series: [
          {
            name: "新注册用户", //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            type: "line", //线图
            itemStyle: {
              normal: {
                color: "#5793F3", //折点颜色
                lineStyle: {
                  color: "#5793F3" //折线颜色
                }
              }
            },
            data: [60, 199, 113, 77, 50, 41, 13],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          },
          {
            name: "新增订单",
            type: "line",
            itemStyle: {
              normal: {
                color: "#675BBA",
                lineStyle: {
                  color: "#675BBA"
                }
              }
            },
            data: [14, 15, 3, 2, 30, 24, 9],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          },
          {
            name: "新增管理员",
            type: "line",
            itemStyle: {
              normal: {
                color: "#D14A61",
                lineStyle: {
                  color: "#D14A61"
                }
              }
            },
            data: [35, 124, 129, 123, 124, 157, 65],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          }
        ]
      });
    }
  },
  mounted() {
    this.drawLine();
    axios
      .get("https://elm.cangdu.org/statis/user/2019-04-28/count")
      .then(res => {
        console.log(res);
        this.count1 = res.data.count;
      });
    axios
      .get("https://elm.cangdu.org/statis/order/2019-04-28/count")
      .then(res => {
        console.log(res);
        this.count2 = res.data.count;
      });
    axios
      .get("https://elm.cangdu.org/statis/admin/2019-04-28/count")
      .then(res => {
        console.log(res);
        this.count3 = res.data.count;
      });
    axios.get("https://elm.cangdu.org/v1/users/count").then(res => {
      console.log(res);
      this.count4 = res.data.count;
    });
    axios.get("https://elm.cangdu.org/bos/orders/count").then(res => {
      console.log(res);
      this.count5 = res.data.count;
    });
    axios.get("https://elm.cangdu.org/admin/count").then(res => {
      console.log(res);
      this.count6 = res.data.count;
    });
  }
};
</script>

<style lang="scss" scoped>
.a {
  display: inline-block;
  width: 600px;
  text-align: center;
  margin-left: 20px;
  h1 {
    font-size: 40px;
  }
  .a1 {
    width: 480px;
    display: flex;
    margin: 20px 0;
    p {
      flex: 1;
    }
    .nowdata {
      padding: 4px;
      font-size: 28px;
      color: white;
      background-color: #ff9800;
      border-radius: 4px;
      text-align: center;
    }
  }
  .a2 {
    display: flex;
    p {
      flex: 1;
    }
    .totaldata {
      padding: 4px;
      font-size: 28px;
      color: white;
      background-color: #20a0ff;
      border-radius: 4px;
      text-align: center;
    }
  }
  .gray {
    & > span {
      background-color: #e5e9f2;
      padding: 2px 4px;
      font-size: 14px;
      display: inline-block;
      width: 90%;
      height: 90%;
      border-radius: 6px;
      & > span {
        font-size: 32px;
      }
    }
  }
}
.b {
  width: 90%;
  height: 500px;
  margin-top: 50px;
}
</style>
