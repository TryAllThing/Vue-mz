<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item><img src="@/components/banner/bannerImg/pic-1.jpg" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="@/components/banner/bannerImg/pic-2.jpg" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="@/components/banner/bannerImg/pic-3.jpg" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="@/components/banner/bannerImg/pic-4.jpg" alt=""></mt-swipe-item>
  </mt-swipe>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'banner',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
}
</script>
<style lang='scss' >
@import '@/style/common/px2rem.scss';
@import 'swiper/dist/css/swiper.min.css';
.mint-swipe {
  height: px2rem(210);
  img {
    height: 100%;
  }
}
</style>
