<template>
  <div class="Carousel">
    <VueSlickCarousel v-bind="settings">
      <img class="Carousel__image" src="../assets/galeria/agua.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/arbol.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/camino.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/centro.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/ceremonia.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/chaman.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/cueva.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/fiesta.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/chaman2.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/hojas.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/luz.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/chaman6.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/mosaico.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/mujerChaman.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/chaman3.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/nido.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/parejaChamanes.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/raices.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/chaman5.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/raices2.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/reunion.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/ruta.jpeg" alt="ayahuascamed"/>
      <img class="Carousel__image" src="../assets/galeria/taita.jpeg" alt="ayahuascamed"/>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'Carousel',
    components: { VueSlickCarousel },
      data(){
    return {
        settings: {
          "dotsClass": "slick-dots custom-dot-class",
          "infinite": true,
          "speed": 500,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "autoplay": true,
          "adaptiveHeight": true
        }
    }
  },
  }
</script>
<style lang="scss">
.Carousel{
  margin-top: -20px;
  margin-bottom: -20px;
  background: #f1eae2;
  &__title{
    padding-top: 10px;
    text-align: center;
  }
  &__image{
    height: 500px;
    object-fit: cover;
  }
}

</style>