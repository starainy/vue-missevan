<template>
  <div class="podcast-item-wrapper" @mouseenter="videoAutoPlay(context, contexturl, true)" @mouseleave="videoAutoPlay(context, contexturl, false)">
    <div class="podcast-item-des">{{ username }}<br/>{{ soundstr }}</div>
    <img :src="avatarurl" alt="">
    <div class="podcast-item-username">
      <div class="podcast-item-username-inner">{{ username }}</div>
    </div>
  </div>
</template>

<script>
import audioInfo from '@/helpers/audioInfo'
export default {
  props: {
    contexturl: {
      type: String
    },
    avatarurl: {
      type: String
    },
    username: {
      type: String
    },
    soundstr: {
      type: String
    }
  },
  data () {
    return {
      context: null,
      // contexturl: 'http://static.missevan.com/MP3/201504/28/733399a15bd434a0bbf250676a464176165026.mp3',
      source: null
    }
  },
  mounted () {
      this.context = new (window.AudioContext || window.webkitAudioContext)()
      // 如果能够自动播放
      if (audioInfo.autoplay) {
        this.videoAutoPlay(this.context, this.contexturl,false)
      }
  },
  methods: {
    videoAutoPlay (context, contexturl, isenter) {
      this.playAudio(context, contexturl, isenter)
    },
    play (context, decodeBuffer) {
      this.source = context.createBufferSource()
      this.source.buffer = decodeBuffer
      this.source.connect(context.destination)
      this.source.start(0)
    },
    stop (context, decodeBuffer) {
      this.source.disconnect(context.destination)
    },
    playAudio (context, url, isenter) {
      this.request(url).then((audioMedia) => {
        context.decodeAudioData(audioMedia, decode => {
          isenter ? this.play(context, decode) : this.stop(context, decode)
        })
      })
    },
    request (url) {
      return new Promise (resolve => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        // 这里需要设置xhr response的格式为arraybuffer
        // 否则默认是二进制的文本格式
        xhr.responseType = 'arraybuffer'
        xhr.onreadystatechange = function () {
            // 请求完成，并且成功
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.response)
            }
        }
        xhr.send()
      })
    }

  },

}
</script>

<style lang="stylus" scoped>
  @keyframes shake
    25%
      transform rotate(1deg)
    50%
      transform rotate(0deg)
    75%
      transform rotate(-1deg)
    100%
      transform rotate(0deg)
  .podcast-item-wrapper
    width 66px
    height 100px
    border-radius 9px
    padding 2px
    transition .5s
    cursor pointer
    float left
    background-color #000
    position relative
    &:hover
      animation shake 0.3s infinite
      -webkit-animation shake 0.3s infinite
      .podcast-item-des
        display block
    .podcast-item-des
      position absolute
      right 75px
      top 0
      width 100px
      color #000
      background-color #fff
      font-size 14px
      border 3px solid #000
      border-radius 10px
      padding 10px
      word-break break-word
      text-align left
      display none
    img
      width 66px
      height 66px
      border-top-left-radius 9px
      border-top-right-radius 9px
      float left
    .podcast-item-username
      display table
      font-size 12px
      color #fff
      float left
      margin-top 2px
      .podcast-item-username-inner
        height 30px
        width 100px
        line-height 15px
        display table-cell
        vertical-align middle
        word-break break-word
        font-weight 600
</style>
