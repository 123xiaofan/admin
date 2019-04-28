<template>
    <div id="manage">
        <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: #324057;text-color:#ffffff">
            <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-setting"></i><router-link to="/index">首页</router-link></template>
                </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-message"></i>数据管理</template>
                <el-menu-item-group style="background-color:#1F2D3D">
                <el-menu-item index="2-1" style="color:#ffffff"><router-link to="">用户列表</router-link></el-menu-item>
                <el-menu-item index="2-2" style="color:#ffffff"><router-link to="/shoplist">商家列表</router-link></el-menu-item>
                <el-menu-item index="2-3" style="color:#ffffff"><router-link to="/foodlist">食品列表</router-link></el-menu-item>
                <el-menu-item index="2-4" style="color:#ffffff"><router-link to="">订单列表</router-link></el-menu-item>
                <el-menu-item index="2-5" style="color:#ffffff"><router-link to="">管理员列表</router-link></el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-menu"></i>添加数据</template>
                <el-menu-item-group style="background-color:#1F2D3D">
                <el-menu-item index="3-1" style="color:#ffffff;active-text-color:blue">添加商铺</el-menu-item>
                <el-menu-item index="3-2" style="color:#ffffff">添加商品</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-setting"></i>图表</template>
                <el-menu-item-group style="background-color:#1F2D3D">
                <el-menu-item index="4-1" style="color:#ffffff">用户分布</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title"><i class="el-icon-setting"></i>编辑</template>
                <el-menu-item-group style="background-color:#1F2D3D">
                <el-menu-item index="5-1" style="color:#ffffff">文本编辑</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title"><i class="el-icon-setting"></i>设置</template>
                <el-menu-item-group style="background-color:#1F2D3D">
                <el-menu-item index="6-1" style="color:#ffffff">管理员设置</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
                <template slot="title"><i class="el-icon-setting"></i>说明</template>
                <el-menu-item-group style="background-color:#1F2D3D">
                <el-menu-item index="7-1" style="color:#ffffff">说明</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
            </el-header>
            <router-view></router-view>
            <!-- <FoodList></FoodList> -->
        </el-container>
        </el-container>
    </div>
</template>

<script>
import FoodList from '../main/foodList'
import ShopList from '../main/shopList'

export default {
    components:{
        FoodList,ShopList
    },
data(){
    return{

    }
},
methods:{
    //导航菜单
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="scss" scoped>
//整体布局
#manage{
    width: 100%;
    height: 100%;
    .el-container{
        width: 100%;
        height: 100% !important;
    }
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
      width: 100%;
      height: 100%;
    color: #333;
  }
  .el-submenu{
      background-color: #324057;
  }
.el-submenu__title{
    color: white !important;
}
.el-menu-item:focus, .el-menu-item:hover{
    background-color: #B3C0D1;
}
</style>
