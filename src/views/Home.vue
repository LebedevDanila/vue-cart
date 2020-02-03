<template>
  <div class="home page">
    <main class="main">
      <div class="main__wrapper container flexbox">
        <div class="main__content">
          <Products />
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.main {
  padding: 45px 0;
  &__content {
    flex-basis: 100%;
  }
}
</style>

<script>
import Products from '@/components/Products.vue'

export default {
  name: 'home',
  components: {
    Products
  }
}
</script>
