<template>
  <ul>
    <li class='futureplay' v-for='(item,index) in list' :key='index'>
      <div class='img'>
        <img :src = item.poster alt>
      </div>
      <div class='info'>
        <div>
          <span class='name'>{{ item.name }}</span>
          <span class='type'>{{ item.filmType.name }}</span>
        </div>
        <div>
          <span class='label'>观众评分</span>
          <span class='grade'>{{ item.grade }}</span>
        </div>
        <div>
          <span class='label'>{{ item.nation }} | {{ item.runtime }}分钟</span>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import axios from 'axios'
export default {
  name: 'list',
  data () {
    return {
      list: '',
      pageNum: 1,
      pageSize: 5,
      type: 2
    }
  },
  methods: {
    getList () {
      axios
        .get('http://localhost:3000/api/film/list', {
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
            console.log(this.list)
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
<style lang='scss' scoped>
.futureplay {
  padding: 15px;
  height: 124px;
  position: relative;
  .img {
    display: inline-block;
    width: 66px;
    height: 94px;
    img {
      width: 100%;
    }
  }
  .info {
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
    display: inline-block;
    width: calc(100% - 116px);
    padding: 0 10px;
    span {
      font-size: 13px;
      margin-top: 4px;
      color: #797d82;
    }
    .type {
      font-size: 9px;
      color: #fff;
      background-color: #d2d6dc;
      height: 14px;
      line-height: 14px;
      padding: 0 2px;
      border-radius: 2px;
    }
    .name {
      color: #191a1b;
      font-size: 16px;
      height: 22px;
      width: 100%;
      line-height: 22px;
      margin-right: 5px;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
