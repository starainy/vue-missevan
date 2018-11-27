<template>
  <div>
    <MsHeader></MsHeader>
    <nav-content></nav-content>
    <div class="homepage-container">
      <carousel></carousel>
    </div>
  </div>
</template>

<script>
import MsHeader from './common/MsHeader'
import navContent from './navContent/navContent'
import carousel from './common/carousel'
export default {
  components: {
    MsHeader,
    navContent,
    carousel
  }
}
</script>

<style lang="stylus" scoped>
.homepage-container
  width 80%
  margin 15px auto 0
  transition .5s
</style>
