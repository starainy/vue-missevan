<template>
  <a class="to-top" ref="toTop" @click="goTop">
    <div class="to-top-rope"></div>
    <img src="//static.missevan.com/system/topscroll.png" alt="">
  </a>
</template>

<script>
export default {
  mounted () {
    this.$refs.toTop.style.top = '-' + this.$refs.toTop.offsetHeight + 'px'
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top >= 550) {
        this.$refs.toTop.style.top = 0
      } else {
        this.$refs.toTop.style.top = '-' + this.$refs.toTop.offsetHeight + 'px'
      }
    },
    goTop () {
      // 检查浏览器是否支持requestAnimationFrame，如果不支持，则改为定时器触发
      window.requestAnimationFrame = (function () {
        return  window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60)
          }
      })()
      // requestAnimationFrame一般每秒触发60次，此处计算0.3s内每次触发的距离
      var step =  document.documentElement.scrollTop / (300 / ( 1000 / 60)) >> 0
      function fn () {
        if (document.documentElement.scrollTop > 0) {
          document.documentElement.scrollTop -= step
          // 每次触发requestAnimationFrame会返回一个回调列表唯一标识，用以取消回调函数
          fn.rafTimer = requestAnimationFrame(fn)
        } else {
          document.documentElement.scrollTop = 0
          cancelAnimationFrame(fn.rafTimer)
        }
      }
      fn.rafTimer = requestAnimationFrame(fn)
    }
  }
}
</script>

<style lang="stylus" scoped>
.to-top
  width 70px
  height calc(100% - 77px)
  position fixed
  right 30px
  z-index 999
  transition top 1s ease-in-out
  cursor pointer
  .to-top-rope
    background url(//static.missevan.com/system/rope.png) repeat
    height calc(100% - 98px)
</style>
