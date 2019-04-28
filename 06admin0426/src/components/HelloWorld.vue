<template>
  <div class="hello">
    <div class="box">
      <h1>elm后台管理系统</h1>
      <div class="ipt">
        <el-input v-model="username" @blur="showname" placeholder="用户名"></el-input>
          <p v-show="showred==1">请输入用户名</p>
        <el-input placeholder="密码" @blur="showpwd" v-model="pwd" show-password></el-input>
        <p v-show="showred==2">请输入密码</p>
        <el-button type="primary" @click="login">登录</el-button>
        <div>温馨提示：</div>
        <div>未登录过的新用户，自动注册</div>
        <div>注册过的用户可凭用户名密码登录</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      input: '',
      username:'',
      pwd:'',
      showred:0
    }
  },
  methods:{
    login(){
    let obj={}
    obj.user_name=this.username
    obj.password=this.pwd
    if(this.username!=''&&this.pwd!=''){
      axios.post('https://elm.cangdu.org/admin/login',obj)
      .then((res)=>{
        console.log(res)
        if(res.data.status==1){
          this.$router.push({path:'/manage'})
        }
      })
    }
  },
  showname(){
    if(this.username==""){
      this.showred=1
    }
    else{
      this.showred=0
    }
  },
  showpwd(){
    if(this.pwd==""){
      this.showred=2
    }else{
      this.showred=0
    }
  }
  }
  ,
  mounted(){
    
  }
}
</script>

<style lang="scss" scoped>
.hello{
  width: 100%;
  height: 680px;
  background-color: #324057;
  border: 1px solid #324057;
  .box{
    width: 360px;
    height: 280px;
    margin: 100px auto;
    text-align: center;
    h1{
      color: white;
    }
    .ipt{
      width: 100%;
      height: 100%;
      background-color: white;
      text-align: center;
      border: 1px solid white;
      border-radius: 10px;
      padding-top: 20px;
      .el-input{
        width: 90%;
        margin: 10px auto;
      }
      .el-button--primary{
        width: 300px;
      }
      p{
       font-size: 12px;
       color: red;
        width: 90%;
        padding: 0;
        margin: 0;
        text-align: left;
        padding-left: 30px;
        line-height: 20px;
      }
      div{
        font-size: 12px;
        color: red;
        margin-top: 10px;
      }
    }
  }
}
</style>
