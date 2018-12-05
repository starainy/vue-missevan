<template>
  <div class="rating-wrapper">
    <div class="rating-title-line">
      <div class="rating-title">排行</div>
      <choose-item style="float: right; margin-left: 10px;" :choose-items="['本周', '三日']"></choose-item>
    </div>
    <div class="rating-content">
      <ul class="rating-content-list">
        <li class="rating-content-list-item" id="rating-content-list-first-item">
          <a href="">
            <div class="rating-top-three">1</div>
            <div class="rating-content-img">
              <img src="//static.missevan.com/coversmini/201811/30/8bbec1a3f7f17a01e939fc61a8d91240035318.jpg?x-oss-process=style/webp" alt="">
            </div>
            <div class="rating-content-title" id="rating-content-first-title">Priest原著《默读》广播剧 第二季亨伯特·亨伯特 第四话</div>
            <div class="video-info">
              <div class="video-info-broadcast">1.2万</div>
              <div class="video-info-comment">191</div>
            </div>
          </a>
        </li>
        <li class="rating-content-list-item">
          <a href="">
            <div class="rating-top-three">2</div>
            <div class="rating-content-title">Priest原著《默读》广播剧 第二季亨伯特·亨伯特 第四话</div>
          </a>
        </li>
        <li class="rating-content-list-item">
          <a href="">
            <div class="rating-top-three">3</div>
            <div class="rating-content-title">Priest原著《默读》广播剧 第二季亨伯特·亨伯特 第四话</div>
          </a>
        </li>
        <li class="rating-content-list-item">
          <a href="">
            <div class="rating-top-five">4</div>
            <div class="rating-content-title">Priest原著《默读》广播剧 第二季亨伯特·亨伯特 第四话</div>
          </a>
        </li>
        <li class="rating-content-list-item">
          <a href="">
            <div class="rating-top-five">5</div>
            <div class="rating-content-title">Priest原著《默读》广播剧 第二季亨伯特·亨伯特 第四话</div>
          </a>
        </li>
      </ul>
    </div>
    <a href="" class="rating-more">更多</a>
  </div>
</template>

<script>
import chooseItem from '../common/chooseItem.vue'
export default {
  components: {
    chooseItem
  }
}
</script>

<style lang="stylus" scoped>
  .rating-wrapper
    width 260px
    float left
    .rating-title-line
      overflow hidden
      .rating-title
        font-size 18px
        font-weight 400
        float left
        line-height 25px
    .rating-content
      margin 20px 0 0
      height 190px
      .rating-content-list
        overflow hidden
        #rating-content-list-first-item
          margin-top 0
          .rating-content-img
            height 50px
            width 50px
            margin-left 7px
            float left
            img
              width 50px
              border-radius 3px
          #rating-content-first-title
            width 180px
            height 36px
            line-height 18px
            margin-left 5px
          .video-info
            color #99a2aa
            height 14px
            font-size 12px
            // position absolute
            // bottom 0
            width 180px
            float left
            margin-left 5px
            line-height 14px
            .video-info-broadcast, .video-info-comment
              width 50%
              padding-left 18px
              box-sizing border-box
              float left
              text-align left
              position relative
              line-height 18px
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
        .rating-content-list-item
          margin-top 17px
          font-size 12px
          line-height 16px
          text-align left
          overflow hidden
          a
            color #000
            .rating-top-three
              float left
              width 16px
              height 16px
              background-color #cd3333
              border-radius 3px
              color #fff
              text-align center
              line-height 16px
              font-size 13px
            .rating-content-title
              height 16px
              float left
              width 235px
              margin-left 7px
              transition opacity .3s
              &:hover
                opacity .7
            .rating-top-five
              float left
              width 16px
              height 16px
              background-color #c7c7c7
              border-radius 3px
              color #fff
              text-align center
              line-height 16px
              font-size 13px
    .rating-more
      margin 12px 0 0
      width 100%
      display block
      border 1px solid #ccd0d7
      color #555
      font-size 12px
      line-height 22px
      border-radius 3px
      &:hover
        background-color #dbdbdb
</style>
