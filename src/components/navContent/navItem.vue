<template>
  <div class="nav-item">
    <a class="nav-item-a" href="">{{ title }}</a>
    <div class="nav-subitem">
      <a href="" v-for="(subTitle, index) in subTitles" :key="index">
        {{ subTitle }}
        <div class="little-round"></div>
      </a>
      <!-- <a href="">
        漫画2
        <div class="little-round"></div>
      </a> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    // 是否有子项
    // leaves: {
    //   type: Boolean,
    //   required: false,
    //   default: false
    // },
    // 当leaves为true时必需
    subTitles: {
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .nav-item
    float left
    height 36px
    line-height 36px
    width auto
    font-size 15px
    box-sizing border-box
    background-color #fff
    .nav-item-a
      padding 0 20px 0 10px
      // width 100%
      // height 100%
      display block
      color #000
    .nav-subitem
      display none
      width 128px
      box-shadow 0 2px 3px #ccc
      // 不设置absolute会使父div相应扩大
      position absolute
      z-index 15
      a
        display block
        color #000
        font-size 14px
        padding 0 0 0 20px
        text-align left
        // 防止继承absolute
        position relative
        transition .2s
        background-color #fff
        .little-round
          height 4px
          width 4px
          border-radius 4px
          position absolute
          background-color #000
          top 16px
          left 10px
          transition .2s
        &:hover
          color #cd3333
          padding-left 27px
          background-color #f0f0f0
          .little-round
            background-color #cd3333
            left 17px
    &:hover
      .nav-item-a
        color #cd3333
      .nav-subitem
        display block
</style>
