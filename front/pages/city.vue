<template>
  <section class="container">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{item}}
      </li>
    </ul>
    <nuxt-link class="button" to="/">
      Home page
    </nuxt-link>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  asyncData({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head() {
    return {
      title: `About Page (${this.name}-side)`
    }
  },
  async mounted() {
    let res = await axios.get('/city/list')
    this.list = res.data.list
  }
}
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
