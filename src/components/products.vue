<template>
  <div class="products">
        <div class="ui search">
          <div class="ui item input">
            <input
              class="prompt"
              type="text"
            />
            <i class="search icon" />
          </div>
          <div class="results" ></div>
        </div>
        <h1 class="ui dividing header">Shop by Category</h1>
        <div class="ui doubling four column grid">
          <div class="column segment secondary">
            <i class="coffee icon" />
            <div class="category-title">Gifts</div>
          </div>
          <div class="column segment secondary">
            <i class="food icon" />
            <div class="category-title">Treats and Food</div>
          </div>
          <div class="column segment secondary">
            <i class="heart icon" />
            <div class="category-title">Top Picks</div>
          </div>
          <div class="column segment secondary">
            <i class="paw icon" />
            <div class="category-title">For Dogs</div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
};
</script>
