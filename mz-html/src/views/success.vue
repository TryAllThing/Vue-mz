<template>
  <div class="sucess">
    <p class="tip">成功购买</p>
    <p class="s-button" @click="but">点击查看订单详情</p>
  </div>
</template>
<script>
export default {
  name: 'sucess',
  methods: {
    but () {
      this.$router.push({name: 'order'})
    }
  }
}
</script>
<style lang="scss" scoped>
.sucess{
  text-align: center;
  .tip{
    height: 200px;
    line-height: 200px;
  }
  .s-button{
    height: 50px;
    line-height: 50px;
    width: 150px;
    background: #ff5f16;
    color: white;
    font-size: 14px;
    margin: 0 auto;
  }
}
</style>
