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
  width: 100%;
  background-image: url('./assets/image/homepagebg.png');
  background-repeat: repeat-y;
  background-size: contain;
}
</style>
