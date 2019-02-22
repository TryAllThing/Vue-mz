<template>
  <div class="ptuan">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div>
          <img :src=item.photos>
        </div>
        <div class="nei">
          <p class="title">{{item.title}}</p>
          <p class="ms">{{item.ms}}</p>
          <div class="buttom">
            <div class="price">￥{{item.price}}</div>
            <div class="pt">去拼团</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          photos: 'https://mall.s.maizuo.com/8b9cc12ffbe5a6f82683afc315aedcf8.jpg?x-oss-process=image/quality,Q_70',
          title: '三峡清江椪柑 3斤装',
          ms: '优选果园新鲜采摘 果肉金黄剔透 鲜嫩多汁 清甜爽口 入口化渣',
          price: '13.5'
        },
        {
          photos: 'https://mall.s.maizuo.com/32eb4266b858a3fcf96b834cde0e868a.jpg?x-oss-process=image/quality,Q_70',
          title: '麻阳冰糖橙 5斤',
          ms: '颗颗圆润饱满 鲜嫩多汁化渣 天然树熟无添加',
          price: '17.9'
        },
        {
          photos: 'https://mall.s.maizuo.com/57a6932f9fde1fb582cb7d979236ace0.jpg?x-oss-process=image/quality,Q_70',
          title: '山东农家土鹅蛋 6枚',
          ms: '醇香软糯细腻 质地Q弹不散 蛋清浓稠粘度高',
          price: '40.9'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.title{
    font-size: 15px;
    height: 21px;
    line-height: 21px;
    color: #191a1b;
}
.ms{
  font-size: 13px;
  line-height: 19px;
  color: #797d82;
}
img{
  height: 180px;
}
.nei{
  min-height: 85px;
  padding: 10px 15px;
}
.buttom{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  .price{
    color: red;
    font-size: 18px;
    line-height: 33px;
  }
  .pt{
    width: 90px;
    height: 33px;
    font-size: 14px;
    line-height: 33px;
    text-align: center;
    color: #fff;
    background-color: rgb(192, 49, 49);
  }
}
</style>
