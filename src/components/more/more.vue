<template>
  <div class="more" ref="more">
    <div class="channel-title-line">
      <a class="channel-title" href="">
        如果条漫会说话
      </a>
      <div class="channel-title-des">配合声音，食用更佳</div>
      <div class="channel-title-attention">+ 关注</div>
      <div style="clear: both;"></div>
    </div>
    <div class="channel-container">
      <video-item :videoType="false" v-for="n in 6" :key="n"></video-item>
    </div>
    <a class="channel-more" href="">更多内容</a>
  </div>
</template>

<script>
import videoItem from '../common/videoItem'
export default {
  mounted () {

  },
  components: {
    videoItem
  }
}
</script>

<style lang="stylus" scoped>
.more
  width 679px
  height 224px
  padding 15px 45px 15px 15px
  box-sizing border-box
  float right
  border-radius 4px
  border 2px solid #000
  transition .5s
  text-align left
  position relative
  .channel-title-line
    padding-bottom 15px
    border-bottom 1px solid #ddd
    .channel-title
      float left
      padding-left 60px
      color #666
      font-size 18px
      &:before
        width 50px
        height 30px
        background-image url(//static.missevan.com/assets/www/images/build/sprite-icons@2x.a6e1ef28.png)
        background-position -135px -338px
        background-size 555px 547px
        content ''
        display block
        position absolute
        left 18px
        top 13px
    .channel-title-des
      font-size 12px
      margin-top 5px
      margin-left 20px
      float left
      color #999
    .channel-title-attention
      float right
      font-size 12px
      background-color #c14a3f
      padding 2px 5px
      color #fff
      font-weight 600
      border-radius 4px
      border 2px solid transparent
      cursor pointer
  .channel-container
    padding-top 18px
    overflow hidden
    width 630px
  .channel-more
    position absolute
    right 0
    bottom 0
    background-color #333
    width 12px
    padding 54px 9px
    line-height 2
    font-size 14px
    color #fff
    font-weight 600
</style>
