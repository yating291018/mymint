<!--  -->
<template>
  <div class="page-poten">
    <mt-header fixed title="首页"></mt-header>
    <div class="page-item-header">
      车商拓展
    </div>
    <div class="page-item-main">
      <div class="page-item-main-item">
        <router-link to="/">
        <img src="../../assets/images/1.jpg" alt="">
        <p>潜客管理</p>
        </router-link>
      </div>
    </div>
    <div class="page-item-header">
      交易确认
    </div>
    <div class="page-item-main">
      <div class="page-item-main-item">
        <img src="../../assets/images/1.jpg" alt="">
        <p>交易任务</p>
      </div>
      <div class="page-item-main-item">
        <img src="../../assets/images/1.jpg" alt="">
        <p>交易记录</p>
      </div>
    </div>
    <div class="page-item-header">
      交易工具
    </div>
    <div class="page-item-main">
      <div class="page-item-main-item">
        <img src="../../assets/images/1.jpg" alt="">
        <p>出价查询</p>
      </div>
      <div class="page-item-main-item">
        <img src="../../assets/images/1.jpg" alt="">
        <p>询价列表</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
.page-poten {
  padding-top: .8rem;
  font-size: .28rem;
  .page-item-header {
    height: .6rem;
    line-height: .6rem;
    padding-left: .2rem;
    background: #ccc;
  }
  .page-item-main {
    display: flex;
    justify-content: flex-start;
    padding: .3rem;
    .page-item-main-item {
      font-size: .26rem;
      text-align: center;
      padding: .2rem .4rem;
      img {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
      }
    }
  }
}
</style>
