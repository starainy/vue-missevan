<template>
  <div>
    <MsHeader></MsHeader>
    <nav-content></nav-content>
    <div class="homepage-container">
      <div class="carousel-more">
        <carousel></carousel>
        <more></more>
      </div>
      <div v-for="n in 4" :key="n">
        <left-content style="margin: 50px 30px 0 0;"></left-content>
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
