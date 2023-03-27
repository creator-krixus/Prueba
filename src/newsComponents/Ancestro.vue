<template>
    <div class="Ancestro">
        <img class="Ancestro__image" src="../assets/ancestral.webp" alt="Yage">
        <p v-if="lang === 'en'" class="Ancestro__text">There is a lot to see here. So take your time,
             look around and find out everything there is to know about us.
              We hope you enjoy our website.</p>
        <p v-if="lang === 'es'" class="Ancestro__text">Hay mucho para ver aquí. Así que,
             tómate tu tiempo, mira alrededor y entérate de todo lo que hay para saber
              sobre nosotros. Esperamos que disfrutes nuestro sitio web</p>     
        <a v-if="lang === 'en'" class="Home__whatsapp" href="https://wa.me/+573001782914?text=Hello, I would like to live the Ayahuasca experience.">Get more information</a>       
        <a v-if="lang === 'es'" class="Home__whatsapp" href="https://wa.me/+573001782914?text=Hola, me gustaria vivir la experiencia Ayahuasca.">Obten mas información</a>       
        <div class="Ancestro__networks">
            <a class="Ancestro__networks--icon" href="https://instagram.com/ayahuascamed.co?igshid=ZDdkNTZiNTM=">
                <font-awesome-icon icon="fa-brands fa-instagram" class="icono"/>
            </a>
            <a class="Ancestro__networks--icon" href="https://instagram.com/ayahuascamed.co?igshid=ZDdkNTZiNTM=">
                <font-awesome-icon icon="fa-brands fa-tiktok" class="icono"/>
            </a>
        </div>
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
.Ancestro{
     background-color: rgb(9, 69, 50);
     text-align: center;
     height: 680px;
    &__image{
        width: 100%;
    }
    &__text{
        color: #fff;
        font-size: 20px;
        padding: 2% 3%;
        text-align: left;
        font-family: 'Source Sans Pro', arial, sans-serif;
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