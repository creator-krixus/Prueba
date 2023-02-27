<template>
    <div class="icon">
        <a v-if="lang === 'en'" href="https://wa.me/+573001782914?text=Hello, I would like to live the Ayahuasca experience.">
            <font-awesome-icon icon="fa-brands fa-whatsapp" class="icon__whatsapp"/>
        </a>
        <a v-if="lang === 'es'" href="https://wa.me/+573001782914?text=Hola, me gustaria vivir la experiencia Ayahuasca.">
            <font-awesome-icon icon="fa-brands fa-whatsapp" class="icon__whatsapp"/>
        </a>
    </div>
</template>
<script>
export default {
    name: "BtnWhatsapp",
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
.icon{
    z-index: 10;
    background: green;
    width: 49px;
    height: 51px;
    padding: 2% 2% 2% 2.5%;
    border-radius: 50%;
    &__whatsapp{
        color: white;
        width: 48px;
        height: 48px;
    }
}

</style>
