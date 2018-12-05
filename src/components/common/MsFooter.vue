<template>
  <div class="main-footer">
    <p class="footer-row parting-line about-us">
      <a href="">建议与反馈</a>
      <a href="">APP下载</a>
      <a href="">用户协议</a>
      <a href="">探索与发现</a>
      <a href="">联系我们</a>
      <a href="">加入我们</a>
      <a href="">百度百科</a>
    </p>
    <p class="footer-row">
      友情链接：
      <a href="">斗破苍穹漫画</a>
      <a href="">轻之文库</a>
      <a href="">喵特</a>
      <a href="">半次元</a>
      <a href="">萌主页</a>
      <a href="">快看漫画</a>
      <a href="">腾讯动漫频道</a>
      <a href="">第一弹</a>
      <a href="">豆腐</a>
      <a href="">寒武纪年</a>
    </p>
    <p class="footer-row parting-line">
      <span>京ICP备14055174号-1</span>
      <span><a href=""><img src="//static.missevan.com/system/beianicon.png" style="vertical-align: top;"> 京公网安备 11010502034762 号</a></span>
      <span>网络文化经营许可证: 京网文 [2017] 6429-733 号</span>
    </p>
    <p class="footer-row">
      北京喵斯拉网络科技有限公司 地址: 北京朝阳区望京SOHO塔二B座1503 电话: 010-64190806
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .main-footer
    margin-top 50px
    padding 15px 0
    border-top 1px solid #e0e0e0
    .footer-row
      color #9e9e9e
      font-size 14px
      margin 10px 0
      a
        margin 0 10px
        position relative
        color #9e9e9e
        &:hover
          color #616161
      span
        margin 0 10px
        position relative
        color #9e9e9e
        a
          margin 0
          &:hover
            color #616161
    .parting-line a, .parting-line span
      &:not(:last-child):after
        content ''
        position absolute
        right -14px
        top 0
        height 19px
        border-left 1px solid #9e9e9e
    .about-us
      a
        color #616161
        &:hover
          color #424242
</style>
