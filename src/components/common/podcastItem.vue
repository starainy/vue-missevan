<template>
  <div class="podcast-item-wrapper" id="podcastItemWrapper" @mouseenter="videoAutoPlay">
    <div class="podcast-item-des">小二郎在放牛<br/>【Count】头像音，再不过我就疯了！</div>
    <img src="//static.missevan.com/avatars/201409/28/8e95bcc806d0ee419c743e87c6dad160205256.png" alt="">
    <div class="podcast-item-username">
      <div class="podcast-item-username-inner">Bloodsnow寒蕊</div>
    </div>
  </div>
</template>

<script>
import audioInfo from '@/helpers/audioInfo'
export default {
  data () {
    return {
      // media: null
    }
  },
  methods: {
    videoAutoPlay () {
      // var media = new AudioContext()
      // media.play()
      // debugger
      function request (url) {
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
      function play (context, decodeBuffer) {
          // 调用resume恢复播放
          context.resume()
          let source = context.createBufferSource()
          source.buffer = decodeBuffer
          source.connect(context.destination)
          source.start(0)
      }

      function playAudio (context, url) {
          request(url).then((audioMedia) => {
            context.decodeAudioData(audioMedia, decode => play(context, decode))
          })
      }

      let context = new (window.AudioContext || window.webkitAudioContext)()
      // 如果能够自动播放
      if (audioInfo.autoplay) {
          playAudio(context, 'http://static.missevan.com/MP3/201504/28/733399a15bd434a0bbf250676a464176165026.mp3')
      }
    },

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
