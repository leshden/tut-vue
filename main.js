const app = Vue.createApp({
  data() {
    return {
        cart: 0,
        product: 'Socks',
        brand: 'Mo-mo',
        selectedVariant: 0,
        inventory: 100,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants:[
          {id: 123, color: 'pink', image: './assets/images/socks_pink.jpg', quantity: 50},
          {id: 124, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
        ],
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateVariant(index) {
      this.selectedVariant = index;
      console.log(index);
    }
  },

  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    }
  }
})
