<template>
  <section class="app-cart-item">
    <div class="item item-select-box">
      <span
        class="select-box material-icons"
        :class="{'selected': thisSelected}"
        @click="toggleSelect">done</span>
    </div>
    <div class="item item-img">
      <img :src="imgSrc" :alt="name">
    </div>
    <div class="item item-name">{{ name }}</div>
    <div class="item item-price">{{ price }}元</div>
    <div class="item item-number">
      <div class="change-number">
        <div class="change-btn" @click="removeOne">
          <i class="material-icons">remove</i></div>
        <span>{{ number }}</span>
        <div class="change-btn" @click="addOne">
          <i class="material-icons">add</i></div>
      </div>
    </div>
    <div class="item item-total-price">{{ totalPrice }}元</div>
    <div class="item item-actions">
      <span class="delete-btn" @click="removeFromCart">x</span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AppCartItem',
  props: {
    id: Number,
    number: Number,
    name: String,
    selected: Boolean,
    price: Number,
    imgSrc: String
  },
  methods: {
    toggleSelect () {
      this.$emit('toggleSelect', this.id)
    },
    addOne() {
      this.$emit('addOne', this.id)
    },
    removeOne() {
      this.$emit('removeOne', this.id)      
    },
    removeFromCart () {
      this.$emit('removeFromCart', this.id)
    }
  },
  computed: {
    thisSelected () {
      return this.selected
    },
    totalPrice() {
      return this.number * this.price
    }
  }
}
</script>
<style lang="scss" scoped>
.app-cart-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #333;
  font-weight: 500;
  padding: 15px 0;
  border-top: 1px solid #e0e0e0;
  .item-img {
    img {
      width: 80px;
    }
  }
  .item-name {
    color: #424242;
  }
  .item-number {
    display: flex;
    justify-content: center;
    align-items: center;
    .change-number {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 150px;
      height: 40px;
      border: 1px solid #e0e0e0;
      .change-btn {
        cursor: pointer;
        transition: all 0.3s;
        .material-icons {
          width: 40px;
          height: 40px;
          line-height: 40px;
        }
        &:hover {
          background: #e0e0e0;
        }
      }
    }
  }
  .item-total-price {
    color: #42b983;
  }
  .item-actions {
    .delete-btn {
      display: inline-block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      line-height: 24px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        color: #fff;
        background: #42b983;
      }
    }
  }
}
</style>


