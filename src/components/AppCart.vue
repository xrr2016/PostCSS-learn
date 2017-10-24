<template>
  <section class="app-cart">
    <div class="container" v-if="items.length">
     <div class="cart-goods-list">
      <div class="cart-header">
        <div class="header-item item-select-box">
          <span 
            class="select-box material-icons"
            :class="{'selected': selectedAll}"
            @click="toggleSelectAll">done</span>
          <span class="text">全选</span>
        </div>
        <div class="header-item item-img">&nbsp;</div>
        <div class="header-item item-name">商品名称</div>
        <div class="header-item item-price">单价</div>
        <div class="header-item item-number">数量</div>
        <div class="header-item item-total-price">小计</div>
        <div class="header-item item-actions">操作</div>
      </div>
      <div class="cart-main">
        <cart-item 
          v-for="item of items" 
          :key="item.id" 
          :name="item.name" 
          :price="item.price"
          :imgSrc="item.img"
          :id="item.id"
          :selected="item.selected"
          :number="item.number"
          @addOne="addOne"
          @removeOne="removeOne"
          @toggleSelect="updateTotal"
          @removeFromCart="removeFromCart"
        />
      </div>
      <div class="cart-footer">
        <router-link to="/" tag="span" class="return-link">继续购物</router-link>
        <span class="info">
          共
          <span class="green">&nbsp;{{ items.length }}&nbsp;</span>
          件商品，已选择 
          <span class="green">&nbsp;{{ selectedNumber }}&nbsp;</span>
          件
        </span>
        <span class="checkout-btn" 
          :class="{'disabled': !canCheckout}">去结算</span>
        <span class="total green">
          合计：
          <em class="total-price">{{ totalPrice }}</em>
          元
        </span>
      </div>
     </div>
      <h2 class="recommend-title">买购物车中商品的人还买了</h2>
      <div class="recommends">
        <recommend-item
          v-for="item of recommends" 
          :key="item.id"
          :price="item.price" 
          :name="item.name" 
          :imgSrc="item.img"
          :id="item.id"
          @addToCart="addToCart"
        />
      </div>
    </div>
    <div class="container empty-cart" v-else>
      <h2 class="empty-cart-title">您的购物车还是空的！</h2>
      <router-link class="btn-shopping" to="/">马上去购物</router-link>
      <h2 class="recommend-title">为您推荐</h2>
      <div class="recommends">
        <recommend-item 
          v-for="item of recommends" 
          :key="item.id"
          :name="item.name" 
          :price="item.price" 
          :imgSrc="item.img"
          :id="item.id"
          @addToCart="addToCart"
        />
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
  mounted() {
    this.getItems()
    this.getRecommends()
  },
  data() {
    return {
      items: [],
      recommends: [],
      selectedAll: false
    }
  },
  methods: {
    // 全选 & 取消全选
    toggleSelectAll() {
      if (this.selectedAll) {
        this.selectedAll = false
        this.items.forEach(item => (item.selected = false))
      } else {
        this.selectedAll = true
        this.items.forEach(item => (item.selected = true))
      }
    },
    findItem(id) {
      return this.items.find(item => item.id === id)
    },
    addOne(id) {
      const item = this.findItem(id)
      item.number += 1
    },
    removeOne(id) {
      const item = this.findItem(id)
      if (item.number) {
        item.number -= 1
      }
    },
    addToCart(id) {
      const item = this.recommends.find(item => item.id === id)
      this.items = this.items.concat(
        Object.assign(item, { selected: false, number: 1 })
      )
    },
    updateTotal(id) {
      const item = this.findItem(id)
      item.selected = !item.selected
      if (this.selectedNumber === this.items.length) {
        this.selectedAll = true
      } else {
        this.selectedAll = false
      }
    },
    removeFromCart(id) {
      const result = window.confirm('确定要删除吗？')
      if (result) {
        const index = this.items.findIndex(item => item.id === id)
        this.items.splice(index, 1)
      }
    },
    getItems() {
      return new Promise(resolve => {
        Api.getItems().then(items => {
          this.items = items.map(item =>
            Object.assign(item, { selected: false, number: 1 })
          )
          resolve()
        })
      })
    },
    getRecommends() {
      Api.getRecommends().then(recommends => (this.recommends = recommends))
    }
  },
  computed: {
    selectedNumber() {
      return this.items.filter(item => item.selected).length
    },
    totalPrice() {
      const selected = this.items.filter(item => item.selected)
      if (!selected.length) return 0
      let total = 0
      for (let i = 0; i < selected.length; i++) {
        total += selected[i].price * selected[i].number
      }
      return total
    },
    canCheckout() {
      return this.items.some(item => item.selected)
    }
  },
  components: {
    'cart-item': CartItem,
    'recommend-item': RecommendItem
  }
}
</script>
<style lang="scss" scoped>
$green: #42b983;

.app-cart {
  .cart-goods-list {
    .cart-header {
      background: #fff;
      overflow: hidden;
      .header-item {
        float: left;
        line-height: 70px;
        font-size: 0.9em;
      }
      .item-select-box {
        .select-box {
          vertical-align: -3px;
          margin: 0 15px 0 24px;
        }
      }
    }
    .cart-main {
      background: #fff;
    }
    .cart-footer {
      position: sticky;
      bottom: 0px;
      margin-top: 20px;
      padding-left: 24px;
      font-size: 0.9em;
      height: 50px;
      color: #757575;
      line-height: 50px;
      background: #fff;
      box-shadow: 0 0px 2px rgba(0, 0, 0, 0.04);
      .green {
        color: $green;
      }
      .return-link {
        padding-right: 16px;
        border-right: 1px solid #eee;
      }
      .info {
        margin-left: 16px;
      }
      .total {
        float: right;
        .total-price {
          font-size: 2em;
          font-weight: 600;
        }
      }
      .checkout-btn {
        display: block;
        float: right;
        width: 200px;
        text-align: center;
        font-size: 1.4em;
        margin-left: 50px;
        background: #42b983;
        color: #fff;
      }
      .checkout-btn.disabled {
        color: #b0b0b0;
        background: #e0e0e0;
      }
    }
  }
  .empty-cart {
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
      font-size: 0.9em;
      text-decoration: none;
      background: $green;
      transition: all 0.4s;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  .select-box {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #e0e0e0;
    color: #fff;
    background: #fff;
    &::hover {
      color: #757575;
    }
  }
  .select-box.selected {
    color: #fff;
    background: $green;
  }
  .recommends {
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    padding-left: 10px;
  }
  .recommend-title {
    position: relative;
    font-weight: normal;
    color: #757575;
    text-align: center;
    margin: 120px 0 60px 0;
    &::before,
    &::after {
      position: absolute;
      content: '';
      top: 50%;
      left: 0;
      height: 0;
      width: 30%;
      border-top: 1px solid #ccc;
    }
    &::after {
      left: auto;
      right: 0;
    }
  }
}
</style>


