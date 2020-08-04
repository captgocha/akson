<template>
  <div 
    class="v-tab"
    v-show="isActive"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-tab',
  props: {
    name: {
      type: String,
      required: true
    },
    mark: {
      type: String,
      default: () => '18'
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isActive: false
  }),
  mounted() {
    this.isActive = this.selected
  }
}
</script>

<style lang="scss" scoped>

</style>
