<template>
  <div class="cinemas">
    <div class="goshop">
      <span>影院</span>
      <div class="search" @click="search">
        <i class="iconfont icon-sousuo"></i>
      </div>
    </div>
    <div class="list">
      <cinemasList></cinemasList>
    </div>
  </div>
</template>
<script>
import { Search } from 'mint-ui'
import cinemasList from '@/components/cinemasList'
export default {
  name: 'cinemas',
  data () {
    return {
      value: '1'
    }
  },
  components: {
    cinemasList,
    [Search.name]: Search
  },
  methods: {
    search () {
      this.$router.push({path: '/search'})
    }
  }
}
</script>
<style lang="scss">
.cinemas{
  height: 100%;
  display: flex;
  flex: 1;
  overflow-y: auto;
  flex-direction: column;
  .goshop{
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    height: 50px;
    border-bottom: 1px solid #ededed;
    .search{
      float: right;
      height: 50px;
      width: 50px;
      i{
        font-size: 20px;
      }
    }
  }
  .list{
    flex: 1;
  }
}
</style>
