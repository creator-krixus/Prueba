<template>
  <div class="main">
    <img class="main__image" src="../assets/image_ayahuasca-meet.jpeg" alt="ayahuascamed"/>
    <div class="main__info" >
        <p class="main__info--text" v-if="lang == 'en'">There is a lot of talk about Yage and power plants and people are fascinated with the experience, but yage and sacred plants is not just an experience, the medicine is a wise spirit, the first thing it does when it enters your body is to take an exam. about why and why you came to her, she will treat you the same way, she will give you understanding or just an experience, be sincere, be honest with yourself when you approach her. I have seen people who have seen demons, hell and many things that we do not want to see in medicine, but what medicine has always told me is that everything we see in it is part of us, nothing is outside even if it is reflected there, when When you see these things, ask yourself what you are doing in your life or done in your lives so that this comes to light with the plant, which is healing you, accepting is the first step, then confronting and understanding. So understanding is more important than the look or vision that power plants give you.</p>
        <p class="main__info--text" v-if="lang == 'es'">Se habla mucho del Yage y las plantas de poder y la gente fascinada con la experiencia, pero el yage y las plantas sagradas no es solo una experiencia, la medicina es espíritu sabio, lo primero que hace al entrar a tu cuerpo es hacer un examen de porque y para que viniste a ella, así mismo te tratará, así mismo te dará entendimiento o tan solo una experiencia, se sincero se honesto con tigo cuando te acerques a ella. He visto personas que han visto demonios, infiernos y muchas cosas que no queremos ver en la medicina, pero lo que siempre me ha dicho la medicina es que todo lo que vemos en ella es parte de nosotros nada esta afuera aunque se refleje allí, cuando veas estas cosas pregúntate que estás haciendo en tú vida o hecho en tus vidas para que esto salga a luz con la planta, que te está curando, aceptar es el primer paso luego confrontar y comprender. Así que el entender es más importante que la pinta o visión que te dan las plantas de poder.</p>
        <img class="main__info--image" src="../assets/ayahuasca_caldo.jpg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data(){
    return {
        lang: ''
    }
  },
  mounted(){
    this.lang = localStorage.getItem('language');
  }
};
</script>
<style lang="scss">
.main{
    background:#f1eae2;
    &__image{
        width: 100%;
    }
    &__info{
      &--text{
        padding: 0 5%;
      }
        &--title{
            text-align: center;
        }
        &--image{
            max-width: 380px;
            max-height: 380px;
            width:90%;
            height: 90%;
            padding: 0 5% 0 5%;
            border-top-left-radius: 30%;
            border-bottom-right-radius: 30%;
        }
    }

}

</style>