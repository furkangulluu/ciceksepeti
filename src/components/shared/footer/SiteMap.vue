<template>
      <div class="row site-map">
        <div class="col-md-4 about">
          <img src="../../../assets/Group3950.png" alt="" width="150">
          <div class="row">
            <div class="col-md-12 mt-3 mb-3 flex-center social">
                <a href=""><img src="../../../assets/Path215.png" alt=""></a>
                <a href=""><img src="../../../assets/Path217.png" alt=""></a>
                <a href=""><img src="../../../assets/Path218.png" alt=""></a>
                <a href=""><img src="../../../assets/Group149.png" alt=""></a>
                <a href=""><img src="../../../assets/Group148.png" alt=""></a>
            </div>
          </div>
          <p>CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine buradan ulaşabilirsiniz.</p>
        </div>
        <MapColumn class="map-column" v-for="data in footer" :data="data" :key="data.header"/>
      </div>
</template>

<script>
import MapColumn from './MapColumn'
import { mapGetters } from 'vuex'
export default {
  components:{
    MapColumn
  },
  computed: {
    ...mapGetters({ footer:'getFooter'})
  },
  created(){
    this.$store.dispatch('fetchFooter');
  }
}
</script>

<style lang="scss">

.site-map{
  margin-top: 50px;

  .col-md-2:nth-child(2){
      border-left: 1px dashed #9B9B9B;
  }
  h5{
    font-size: 14px;
  }
  ul{
    margin-bottom: 0px !important;

    li a{
      font-size: 13px;
    }
  }

  .about{
    .social{
      a{
        margin-right: 10px;
      }
    }

    p{
      font-size: 13px;
    }
  }

}

</style>
