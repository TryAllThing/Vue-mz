<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
  @import '@/style/base.scss';
  #app{
    height: 100%;
    background: #f4f4f4;
  }
</style>
