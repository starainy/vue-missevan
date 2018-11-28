<template>
  <div>
    <div class="bigcard-wrapper card-basic">
      <a href="">
        <div class="bigcard-img">
          <img src="//static.missevan.com/coversmini/201811/22/b2125b2837b4bf66e558d5a51d30c87a122952.jpg?x-oss-process=style/webp" alt="">
          <div class="video-time">2:00</div>
        </div>
      </a>
      <div class="video-title">
        <a href="">声优名作演绎《心》【1-2】宫野真守；速水奖；石田彰等</a>
      </div>
      <div class="video-info">
        <div class="video-info-broadcast">1.2万</div>
        <div class="video-info-comment">191</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.card-basic
  font-size 12px
  line-height 18px
  transition .5s
  overflow hidden
  float left
  position relative
  background-color #f3f3f3
.bigcard-wrapper
  margin 0 20px 20px 0
  width 154px
  height 224px
  &:hover
    .bigcard-img
      .video-time
        height 18px
    .video-title
      a
        color #f25d8e
  .bigcard-img
    position relative
    float left
    border-radius 5px
    img
      width 154px
      float left
    .video-time
      position absolute
      right 0
      bottom 0
      height 0
      overflow hidden
      color #fff
      background-color rgba(0, 0, 0, .7)
      padding 0 5px
      border-top-left-radius 5px
      transition .5s
  .video-title
    height 36px
    line-height 20px
    float left
    margin-top 8px
    overflow hidden
    text-align left
    a
      word-break break-all
      color #000
  .video-info
    color #99a2aa
    height 18px
    position absolute
    bottom 0
    width 100%
    .video-info-broadcast, .video-info-comment
      width 50%
      padding-left 18px
      box-sizing border-box
      float left
      text-align left
      position relative
    .video-info-broadcast:before
      width 18px
      height 18px
      content ''
      background-image url(//static.missevan.com/assets/www/images/build/sprite-icons@2x.a6e1ef28.png)
      background-position -60px -511px
      background-size 555px 547px
      position absolute
      left 0
    .video-info-comment:before
      width 18px
      height 18px
      content ''
      background-image url(//static.missevan.com/assets/www/images/build/sprite-icons@2x.a6e1ef28.png)
      background-position -80px -511px
      background-size 555px 547px
      position absolute
      left 0
</style>
