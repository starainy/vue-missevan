<template>
  <div>
    <MsHeader></MsHeader>
    <nav-content></nav-content>
    <div class="homepage-container">
      <div class="carousel-channel">
        <carousel></carousel>
        <channel></channel>
      </div>
      <div style="overflow: hidden;">
        <!-- <left-content style="margin: 20px 30px 0 0;" title="人气推荐" :chooseItems="[['三日', '本周', '本月']]"></left-content> -->
        <hot-recommend style="margin: 20px 30px 0 0;" title="人气推荐"></hot-recommend>
        <square style="margin-top: 20px;"></square>
      </div>
      <div style="overflow: hidden;">
        <sound-list style="margin: 50px 30px 0 0;"></sound-list>
        <hot-activity style="margin-top: 50px;"></hot-activity>
      </div>
      <div style="overflow: hidden;">
        <bell style="margin: 50px 30px 0 0;" v-if="catalogRings.length"></bell>
        <podcast style="margin-top: 50px;"></podcast>
      </div>
      <div v-for="(catalog, index) in catalogs" :key="index" style="overflow: hidden;">
        <left-content style="margin: 50px 30px 0 0;" :title="catalog.name" :navItems="catalog.leaves"></left-content>
        <rating :ratingId="Number(catalog.id)" style="margin-top: 50px;"></rating>
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
import channel from './channel/channel'
import leftContent from './leftContentBlock/leftContentBlock'
import hotRecommend from './leftContentBlock/hotRecommend'
import bell from './bell/bell'
import podcast from './podcast/podcast'
import soundList from './hotSoundList/hotSoundList'
import hotActivity from './hotActivity/hotActivity'
import square from './square/square'
import rating from './rating/rating'
import MsFooter from './common/MsFooter'
import toTop from './common/toTop'

import { mapGetters } from 'vuex'

export default {
  components: {
    MsHeader,
    navContent,
    carousel,
    channel,
    leftContent,
    hotRecommend,
    bell,
    podcast,
    soundList,
    hotActivity,
    square,
    rating,
    MsFooter,
    toTop
  },
  // data () {
  //   return {
  //     partitions: []
  //   }
  // },
  mounted () {
    this.$store.dispatch('catalogInit')
  },
  computed: {
    ...mapGetters([
      'catalogRings',
      'catalogs'
    ])
  },
}
</script>

<style lang="stylus" scoped>
.homepage-container
  width 80%
  margin 15px auto 0
  overflow auto
  .carousel-channel
    height 224px
    margin 20px auto
</style>
