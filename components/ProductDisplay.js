app.component('product-display', {
  props: {
    premium:{
      type: Boolean,
      required: true
    }
  },
  template:
  `<div class='product-display'>
    <div class='product-container'>
      <div class='product-image'>
        <img :src="image" />
      </div>
      <div class='product-info'>
        <h1>{{title}}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{shipping}}</p>

        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>
        <div class='color-circle' :style="{backgroundColor: variant.color}" v-for='(variant, index) in variants' :key='variant.id' @mouseover="updateVariant(index)"></div>

        <button class='button' v-on:click='addToCart' :disabled='!inStock'>Add to Cart</button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted='addReview'></review-form>
  </div>`,
  data() {
    return {
        product: 'Socks',
        brand: 'Mo-mo',
        selectedVariant: 0,
        inventory: 100,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants:[
          {id: 123, color: 'pink', image: './assets/images/socks_pink.jpg', quantity: 50},
          {id: 124, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
        ],
        reviews: []
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
      console.log(index);
    },
    addReview(review) {
      this.reviews.push(review);
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
    },
    shipping() {
      if (this.premium) return 'Free';
      return 2.99
    }
  }
})
