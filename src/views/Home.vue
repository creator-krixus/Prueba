<template>
  <div class="home">
    <NavBar />
    <Main />
    <Call />
    <Benefits />
    <Testimonie />
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


export default {
  name: 'Home',
  components: {
    Main,
    NavBar,
    Call,
    Btn,
    Benefits,
    Testimonie
  }
}
</script>
<style lang="scss">
.home{
  position: relative;
  height: 100vh;
  .btn{
    position: fixed;
    bottom: 2%;
    right: 2.5%;
  }
}
</style>
