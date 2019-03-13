<template>
  <div class="podcast-wrapper">
    <div class="podcast-title-line">
      热门播主
    </div>
    <div class="podcast-container">
      <podcast-item
        v-for="(podcast, index) in podcasts"
        :key="index"
        :contexturl="'http://static.missevan.com/' + podcast.soundurl_64"
        :avatarurl="podcast.avatar2"
        :username="podcast.username"
        :soundstr="podcast.soundstr"
        :style="(index + 1) % 3 == 0 ? 'margin: 0 0 13px 0;' : 'margin: 0 22px 13px 0;'">
      </podcast-item>
    </div>
  </div>
</template>

<script>
import podcastItem from './podcastItem'
import { mapGetters } from 'vuex'
export default {
  components: {
    podcastItem
  },
  computed: {
    ...mapGetters([
      'podcasts'
    ])
  },
  mounted () {
    this.$store.dispatch('getPodcast').then(() => {
      // console.log(this.podcasts)
    })
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
