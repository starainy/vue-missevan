<template>
  <div class="bell-wrapper">
    <div class="bell-title-line">
      <div class="bell-title">
        <span>
          <a href="">
            铃声
          </a>
        </span>
      </div>
      <ul class="bell-nav">
        <li :class="{ 'bell-active': selectedNav === bellNav.catalogName }" v-for="(bellNav, index) in bellNavs" @click="switchCatalogRings(bellNav)" :key="index"><a>{{ bellNav.catalogName }}</a></li>
      </ul>
      <a href="" class="bell-square">
        <span>铃声广场</span>
        <span class="square-more"></span>
      </a>
    </div>
    <div class="bell-content">
      <bell-item v-for="(bellContent, bellIndex) in bellContents" :bellItemName="bellContent.name" :bellRate="bellContent.t_sounds" :bellItemCover="bellContent.cover" :key="bellIndex" class="bell-item-margin"></bell-item>
    </div>
  </div>
</template>

<script>
import bellItem from './bellItem'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      bellNavs: [],
      selectedNav: '来电',
      bellContents: []
    }
  },
  components: {
    bellItem
  },
  computed: {
    ...mapGetters([
      'catalogRings',
      'rings'
    ])
  },
  mounted () {
    for(const leaf of this.catalogRings[0].leaves){
      this.bellNavs.unshift({
        catalogId: leaf.id,
        catalogName: leaf.name
        // catalogContent: null
      })
    }
    this.selectedNav = this.bellNavs[0].catalogName
    this.switchCatalogRings(this.bellNavs[0])
  },
  methods: {
    switchCatalogRings (bellNav) {
      this.selectedNav = bellNav.catalogName
      this.$store.dispatch('ringsByCatalog', { catalog: bellNav.catalogId }).then(bells => {
        this.bellContents = bells
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bell-wrapper
    height 400px
    width 850px
    transition .5s
    float left
    // overflow hidden
    .bell-title-line
      overflow hidden
      .bell-title
        color #444
        cursor pointer
        font-size 19px
        text-align left
        margin-right 28px
        float left
        margin-top 2px
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
      .bell-nav
        float left
        li
          float left
          margin-right 5px
          cursor pointer
          a
            display inline-block
            padding 5px 12px
            font-size 15px
            border-radius 5px
            color #6b6b6b
            &:hover
              background-color #cd3333
              color #fff
      .bell-square
        float right
        color #555
        line-height 32px
        border 1px solid #ccd0d7
        border-radius 4px
        font-size 14px
        width 104px
        span
          vertical-align middle
        .square-more
          background-image url(//static.missevan.com/assets/www/images/build/sprite-icons@2x.a6e1ef28.png)
          background-position -100px -511px
          background-size 555px 547px
          display inline-block
          width 18px
          height 18px
        &:hover
          background-color #dbdbdb
    .bell-content
      margin-top 18px
      overflow hidden
      .bell-item-margin
        margin 0 6px
        &:first-of-type
          margin-left 0
        &:last-of-type
          margin-right 0
  .bell-active
    a
      background-color #cd3333
      color #fff!important
</style>
