<template>
  <div class="home">
    <!-- <NavBar />
    <Main />
    <Call />
    <Carousel />
    <Testimonie />
    <Benefits />
    <Ceremony />
    <Suscription />
    <Contact /> -->
    <NewHome />
    <Ancestral />
    <About />
    <Info />
    <Ceremony />
    <Diet />
    <Plans />
    <Slider />
    <!-- <Carousel /> -->
    <Footer />
    <BtnInstagram class="btnInstagram"/>
    <Btn class="btn"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Main from '@/components/Main.vue'
// import NavBar from '@/components/NavBar.vue'
// import Call from '@/components/CallToAction.vue'
// import Benefits from '../components/BenefitsAyahuasca.vue'
// import Testimonie from '../components/Testimonies.vue'
// import Ceremony from '../components/Ceremony.vue'
// import Suscription from '../components/Suscription.vue'
// import Carousel from '../components/Carousel.vue'
// import Contact from '../components/Contactanos.vue'
import Btn from '../components/BtnWhatsapp.vue'
import BtnInstagram from '../components/BtnInstagram.vue'
import NewHome from '../newsComponents/Home.vue'
import Ancestral from '../newsComponents/Ancestro.vue'
import About from '../newsComponents/About.vue'
import Info from '../newsComponents/Info.vue'
import Ceremony from '../newsComponents/Ceremony.vue'
import Diet from '../newsComponents/Diet.vue'
import Plans from '../newsComponents/Plans.vue'
import Slider from '../newsComponents/Slider.vue'
import Footer from '../newsComponents/Footer.vue'


export default {
  name: 'Home',
  components: {
    // Main,
    // NavBar,
    // Call,
    // Carousel,
    // Benefits,
    // Testimonie,
    // Ceremony,
    // Suscription,
    // Contact
    NewHome,
    Ancestral,
    About,
    Info,
    Ceremony,
    Diet,
    Plans,
    Slider,
    Footer,
    Btn,
    BtnInstagram,
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
    right: 2.5%;
  }
  .btnInstagram{
    position: fixed;
    bottom: 17%;
    right: 2.5%;
  }
}
</style>
