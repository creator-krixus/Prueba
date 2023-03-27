<template>
    <div class="Plans">
        <h1 v-if="lang === 'es'" class="Plans__main">Planes</h1>
        <h1 v-if="lang === 'en'" class="Plans__main">Plans</h1>
        <img class="Plans__image" src="../assets/bebida.webp" alt="drink_Ayahuasca">
        <h2 v-if="lang === 'es'" class="Plans__title">Ceremonia 1 día, visita a hostería Cocorna</h2>
        <h2 v-if="lang === 'en'" class="Plans__title">Ceremony 1 day, visit to Cocorna inn</h2>
        <span class="Plans__cash">250 usd</span>
        <p v-if="lang === 'es'" class="Plans__text">
            Ceremonia de Ayahuasca/Yage 
            Se compartirá igualmente la medicina del Rapé.
            Al cierre de la ceremonia se realizará una limpieza
            energética con plantas tradicionales a todos los participantes.
            Descansaremos un rato y luego nos dirigimos a la hostería
            Cocorna y realizaremos un tour por el pueblo.
        </p>
        <p v-if="lang === 'en'" class="Plans__text">
            Ayahuasca/Yage Ceremony
             The Rapé medicine will also be shared.
             At the end of the ceremony, a cleaning will be carried out.
             energy with traditional plants to all the participants.
             We will rest for a while and then we will go to the inn
             Cocorna and we will tour the town.
        </p>
        <a v-if="lang === 'en'" class="Home__whatsapp" href="https://wa.me/+573001782914?text=Hello, I want to purchase the 250 usd plan">I want</a>       
        <a v-if="lang === 'es'" class="Home__whatsapp" href="https://wa.me/+573001782914?text=Hola, deseo adquirir el plan de 250 usd">Lo quiero</a> 
        <img class="Plans__image" src="../assets/parapente.webp" alt="tour_Ayahuasca">
        <h2 v-if="lang === 'es'" class="Plans__title">Ceremonia 2 días, tour Cocorna , tour Guatape</h2>
        <h2 v-if="lang === 'en'" class="Plans__title">Ceremony 2 days, Cocorna tour, Guatape tour</h2>
        <span class="Plans__cash">500 usd</span>
        <p v-if="lang === 'es'" class="Plans__text">
            Toma de medicina yagé por 2 días , 3 día tour por el pueblo de Cocorna
            más actividades, lanzamiento por parapente o visita a guatape(Opcional).
        </p>
        <p v-if="lang === 'en'" class="Plans__text">
            Taking yagé medicine for 2 days, 3 day tour of the town of Cocorna
             More activities, launch by paraglider or visit to Guatape (Optional).
        </p>
        <a v-if="lang === 'en'" class="Home__whatsapp" href="https://wa.me/+573001782914?text=Hello, I want to purchase the 500 usd plan">I want</a>       
        <a v-if="lang === 'es'" class="Home__whatsapp" href="https://wa.me/+573001782914?text=Hola, deseo adquirir el plan de 500  usd">Lo quiero</a> 
    </div>
</template>
<script>
export default {
    name: "Plans",
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
.Plans{
    width: 100%;
    background-color: rgb(9, 69, 50);
    text-align: center;
    padding: 1% 0 0 0;
    height: 1260px;
    &__main{
        color: #fff;
    }
    &__cash{
        font-size: 30px;
        color: #fff;
    }
    &__image{
        width: 90%;
        border-radius: 30px;
        margin-top: 20px;
    }
    &__title{
        color: #fff;
    }
    &__text{
        font-size: 20px;
        font-family: 'Source Sans Pro', arial, sans-serif;
        text-align: left;
        padding: 2% 3%;
        color: #fff;
    }
}
</style>