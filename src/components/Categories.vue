<template>
  <div>
    <div class="cat-header">
      <i class="fas fa-align-justify"></i>
      <span>Kategoriler</span>
    </div>
    <div class="cat-content">
      <div class="row">
        <a v-for="category in categories" :key="category.key" :class="{enabled:category.key == selectedCategory}" @click="clickCategory(category.key)">{{category.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapState} from 'vuex'
export default {
  computed: {
    ...mapGetters({ categories:'getCategories'}),
    ...mapState(['selectedCategory']),
  },
  created(){
    this.$store.dispatch('fetchCategories');
  },
  methods: {
    clickCategory(key){
      this.$store.commit('setCategorizedProduct',key)
    },
  },
}
</script>

<style lang="scss">
.cat-header{
  color: #044DC3;
}
.cat-content{
  a{
    display: block;
    width: 150px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #E2E7E9;
    border-radius: 10px;
    font-size: 13px;
    text-decoration: none;
    margin: 5px 5px;
    color: #707070;
    cursor: pointer;

    &:hover{
      background:#044DC3;
      color: #FFFFFF;
    }
  }
}

.enabled{
  background:#044DC3 !important;
  color: #FFFFFF !important;
}


</style>
