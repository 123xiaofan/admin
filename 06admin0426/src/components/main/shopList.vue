<template>
    <div>
        <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="店铺名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="店铺介绍">
            <span>{{ props.row.item_id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.restaurant_id }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="评分">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="销售量">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="分类">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="店铺名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="店铺地址"
      prop="address">
    </el-table-column>
    <el-table-column
      label="店铺介绍"
      prop="description">
    </el-table-column>
    <el-table-column
      label="操作"
      prop="">
      <el-button plain size="mini">编辑</el-button>
      <el-button plain size="mini" @click="addFood">添加食品</el-button>
      <el-button type="danger" plain size="mini">删除</el-button>
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            tableData:''
        }
    },
    methods:{
        addFood(){
            this.$router.push({path:'/addgoods'})
        }
    },
    mounted(){
        axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20')
        .then((res)=>{
            console.log(res.data)
            this.tableData=res.data
        })
    }
}
</script>

<style lang="scss" scoped>
 .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-table{
      height: 660px;
      overflow: auto !important;
  }
//   button{
//       border: none;
//       outline: none;
//       background-color: white;
//       border-radius: 8px;
//       padding: 2px 6px;
//       border: 1px solid black;
//   }
//   button:nth-of-type(3){
//       background-color: red;
//       color: white;
//       border: 1px solid red;
//   }
</style>
