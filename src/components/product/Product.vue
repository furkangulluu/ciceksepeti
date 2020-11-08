<template>
  <div class="card" style="width: 13rem;">
    <img class="card-img-top" :src="imagePath" alt="">
    <div class="card-body">
      <h5 class="card-title">{{product.title}}</h5>
      <div class="card-bottom">
        <p class="card-text"><span v-if="product.isFreeShipping">Ücretsiz Teslimat</span></p>
        <p class="card-price">{{product.price}} TL</p>
        <a href="javascript:0" class="btnAddToBasket" @click="addToBasket(product.id)">Sepete Ekle</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    product:{
      type:Object,
      required:true
    }
  },
  computed: {
    imagePath(){
      return require(`../../assets/${this.product.imagePath}`)
    }
  },
  methods: {
    addToBasket(id){
      this.$store.commit('setProductToBasket',id)
    }
  },
}
</script>

<style lang="scss">
.card{
  margin: 8px;

  p{margin:0}

  &:hover{
      opacity: 0.9;
  }

  .card-body{
    padding: 10px !important;
    height: 150px;

    .card-title{
      font-size: 13px;
      margin: 0;
      color: #555555;
      height: 50px;
    }

    .card-bottom{
      .card-text{
        font-size: 13px;
        color: #51B549;
        margin: 0;
        height: 15px;
      }
      .card-price{
        font-size: 13px;
        font-weight: 600;
      }

      .btnAddToBasket{
        width: 90%;
        height: 40px;
        line-height: 38px;
        text-align: center;
        display: block;
        color: #044DC3;
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #044DC3;
        border-radius: 25px;
        font-size: 13px;
        cursor: pointer;
        margin: 5%;
        text-decoration: none;
        position: absolute;
        bottom: 0;
        left: 0;

        &:hover {
          background: #044DC3 0% 0% no-repeat padding-box;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
