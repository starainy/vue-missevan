<template>
  <div class="left-content-wrapper">
    <div class="left-content-title-line">
      <div class="left-content-title">
        <span>
          <a href="">
            {{ title }}
          </a>
        </span>
      </div>
      <ul class="left-content-nav">
        <li class="left-content-nav-item" v-for="navItem in navItems" :key="navItem">{{ navItem }}</li>
        <!-- <div style="clear: both;"></div> -->
      </ul>
      <choose-item v-for="(chooseItem, index) in chooseItems" :key="index" :choose-items="chooseItem" style="float: right; margin-left: 10px;"></choose-item>
      <!-- <choose-item :choose-items="['按小鱼干', '按时间']" style="float: right; margin-left: 10px;"></choose-item> -->
    </div>
    <div class="left-content-container">
      <video-item v-for="n in 5" :video-type="true" class="video-item-margin" :key="n"></video-item>
    </div>
  </div>
</template>

<script>
import chooseItem from '../common/chooseItem.vue'
import videoItem from '../common/videoItem.vue'
export default {
  props: {
    title: String,
    navItems: {
      type: Array,
      required: false
    },
    chooseItems: {
      type: Array,
      required: false
    }
  },
  components: {
    chooseItem,
    videoItem
  }
}
</script>

<style lang="stylus" scoped>
  .left-content-wrapper
    width 850px
    transition .5s
    overflow hidden
    float left
    .left-content-title-line
      overflow hidden
      .left-content-title
        color #444
        cursor pointer
        font-size 19px
        text-align left
        margin-right 28px
        float left
        span
          padding-left 40px
          background url(//static.missevan.com/system/catalog_icons.png) no-repeat
          background-position 0 -333px
          height 27px
          display inline-block
          cursor default
          a
            color #444
            font-weight 700
            &:hover
              color #f25d8e
      .left-content-nav
        overflow hidden
        float left
        .left-content-nav-item
          font-size 14px
          line-height 24px
          color #99a2aa
          cursor pointer
          float left
          margin-right 10px
    .left-content-container
      width 100%
      height 224px
      margin-top 18px
      overflow hidden
      .video-item-margin
        margin 0 20px 20px 0
        &:last-of-type
          margin 0 0 20px 0
</style>
