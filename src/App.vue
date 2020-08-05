<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import vHeader from '@/components/v-header'

export default {
  name: 'App',
  components: {
    vHeader
  }
}
</script>

<style lang="scss">
#app {
  @include main-font;
}

.container {
  max-width: $containerSize;
  margin: 0 auto;
}
</style>
