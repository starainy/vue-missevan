<template>
  <div>
    <MsHeader></MsHeader>
    <nav-content></nav-content>
  </div>
</template>

<script>
import MsHeader from './common/MsHeader'
import navContent from './navContent/navContent'
export default {
  components: {
    MsHeader,
    navContent
  }
}
</script>

<style lang="stylus" scoped>

</style>
