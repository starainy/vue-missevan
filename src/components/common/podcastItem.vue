<template>
  <div class="podcast-item-wrapper">
    <div class="podcast-item-des">小二郎在放牛<br/>【Count】头像音，再不过我就疯了！</div>
    <img src="//static.missevan.com/avatars/201409/28/8e95bcc806d0ee419c743e87c6dad160205256.png" alt="">
    <div class="podcast-item-username">
      <div class="podcast-item-username-inner">Bloodsnow寒蕊</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  @keyframes shake
    25%
      transform rotate(1deg)
    50%
      transform rotate(0deg)
    75%
      transform rotate(-1deg)
    100%
      transform rotate(0deg)
  .podcast-item-wrapper
    width 66px
    height 100px
    border-radius 9px
    padding 2px
    transition .5s
    cursor pointer
    float left
    background-color #000
    position relative
    &:hover
      animation shake 0.3s infinite
      .podcast-item-des
        display block
    .podcast-item-des
      position absolute
      right 75px
      top 0
      width 100px
      color #000
      background-color #fff
      font-size 14px
      border 3px solid #000
      border-radius 10px
      padding 10px
      word-break break-word
      text-align left
      display none
    img
      width 66px
      height 66px
      border-top-left-radius 9px
      border-top-right-radius 9px
      float left
    .podcast-item-username
      display table
      font-size 12px
      color #fff
      float left
      margin-top 2px
      .podcast-item-username-inner
        height 30px
        width 100px
        line-height 15px
        display table-cell
        vertical-align middle
        word-break break-word
        font-weight 600
</style>
