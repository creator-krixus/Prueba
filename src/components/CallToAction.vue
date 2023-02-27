<template>
    <div class="CallToAction">
        <p class="CallToAction__offer" v-if="lang === 'en'">
            Ayahuascamed is a Colombian entity located in the city of Medellín,
            Our job is to provide advice, accompaniment and transportation,
            for people interested in living an Ayahuasca ceremony. We have the
            supervision of accredited shamans. We carry out the experience every week,
            from Thursday to Sunday and holidays. If you are interested contact us via
        <a v-if="lang === 'en'" class="CallToAction__Btn" href="https://wa.me/+573001782914?text=Hello, I would like to live the Ayahuasca experience.">WhatsApp.</a>
        </p>
        <p class="CallToAction__offer" v-if="lang === 'es'">
            Ayahuascamed es una entidad Colombiana ubicada en la ciudad de Medellín,
            nuestro trabajo es brindar asesoría, acompañamiento y transporte,
            para las personas interesadas en vivir una ceremonia de Ayahuasca. Contamos con la
            supervision de chamanes acreditados. Realizamos la experiencia  todas las semanas,
            de jueves a domingo y festivos. Si estas interesado contactanos via
        <a v-if="lang === 'es'" class="CallToAction__Btn" href="https://wa.me/+573001782914?text=Hola, me gustaria vivir la experiencia Ayahuasca.">WhatsApp.</a>
        </p>
    </div>
</template>
<script>
export default {
    name: "CallToAction",
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
.CallToAction{
    background: #a6aa92;
    padding: 2% 5%;
    &__offer{
        display: grid;
        place-items: center;
    }
    &__Btn{
        margin-top: 2%;
        color: white;
        text-decoration: none;
        font-size: 20px;
        background: green;
        padding: 2% 5%;
        border-radius: 5px;
    }
}

</style>
