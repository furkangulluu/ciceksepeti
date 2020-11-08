<template>
  <div>
    <div class="product-header mt-3">
      <span><img src="../../assets/Path4183.png" alt=""></span>
      <span>Tüm Kategoriler</span>
    </div>
    <div class="product-content">
      <div class="row">
        <Product v-for="product in products" :key="product.id" :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import Product from './Product'
import {mapGetters,mapState} from 'vuex'
export default {
  components:{
    Product
  },
  computed: {
    ...mapGetters(['getProducts','getFilteredProducts']),
    ...mapState(['selectedCategory']),
    products(){
      return this.getFilteredProducts.length!=0?this.getFilteredProducts:this.getProducts
    }
  },
  created(){
    this.$store.dispatch('fetchProducts');
  },
}
</script>

<style lang="scss">
.product-header{
  font-weight: 200;
  font-size: 15px;
}
</style>
