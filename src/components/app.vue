<template>
  <div id="app">
      <div class="ui fixed inverted menu">
        <h1 class="header item">All Things Westies</h1>
        <router-link to="/products" class="item">Products</router-link>
        <router-link to="/cart" class="item">Cart</router-link>
        <router-link to="/profile" class="item">Profile</router-link>
      </div>
      <div class="ui main text container">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default { 
};
</script>

<style lang="scss">
 .main {
   &.container {
      margin-top: 7em;
   }
 }
</style>

