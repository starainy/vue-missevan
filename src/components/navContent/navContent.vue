<template>
  <div id="classify">
    <div class="classify-img"></div>
    <div class="classify-nav">
      <div class="classify-nav-content">
        <nav-item title="首页"></nav-item>
        <nav-item v-for="(recommend, index) in recommends" :key="index" :title="recommend.title" :subTitles="recommend.subTitles"></nav-item>
      </div>
    </div>
  </div>
</template>

<script>
import catalog from '@/mock/catalog'
import navItem from '../common/navItem'
export default {
  components: {
    navItem
  },
  data () {
    return {
      recommends: []
    }
  },
  created () {
    catalog.forEach(element => {
      let subTitles = []
      element.leaves.forEach(leaf => {
        subTitles.push(leaf.name)
      })
      let recommendObj = {
        title: element.name,
        subTitles: subTitles
      }
      this.recommends.push(recommendObj)
    });
  }
}
</script>

<style lang="stylus" scoped>
  #classify
    .classify-img
      background-image url(//static.missevan.com/assets/www/images/build/soundback.86e25ebd.png)
      height 166px
      margin 0 auto
      width 100%
      background-position top
    .classify-nav
      height 36px
      background-color #fdfdfd
      box-shadow 0 0 2px #666
      .classify-nav-content
        width 80%
        height inherit
        margin 0 auto
        transition .5s
</style>
