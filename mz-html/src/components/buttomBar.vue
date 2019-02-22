<template>
  <ul class="buttom-bar">
    <router-link tag="li" :to="{path: '/films'}" active-class="red">
      <div>
        <i class="iconfont icon-dianying"></i>
      </div>
      <span>电影</span>
    </router-link>
    <router-link tag="li" :to="{path: '/cinemas'}" active-class="red">
      <div>
        <i class="iconfont icon-yingyuana"></i>
      </div>
      <span>影院</span>
    </router-link>
    <router-link tag="li" :to="{path: '/ptuan'}" active-class="red">
      <div>
        <i class="iconfont icon-pintuandingdan"></i>
      </div>
      <span>9.9拼团</span>
    </router-link>
    <router-link tag="li" :to="{path: '/center'}" active-class="red">
      <div>
        <i class="iconfont icon-wode"></i>
      </div>
      <span>我的</span>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'buttomBar'
}
</script>
<style lang='scss'>
.buttom-bar {
  height: 50px;
  font-size: 0;
  flex-shrink: 0;
  display: flex;
  background: #fff;
  li {
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    flex: 1;
    div {
      margin-top: -10px;
      height: 20px;
    }
    span {
      display: block;
      height: 20px;
    }
  }
  .red {
    color: red;
  }
}
</style>
