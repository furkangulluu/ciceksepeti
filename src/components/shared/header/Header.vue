<template>
  <div>
    <nav class="navbar customNav">
      <section class="container">
          <div class="logo">
            <a href="">
                <img src="//cdn03.ciceksepeti.com/Themes/Ciceksepeti/Assets/images/logo-new-ciceksepeti.png?v=3.1.1.25327" width="150" />
            </a>
          </div>
          <Search />
          <div class="basket">
            <a class="btn-basket">
                <span><i class="fas fa-shopping-cart"></i></span>
                <span>Sepetim</span>
                <div class="countPopup"><span>{{basketLength}}</span></div>
                <Popup v-show="isOver"/>
            </a>
          </div>
      </section>
    </nav>
    <div class="bant">
      <div class="container">
        <h1>ÇiçekSepeti</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Popup from './Popup'
import Search from './Search'
export default {
  components:{
    Popup,
    Search
  },
  computed: {
    basketLength(){
      return this.$store.state.basket.products.length
    },
    isOver(){
      return this.basketLength > 0
    }
  },
}
</script>

<style lang="scss">
.customNav{
    background-color: #fff;
}

.logo{
  a{
    padding-top: 7px;
  }
}

.btn-basket{
    width: 142px;
    height: 40px;
    color: #fff;
    position: relative;
    background: #044DC3 0% 0% no-repeat padding-box;
    border-radius: 28px;
    line-height: 40px;
    padding-left: 20px;
    cursor: pointer;
    display: block;

    &:hover {
      background: #1161e0 0% 0% no-repeat padding-box;
    }

    span{
    color: #fff;
    margin-left: 5px;
    }

    .countPopup{
      width: 25px;
      height: 25px;
      display: block;
      position: absolute;
      border-radius: 100%;
      background-color: red;
      line-height: 25px;
      text-align: center;
      top: -10px;
      right: 0;

      span{
        font-size: 15px;
        margin: 0 !important;
      }
    }
}

.bant{
    background: url('../../../assets/Group3971.png');
    width: 100%;
    height: 50px;

    h1{
      font-size: 30px;
      line-height: 45px;
      color: #fff;
      font-weight: 300;
    }
}

  @media screen and (max-width:571px){
    .logo{
      width: 100%;
    }
  }
</style>
