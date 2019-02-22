<template>
  <div class="login">
    <div class="logo">
      <img src="@/img/login.png" alt>
    </div>
    <div class="l-phone">
      <input type="text" placeholder="手机号" v-model="username">
    </div>
    <div class="l-yzm">
      <input type="text" placeholder="验证码" v-model="yzm">
    </div>
    <div class="l-sumbit" @click="goLogin">
      <span>登录</span>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      yzm: ''
    }
  },
  methods: {
    goLogin () {
      axios
        .post('http://localhost:3000/api/user/login', {
          username: this.username,
          yzm: this.yzm
        })
        .then(res => {
          if (res.data.code === '0') {
            localStorage.setItem('nickname', this.username)
            this.$router.go(-1)
          } else {
            alert('失败')
          }
        })
    }
  }
}
</script>
<style lang='scss'>
.login {
  height: 100%;
  background: #fff;
  .logo {
    padding: 79px 0 0 0;
    text-align: center;
    height: 180px;
    line-height: 60px;
    img {
      height: 60px;
    }
  }
  .l-phone {
    line-height: 15px;
    padding: 0 20px;
    width: 100%;
    font-size: 15px;
    color: #191a1b;
    border: 0;
    input {
      padding: 20px 0;
      width: 100%;
      border: none;
      border-bottom: 1px solid #ededed;
      outline-width: 0;
    }
  }
  .l-yzm {
    line-height: 15px;
    padding: 0 20px;
    width: 100%;
    font-size: 15px;
    color: #191a1b;
    border: 0;
    input {
      padding: 20px 0;
      width: 100%;
      border: none;
      border-bottom: 1px solid #ededed;
      outline-width: 0;
    }
  }
  .l-sumbit {
    line-height: 45px;
    font-size: 16px;
    margin: 70px 25px 0;
    border-radius: 3px;
    text-align: center;
    background-color: #ff5f16;
    height: 44px;
    color: #fff;
    border: none;
    span {
      line-height: 45px;
      font-size: 16px;
      margin: 70px 25px 0;
      border-radius: 3px;
      text-align: center;
      background-color: #ff5f16;
      height: 44px;
      color: #fff;
      border: none;
    }
  }
}
</style>
