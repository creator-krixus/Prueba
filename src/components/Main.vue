<template>
  <div class="main">
    <img class="main__image" src="../assets/ayahuasca.jpg"/>
    <div class="main__info" >
        <h3 class="main__info--title" v-if="lang === 'en'">Learn about the benefits of ayahuasca or yagé</h3>
        <ul v-if="lang === 'en'">
            <li>Promotes brain health.</li>
            <li>It generates psychological well-being.</li>
            <li>Helps overcome depression and post-traumatic stress disorder.</li>
        </ul>
        <h3 class="main__info--title" v-if="lang == 'es'">Conoce los beneficios de la ayahuasca o yagé</h3>
        <ul v-if="lang == 'es'">
            <li>Promueve la salud del cerebro.</li>
            <li>Genera bienestar psicológico.</li>
            <li>Ayuda a superar la depresión y el trastorno de estrés postraumático.</li>
        </ul>
        <img class="main__info--image" src="../assets/ayahuasca_caldo.jpg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data(){
    return {
        lang: ''
    }
  },
  mounted(){
    this.lang = localStorage.getItem('language');
  }
};
</script>
<style lang="scss">
.main{
    background:#f1eae2;
    &__image{
        width: 100%;
    }
    &__info{
        &--title{
            text-align: center;
        }
        &--image{
            width:100%;
            border-top-left-radius: 80px;
            border-bottom-right-radius: 80px;
        }
    }

}

</style>