<template>
  <div class="up-order">
    <div class="up-top">
      <header class="head">确认订单</header>
      <div class="phone-box">
        <div class="l-box">
          <i class="iconfont icon-lianxirenxuanzhong"></i>
        </div>
        <div class="r-box">
          <p class="phone">{{getNickName()}}</p>
          <p class="info">订单信息将发送到您手机</p>
        </div>
      </div>
      <div class="primary-info" v-for="(item,index) in list" :key="index">
        <div class="top">
          <div class="img">
            <img :src=item.poster alt="">
          </div>
          <div class="r-info">
            <p class="name">{{item.name}}</p>
            <p>{{getTime(item.showAt)}}</p>
            <p>{{item.hallName}}</p>
            <p class="piao">票数<i @click="addnum">+</i><span>{{item.num}}</span><i @click="reducenum">-</i></p>
          </div>
        </div>
        <div class="buttom">
          <p class="shoptip">商品价格</p>
          <p class="sum">￥{{getSum(item.salePrice,item.num)}}</p>
        </div>
      </div>
    </div>
    <div class='up-buttom'>
      <div class="kongbai"></div>
      <div class="shopend" @click="tj">提交订单</div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import axios from 'axios'
import { MessageBox } from 'mint-ui'
export default {
  name: 'upOrder',
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapState([
      'shopnum'
    ]
    )
  },
  methods: {
    getSum (singlePrice, num) {
      return (singlePrice / 100) * num
    },
    getTime (timenum) {
      return new Date(parseInt(timenum) * 1000)
        .toLocaleString()
        .replace(/:\d{1,2}$/, ' ')
        .replace(/\//g, '-')
    },
    tj () {
      MessageBox.confirm('确定执行此操作?').then(action => {
        if (localStorage.getItem('shop')) {
          let shops = JSON.parse(localStorage.getItem('shop'))
          shops.push(...this.list)
          localStorage.setItem('shop', JSON.stringify(shops))
        } else {
          localStorage.setItem('shop', JSON.stringify(this.list))
        }
        this.$store.commit('buyBegin', this.list[0])
        this.$router.push({path: '/success'})
      })
    },
    addnum () {
      this.list[0].num++
    },
    reducenum () {
      if (this.list[0].num === 1) {
        MessageBox.confirm('是否取消购票').then(action => {
          this.$router.push({path: '/films/nowPlay'})
        })
      } else {
        this.list[0].num--
      }
    },
    getNickName () {
      return localStorage.getItem('nickname')
    },
    getList () {
      axios
        .get('http://localhost:3000/api/find/one', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(result => {
          result = result.data
          if (result.code === '1') {
            alert('您的电脑异常，请更换')
          } else {
            var orderList = Object.assign(result.msg[0], JSON.parse(localStorage.getItem('address')), {num: 1})
            this.list.push(orderList)
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
.up-order {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  .up-top{
    flex: 1;
  }
  .up-buttom{
    height: 45px;
    background: #fff;
    line-height: 45px;
    font-size: 14px;
    display: flex;
    .kongbai{
      flex: 1;
    }
    .shopend{
      background: #ff5f16;
      color: white;
      text-align: center;
      width: 100px;
    }
  }
  .head {
    text-align: center;
    line-height: 44px;
    border-bottom: 1px solid #e4e4e4;
    position: sticky;
    top: 0;
    background: #fff;
  }
  .phone-box {
    padding: 10px 15px;
    height: 60px;
    background: #fff;
    .l-box {
      vertical-align: top;
      display: inline-block;
      width: 20px;
      padding: 5px;
    }
    .r-box {
      display: inline-block;
      .phone {
        margin: 5px 0;
        font-size: 16px;
      }
      .info {
        font-size: 12px;
        color: #797d82;
      }
    }
  }
  .primary-info {
    margin-top: 10px;
    height: 180px;
    padding: 10px 15px;
    background: #fff;
    display: flex;
    flex-direction: column;
    .buttom{
      border-top:1px solid #e4e4e4;
      height: 40px;
      font-size: 14px;
      color: #797d82;
      display: flex;
      line-height: 39px;
      .shoptip{
        width: 100px;
      }
      .sum{
        flex: 1;
        text-align: right;
        padding-right:10px;
        color: red;
      }
    }
    .top{
      flex: 1;
      display: flex;
      .img{
        width: 60px;
        img{
          width: 100%;
        }
      }
      .r-info{
        flex: 1;
        display: flex;
        flex-direction: column;
        .name{
          font-size: 16px;
          font-weight: 900;
          color: black;
        }
        p{
          padding: 0 10px;
          font-size: 14px;
          color: #797d82;
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .piao{
          margin-top: 10px;
          color: red;
          text-align: right;
          i{
            display: inline-block;
            width: 20px;
            height: 20px;
            color: white;
            line-height: 20px;
            text-align: center;
            margin: 0 10px;
            background: rgb(97, 131, 206);
          }
        }
      }
    }
  }
}
</style>
