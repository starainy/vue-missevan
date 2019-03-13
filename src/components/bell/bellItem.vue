<template>
  <div class="bell-item-wrapper">
    <div class="bell-item-bgimg">
      <a href="">
        <img :src="bellItemCover" alt="">
        <div class="mask"></div>
        <span>{{ bellItemName }}</span>
      </a>
    </div>
    <div class="bell-item-container">
      <div class="bell-item-line" v-for="(rateItem, rateIndex) in bellRate" :key="rateIndex">
        <div class="bell-item-rating">{{ rateIndex + 1 }}</div>
        <div class="bell-item-title">{{ rateItem.soundstr }}</div>
        <div class="bell-item-play"><span class="triangle"></span></div>
      </div>
      <div class="bell-item-more">更多>></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bellItemName: {
      type: String,
      default: '不要前奏！直奔高潮！'
    },
    bellItemCover: {
      type: String,
      default: '//static.missevan.com/mlongtags/201512/18/b5cf73296f122f63158e960ac8afd849184216.jpg'
    },
    bellRate: {
      type: Array,
      default: [{
        soundstr: 'B.o.B,Bruno Mars - Nothing On You'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bell-item-wrapper
    width 275px
    float left
    .bell-item-bgimg
      height 86px
      border-top-left-radius 7px
      border-top-right-radius 7px
      overflow hidden
      position relative
      a
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        &:hover
          .mask
            opacity 0
        img
          position absolute
          top 0
          left 0
          width 100%
        .mask
          position absolute
          top 0
          left 0
          height 100%
          width 100%
          background-color #000
          opacity .3
          border-left 1px solid #ddd
          border-right 1px solid #ddd
        span
          font-size 18px
          color #fafafa
          text-shadow 1px 1px 4px rgba(0,0,0,.99)
          position absolute
          top 50%
          left 50%
          width 100%
          transform translate(-50%,-50%)
          text-align center
          font-weight 500
    .bell-item-container
      height 252px
      background-color #fafafa
      border-left 1px solid #ddd
      border-right 1px solid #ddd
      border-bottom 1px solid #ddd
      border-bottom-left-radius 7px
      border-bottom-right-radius 7px
      .bell-item-line
        box-sizing border-box
        height 56px
        padding 10px
        border-bottom 1px solid #EBEBEB
        &:hover
          background-color #eee
        // display table
        .bell-item-rating
          color #999
          font-size 13px
          float left
          width 20px
          height 36px
          line-height 36px
          text-align left
        .bell-item-title
          line-height 36px
          font-size 13px
          width 199px
          height 36px
          text-align left
          margin-left 8px
          box-sizing border-box
          overflow hidden
          float left
          color #000
          cursor pointer
          &:hover
            text-decoration underline
        .bell-item-play
          float right
          height 36px
          line-height 36px
          width 14px
          margin 0 5px
          position relative
          .triangle
            position absolute
            top 50%
            left 50%
            transform translate(-50%,-50%)
            float right
            width 0
            height 0
            border-width 7px 0 7px 12.12px
            border-style solid
            border-color transparent transparent transparent rgba(74, 74, 74, .45)
            cursor pointer
            &:hover
              border-color transparent transparent transparent rgba(74, 74, 74, .9)
      .bell-item-more
        background-color #fafafa
        color #aaa
        font-size 12px
        line-height 24px
        cursor pointer
        &:hover
          color #666
</style>
