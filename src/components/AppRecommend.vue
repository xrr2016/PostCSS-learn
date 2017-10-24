<template>
  <div class="recommend">
    <img :src="imgSrc" :alt="name">
    <p class="name">{{ name }}</p>
    <p class="price">{{ price }}元</p>
    <div class="add" @click="addToCart">加入购物车</div>
  </div>
</template>
<script>
export default {
  props: {
    id: Number,
    name: String,
    price: Number,
    imgSrc: String
  },
  methods: {
    addToCart () {
      this.$emit('addToCart', this.id)
    }
  }
}
</script>
<style lang="scss" scoped>
.recommend {
  flex: 1;
  min-width: 230px;
  margin: 0 10px 10px 0;
  padding-top: 40px;
  height: 300px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  text-align: center;
  transition: all .3s;
  overflow: hidden;
  box-shadow: 0 0 1px rgba(0, 0, 0, .09);
  cursor: pointer;
  img {
    width: 140px;
  }
  &:hover {
    transform: translateY(-4px);
    .add {
      bottom: 10px;
    }
  }
  .name {
    font-size: .9em;
    margin-bottom: 0;
    margin-top: 20px;
  }
  .price {
    margin-top: 0;
    color: #42b983;
  }
  .add {
    position: relative;
    bottom: -42px;
    width: 120px;
    height: 30px;
    line-height: 30px;
    color: #42b983;
    text-align: center;
    font-size: .9em;
    border: 1px solid #42b983;
    &:hover {
      color: #fff;
      background: #42b983;
    }
  }
}
.margin-right-0px {
  margin-right: 0px;
}
</style>

