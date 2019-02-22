<template>
  <div class="buy">
    <header class="head">影院购票</header>
    <ul>
      <li class="address" v-for="(item,index) in list" :key="index">
        <div class="l-data">
          <p>{{getTime(item.showAt)}}</p>
          <p>{{getTime(item.endAt)}}</p>
        </div>
        <div class="m-data">
          <p>{{item.filmLanguage}}</p>
          <p>{{item.hallName}}</p>
        </div>
        <div class="r-data">
          <p>{{item.salePrice/100}}</p>
          <p @click="buypiao(item)">购票</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'buy',
  data () {
    return {
      list: ''
    }
  },
  methods: {
    buypiao (item) {
      localStorage.setItem('address', JSON.stringify(item))
      this.$router.push({
        name: 'upOrder',
        params: { id: this.$route.params.id }
      })
    },
    getTime (time) {
      return new Date(parseInt(time) * 1000)
        .toLocaleString()
        .replace(/:\d{1,2}$/, ' ')
        .substring(9)
    },
    getBuyAddress () {
      axios.get('http://localhost:3000/api/buy/list', {}).then(res => {
        let result = res.data
        if (result.code === '0') {
          this.list = result.msg
        } else {
          alert('没有找到')
        }
      })
    }
  },
  created () {
    this.getBuyAddress()
  }
}
</script>
<style lang='scss' scoped>
.buy {
  .head {
    text-align: center;
    line-height: 44px;
    border-bottom: 1px solid #e4e4e4;
    position: sticky;
    top: 0;
    background: #fff;
  }
  ul {
    .address {
      height: 74px;
      padding: 15px;
      position: relative;
      background: #fff;
      font-size: 15px;
      color: #191a1b;
      display: flex;
      flex-direction: row;
      .l-data {
        width: 100px;
        overflow: hidden;
        height: 100%;
        p {
          margin-bottom: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .m-data {
        width: 120px;
        height: 100%;
        overflow: hidden;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .r-data {
        overflow: hidden;
        height: 100%;
        padding: 10px 0;
        line-height: 25px;
        color: #ff5f16;
        text-align: right;
        p {
          border: 1px solid;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
