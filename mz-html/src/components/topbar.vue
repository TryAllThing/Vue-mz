<template>
  <header class="head">
    <div class="h-left">
      <i class="iconfont icon-caidaniconshouyehui"></i>
    </div>
    <div class="h-mid">卖座卡</div>
    <div class="h-right"></div>
    <div></div>
  </header>
</template>
<script>
export default {
  name: 'tapbar'
}
</script>
<style lang="scss" scoped>
.head {
  display: flex;
  height: 44px;
  text-align: center;
  font-size: 17px;
  line-height: 44px;
  border-bottom: 1px solid #ededed;
  .h-left {
    width: 15%;
  }
  .h-mid {
    flex: 1;
  }
  .h-right {
    width: 15%;
  }
}
</style>
