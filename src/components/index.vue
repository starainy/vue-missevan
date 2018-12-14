<template>
  <div>
    <MsHeader></MsHeader>
    <nav-content></nav-content>
    <div class="homepage-container">
      <div class="carousel-more">
        <carousel></carousel>
        <more></more>
      </div>
      <div style="overflow: hidden;">
        <left-content style="margin: 20px 30px 0 0;" title="人气推荐" :chooseItems="[['三日', '本周', '本月']]"></left-content>
        <square style="margin-top: 20px;"></square>
      </div>
      <div style="overflow: hidden;">
        <sound-list style="margin: 50px 30px 0 0;"></sound-list>
        <hot-activity style="margin-top: 50px;"></hot-activity>
      </div>
      <div style="overflow: hidden;">
        <bell style="margin: 50px 30px 0 0;"></bell>
        <podcast style="margin-top: 50px;"></podcast>
      </div>
      <div v-for="n in 4" :key="n" style="overflow: hidden;">
        <left-content style="margin: 50px 30px 0 0;" title="配音" :navItems="['中文配音', '日文及其他', '角色配音', '声优录音', '作品录音']" :chooseItems="[['更多'], ['按小鱼干', '按时间']]"></left-content>
        <rating style="margin-top: 50px;"></rating>
      </div>
    </div>
    <ms-footer></ms-footer>
    <to-top></to-top>
  </div>
</template>

<script>
import MsHeader from './common/MsHeader'
import navContent from './navContent/navContent'
import carousel from './common/carousel'
import more from './more/more'
import leftContent from './contentBlock/leftContentBlock'
import bell from './contentBlock/bell'
import podcast from './contentBlock/podcast'
import soundList from './contentBlock/hotSoundList'
import hotActivity from './contentBlock/hotActivity'
import square from './contentBlock/square'
import rating from './contentBlock/rating'
import MsFooter from './common/MsFooter'
import toTop from './common/toTop'

export default {
  components: {
    MsHeader,
    navContent,
    carousel,
    more,
    leftContent,
    bell,
    podcast,
    soundList,
    hotActivity,
    square,
    rating,
    MsFooter,
    toTop
  }
}
</script>

<style lang="stylus" scoped>
.homepage-container
  width 80%
  margin 15px auto 0
  overflow auto
  .carousel-more
    height 224px
    margin 20px auto
</style>
