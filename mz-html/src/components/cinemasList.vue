<template>
  <ul class="cineams-list">
    <li v-for="(item,index) in list" :key="index">
      <div class="l-left">
        <p class="cin-name">{{item.name}}</p>
        <p class="cin-address">{{item.address}}</p>
      </div>
      <div class="l-right">
        <p class="cin-low">￥{{getLowPrice(item.lowPrice)}}</p>
        <p class="cin-jl">距离未知</p>
      </div>
    </li>
  </ul>
</template>
<script>
import axios from 'axios'
export default {
  name: 'cinemasList',
  data () {
    return {
      list: '',
      lowPrice: ''
    }
  },
  methods: {
    getLowPrice (lowPrice) {
      return parseInt(lowPrice / 100)
    },
    getList () {
      axios
        .get('http://localhost:3000/api/cinemas/list', {
          params: {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            type: this.type
          }
        })
        .then(res => {
          let result = res.data
          if (result.code === 1) {
            alert('网络异常')
          } else {
            this.list = result.data.films
          }
        })
        .catch(err => {
          throw err
        })
    }
  },
  created () {
    this.getList()
  }
}
</script>
<style lang="scss">
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
