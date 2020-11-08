<template>
  <div class="customSearch">
    <input type="text" @keyup="onKeyup" v-model="searchText" name="search" placeholder="Ürün Ara" />
    <ul v-if="isEmpty">
      <li v-for="search in searchList" :key="search.id"><a @click="clickSearch(search.id)">{{search.title}}</a></li>
    </ul>
  </div>
</template>

<script>
import {mapGetters,mapState} from 'vuex'

export default {
  data() {
    return {
      searchText:'',
      isEmpty:false,
      searchList:[],
    }
  },
  computed: {
    ...mapGetters(['getProducts'])
  },
  methods: {
    onKeyup(){
      this.searchList=[];
      this.isEmpty=false
      if(this.searchText.length>2){
        this.getProducts.filter(x=>{
          if (x.title.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1){
            this.searchList.push({'id':x.id,'title':x.title})
          }
        })
        if(this.searchList.length>0){
          this.isEmpty=true
        }
      }
    },
    clickSearch(id){
      this.searchText='';
      this.isEmpty=false;
      this.$store.commit('setSearchedProduct',id);
    }
  },
}
</script>

<style lang="scss" scoped>
  .customSearch{
    width: 60%;

    input{
      border-radius: 20px;
      width: 100%;
      height: 40px;
      border: 2px solid #EDF1F2;
      background: #F7F7F7 0% 0% no-repeat padding-box;
      padding-left: 15px;
      outline: none;
      font-size: 12px;
      box-sizing: border-box;
      background-image: url('../../../assets/Group3977.png');
      background-position: 15px 10px;
      background-size: 15px;
      padding: 12px 20px 12px 40px;
    }

    ul{
      position: absolute;
      width: 560px;
      background: #F7F7F7 0% 0% no-repeat padding-box;
      border-radius: 15px;
      list-style-type: none;
      padding: 0;
      border: 1px solid rgb(212, 212, 212);
      z-index: 1000;
      margin-top: 5px;

      li{
        &:hover{
          opacity: 0.7;
          cursor: pointer;
        }

        &:not(:last-child){
          border-bottom: 1px solid rgb(212, 212, 212);
        }

        a{
        text-decoration: none;
        color: rgb(82, 82, 82);
        display: block;
        margin: 5px 12px;
        }
      }
    }
  }

  @media screen and (max-width:992px){
    .customSearch{
      width: 50%;
      ul{
        width: 345px;
      }
    }
  }
  @media screen and (max-width:767px){
    .customSearch{
      width: 35%;
      ul{
        left: 16%;
        width: 68%;
      }
    }
  }
  @media screen and (max-width:571px){
    .customSearch{
      width: 67%;
      ul{
        left: 5%;
        width: 90%;
      }
    }
  }

</style>
