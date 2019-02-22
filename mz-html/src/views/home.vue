<template>
  <div class='home'>
    <transition
      mode="out-in"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
    >
      <router-view></router-view>
    </transition>
    <buttomBar></buttomBar>
  </div>
</template>
<script>
import buttomBar from '@/components/buttomBar.vue'
export default {
  name: 'home',
  components: {
    buttomBar
  }
}
</script>
<style lang='scss' scoped>
.home{
  display: flex;
  height: 100%;
  flex-direction: column;
  .films{
    flex: 1;
    overflow-y: auto;
  }
}
</style>
