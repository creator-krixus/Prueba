<template>
    <div class="Info">
        <img class="Info__image" src="../assets/bebida.webp" alt="drink_ayahuasca">
        <h1 v-if="lang === 'es'" class="Info__title">Que es ayahuasca/yage</h1>
        <h1 v-if="lang === 'en'" class="Info__title">What is ayahuasca/yage</h1>
        <p v-if="lang === 'es'" class="Info__text">La Ayahuasca es una poción que mezcla plantas en fusión,
            y el resultado de esta combinación es una alquimia de transformación.
            La mente es llevada a lo desconocido, y el espíritu se abre a lo divino,
            y en tan singular ritual, el ser se ve florecer. La oscuridad se vuelve luz,
            y el miedo se convierte en confianza. La sanación es el camino tomado y
            el viaje es uno de cambio eterno. Lo viejo se desmorona y lo nuevo se hace
            presente en una danza de trascendencia que nos lleva al presente.
            La alquimia de la ayahuasca no está hecha solo de plantas y raíces,
            sino de la conexión con lo divino, que es tan clara en nosotros.
            Celebremos esta poción y todo su poder curativo, y demos gracias por esta
            alquimia que nos lleva a la más pura transformación. "Abrir los ojos,
            abrir el corazón ♥️..."
        </p>
        <p v-if="lang === 'en'" class="Info__text">Ayahuasca is a potion that mixes plants in fusion,
             and the result of this combination is an alchemy of transformation.
             The mind is drawn into the unknown, and the spirit opens to the divine,
             and in such a unique ritual, the being sees itself flourish. Darkness turns to light
             and fear turns into trust. Healing is the path taken and
             the journey is one of eternal change. The old crumbles and the new is made
             present in a dance of transcendence that takes us to the present.
             The alchemy of ayahuasca is not made only of plants and roots,
             but of the connection with the divine, which is so clear in us.
             Let's celebrate this potion and all its healing power, and give thanks for this
             alchemy that leads us to the purest transformation. "Open the eyes,
             open your heart ♥️..."
        </p>
        <img class="Info__image" src="../assets/ayahuasca_three.webp" alt="three_ayahuasca">
        <h2 v-if="lang === 'es'" class="Info__title">Que beneficios tiene la Ayahuasca/yagé</h2>
         <h2 v-if="lang === 'en'" class="Info__title">What are the benefits of Ayahuasca/yage?</h2>
        <ul v-if="lang === 'es'" class="Info__list">
            <li class="Info__list--items">Es llamado espejo de conciencia, tu mismo tienes el poder de curar,
                 sanar o superar estos aspectos en tu vida.</li>
            <li class="Info__list--items">Eleva tu nivel de Conciencia.</li>
            <li class="Info__list--items">Transforma tu mente, cuerpo y espíritu.</li>
            <li class="Info__list--items">Claridad sobre el propósito de vida.</li>
            <li class="Info__list--items">Sensación de plenitud.</li>
            <li class="Info__list--items">Promover la salud del cerebro.</li>
            <li class="Info__list--items">Genera bienestar psicológico.</li>
            <li class="Info__list--items">Reconocimiento de tu inconsciencia.</li>
            <li class="Info__list--items">Conexión con el medio ambiente y la naturaleza.</li>
            <li class="Info__list--items">Superar duelos.</li>
            <li class="Info__list--items">Ayuda a superar la depresión y el trastorno de estrés postraumático.</li>
        </ul>
        <ul v-if="lang === 'en'" class="Info__list">
            <li class="Info__list--items">It is called a mirror of consciousness, you yourself have the power to heal,
                  heal or overcome these aspects in your life.</li>
            <li class="Info__list--items">Raise your level of Consciousness.</li>
            <li class="Info__list--items">Transform your mind, body and spirit.</li>
            <li class="Info__list--items">Clarity about the purpose of life.</li>
            <li class="Info__list--items">Feeling of fullness.</li>
            <li class="Info__list--items">Promote brain health.</li>
            <li class="Info__list--items">It generates psychological well-being.</li>
            <li class="Info__list--items">Recognition of your unconsciousness.</li>
            <li class="Info__list--items">Connection with the environment and nature.</li>
            <li class="Info__list--items">overcome duels</li>
            <li class="Info__list--items">Helps overcome depression and post-traumatic stress disorder.</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Info",
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
.Info{
    width: 100%;
    background-color: rgb(9, 69, 50);
    text-align: center;
    height: 1750px;
    &__image{    
        width: 90%;
        border-radius: 10px;
    }
    &__title, &__text, &__list{
        color: #fff;
    }
    &__text{
        text-align: left;
        padding: 0 4%;
        font-size: 20px;
        font-family: 'Source Sans Pro', arial, sans-serif;
    }
    &__list{
        font-family: 'Source Sans Pro', arial, sans-serif;
        text-align: left;
        font-size: 20px;   
    }
}

</style>