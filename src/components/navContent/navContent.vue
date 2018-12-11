<template>
  <div id="classify">
    <div class="classify-img"></div>
    <div class="classify-nav">
      <div class="classify-nav-content">
        <nav-item title="首页"></nav-item>
        <nav-item v-for="(recommend, index) in recommends" :key="index" :title="recommend.title" :subTitles="recommend.subTitles"></nav-item>
        <div class="topcatalog-item topcatalog-square">
          <a href="">
            <div class="topcatalog-img"></div>
            频道广场
          </a>
        </div>
        <div class="topcatalog-item topcatalog-live">
          <a href="">
            <div class="topcatalog-img"></div>
            直播
          </a>
        </div>
        <div class="topcatalog-item topcatalog-reward">
          <a href="">
            <div class="topcatalog-img"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navItem from '../common/navItem'
import catalog from '@/mock/catalog'

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
        .topcatalog-item
          float right
          line-height 36px
          color #000
          cursor pointer
          font-size 15px
          position relative
          a
            color #000
        .topcatalog-square
          padding-left 31px
          margin-right 10px
          &:hover
            a
              color #cd3333
              .topcatalog-img
                background url(//static.missevan.com/assets/www/images/build/sprite-icons@svg.51417821.svg) -346px -333px/427px 402px
          a
            .topcatalog-img
              position absolute
              top 6px
              left 3px
              width 24px
              height 24px
              background url(//static.missevan.com/assets/www/images/build/sprite-icons@svg.51417821.svg) -122px -333px/427px 402px
        .topcatalog-live
          margin-right 20px
          padding-left 54px
          &:hover
            a
              color #e35e4c
              .topcatalog-img
                background url(//static.missevan.com/assets/www/images/build/sprite-icons@svg.51417821.svg) -201px -152px/427px 402px
          a
            .topcatalog-img
              position absolute
              top 12px
              left 0
              width 49px
              height 11px
              background url(//static.missevan.com/assets/www/images/build/sprite-icons@svg.51417821.svg) -148px -152px/427px 402px
        .topcatalog-reward
          margin-right 20px
          width 100px
          &:hover
            a
              .topcatalog-img
                background url(//static.missevan.com/assets/www/images/build/sprite-icons@2x.bde7b546.png) -190px -240px/557px 547px
          a
            .topcatalog-img
              position absolute
              top 9px
              left 3px
              width 96px
              height 17px
              background url(//static.missevan.com/assets/www/images/build/sprite-icons@2x.bde7b546.png) -266px -190px/557px 547px
</style>
