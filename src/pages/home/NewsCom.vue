<!--  -->
<template>
  <div class="news-com">
    <mt-header fixed title="消息"></mt-header>
    <div class="news-main">
      <div class="news-item">
        <p class="news-header"><span>竞拍通知</span><span>10-01 11:00</span></p>
        <div class="news-content">
          sssssssss
        </div>
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
.news-com {
  .news-main {
   padding-top: .8rem;
   border-top: 1px solid #eaeaea;
    .news-item {
      padding: .2rem;
      font-size: .28rem;
      border-bottom: 1px solid #eaeaea;
      .news-header {
        display: flex;
        justify-content: space-between;
        line-height: .4rem;
      }
    }
  }
}
</style>
