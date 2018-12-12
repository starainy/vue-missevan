<template>
  <div class="podcast-wrapper">
    <div class="podcast-title-line">
      热门播主
    </div>
    <div class="podcast-container">
      <podcast-item :id="'podcastItemWrapper' + n" v-for="n in 9" :key="n" :style="n % 3 == 0 ? 'margin: 0 0 13px 0;' : 'margin: 0 22px 13px 0;'"></podcast-item>
    </div>
  </div>
</template>

<script>
import podcastItem from '../common/podcastItem'
export default {
  components: {
    podcastItem
  }
}
</script>

<style lang="stylus" scoped>
  .podcast-wrapper
    float left
    width 260px
    .podcast-title-line
      font-size 18px
      margin-bottom 25.73px
      text-align left
      font-weight 700
      color #444
      cursor pointer
</style>
