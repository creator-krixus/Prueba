<template>
    <div class="Diet">
        <h1 v-if="lang === 'es'" class="Diet__title">Dieta y recomendaciones para la ceremonia</h1>
        <h1 v-if="lang === 'en'" class="Diet__title">Diet and recommendations for the ceremony</h1>
        <img class="Diet__image" src="../assets/diet.webp" alt="dinner_ayahuasca">
        <ul v-if="lang === 'es'" class="Diet__list">
            <li>1.El día de la ceremonia guardar ayunó o comer liviano, frutas y agua.</li>
            <li>2.Ayuno de carnes especialmente rojas y comidas pesadas tres días antes y el día de la ceremonia. </li>
            <li>3.No comer ajo, cebolla, ají, cítricos, ni lácteos tres días antes y el día de la toma.</li>
            <li>4.Evitar relaciones sexuales tres días antes de la ceremonia y el día de la ceremonia.</li>
            <li>5.Evitar el consumo de alcohol y sustancias alucinógenas. Tres días antes y el día de la ceremonia</li>
            <li>6.Personas que esten tomando algun antibiótico (medicamento) o sufran alguna enfermedad como problemas en el corazón hipertensos úlceras o que tomen droga siquiatrica hablar con el guia o hacérselo saber  días antes de la ceremonia</li>
            <li>7.Agua veladora blanca, ropa blanca o colores claros y de cambio por si acaso.</li>
            <li>8.Mujeres con la luna (Periodo menstrual) abstenerse de asístir en otra oportunidad nos acompañaran.</li>
        </ul>
        <ul v-if="lang === 'en'" class="Diet__list">
            <li>1. On the day of the ceremony, fast or eat light, fruits and water.</li>
            <li>2. Fast from meats especially red and heavy meals three days before and the day of the ceremony. </li>
            <li>3. Do not eat garlic, onion, chili, citrus fruits, or dairy products three days before and on the day of intake.</li>
            <li>4. Avoid sexual intercourse three days before the ceremony and on the day of the ceremony.</li>
            <li>5. Avoid the consumption of alcohol and hallucinogenic substances. Three days before and the day of the ceremony</li>
            <li>6. People who are taking any antibiotic (medication) or suffer from any disease such as heart problems, hypertensive ulcers or who take psychiatric drugs, talk to the guide or let him know days before the ceremony</li>
            <li>7. White candle water, white clothes or light colors and a change just in case.</li>
            <li>8. Women with the moon (menstrual period) refrain from attending another time they will accompany us.</li>
        </ul>
        <p v-if="lang === 'es'" class="Diet__text">Bien llegados todos a recibir está sagrada totuma de Yage  🙏☕🌿</p>
         <p v-if="lang === 'en'" class="Diet__text">Well come everyone to receive this sacred totuma de Yage 🙏☕🌿</p>
    </div>
</template>
<script>
export default {
    name: "Diet",
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
.Diet{
    width: 100%;
    background-color: rgb(9, 69, 50);
    text-align: center;
    padding: 1% 0 0 0;
    height: 1410px;
    &__image{
        width: 90%;
        border-radius: 30px;
    }
    &__title, &__list, &__text{
        color: #fff;
    }
    &__list{
        font-family: 'Source Sans Pro', arial, sans-serif;
        text-align: left;
        font-size: 20px; 
        list-style: none;  
        padding: 0 4%;
        line-height: 1.5;
    }
    &__text{
        font-size: 20px;
        font-family: 'Source Sans Pro', arial, sans-serif;
    }
}
</style>