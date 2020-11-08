<template>
  <div class="campaign-card" :class="campaign.cssClass">
    <div class="image">
      <img :src="imagePath" alt="error">
    </div>
    <div class="description">
      <p>{{campaign.text}}</p>
      <a href="#">{{campaign.buttonText}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    campaign:{
      type:Object,
      required:true
    }
  },
  computed: {
    imagePath(){
      return require(`../../assets/${this.campaign.imagePath}`)
    }
  },
}
</script>

<style lang="scss">
.campaign-card{
  width: 100%;
  height: 100px;
  background: #FFEAE8 0% 0% no-repeat padding-box;
  border-radius: 10px;
  display: flex;

  img{
    height: 90px;
    margin: 5px 7px;
  }

  .description{
    margin: 10px 15px;

    p{
      margin-bottom: 5px;
      font-weight: 200;
    }
    a{
      width: 100px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      display: block;
      color: #E64E41;
      background: #ffffff 0% 0% no-repeat padding-box;
      border-radius: 25px;
      font-size: 12px;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        background: #E64E41 0% 0% no-repeat padding-box;
        color: #ffffff;
      }
    }
  }
}

.bg-coral{
  background: #FFEAE8 0% 0% no-repeat padding-box;
}
.bg-sea{
  background: #E8F1FF 0% 0% no-repeat padding-box;
}
.bg-mint{
  background: #E2F7E1 0% 0% no-repeat padding-box;
}


</style>
