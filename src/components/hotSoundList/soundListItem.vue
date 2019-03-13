<template>
  <div class="sound-list-item-wrapper">
    <a href="" :title="title">
      <img :src="frontCover" alt="">
      <div class="msound"><span class="msound-icon"></span>{{ musicCount }}</div>
      <div class="sound-list-item-title">{{ title }}</div>
    </a>
    <div class="sound-list-item-authorname">
      <a href="" :title="username">{{ username }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '无法忘记，那场时空旅行的邂逅'
    },
    username: {
      type: String,
      default: '晴明orz'
    },
    frontCover: {
      type: String,
      default: '//static.missevan.com/coversmini/201708/28/9bd28c90d5afb7541be786ca262cddc4175026.jpg?x-oss-process=style/webp'
    },
    musicCount: {
      type: Number,
      default: 94
    }
  }
}
</script>

<style lang="stylus" scoped>
  .sound-list-item-wrapper
    width 148px
    float left
    position relative
    z-index 0
    &:before, &:after
      content ''
      width 146px
      height 146px
      background-color #ffffff
      border 1px solid #d1d1d1
      border-radius 5px
      position absolute
    &:before
      left 6px
      top -6px
      z-index -2
    &:after
      left 3px
      top -3px
      z-index -1
      // clear both
    a
      position relative
      display block
      float left
      img
        width 148px
        height 148px
        border-radius 5px
        float left
      .msound
        position absolute
        top 128px
        left 0
        line-height 20px
        width 128px
        padding 0 10px
        font-size 12px
        color #fff
        text-align right
        border-bottom-left-radius 5px
        border-bottom-right-radius 5px
        background linear-gradient(90deg, transparent, rgba(0,0,0,.02) 40%, rgba(0,0,0,.8))
        font-weight 700
        .msound-icon
          width 18px
          height 18px
          display inline-block
          background-image url(//static.missevan.com/assets/www/images/build/sprite-icons@2x.a6e1ef28.png)
          background-position -537px -300px
          background-size 555px 547px
          vertical-align top
          margin-top 1px
      .sound-list-item-title
        color #3d3d3d
        font-size 12px
        line-height 15px
        margin-top 9px
        float left
        overflow hidden
        height 15px
        word-wrap break-word
      &:hover
        .sound-list-item-title
          color #f25d8e
    .sound-list-item-authorname
      margin-top 8px
      float left
      width 100%
      a
        line-height 14px
        font-size 12px
        color #999
        &:hover
          color #424242
</style>
