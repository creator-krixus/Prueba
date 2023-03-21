<template>
  <div class="home">
    <NavBar />
    <Main />
    <Call />
    <Carousel />
    <Testimonie />
    <Benefits />
    <Ceremony />
    <Suscription />
    <Contact />
    <BtnInstagram class="btnInstagram"/>
    <Btn class="btn"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Main from '@/components/Main.vue'
import NavBar from '@/components/NavBar.vue'
import Call from '@/components/CallToAction.vue'
import Btn from '../components/BtnWhatsapp.vue'
import Benefits from '../components/BenefitsAyahuasca.vue'
import Testimonie from '../components/Testimonies.vue'
import BtnInstagram from '../components/BtnInstagram.vue'
import Ceremony from '../components/Ceremony.vue'
import Suscription from '../components/Suscription.vue'
import Carousel from '../components/Carousel.vue'
import Contact from '../components/Contactanos.vue'


export default {
  name: 'Home',
  components: {
    Main,
    NavBar,
    Call,
    Btn,
    Carousel,
    Benefits,
    Testimonie,
    BtnInstagram,
    Ceremony,
    Suscription,
    Contact
  }
}
</script>
<style lang="scss">
.home{
  position: relative;
  height: 100vh;
  .btn{
    position: fixed;
    bottom: 7%;
    right: 8.5%;
  }
  .btnInstagram{
    position: fixed;
    bottom: 17%;
    right: 8.5%;
  }
}
</style>
