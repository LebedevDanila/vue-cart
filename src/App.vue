<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  color: #3F3F3F;
  background: #f2f3f7;
}
.container {
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
}
a {
  color: #3F3F3F;
  text-decoration: none;
}
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
}
.flexbox {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>