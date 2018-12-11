<template>
  <div class="search-wrapper">
    <div class="search-content">
      <input id="MsSearch" v-model="searchContent" class="search-input" autocomplete="off" type="text" maxlength="50" placeholder="搜索音频、声优、音单、用户">
      <button class="search-btn" @click="search"></button>
    </div>
    <div class="search-history" v-show="searchHistoryShow">
      <div class="search-history-content" id="SearchHistoryContent">
        <div class="search-history-title">
          搜索历史
        </div>
        <ul class="search-history-list">
          <li class="search-history-item" v-for="(historyItem, index) in historyItems" :key="historyItem">
            <span class="search-history-item-keyword" @click="searchFromHistory(historyItem)">{{ historyItem }}</span>
            <button class="search-history-item-btn" @click="deleteHistoryItem(index)">
              <i class="search-history-item-delete"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MsStorage from '@/helpers/MsStorage'
export default {
  data () {
    return {
      searchContent: '',
      searchHistory: [],
      searchHistoryShow: false
    }
  },
  mounted () {
    this.searchHistory = JSON.parse(MsStorage.MsSearchHistory.getStorage()) || []
    document.getElementById('MsSearch').onfocus = this.MsSearchShowCheck
    document.getElementById('MsSearch').oninput = this.MsSearchShowCheck
    document.getElementById('MsSearch').onkeypress = this.MsSearchKeyPress
    document.getElementById('MsSearch').onblur = this.MsSearchOnblur
    document.getElementById('SearchHistoryContent').onmousedown = this.MsSearchPrevent
  },
  computed: {
    historyItems () {
      return this.searchHistory.slice(0, 5)
    }
  },
  methods: {
    search () {
      if (this.searchContent == false) {
        alert('请输入关键词')
        document.getElementById('MsSearch').focus()
      } else {
        alert('您查询了:' + this.searchContent)
        this.searchHistory.unshift(this.searchContent)
        MsStorage.MsSearchHistory.saveStorage(JSON.stringify(this.searchHistory))
        this.searchContent = ''
        document.getElementById('MsSearch').focus()
      }
    },
    searchFromHistory (historyItem) {
      alert('您查询了:' + historyItem)
    },
    deleteHistoryItem (index) {
      this.searchHistory.splice(index, 1)
      MsStorage.MsSearchHistory.saveStorage(JSON.stringify(this.searchHistory))
    },
    MsSearchShowCheck () {
      if (this.searchHistory.length > 0 && !this.searchContent) {
        this.searchHistoryShow = true
      } else {
        this.searchHistoryShow = false
      }
    },
    MsSearchKeyPress (e) {
      if (e.keyCode == 13) {
        this.search()
      }
    },
    MsSearchOnblur () {
      this.searchHistoryShow = false
    },
    MsSearchPrevent (e) {
      // 现代浏览器阻止默认事件
      if (e && e.preventDefault) {
        e.preventDefault()
      } else {
        // IE阻止默认事件
        window.event.returnValue = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .search-wrapper
    height 40px
    line-height 40px
    color #fff
    // float left
    display inline-block
    .search-content
      opacity .9
      position relative
      .search-input
        width 220px
        height 29px
        line-height 29px
        padding 0 34px 0 10px
        outline 0
        border-radius 20px
        color #000
        background-color #fff
        font-size 12px
        box-sizing border-box
      .search-btn
        position absolute
        width 34px
        height 29px
        right 0
        top 5.5px
        margin 0
        padding 0
        border 0
        outline 0
        border-top-right-radius 20px
        border-bottom-right-radius 20px
        outline 0
        cursor pointer
        &:hover:before
          background url(//static.missevan.com/assets/www/images/build/sprite-icons@svg.51417821.svg) -372px -272px/427px 402px
        &:before
          content ''
          width 18px
          height 18px
          display block
          margin auto
          background url(//static.missevan.com/assets/www/images/build/sprite-icons@svg.51417821.svg) -350px -272px/427px 402px
    .search-history
      position relative
      .search-history-content
        position absolute
        z-index 99
        padding 6px 0
        width 220px
        border-radius 4px
        background-color #fff
        font-size 13px
        box-sizing border-box
        box-shadow 0 0 3px 0 rgba(0,0,0,.2)
        .search-history-title
          height 20px
          line-height 20px
          color #9e9e9e
          position relative
          &:before, &:after
            content ''
            border-bottom 1px solid #9e9e9e
            position absolute
            width calc(50% - 50px)
            top 9px
          &:before
            left 10px
          &:after
            right 10px
        .search-history-list
          .search-history-item
            height 30px
            line-height 30px
            padding 0 10px
            box-sizing border-box
            width 100%
            position relative
            cursor pointer
            color #000
            text-align left
            &:hover
              background-color #e0e0e0
            .search-history-item-keyword
              width 176px
              display block
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
            .search-history-item-btn
              background-color transparent
              position absolute
              width 30px
              height 30px
              right 0
              top 0
              border 0
              padding 0
              margin 0
              cursor pointer
              outline 0
              &:hover .search-history-item-delete
                background-position -450px -353px
              .search-history-item-delete
                background-image url(//static.missevan.com/assets/www/images/build/sprite-icons@2x.bde7b546.png)
                background-position -469px -365px
                background-size 557px 547px
                width 10px
                height 10px
                display block
                margin auto
</style>
