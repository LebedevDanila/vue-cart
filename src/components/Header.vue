<template>
  <header class="header">
    <div class="header__wrapper container flexbox">
      <router-link to="/" class="header__logo">
        <img alt="Vue logo" src="../assets/logo.svg">
      </router-link>
      <form class="header__search" @submit.prevent="search">
        <input type="text" class="header__search-field" placeholder="Найти..." v-model="searchField">
        <button type="submit" class="header__search-submit">
          <img alt="Search" src="../assets/search.svg">
        </button>
        <div class="header__search-result" v-if="isOpenSearchResult">
          <h2>Результат поиска:</h2>
          <div class="close"><img src="../assets/close.svg" alt="" @click="isOpenSearchResult = false"></div>
          <div class="items" v-if="foundProducts.length">
            <div class="item" v-for="(product, index) in foundProducts" :key="index">
              <img :src="product.img" class="img">
              <div class="title">{{product.title}}</div>
              <div class="price">{{product.price}} <span>руб.</span></div>
            </div>
          </div>
          <div class="not-found" v-else>
            Нужный товар не найден!
          </div>
        </div>
      </form>
      <div class="header__option" id="cart-btn">
        <img alt="Vue logo" class="icon" src="../assets/cart.svg" @click="isOpenCart = !isOpenCart">
        <div class="counter" @click="isOpenCart = !isOpenCart">{{this.$store.getters.itemsCart.length}}</div>
        <Cart v-if="isOpenCart" />
      </div>
    </div>
  </header>
</template>

<script>
import Cart from '@/components/Cart.vue'

export default {
  name: 'Header',
  components: {
    Cart
  },
  data() {
    return {
      isOpenCart: false,
      isOpenSearchResult: false,
      searchField: '',
      foundProducts: []
    }
  },
  methods: {
    search() {
      if(!this.searchField) return false;

      this.isOpenSearchResult = true;

      /* Очищаем массив от прошлого поиска */
      this.foundProducts = [];

      /* Ищем нужный элемент */
      this.$store.getters.products.forEach(product => {
        const searchField = this.searchField.trim().toLowerCase();
        const currentProduct = product.title.trim().toLowerCase();

        if(currentProduct.includes(searchField)) {
          this.foundProducts.push(product);
        }
      });
    }
  }
}
</script>

<style lang="scss">
.header {
  background: #1e88e5;
  padding: 30px 0;
  border-radius: 0 0 50px 50px;
  &__wrapper {
    align-items: center;
  }
  &__logo {
    display: flex;
  }
  &__search {
    display: flex;
    height: 49px;
    flex-basis: 45%;
    flex-wrap: wrap;
    &-field {
      max-height: 100%;
      flex-basis: 82%;
      border-radius: 30px 0 0 30px;
      padding-left: 17px;
      border: none;
      color: #666;
      font-size: 17px;
      outline: none;
    }
    &-submit {
      max-height: 100%;
      padding: 14px;
      flex-basis: 18%;
      background: #fdd922;
      border-radius: 0 30px 30px 0;
      border: none;
      cursor: pointer;
      outline: none;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-result {
      flex-basis: 100%;
      background: #fff;
      min-height: 290px;
      border-radius: 15px;
      padding: 15px;
      border: 3px solid #fdd922;
      margin-top: 5px;
      z-index: 3;
      h2 {
        margin-bottom: 5px;
        width: 53%;
        display: inline-block;
      }
      .close {
        display: inline-block;
        width: 47%;
        text-align: right;
        height: 23px;
        img {
          width: 23px;
          height: 23px;
          cursor: pointer;
        }
      }
      .item {
        padding: 10px 0;
        border-bottom: 1px solid #dedede;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .img {
          width: 60px;
          height: 42px;
        }
        .title {
          font-size: 15px;
          max-width: 325px;
          font-weight: bold;
        }
        .price {
          font-weight: bold;
          font-size: 17px;
          span {
            color: #1e88e5;
          }
        }
      }
      .not-found {
        margin-top: 20px;
        font-size: 21px;
        text-align: center;
      }
    }
  }
  &__option {
    position: relative;
    height: 32px;
    img.icon {
      width: 32px;
      cursor: pointer;
    }
  }
  &__option:hover {
    transition: 0.7s all ease;
    transform: translateY(-8px);
  }
  &__option#cart-btn {
    margin-right: 17px;
    position: relative;
    .counter {
      width: 15px;
      height: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 11px;
      font-weight: bold;
      border-radius: 50%;
      background: #fdd922;
      position: absolute;
      bottom: -3px;
      right: -1px;
      cursor: pointer;
    }
  }
}
</style>