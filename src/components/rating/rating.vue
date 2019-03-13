<template>
  <div class="rating-wrapper">
    <div class="rating-title-line">
      <div class="rating-title">排行</div>
      <choose-item style="float: right; margin-left: 10px;" :choose-items="['本周', '三日']" @chooseItemCallBack="chooseItemCallBack"></choose-item>
    </div>
    <div class="rating-content">
      <ul class="rating-content-list" v-if="ratingList.length">
        <li class="rating-content-list-item" :id="ratingListIndex === 0 ? 'rating-content-list-first-item' : 'rating-content-list-item' + ratingListIndex" v-for="(ratingListItem, ratingListIndex) in ratingList" :key="ratingListIndex">
          <a href="">
            <div :class="ratingListIndex < 3 ? 'rating-top-three' : 'rating-top-five'">{{ ratingListIndex + 1 }}</div>
            <div class="rating-content-img" v-if="ratingListIndex === 0">
              <img :src="ratingList[ratingListIndex]['front_cover'] || '//static.missevan.com/coversmini/201811/30/8bbec1a3f7f17a01e939fc61a8d91240035318.jpg?x-oss-process=style/webp'" alt="">
            </div>
            <div class="rating-content-title" :id="ratingListIndex === 0 ? 'rating-content-first-title' : 'rating-content-title' + ratingListIndex">{{ ratingList[ratingListIndex]['soundstr'] || 'Priest原著《默读》广播剧 第二季亨伯特·亨伯特 第四话' }}</div>
            <div class="video-info" v-if="ratingListIndex === 0">
              <div class="video-info-broadcast">{{ ratingList[ratingListIndex]['view_count'] | countFilter }}</div>
              <div class="video-info-comment">{{ ratingList[ratingListIndex]['all_comments'] | countFilter }}</div>
            </div>
          </a>
        </li>
        <!-- <li class="rating-content-list-item">
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
        </li> -->
      </ul>
    </div>
    <a href="" class="rating-more">更多</a>
  </div>
</template>

<script>
import chooseItem from '../common/chooseItem.vue'
export default {
  props: {
    ratingId: {
      type: Number,
      default: 5
    }
  },
  components: {
    chooseItem
  },
  data () {
    return {
      ratingData: null,
      selectChooseItem: 'day7',
      // ratingList: null
    }
  },
  mounted () {
    this.getRating()
  },
  computed: {
    ratingList () {
      if (this.ratingData) {
        return this.ratingData[this.selectChooseItem]
      } else {
        return []
      }
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
    // timeFilter (value) {
    //   let minuteNumber = Math.floor((value / 1000) / 60)
    //   let secondNumber = Math.floor(((value / 1000) / 60 - minuteNumber) * 60)
    //   secondNumber = secondNumber >= 10 ? secondNumber : '0' + secondNumber
    //   if (minuteNumber < 60) {
    //     return minuteNumber + ':' + secondNumber
    //   } else {
    //     minuteNumber = minuteNumber % 60
    //     minuteNumber = minuteNumber >= 10 ? minuteNumber : '0' + minuteNumber
    //     let hourNumber = Math.floor(minuteNumber / 60)
    //     return hourNumber + ':' + minuteNumber + ':' + secondNumber
    //   }
    // }
  },
  methods: {
    async getRating () {
      this.ratingData = await this.$store.dispatch('rankingById', { id: this.ratingId })
    },
    chooseItemCallBack (callbackData) {
      switch (callbackData) {
        case '本周':
          this.selectChooseItem = 'day7'
          break
        case '三日':
          this.selectChooseItem = 'day3'
          break
        default:
          this.selectChooseItem = 'day7'
          break;
      }
      console.log(callbackData)
    }
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
            overflow hidden
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
