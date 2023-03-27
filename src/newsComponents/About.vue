<template>
    <div class="About">
        <img class="About__image" src="../assets/hoguera.webp" alt="hoguera">
        <h1 v-if="lang === 'en'" class="About__title">About us</h1>
        <p v-if="lang === 'en'" class="About__text">Ayahuascamed is a Colombian entity located in the city
             of Cocorna (Antioquia), our job is to provide advice,
             accompaniment, transportation and lodging, to interested persons
             to live an Ayahuasca ceremony, supervised
             an accredited shaman we carry out the experience every week
             from Thursday to Sunday and holidays.</p>
        <h1 v-if="lang === 'es'" class="About__title">Quienes somos</h1>
        <p v-if="lang === 'es'" class="About__text">Ayahuascamed  es una entidad Colombiana ubicada en la ciudad
            de Cocorna(Antioquia), nuestro trabajo es brindar asesoría,
            acompañamiento, transporte y hospedaje, a las personas interesadas
            en vivir una ceremonia de Ayahuasca, supervisados
            un chamán acreditado realizamos la experiencia todas las semanas
            de jueves a domingo y festivos.</p>
        <a v-if="lang === 'en'" class="Home__whatsapp" href="https://wa.me/+573001782914?text=Hello, I would like to live the Ayahuasca experience.">Get more information</a>       
        <a v-if="lang === 'es'" class="Home__whatsapp" href="https://wa.me/+573001782914?text=Hola, me gustaria vivir la experiencia Ayahuasca.">Obten mas información</a>    
    </div>
</template>
<script>
export default {
    name: "About",
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
.About{
    width: 100%;
    background-color: rgb(9, 69, 50);
    text-align: center;
    height: 700px;
    &__image{
        width: 90%;
        border-radius: 10px;
    }
    &__title, &__text{
        color: #fff;
    }
    &__text{
        text-align: left;
        padding: 0 4%;
        font-size: 20px;
        font-family: 'Source Sans Pro', arial, sans-serif;
    }
}
</style>