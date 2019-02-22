<template>
  <div class="money">
    <header class="header">
      <div class="left">
        <i class="iconfont icon-home"></i>
      </div>
      <div class="title">余额明细</div>
      <div class="right">
        <i class="iconfont icon-tip-"></i>
      </div>
    </header>
    <div class="balance-count">
      <div class="label">当前余额</div>
      <div class="balance-amount">￥0.00</div>
    </div>
    <div class="no-r">
      <img
        src="data:image/png;base64,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"
        class="monimg"
      >
      <div class="m-tip">暂无余额使用明细</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.header {
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
  .left {
    width: 50px;
    i {
      font-size: 20px;
    }
  }
  .title {
    text-align: center;
    font-size: 17px;
    color: #191a1b;
    flex: 1;
  }
  .right {
    width: 50px;
    i {
      font-size: 20px;
    }
  }
}
.no-r {
  width: 100%;
  margin-top: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .monimg {
    width: 25.3vw;
    height: 25.3vw;
  }
  .m-tip {
    font-size: 14px;
    margin-top: 11px;
    color: #bdc0c5;
  }
}
.balance-count {
  height: 141px;
  background-image: url(https://assets.maizuo.com/h5/v5/public/app/img/head-bg.424c804.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  color: #fff;
  .label {
    font-size: 13px;
  }
  .balance-amount {
    font-size: 30px;
  }
}
</style>
