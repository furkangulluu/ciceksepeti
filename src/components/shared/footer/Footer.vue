<template>
  <footer>
    <div class="container">
      <div class="app-promot">
        <div class="row">
            <div class="col-md-8 offset-md-2 d-flex">
                <img src="../../../assets/MaskGroup21.png" class="app-img" alt="">
                <div class="d-flex flex-column promot">
                  <div class="d-flex barcode">
                    <img src="../../../assets/ae36d58211435e1013d5b236b8a5a8c3.png" class="barcode-img" alt="">
                    <div class="qr-description">
                      <strong>Çiçek Sepeti Mobil Uygulamayı İndirin</strong>
                      <p>Mobil Uygulamayı QR Kod ile İndirin.</p>
                    </div>
                  </div>
                  <div class="d-flex store-app">
                    <img src="../../../assets/Group3976.png" alt="">
                    <img src="../../../assets/Group3915.png" alt="">
                  </div>
                </div>
            </div>
        </div>
      </div>
      <div class="app-promot-mobile">
        <div class="promot-mobile">
          <div class="d-flex justify-content-center barcode">
            <img src="../../../assets/ae36d58211435e1013d5b236b8a5a8c3.png" class="barcode-img" alt="">
            <div class="qr-description">
              <strong>Çiçek Sepeti Mobil Uygulamayı İndirin</strong>
              <p>Mobil Uygulamayı QR Kod ile İndirin.</p>
            </div>
          </div>
          <div class="d-flex justify-content-center store-app">
            <img src="../../../assets/Group3976.png" alt="">
            <img src="../../../assets/Group3915.png" alt="">
          </div>
        </div>
      </div>
      <SiteMap />
    </div>
  </footer>
</template>

<script>
import SiteMap from './SiteMap'
export default {
  components:{
    SiteMap
  }
}
</script>

<style lang="scss">
footer{
background: #F2F2F2;
height: auto;
padding-bottom: 25px;

  .container{
    padding-top: 100px;
  }
}

.app-promot{
width: 100%;
height: 200px;
background: #FFFFFF;
border-radius: 100px;

  .app-img{
    height: 320px;
    margin-top: -120px;
  }

  .promot{
  margin: 45px 0 0 25px;

  .barcode{
    .barcode-img{
      width: 50px;
      height: 50px;
    }

    .qr-description{
      margin-left: 10px;

      p{
        margin-bottom: 0;
      }
    }
  }

  .store-app{
    margin-top: 15px;
    img{
      width: 130px;
      margin-right: 10px;
    }
  }
  }
}

.app-promot-mobile{
  background: #FFFFFF;
  padding: 15px;
  display: none;

  .promot-mobile{
    .barcode{
      .barcode-img{
        width: 50px;
        height: 50px;
      }

      .qr-description{
        margin-left: 10px;

        p{
          margin-bottom: 0;
        }
      }
    }

    .store-app{
      margin-top: 15px;
      img{
        width: 175px;
        height:auto;
        margin-right: 10px;
      }
    }
  }
}

.site-map{
  margin-top: 50px;

  .col-md-2:nth-child(2){
      border-left: 1px dashed #9B9B9B;
  }
  h5{
    font-size: 14px;
  }
  ul li a{
    font-size: 13px;
  }

  .about{
    .social{
      a{ margin-right: 10px; }
    }
    p{ font-size: 13px; }
  }
}

  @media screen and (max-width:992px){
    .app-promot{
      display: none;
    }
    .app-promot-mobile{
      display: block;
    }

    footer {
      .container{
        padding-top: 30px;
      }
    }
  }

  @media screen and (max-width:767px){
    .site-map{
      margin-top: 50px;

      .col-md-2{
        border-top: 1px solid rgb(179, 179, 179);
        padding: 15px 15px;

        &:nth-child(2){
            border-left: none !important;
        }
      }
    }
  }

</style>
