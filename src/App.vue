<template>
  <div id="app">
    <header>
      <div class="container">
        <img class="logo" src="./assets/logo.png" alt="Vue.js Shopping Cart">
        <h2 class="title">我的购物车</h2>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
$green: #42b983;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  header {
    height: 102px;
    margin: 0 auto;
    padding: 0 16px 0 24px;
    background-color: #fff;
    border-bottom: 2px solid $green;
    .logo {
      margin: 26px 26px 0 0;
      height: 48px;
    }
    .title {
      display: inline-block;
      font-weight: 400;
      letter-spacing: 0.02em;
      font-size: 1.8em;
      vertical-align: 15px;
    }
  }
  main {
    margin-top: 40px;
  }
}
</style>
