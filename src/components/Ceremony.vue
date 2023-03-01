<template>
    <div class="ceremony">
        <h2 class="ceremony__title" v-if="lang === 'en'">I want an Ayahuasca ceremony.</h2>
        <div class="ceremony__container" v-if="lang === 'en'">
            <span class="ceremony__container--subtitle">One day ceremony.</span>
            <p class="ceremony__container--wishes">What includes:</p>
            <ul>
                <li>Advice</li>
                <li>Transport</li>
                <li>Foods</li>
                <li>Ayahuasca drinks</li>
                <li>From 8:00 a.m. to 4:00 p.m.</li>
            </ul>
            <a v-if="lang === 'en'" class="ceremony__container--sale" href="https://wa.me/+573001782914?text=Hello, I want to live the Ayahuasca experience of one day.">I want this ceremony</a>
        </div>
        <h2 class="ceremony__title" v-if="lang === 'es'">Quiero una ceremonía Ayahuasca.</h2>
        <div class="ceremony__container" v-if="lang === 'es'">
            <span class="ceremony__container--subtitle">Ceremonía de un día.</span>
            <p class="ceremony__container--wishes">Que incluye:</p>
            <ul>
                <li>Asesoramiento</li>
                <li>Transporte</li>
                <li>Comidas</li>
                <li>Bebidas de Ayahuasca</li>
                <li>De 8:00 a.m a 4:00 p.m</li>
            </ul>
            <a v-if="lang === 'es'" class="ceremony__container--sale" href="https://wa.me/+573001782914?text=Hola, Quiero vivir la experiencia Ayahuasca de un dia">Quiero esta ceremonia</a>
        </div>
    </div>
</template>
<script>
export default {
    name:"Ceremony",
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
.ceremony{
    background: #a6aa92;
    margin-top: -20px;
    height: 380px;
    padding: 3% 5%;
    &__title{
        text-align: center;
    }
    &__container{
        display: grid;
        place-items: center; 
        border: solid 1px white;
        border-radius: 12px;
        padding: 1%;
        &--subtitle{
            font-size: 26px;
        }
        &--wishes{
           font-size: 20px; 
        }
        &--sale{
            margin-top: 2%;
            color: white;
            text-decoration: none;
            font-size: 22px;
            background: green;
            padding: 2% 5%;
            border-radius: 5px;
            margin-bottom: 10px;
        }
        ul > li{
            font-size: 20px;
            list-style: none;
        }
    }
}
</style>
