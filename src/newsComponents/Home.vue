<template>
    <div class="Home">
        <img class="Home__image" src="../assets/logo.webp" alt="Ayahuascamed">
        <h1 v-if="lang === 'en'" class="Home__title">Welcome to ayahuascamed</h1>
        <p v-if="lang === 'en'" class="Home_text">We are delighted to receive you and be part of this
              wonderful process of opening heart and conscience. We're very pleased
               that you have decided to join us on this journey and we are
                excited about what we can learn together.</p>
        <h1 v-if="lang === 'es'" class="Home__title">Bienvenido a ayahuascamed</h1>
        <p v-if="lang === 'es'" class="Home_text">Estamos encantados de recibirte y ser parte de este
             maravilloso proceso de apertura de corazón y conciencia. Nos alegra
              que hayas decidido unirte a nosotros en este viaje y estamos
               emocionados por lo que podemos aprender juntos.</p>
        <a v-if="lang === 'en'" class="Home__whatsapp" href="https://wa.me/+573001782914?text=Hello, I would like to live the Ayahuasca experience.">+57 3001782914</a>       
        <a v-if="lang === 'es'" class="Home__whatsapp" href="https://wa.me/+573001782914?text=Hola, me gustaria vivir la experiencia Ayahuasca.">3001782914</a>
    </div>
</template>
<script>
export default {
    name: "Home",
    data(){
    return {
        lang: ''
    }
  },
  mounted(){
    this.lang = localStorage.getItem('language');
  }
}
</script>
<style lang="scss">
.Home{
    background: url('../assets/logo.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    widows: 100%;
    height: 550px;
    text-align: center;
    &__image{
        margin: 5% 0;
    }
    &__title{
        color: #fff;
        font-size: 30px;
        font-family: 'Cinzel', Georgia, serif;
        text-transform: uppercase;
        padding: 0 3%;
    }
    &_text{
        color: #fff;
        font-size: 20px;
        padding: 0 3%;
        text-align: left;
        font-family: 'Source Sans Pro', arial, sans-serif;
        margin-bottom: 40px;
    }
    &__whatsapp{
        color: #fff;
        background: green;
        padding: 2% 4%;
        border-radius: 12px;
        text-decoration: none;
    }
}
</style>