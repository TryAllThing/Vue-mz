<template>
  <div>
    <mt-loadmore
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      :auto-fill="false"
      :bottomPullText='bottomText'
      ref="loadmore"
    >
      <ul>
        <li class="nowplay" v-for="(item,index) in list" :key="index" @click="toDetail(item.filmId)">
          <div class="img">
            <img :src="item.poster">
          </div>
          <div class="info">
            <div>
              <span class="name">{{ item.name }}</span>
              <span class="type">{{ item.filmType.name }}</span>
            </div>
            <div>
              <span class="label">观众评分</span>
              <span class="grade">{{ item.grade }}</span>
            </div>
            <div>
              <span class="label">{{ item.nation }} | {{ item.runtime }}分钟</span>
            </div>
          </div>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>
<script>
import { Loadmore } from 'mint-ui'
import axios from 'axios'
export default {
  name: 'list',
  data () {
    return {
      list: [],
      pageNum: 1,
      pageSize: 5,
      type: 1,
      bottomText: '拼命加载中...',
      allLoaded: false
    }
  },
  components: {
    [Loadmore.name]: Loadmore
  },
  methods: {
    toDetail (id) {
      this.$router.push({name: 'detail', params: {id: id}})
    },
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
            this.list = this.list.concat(result.data.films)
          }
        })
        .catch(err => {
          throw err
        })
    },
    loadBottom () {
      this.$refs.loadmore.onBottomLoaded()
      this.pageNum++
      this.getList()
    }
  },
  created () {
    this.getList()
  }
}
</script>
<style lang='scss' scoped>
.nowplay {
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
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.wait {
  text-align: center;
  font-size: 15px;
  line-height: 30px;
}
.mint-loadmore-bottom{
  .mint-loadmore-text{
    font-size: 14px;
  }
}
</style>
