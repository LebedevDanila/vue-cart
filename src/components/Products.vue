<template>
  <div class="products flexbox">
    <div class="product" v-for="(product, index) in this.$store.getters.products" :key="index">
      <img class="product__img" alt="product img" :src="product.img">
      <div class="product__title">{{product.title}}</div>
      <div class="product__price"><span>{{product.price}} <small>руб.</small></span></div>
      <div class="product__btns">
        <button class="product__cart" @click="handlerAddToCart(index)">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Products',
  methods: {
    ...mapMutations(['addToCart']),
    handlerAddToCart(index) {
      const newItem = {
        title: this.$store.getters.products[index].title,
        img: this.$store.getters.products[index].img,
        price: this.$store.getters.products[index].price,
        count: 1
      }
      this.addToCart(newItem);
    }
  }
}
</script>

<style lang="scss">
.product {
  background: #fff;
  padding: 15px;
  flex-basis: 23%;
  border-radius: 5px;
  margin-bottom: 25px;
  &__img {
    margin: 0 auto;
    display: block;
    margin-bottom: 15px;
    height: 140px;
  }
  &__title {
    font-size: 18px;
    text-align: center;
    font-weight: 400;
  }
  &__price {
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 22px;
    }
    span {
      font-size: 22px;
      font-weight: bold;
      margin-right: 5px;
      small {
        color: #fdd922;
      }
    }
  }
  &__btns {
    display: flex;
    justify-content: space-between;
    button {
      height: 45px;
      background-color: #1e88e5;
      color: #fff;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      padding: 0;
      outline: none;
      border-bottom: 2px solid #0d47a1;
      img {
        width: 30px;
      }
    }
    button:hover {
      transition: .5s all ease;
      border-bottom: none;
      background: #0d47a1;
    }
  }
  &__cart {
    flex-basis: 100%;
    font-weight: bold;
  }
}
</style>