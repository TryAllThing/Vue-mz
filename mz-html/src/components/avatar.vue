<template>
  <div class="avatar">
    <img v-if="nickname ==='立即登录'" src="@/img/user.png">
    <img v-if="nickname !=='立即登录'" src="https://mall.s.maizuo.com/343e03528520399b9de18b164d980d1f.jpg">
    <div class="nick-name" @click="toLogin">{{nickname}}</div>
  </div>
</template>
<script>
export default {
  name: 'avatar',
  data () {
    return {
      nickname: localStorage.getItem('nickname') || '立即登录'
    }
  },
  methods: {
    toLogin () {
      var loginInfo = localStorage.getItem('nickname')
      if (loginInfo && loginInfo.length > 1) {
        this.$router.push({name: 'set'})
      } else {
        this.$router.push({name: 'login'})
      }
    }
  }
}
</script>
<style lang='scss'>
.avatar {
  background: url('~@/img/bgcenter.png');
  background-size:cover;
  height: 200px;
  margin-top:-44px;
  display: flex;
  align-items: center;
  padding: 64px 0 0 22px;
  img {
    width: 63px;
    height: 63px;
    border-radius: 35px;
    margin-right: 20px;
    border: 2px solid #fff;
  }
  .nick-name {
    font-size: 16px;
    color: #fff;
  }
}
</style>
