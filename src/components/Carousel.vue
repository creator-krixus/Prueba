<template>
  <div class="Carousel">
    <h2 class="Carousel__title">Colección de imágenes</h2>
    <VueSlickCarousel v-bind="settings">
      <img class="Carousel__image" src="../assets/galeria/agua.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/arbol.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/camino.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/centro.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/ceremonia.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/chaman.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/cueva.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/fiesta.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/chaman2.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/hojas.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/luz.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/chaman6.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/mosaico.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/mujerChaman.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/chaman3.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/nido.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/parejaChamanes.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/raices.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/chaman5.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/raices2.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/reunion.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/ruta.jpeg"/>
      <img class="Carousel__image" src="../assets/galeria/taita.jpeg"/>
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