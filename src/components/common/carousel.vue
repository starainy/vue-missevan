<template>
  <div class="carousel-container">
    <div class="carousel-wrap" ref="carouselWrap">
      <div class="carousel-item" v-for="(item, index) in items" :key="index">
        <a href="" :style="'background-image: url(' + item.pic + ');'">
          <span class="carousel-item-p">
            <span class="carousel-item-span">{{ item.title }}</span>
          </span>
        </a>
      </div>
    </div>
    <ul class="carousel-progress">
      <li
        class="carousel-progress-item"
        :class="{'carousel-progress-item-active': index === picIndex}"
        @click="changeProgress(index)"
        v-for="(progress, index) in count"
        :key="progress"></li>
    </ul>
  </div>
</template>

<script>
import link from '@/mock/recommend'
import { clearInterval } from 'timers';
export default {
  mounted () {
    this.items = link.links
    this.count = Object.keys(this.items).length
    this.$refs.carouselWrap.style.width = 440 * this.count + 'px'
    // debugger
    this.startInterval()
    this.$refs.carouselWrap.onmouseenter = () => {
      this.clearIntervalFun()
    }
    this.$refs.carouselWrap.onmouseleave = () => {
      this.startInterval()
    }
  },
  data () {
    return {
      // 轮播图索引
      picIndex: 0,
      // items内对象的个数
      count: 0,
      interval: null,
      items: Object
    }
  },
  watch: {
    picIndex (value) {
      if (this.$refs.carouselWrap) {
        this.$refs.carouselWrap.style.marginLeft = -440 * this.picIndex + 'px'
      }
    }
  },
  methods: {
    nextPic () {
      if (this.picIndex === this.count - 1) {
        this.picIndex = 0
      } else {
        this.picIndex ++
      }
    },
    prePic () {
      if (this.picIndex === 0) {
        this.picIndex = this.count - 1
      } else {
        this.picIndex --
      }
      // if (this.$refs.carouselWrap) {
      //   this.$refs.carouselWrap.style.marginLeft = -440 * this.picIndex + 'px'
      // }
    },
    startInterval() {
      if (this.count > 0) {
        //轮播图定时滚动
        this.interval = setInterval(() => {
          this.nextPic()
        }, 5000)
      }
    },
    clearIntervalFun () {
      if (this.interval) {
        window.clearInterval(this.interval)
      }
    },
    changeProgress (index) {
      this.picIndex = index
      this.clearIntervalFun()
      this.startInterval()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .carousel-container
    width 442px
    height 224px
    position relative
    border 2px solid #000
    box-sizing border-box
    border-radius 4px
    // background-color red
    float left
    overflow hidden
    box-sizing border-box
    .carousel-wrap
      height 100%
      transition .2s
      .carousel-item
        width 440px
        height 220px
        float left
      a
        display block
        width 100%
        height 100%
        position relative
        .carousel-item-p
          line-height 36px
          height 36px
          position absolute
          bottom 0
          left 0
          right 0
          background linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8))
          text-align left
          font-size 14px
          .carousel-item-span
            color #fff
            display block
            width 310px
            height 36px
            line-height 36px
            margin-left 10px
            // 强制不换行
            white-space nowrap
            // 配合overflow使用，超出部分用省略号代替
            text-overflow ellipsis
            overflow hidden
            &:hover
              text-shadow 0 0 3px #fff
    .carousel-progress
      height 16px
      line-height 16px
      position absolute
      right 10px
      bottom 10px
      // &:after
      //   clear both
      .carousel-progress-item
        display inline-block
        width 10px
        height 10px
        margin-left 6px
        margin-top 6px
        background-color #fff
        border-radius 50%
        box-shadow 0 0 3px #000
        // li与span类似，若两个相同标签之间有换行符，则会有间隙存在
        float left
        cursor pointer
      .carousel-progress-item-active
        border 2px solid #fff
        background-color #c62828
        margin-top 4px
</style>
