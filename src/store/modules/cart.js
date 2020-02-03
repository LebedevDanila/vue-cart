export default {
  state: {
    cart: JSON.parse(localStorage.getItem('cart') || '[]')
  },
  mutations: {
    addToCart(state, newItem) {
      const foundItem = state.cart.find(item => item.title == newItem.title);

      if(!foundItem) {
        state.cart.push(newItem);
      } else {
        state.cart.forEach((item, index) => {
          if(item.title == newItem.title) {
            state.cart[index].count++;
          }
        });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeToCart(state, id) {
      state.cart.splice(id, 1);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    increaseQuantity(state, id) {
      if(state.cart[id].count >= 1) {
        state.cart[id].count++;
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    decreaseQuantity(state, id) {
      if(state.cart[id].count != 1) {
        state.cart[id].count--;
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
  actions: {   
  },
  getters: {
    itemsCart: state => state.cart,
    sumItems(state) {
      let sum = 0;

      if(state.cart.length) {
        state.cart.forEach(item => {
          sum += item.price * item.count;
        });
      }

      return sum;
    }
  }
}