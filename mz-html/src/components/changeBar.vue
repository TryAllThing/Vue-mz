<template>
  <div class='change-bar'>
    <ul>
      <router-link tag='li' :to= "{path: '/films/nowPlay'}"
      :class="$route.path === '/films/nowPlay' ? 'red' : ''"> 正在上映 </router-link>
      <router-link tag='li' :to= "{path: '/films/futurePlay'}"
      :class="$route.path === '/films/futurePlay' ? 'red' : ''"> 即将热映 </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'changeBar'
}
</script>
<style lang='scss'>
.red{
  color: red;
}
.change-bar {
  z-index: 20;
  position: sticky;
  top: 0;
  height: 50px;
  background: white;
  ul {
    display: flex;
    border-bottom: 1px solid #ededed;
    height: 50px;
    li {
      width: 50%;
      line-height: 50px;
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
