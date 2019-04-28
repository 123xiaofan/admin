<template>
    <div>
        <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.item_id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.restaurant_id }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="食品评分">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="食品评分">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="销量">
            <span>{{ props.row.month_sales }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="食品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="食品介绍"
      prop="">
    </el-table-column>
    <el-table-column
      label="评分"
      prop="rating">
    </el-table-column>
    <el-table-column
      label="操作"
      prop="">
      <el-button plain size="mini">编辑</el-button>
      <el-button type="danger" plain size="mini">删除</el-button>
    </el-table-column>
  </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      background
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
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
handleCurrentChange(page){
    console.log(page)
    axios.get("https://elm.cangdu.org/shopping/v2/foods?offset="+page*20+"&limit=20&restaurant_id=undefined")
    .then((res)=>{
        // console.log(res)
        this.tableData=res.data
        console.log(this.tableData)
    })
}
},
mounted(){
    axios.get('https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined')
    .then((res)=>{
        // console.log(res)
        this.tableData=res.data
        console.log(this.tableData)
    })
}
,

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
</style>
