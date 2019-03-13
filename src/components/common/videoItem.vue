<template>
  <div style="overflow: hidden; display: inline-block;">
    <div class="bigcard-wrapper card-basic" v-if="videoType">
      <a href="" :title="soundStr">
        <div class="bigcard-img">
          <img :src="frontCover" alt="">
          <div class="video-time">{{ duration | timeFilter }}</div>
        </div>
      </a>
      <div class="video-title">
        <a href="">{{ soundStr }}</a>
      </div>
      <div class="video-info">
        <div class="video-info-broadcast">{{ viewCount | countFilter }}</div>
        <div class="video-info-comment">{{ allComments | countFilter }}</div>
      </div>
    </div>
    <div class="smallcard-wrapper card-basic" v-else>
      <a href="" :title="soundStr">
        <div class="smallcard-img">
          <img :src="frontCover" alt="">
        </div>
      </a>
      <div class="smallcard-video-title">
        <a href="">{{ soundStr }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoType: {
      type: Boolean,
      default: true
    },
    viewCount: {
      type: Number,
      default: 0
    },
    allComments: {
      type: Number,
      default: 0
    },
    soundStr: {
      type: String,
      default: '【有声漫】一禅小和尚第五期二喜与大春'
    },
    frontCover: {
      type: String,
      default: '//static.missevan.com/coversmini/201811/22/b2125b2837b4bf66e558d5a51d30c87a122952.jpg?x-oss-process=style/webp'
    },
    duration: {
      type: String,
      default: '0'
    }
  },
  filters: {
    countFilter (value) {
      if (value < 10000) {
        return value
      } else if (value < 100000) {
        return (value / 10000).toFixed(1) + '万'
      } else {
        return Math.floor(value / 10000) + '万'
      }
    },
    timeFilter (value) {
      let minuteNumber = Math.floor((value / 1000) / 60)
      let secondNumber = Math.floor(((value / 1000) / 60 - minuteNumber) * 60)
      secondNumber = secondNumber >= 10 ? secondNumber : '0' + secondNumber
      if (minuteNumber < 60) {
        return minuteNumber + ':' + secondNumber
      } else {
        let hourNumber = Math.floor(minuteNumber / 60)
        minuteNumber = minuteNumber % 60
        minuteNumber = minuteNumber >= 10 ? minuteNumber : '0' + minuteNumber
        return hourNumber + ':' + minuteNumber + ':' + secondNumber
      }
    }
  }
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
.bigcard-wrapper
  // margin 0 20px 20px 0
  width 154px
  height 224px
  background-color #f3f3f3
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
.smallcard-wrapper
  margin-right 15px
  float left
  width 90px
  &:hover
    .smallcard-video-title
      a
        color #f25d8e
  .smallcard-img
    overflow hidden
    img
      width 90px
      height 90px
      float left
  .smallcard-video-title
    width 90px
    height 36px
    line-height 18px
    padding-top 4px
    a
      color #000
      font-size 12px
</style>
