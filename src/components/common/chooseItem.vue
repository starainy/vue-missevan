<template>
  <ul>
    <li class="choose-item" :class="{ 'choose-item-active': selectItem === chooseItem }" v-for="chooseItem in chooseItems" :key="chooseItem" @click="selectItem = chooseItem">{{ chooseItem }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    chooseItems: {
      type: Array
    }
  },
  data () {
    return {
      // chooseItems: ['三日', '本周', '本月'],
      selectItem: ''
    }
  },
  mounted () {
    if (this.chooseItems.length > 1) {
      this.selectItem = this.chooseItems[0] || ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .choose-item
    border 1px solid #ccd0d7
    cursor pointer
    padding 0 10px
    color #555
    font-size 12px
    line-height 22px
    float left
    margin-left -1px
    &:first-of-type
      margin-left 0
      border-top-left-radius 3px
      border-bottom-left-radius 3px
    &:last-of-type
      border-top-right-radius 3px
      border-bottom-right-radius 3px
    &:hover
      background-color #dbdbdb
      color #333
  .choose-item-active
    background-color #dbdbdb
    color #333
</style>
