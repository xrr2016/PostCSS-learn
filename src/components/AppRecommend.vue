<template>
  <div class="recommend">
    <p class="name">{{ name }}</p>
    <p class="price">{{ price }}</p>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    price: Number
  }
}
</script>
<style lang="scss" scoped>
.recommend {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  height: 300px;
  background: #fff;
  text-align: center;
  .price {
    color: #42b983;
  }
}
</style>

