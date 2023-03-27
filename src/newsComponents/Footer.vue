<template>
    <div class="Footer">
        <h1 class="Footer__title">Ayahuascamed</h1>
        <h2 class="Footer__subtitle">Cocorná, Antioquia, Colombia</h2>
        <div class="Footer__networks">
            <a class="Footer__networks--icon" href="https://instagram.com/ayahuascamed.co?igshid=ZDdkNTZiNTM=">
                <font-awesome-icon icon="fa-brands fa-instagram" class="icono"/>
            </a>
            <a  class="Footer__networks--icon" href="https://instagram.com/ayahuascamed.co?igshid=ZDdkNTZiNTM=">
                <font-awesome-icon icon="fa-brands fa-tiktok" class="icono"/>
            </a>
            <a v-if="lang === 'en'" class="Footer__networks--icon" href="https://wa.me/+573001782914?text=Hello, I would like to live the Ayahuasca experience.">
                <font-awesome-icon icon="fa-brands fa-whatsapp" class="icono"/>
            </a>       
            <a v-if="lang === 'es'" class="Footer__networks--icon" href="https://wa.me/+573001782914?text=Hola, me gustaria vivir la experiencia Ayahuasca.">
                <font-awesome-icon icon="fa-brands fa-whatsapp" class="icono"/>
            </a> 
        </div>
        <p class="Footer__subtitle">Copyright © 2023 Ayahuascamed - Todos los derechos reservados.</p>
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
.Footer{
    padding: 1%;
    text-align: center;
    background-color: #161616;
    height: 260px;
    &__title, &__subtitle{
        color: #fff;
    }
    &__networks{
        margin-top: 20px;
        &--icon{
            margin-left: 20px;
            border-radius: 50%;
           .icono{
            color: #fff;
            font-size: 25px;
           }
        }
    }
}
</style>