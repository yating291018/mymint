<!--  -->
<template>
  <div class="page-home">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="home">
        <potential-manage></potential-manage>
      </mt-tab-container-item>
      <mt-tab-container-item id="news">
        <news-com></news-com>
      </mt-tab-container-item>
      <mt-tab-container-item id="mine">
          我的
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected" fixed class="page-tabbar">
      <mt-tab-item :id="item.id" v-for="(item, index) in tabbarList" :key="index">
        {{ item.text }}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import PotentialManage from './home/PotentialManage'
import NewsCom from './home/NewsCom'
export default {
  data () {
    return {
      selected: 'home',
      tabbarList: [
        {
          text: '首页',
          id: 'home'
        },
        {
          text: '消息',
          id: 'news'
        },
        {
          text: '我的',
          id: 'mine'
        }
      ]
    }
  },
  components: {
    PotentialManage,
    NewsCom
  },
  methods: {
  }
}
</script>
<style lang='scss' scoped>
</style>
