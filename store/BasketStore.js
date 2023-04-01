import { defineStore } from 'pinia';

export const useBasketStore = defineStore('basketStore', {
  state: () => ({
    basket: [],
    product: [],
    total: 0
  }),
  getters: {
    getQuantityBasket: state => state.basket.length
  },
  actions: {
    addCartToBasket(cart) {
      if (this.basket.length) {
        let isProductExist = false;
        this.basket.forEach(item => {
          if (item.id === cart.id) {
            isProductExist = true;
          }
        });

        if (!isProductExist) {
          this.basket.unshift(cart);
          this.product.push({
            title: cart.title,
            subtitle: cart.subtitle,
            quantity: cart.quantity,
            price: cart.price * cart.quantity,
            gram: cart.gram
          });
        }
      } else {
        this.basket.unshift(cart);
        this.product.push({
          title: cart.title,
          subtitle: cart.subtitle,
          quantity: cart.quantity,
          price: cart.price,
          gram: cart.gram
        });
      }
    },
    addTotalPrice(total) {
      this.total = total;
    },
    icrementQuantity(index) {
      this.basket[index].quantity++;
      this.product[index].quantity++;
    },
    decrementQuantity(index) {
      if (this.basket[index].quantity > 1) {
        this.basket[index].quantity--;
        this.product[index].quantity--;
      }
    },
    deleteCartFromBasket(index) {
      this.basket.splice(index, 1);
    },
    deleteAllCart() {
      this.basket = [];
      this.product = [];
    }
  }
});
