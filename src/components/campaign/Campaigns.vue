<template>
  <div class="row mt-4 mb-4">
    <div class="col-md-4 pl-2 pr-4" v-for="campaign in campaigns" :key="campaign.cssClass">
      <Campaign :campaign="campaign" class="campaign" />
    </div>
  </div>
</template>

<script>
import Campaign from './Campaign'
import {mapGetters} from 'vuex'
export default {
  components:{
    Campaign
  },
  computed: {
    ...mapGetters({ campaigns:'getCampaigns'})
  },
  created(){
    this.$store.dispatch('fetchCampaigns');
  },
}
</script>

<style lang="scss" scoped>

  @media screen and (max-width:767px){
    .campaign{
      margin: 10px 0;
    }
  }
</style>
