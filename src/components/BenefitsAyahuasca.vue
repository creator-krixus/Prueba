<template>
    <div class="Benefits">
        <img class="Benefits__ayahuasca" src="../assets/liana-ayahuasca.jpg" alt="liana">
        <div class="Benefits__container">
            <h3 class="main__info--title" v-if="lang === 'en'">Benefits of Ayahuasca or Yagé</h3>
            <ul v-if="lang === 'en'">
                <li> Consciousness </li>
                <li> Healing </li>
                <li> Spirituality </li>
                <li> Sensation of fullness </li>
                <li> Promote brain health. </li>
                <li> generates psychological well -being. </li>
                <li> Recognition of your unconsciousness </li>
                <li> Connection with the environment and nature </li>
                <li> Help overcome depression and posttraumatic stress disorder. </li>
            </ul>
            <h3 class="main__info--title" v-if="lang == 'es'">Beneficios de la Ayahuasca o Yagé</h3>
            <ul v-if="lang == 'es'">
                <li>Conciencia</li>
                <li>Cicatrización</li>
                <li>Espiritualidad</li>
                <li>Sensación de Plenitud</li>
                <li>Promueve la salud del cerebro.</li>
                <li>Genera bienestar psicológico.</li>
                <li>Reconocimiento de tu inconsciencia</li>
                <li>Conexión con el Medio Ambiente y la Naturaleza</li>
                <li>Ayuda a superar la depresión y el trastorno de estrés postraumático.</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "Benefitsayahuasca",
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
.Benefits{
    &__ayahuasca{
        width: 100%;
    }
    &__container{
        padding: 3% 5%;
    }
}

</style>
