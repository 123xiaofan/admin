<template>
  <div>
    <mt-header fixed title v-if="show1">
      <router-link to="/" slot="left">
        <mt-button icon="back">ele.me</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"><i class="fa fa-fw fa-user"></i></mt-button>
    </mt-header>

    <mt-header fixed :title="title" v-if="show2">
      <router-link to="/mycity" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right">切换城市</mt-button>
    </mt-header>

    <mt-header fixed :title="title" v-if="show3">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

      <mt-header fixed title="搜索" v-if="show4">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

      <mt-header fixed title="搜索" v-if="show5">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
  </div>
</template>

<script>

export default {
    props:['show1','show2','show3','show4','show5','title']
};
</script>

<style>
</style>
