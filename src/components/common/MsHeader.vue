<template>
  <div id="header">
    <div class="header-content">
      <ul class="header-nav">
        <li class="homepage active">
          <a href="">主站</a>
        </li>
        <li>
          <a href="" style="padding-right: 40px;">直播间<span class="beta">beta</span></a>
        </li>
        <li>
          <a href="">
            活动
          </a>
        </li>
        <li>
          <a href="">
            手机客户端
          </a>
        </li>
      </ul>
      <ul class="header-operate">
        <li>
          <search class="search-position"></search>
        </li>
        <li>
          <a href="">登录/注册</a>
        </li>
        <li class="contribute">
          <a href="">投稿</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import search from './search'
export default {
  components: {
    search
  }
}
</script>

<style lang="stylus" scoped>
  #header
    position relative
    width 100%
    background-color #000
    border-bottom 2px solid #cd3333
    height 40px
    line-height 40px
    z-index 20
    font-size 15px
    // box-sizing border-box
    .header-content
      width 80%
      margin 0 auto
      transition width .5s ease
      height 40px
      position relative
      // background-color #fff
      .header-nav, .header-operate
        height 40px
        line-height 40px
        li
          color #fff
          box-sizing border-box
          display inline-block
          a
            color #fff
            padding 0 20px
            display block
            height 40px
            line-height 40px
            font-weight 600
            position relative
            &:hover
              color #cd3333
      .header-nav
        // background-color red
        float left
        li
          a
            .beta
              float right
              color #cd3333
              font-size 10px
              position absolute
              top -2px
              font-weight 900
              padding-left 1px
          &.active a
            height 20px
            line-height 20px
            color #cd3333
            padding 10px 20px 10px 0
          &.homepage a
            &:before
              content ''
              width 18px
              height 18px
              // background-color blue
              float left
              background-image url(//static.missevan.com/assets/www/images/build/sprite-icons.77197070.png)
              background-position -160px -536px
              background-size 561px 554px
              margin-right 6px
              // display block
      .header-operate
        float right
        li.contribute
          background-color #cd3333
          a:hover
            color white
        li
          .search-position
            position absolute
            right 10px
            top 150px
</style>
