<template>
  <div class="left-content-wrapper">
    <div class="left-content-title-line">
      <div class="left-content-title">
        <span ref="leftContentCover">
          <a href="">
            {{ title }}
          </a>
        </span>
      </div>
      <!-- <ul class="left-content-nav">
        <li :class="{'left-content-nav-item-active' : navItem.id === selectedNavId}" class="left-content-nav-item" v-for="(navItem, index) in navItems" :key="index" @click.stop="videoByCid(navItem.id)">{{ navItem.name }}</li>
      </ul> -->
      <choose-item :choose-items="['三日', '本周', '本月']" style="float: right; margin-left: 10px;" @chooseItemCallBack="chooseItemCallBack"></choose-item>
    </div>
    <div class="left-content-container" v-if="videoList">
      <video-item
        v-for="(singleVideo, index) in videoList[selectedChooseItemType]"
        :video-type="true"
        class="video-item-margin"
        :key="index"
        :viewCount="Number(singleVideo['view_count'])"
        :allComments="Number(singleVideo['all_comments'])"
        :soundStr="singleVideo['soundstr']"
        :frontCover="singleVideo['front_cover']"
        :duration="singleVideo['duration']"
        ></video-item>
    </div>
  </div>
</template>

<script>
import chooseItem from '../common/chooseItem.vue'
import videoItem from '../common/videoItem.vue'
export default {
  props: {
    title: String,
    // navItems: {
    //   type: Array,
    //   required: false
    // }
  },
  components: {
    chooseItem,
    videoItem
  },
  data () {
    return {
      videoList: null,
      selectedChooseItemType: 'day3'
    }
  },
  mounted () {
    let coverstr = ''
    switch (this.title) {
      case '人气推荐':
        coverstr = '0 2px'
        break;
      case '有声漫画':
        coverstr = '0 -82px'
        break;
      case '广播剧':
        coverstr = '0 2px'
        break;
      case '音乐':
        coverstr = '0 -111px'
        break;
      case '催眠':
        coverstr = '0 -165px'
        break;
      case '娱乐':
        coverstr = '0 -138px'
        break;
      case '日抓':
        coverstr = '0 -220px'
        break;
      case '听书':
        coverstr = '0 -249px'
        break;
      case '配音':
        coverstr = '0 -333px'
        break;
      default:
        break;
    }
    this.$refs.leftContentCover.style = 'background-position: ' + coverstr + ';'

    this.getHotRecommend()
  },
  methods: {
    async getHotRecommend(){
      this.videoList = await this.$store.dispatch('getRecommends')
    },
    chooseItemCallBack(callbackData){
      switch (callbackData) {
        case '三日':
          this.selectedChooseItemType = 'day3'
          break
        case '本周':
          this.selectedChooseItemType = 'dayw'
          break
        case '本月':
          this.selectedChooseItemType = 'daym'
          break
        default:
          this.selectedChooseItemType = 'day3'
          break
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .left-content-wrapper
    width 850px
    transition .5s
    overflow hidden
    float left
    .left-content-title-line
      overflow hidden
      .left-content-title
        color #444
        cursor pointer
        font-size 19px
        text-align left
        margin-right 28px
        float left
        span
          padding-left 40px
          background url(//static.missevan.com/system/catalog_icons.png) no-repeat
          // background-position 0 -333px
          height 27px
          display inline-block
          cursor default
          a
            color #444
            font-weight 700
            &:hover
              color #f25d8e
      .left-content-nav
        overflow hidden
        float left
        .left-content-nav-item
          font-size 14px
          line-height 24px
          color #99a2aa
          cursor pointer
          float left
          margin-right 10px
        .left-content-nav-item-active
          color #cd3333
    .left-content-container
      width 100%
      height 224px
      margin-top 18px
      overflow hidden
      .video-item-margin
        margin 0 20px 20px 0
        &:last-of-type
          margin 0 0 20px 0
</style>
