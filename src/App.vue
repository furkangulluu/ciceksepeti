<template>
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/shared/header/Header'
import Main from './components/Main'
import Footer from './components/shared/footer/Footer'
export default {
  components:{
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
body{
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
}
</style>
