<template>
  <div class="sound-list-wrapper">
    <div class="sound-list-title-line">
      <div class="sound-list-title">
        <span>
          <a href="">
            热门音单
          </a>
        </span>
      </div>
      <choose-item :choose-items="['更多']" style="float: right; margin-left: 10px;"></choose-item>
    </div>
    <div class="sound-list-container">
      <sound-list-item
        v-for="(album, index) in albums"
        :key="index"
        class="sound-list-item-margin"
        :title="album.title"
        :username="album.username"
        :frontCover="album['front_cover']"
        :musicCount="Number(album['music_count'])"></sound-list-item>
    </div>
  </div>
</template>

<script>
import chooseItem from '../common/chooseItem.vue'
import soundListItem from './soundListItem'
import { mapGetters } from 'vuex'
export default {
  components: {
    chooseItem,
    soundListItem
  },
  methods: {

  },
  mounted () {
    this.$store.dispatch('getAlbums')
  },
  computed: {
    ...mapGetters([
      'albums'
    ])
  }
}
</script>

<style lang="stylus" scoped>
  .sound-list-wrapper
    width 850px
    transition .5s
    overflow hidden
    float left
    .sound-list-title-line
      overflow hidden
      .sound-list-title
        color #444
        cursor pointer
        font-size 19px
        text-align left
        margin-right 28px
        float left
        span
          padding-left 40px
          background url(//static.missevan.com/system/catalog_icons.png) no-repeat
          background-position 0 -333px
          height 27px
          display inline-block
          cursor default
          a
            color #444
            font-weight 700
            &:hover
              color #f25d8e
    .sound-list-container
      width 100%
      height 224px
      margin-top 18px
      overflow hidden
      padding-top 6px
      .sound-list-item-margin
        margin-bottom 20px
        &:not(:last-of-type)
          margin-right 26px
</style>
