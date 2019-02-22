<template>
  <div class="center">
    <avatar></avatar>
    <myordertab></myordertab>
    <ul>
      <router-link tag="li" :to="{path: '/user/card'}">卖座卡</router-link>
      <router-link tag="li" :to="{path: '/user/money'}">余额</router-link>
      <router-link tag="li" :to="{path: '/set'}">设置</router-link>
    </ul>
  </div>
</template>
<script>
import avatar from '@/components/avatar'
import myordertab from '@/components/myOrderTab'

export default {
  name: 'center',
  components: {
    avatar,
    myordertab
  }
}
</script>
<style lang="scss">
  .center{
    flex: 1;
    background: #f4f4f4;
    ul{
       li{
          background: #fff;
          padding: 0 15px;
          height: 49px;
          display: flex;
          align-items: center;
          position: relative;
          font-size: 14px;
      }
      li::after{
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #ededed;
        color: #ededed;
        transform-origin: 0 100%;;
        transform: scaleY(.5);
        left: 13px;
      }
    }
  }
</style>
