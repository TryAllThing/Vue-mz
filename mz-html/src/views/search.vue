<template>
  <div class="search">
    <div class="s-form">
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @cancel="onCancel"
      />
    </form>
    </div>
    <ul class="cineams-list">
      <li v-for="(item,index) in listSearch" :key="index">
        <div class="l-left">
          <p class="cin-name">{{item.name}}</p>
          <p class="cin-address">{{item.address}}</p>
        </div>
        <div class="l-right">
          <p class="cin-low">￥{{item.lowPrice / 100}}</p>
          <p class="cin-jl">距离未知</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
import { Search } from 'vant'
import Vue from 'vue'
Vue.use(Search)
export default {
  name: 'search',
  data () {
    return {
      value: '',
      list: []
    }
  },
  methods: {
    getFilmList () {
      axios
        .get('http://localhost:3000/api/cinemas/findall')
        .then(res => {
          let result = res.data.msg
          this.list = result
        })
    },
    onCancel () {
      this.$router.push({path: '/cinemas'})
    }
  },
  computed: {
    listSearch () {
      return this.list.filter((item) => {
        return item.name.match(this.value)
      })
    }
  },
  created () {
    this.getFilmList()
  }
}
</script>
<style lang='scss' scoped>
.s-form{
  z-index: 100;
  position: sticky;
  top: 0;
}
.cineams-list {
  li{
    font-size: 0;
    height: 75px;
    position: relative;
    background-color: #fff;
    padding: 15px;
    .l-left{
      display: inline-block;
      width: calc(100% - 65px);
      text-align: left;
      padding-right: 15px;
      font-size: 12px;
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #797d82;
        font-size: 12px;
        margin-top: 5px;
      }
      .cin-name{
        color: #191a1b;
        font-size: 15px;
      }
    }
    .l-right{
      vertical-align: top;
      font-size: 12px;
      display: inline-block;
      width: 65px;
      text-align: right;
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #797d82;
        font-size: 12px;
        margin-top: 5px;
      }
      .cin-low{
        font-size: 15px;
        color: #ff5f16;
      }
    }
  }
}
</style>
