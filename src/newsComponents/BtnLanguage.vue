<template>
    <div class="Btn">
      <img v-if="lang == 'en'" class="Btn__language--flag" src="../assets/Flag_of_the_United_States.svg.webp" @click="changeLangEs()"/>
      <img v-if="lang == 'es'" class="Btn__language--flag" src="../assets/Flag_of_Colombia.svg.webp" @click="changeLangEn()"/>
    </div>
</template>
<script>
export default {
    name: "BtnLanguage",
    data(){
    return {
        lang: ''
    }
  },
    methods:{
        changeLangEs(){
        localStorage.clear();
        localStorage.setItem('language', 'es')
        location.reload();
        },
        changeLangEn(){
        localStorage.clear();
        localStorage.setItem('language', 'en')
        location.reload();
        }
    },
    mounted(){
        this.lang = localStorage.getItem('language');
    }
}
</script>
<style lang="scss">
.Btn{
    z-index: 10;
    position: absolute;
    &__language{
        &--flag{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }
    
}

</style>