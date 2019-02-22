<template>
  <div class="up-order">
    <div class="title">电影订单</div>
    <ul>
      <li v-for="(item, index) in getShop" :key="index">
        <div class="primary-info">
          <div class="top">
            <div class="img"  >
              <img alt :src=item.poster>
            </div>
            <div class="r-info">
              <p class="name">{{item.name}}</p>
              <p>{{item.showAt}}</p>
              <p>{{item.hallName}}</p>
              <p class="piao">
                票数
                <span >{{item.num}}</span>
                已支付
              </p>
            </div>
          </div>
          <div class="buttom">
            <p class="shoptip">商品价格</p>
            <p class="sum">￥{{item.num * (item.salePrice / 100)}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'upOrder',
  computed: {
    getShop () {
      return this.$store.state.shop
    }
  },
  methods: {
    getImg () {
      return this.$store.state.shop.list[0].poster
    }
  }

}
</script>
<style lang="scss">
.up-order {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  .title{
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    text-align: center;
  }
  .primary-info {
    margin-top: 10px;
    height: 180px;
    padding: 10px 15px;
    background: #fff;
    display: flex;
    flex-direction: column;
    .buttom {
      border-top: 1px solid #e4e4e4;
      height: 40px;
      font-size: 14px;
      color: #797d82;
      display: flex;
      line-height: 39px;
      .shoptip {
        width: 100px;
      }
      .sum {
        flex: 1;
        text-align: right;
        padding-right: 10px;
        color: red;
      }
    }
    .top {
      flex: 1;
      display: flex;
      .img {
        width: 60px;
        img {
          width: 100%;
        }
      }
      .r-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        .name {
          font-size: 16px;
          font-weight: 900;
          color: black;
        }
        p {
          padding: 0 10px;
          font-size: 14px;
          color: #797d82;
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .piao {
          margin-top: 10px;
          color: red;
          text-align: right;
          i {
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
