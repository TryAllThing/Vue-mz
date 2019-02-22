<template>
  <div class="card">
    <topbar></topbar>
    <div class="dmt">
      <div class="dataImg"><img src="data:image/png;base64,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" alt=""></div>
      <div class="message">你还没有卖座卡哦～</div>
      <div class="to-binding-card">激活新卡</div>
    </div>
  </div>
</template>
<script>
import topbar from '@/components/topbar'
export default {
  name: 'card',
  components: {
    topbar
  }
}
</script>
<style lang="scss">
  .card{
        font-size: 13px;
    .dmt{
      padding-top: 28.3vh;
    }
    .dataImg{
      display: block;
      margin: 0 auto;
      width: 95px;
      height: 95px;
      img{
        height: 100%;
        width: 100%;
      }
    }
    .message {
      margin: 11px 0 20px;
      font-size: 14px;
      width: 100%;
      text-align: center;
      color: #bdc0c5;
    }
    .to-binding-card{
      border: 1px solid #ff5f16;
      color: #ff5f16;
      border-radius: 3px;
      width: 150px;
      height: 33px;
      line-height: 33px;
      text-align: center;
      font-size: 14px;
      margin: 0 auto;
    }
  }
</style>
