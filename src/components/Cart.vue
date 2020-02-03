<template>
  <div class="cart">
    <h2 class="cart__title">Корзина</h2>
    <div class="cart__content" v-if="this.$store.getters.itemsCart.length">
      <div class="cart__item" v-for="(item, index) in this.$store.getters.itemsCart" :key="index">
        <img class="cart__item-img" alt="product img" :src="item.img">
        <div class="cart__item-title">{{item.title}}</div>
        <div class="cart__item-price">{{item.price * item.count}} <span>руб.</span></div>
        <div class="cart__item-quantity">
          <button @click="decreaseQuantity(index)">-</button> 
          <span>{{item.count}}</span> 
          <button @click="increaseQuantity(index)">+</button></div>
        <button class="cart__item-delete" @click="removeToCart(index)"><img alt="delete" src="../assets/delete.svg"></button>
      </div>
      <div class="cart__result">
        <b>Итого:</b> {{this.$store.getters.sumItems}} <span>руб.</span>
      </div>
    </div>
    <div class="cart__empty" v-else>
      Товаров пока нету!
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'cart',
  methods: {
    ...mapMutations(['removeToCart', 'increaseQuantity', 'decreaseQuantity'])
  }
}
</script>

<style lang="scss">
.cart {
  width: 490px;
  min-height: 289px;
  background: #fff;
  position: absolute;
  left: -195px;
  margin-top: 8px;
  padding: 15px;
  border-radius: 15px;
  z-index: 3;
  border: 3px solid #fdd922;
  &__title {
    margin-bottom: 5px;
  }
  &__item {
    padding: 10px 0;
    border-bottom: 1px solid #dedede;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    &-img {
      width: 60px;
      height: 42px;
    }
    &-title {
      font-size: 14px;
      max-width: 155px;
      font-weight: bold;
    }
    &-price {
      font-weight: bold;
      font-size: 15px;
      span {
        color: #1e88e5;
      }
    }
    &-quantity {
      display: flex;
      align-items: center;
      button {
        width: 26px;
        height: 26px;
        background: #1e88e5;
        color: #fff;
        cursor: pointer;
        border-radius: 3px;
        border: none;
      }
      button:first-child {
        margin-right: 6px;
      }
      button:last-child {
        margin-left: 6px;
      }
      span {
        font-size: 15px;
        font-weight: bold;
        width: 17px;
        text-align: center;
      }
    }
    &-delete {
      margin-left: 10px;
      border-radius: 3px;
      border: none;
      background: #e53935;
      width: 25px;
      height: 25px;
      padding: 4px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }
  &__result {
    text-align: right;
    margin-top: 10px;
    font-size: 20px;
    span {
      font-weight: 600;
      color: #1e88e5;
    }
  }
  &__empty {
    font-size: 22px;
    font-weight: 600;
    margin-top: 15px;
    text-align: center;
  }
}
</style>