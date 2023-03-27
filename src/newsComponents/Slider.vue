<template>
    <div class="Slider">
        <h1 class="Slider__title">Comunícate con nosotros</h1>
        <img class="Slider__image" src="../assets/ayahuasca_cocorna.webp" alt="ayahuasca_cocorna">
        <h2 class="Slider__subtitle">O, aún mejor, ¡ven a visitarnos!</h2>
        <p class="Slider__text">Nos encanta recibir a nuestros clientes, así que ven en cualquier
             momento durante las horas de oficina.</p>
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