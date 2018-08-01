<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss" scoped>
#app {
  height: 100%;
  width: 100%;
  background-image: url('./assets/image/homepagebg.png');
  background-size: cover;
}
</style>
