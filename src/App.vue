<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import VHeader from '@/components/v-header'

export default {
  name: 'App',
  components: {
    VHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans', 'Arial', sans-serif;
}

.container {
  max-width: 1180px;
  margin: 0 auto;
}
</style>
