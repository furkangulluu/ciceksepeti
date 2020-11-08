<template>
<div>
  <div class="container">
    <Breadcrumb />
    <Categories />
    <Products />
  </div>
  <hr>
  <div class="container">
    <Campaigns />
  </div>
</div>
</template>

<script>
import Breadcrumb from './BreadCrumb'
import Categories from './Categories'
import Products from './product/Products'
import Campaigns from './campaign/Campaigns'

export default {
  components:{
    Breadcrumb,
    Categories,
    Products,
    Campaigns
  }
}
</script>

<style lang="scss">
</style>
