<template>
    <div class="Ceremony">
        <img class="Ceremony__image" src="../assets/ceremony.webp" alt="ayahuasca/yage">
        <h2 v-if="lang === 'es'" class="Ceremony__title">Cómo es nuestra ceremonia</h2>
        <h2 v-if="lang === 'en'" class="Ceremony__title">How is our ceremony</h2>
        <p v-if="lang === 'es'" class="Ceremony__text">Al inicio se realizará una plática para explicar cómo trabaja la medicina
            en nuestra ser, espíritu, energía, consciencia. Se compartirá igualmente
            la medicina del Rapé la cual es considerada por las tradiciones amazónicas
            como la medicina del pensamiento, medicina que nos ayudará a centrarnos
            en nuestros propósitos al tomar la ayahuasca y abrirnos a recibir sus
            visiones y enseñanzas.
            Al cierre de la ceremonia se realizará una limpieza energética con plantas
            tradicionales a todos los participantes.</p>
        <p v-if="lang === 'en'" class="Ceremony__text">At the beginning there will be a talk to explain how medicine works
             in our being, spirit, energy, consciousness. will be shared equally
             Rapé medicine which is considered by Amazonian traditions
             as the medicine of thought, medicine that will help us to focus
             in our purposes when taking ayahuasca and opening ourselves to receive its
             visions and teachings.
             At the closing of the ceremony, an energetic cleansing with plants will be carried out.
             traditional to all participants.</p>   
        <a v-if="lang === 'en'" class="Home__whatsapp" href="https://wa.me/+573001782914?text=Hello, I would like to live the Ayahuasca experience.">Get more information</a>       
        <a v-if="lang === 'es'" class="Home__whatsapp" href="https://wa.me/+573001782914?text=Hola, me gustaria vivir la experiencia Ayahuasca.">Obten mas información</a>      
    </div>
</template>
<script>
export default {
    name: "Ceremony",
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
.Ceremony{
    width: 100%;
    background-color: rgb(9, 69, 50);
    text-align: center;
    height: 990px;
    &__image{
        margin-top: 6%;
    }
    &__title, &__text{
        color: #fff;
        margin-bottom: 35px;
    }
    &__text{
        text-align: left;
        padding: 0 4%;
        font-size: 20px;
        font-family: 'Source Sans Pro', arial, sans-serif;
    }
}

</style>