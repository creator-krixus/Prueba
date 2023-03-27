<template>
    <div class="Slider">
        <h1 v-if="lang === 'es'" class="Slider__title">Comunícate con nosotros</h1>
        <h1 v-if="lang === 'en'" class="Slider__title">Contact us</h1>
        <img class="Slider__image" src="../assets/ayahuasca_cocorna.webp" alt="ayahuasca_cocorna">
        <h2 v-if="lang === 'es'" class="Slider__subtitle">O, aún mejor, ¡ven a visitarnos!</h2>
        <h2 v-if="lang === 'en'" class="Slider__subtitle">Or, even better, come visit us!</h2>
        <p v-if="lang === 'es'" class="Slider__text">Nos encanta recibir a nuestros clientes, así que ven en cualquier
             momento durante las horas de oficina.</p>
         <p v-if="lang === 'en'" class="Slider__text">We love receiving our clients, so come anytime.
              time during office hours.</p>     
    </div>
</template>
<script>

export default {
    name: "Slider",
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
.Slider{
    width: 100%;
    background-color: rgb(9, 69, 50);
    text-align: center;
    padding: 1% 0 2% 0;
    &__image{
        width: 100%;
    }
    &__title, &__text, &__subtitle{
        color: #fff;
    }
    &__subtitle{
        text-align: left;
        padding: 0 4%;
    }
    &__text{
        text-align: left;
        padding: 0 4%;
        font-size: 20px;
        font-family: 'Source Sans Pro', arial, sans-serif;
    }
}
</style>