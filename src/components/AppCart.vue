<template>
  <section class="app-cart">
    <div class="container no-empty" v-if="items.length">
      app-cart
    </div>
    <div class="container empty" v-else>
      <h2 class="empty-cart-title">您的购物车还是空的！</h2>
      <router-link class="btn-shopping" to="/">
        马上去购物
      </router-link>
      <h2>为您推荐</h2>
      <div class="recommends">
        <recommend-item v-for="item of recommends" :key="item.id" :price="item.price" :name="item.name"/>
      </div>
    </div>
  </section>
</template>
<script>
import CartItem from './AppCartItem'
import RecommendItem from './AppRecommend'
import Api from '../api'

export default {
  name: 'AppCart',
  mounted () {
    this.getRecommends()
  },
  data() {
    return {
      items: [],
      recommends: []
    }
  },
  methods: {
    getItems () {
      Api.getItems().then(items => this.items = items)
    },
    getRecommends () {
      Api.getRecommends().then(recommends => this.recommends = recommends)
    }
  },
  components: {
    'cart-item': CartItem,
    'recommend-item': RecommendItem,
  }
}
</script>
<style lang="scss" scoped>
$green: #42b983;

.app-cart {
  .container {
    background: #ffffff;
  }
  .empty {
    text-align: center;
    padding: 70px 0 70px;
    .empty-cart-title {
      font-size: 2em;
      color: #b0b0b0;
    }
    .btn-shopping {
      display: inline-block;
      width: 170px;
      height: 48px;
      line-height: 48px;
      color: #fff;
      font-size: .9em;
      text-decoration: none;
      background: $green;
      transition: all .4s;
      &:hover {
        opacity: .8;
      }
    }
    .recommends {
      display: flex;
      flex-flow: row wrap;
      align-content: center;
    }
  }
}
</style>


