<template>
  <div class="popup">
    <span class="popuptext">
      <span v-if="!isOver"><strong>{{freeShipPrice}} TL</strong> ürün daha ekleyin kargo bedava</span>
      <span v-if="isOver"><strong>KARGONUZ BEDAVA</strong></span>
      <div class="progress">
        <div class="progress-bar bg-info" role="progressbar" :style="{ width : progress + '%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </span>
  </div>
</template>

<script>
import { eventBus } from '../../main'
  export default {
    data() {
        return {
            priceLength: 0
        }
    },
    computed: {
      progress(){
        this.priceLength = this.$store.state.basket.totalPrice
        return this.priceLength / 5
      },
      isOver(){
        return this.priceLength / 5 > 100 ? true : false
      },
      freeShipPrice(){
        return Math.round(500 - this.priceLength)
      }
    },
  }
</script>

<style lang="scss">

.progress{
  height: 5px;
  width: 90%;
  margin: 0 5% 5% 5%;

  .bg-info{
    background-color: #FFCE00 !important;
  }
}

/* Popup container - can be anything you want */
.popup {
  position: absolute;
  visibility: visible;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  top: 50px;
  right: 255px;
}

/* The actual popup */
.popup .popuptext {
  width: 250px;
  background-color: #F54257;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  position: absolute;
  z-index: 1;
  font-size: 12px;

  strong{
    color: #FFCE00;
  }
}

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: -12px;
  transform: rotate(180deg);
  left: 85%;
  margin-left: -5px;
  border-width: 7px;
  border-style: solid;
  border-color: #F54257 transparent transparent transparent;
}

/* Toggle this class - hide and show the popup */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}
</style>
