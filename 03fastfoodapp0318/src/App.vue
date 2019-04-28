<template>
  <div id="app">
    <!-- <div class="head">
      <my-head></my-head>
    </div> -->
    <div id="content">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
    <div id="footer">
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import MyFooter from "./components/fastfood/MyFooter";


export default {
  components: {
    MyFooter
  }
};
</script>

<style lang="scss">
// @import '../src/style/common'
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
ul,
ol,
dl {
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  #content {
    width: 100%;
    flex: 1;
    overflow: auto;
  }
  #footer {
    width: 100%;
    height: 60px;
  }
}
</style>
