<template>
  <div>
    <ul>
      <router-link tag="li" to="/">
        <span>
          <i class="fa fa-fw fa-user"></i>
          <span>外卖</span>
        </span>
      </router-link>
      <router-link tag="li" to="/search">
        <span>
          <i class="fa fa-fw fa-user"></i>
          <span>搜索</span>
        </span>
      </router-link>
      <router-link tag="li" to="/order">
        <span>
          <i class="fa fa-fw fa-user"></i>
          <span>订单</span>
        </span>
      </router-link>
      <router-link tag="li" to="/mymime">
        <span>
          <i class="fa fa-fw fa-user"></i>
          <span>我的</span>
        </span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  height: 60px;
  display: flex;
  z-index: 9;
  li {
    flex: 1;
    text-align: center;
    & > span {
      span {
        display: block;
        font-size: 12px;
      }
    }
  }
}
</style>
