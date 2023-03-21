<template>
    <div class="Testimonies">
        <h2 class="Testimonies__title" v-if="lang == 'en'">Ayahuascamed experiences</h2>
        <h2 class="Testimonies__title" v-if="lang == 'es'">Experiencias Ayahuascamed</h2>
        <div class="Testimonies__container">
            <div class="Testimonies__container--experience">
                <h3>Bella Smith</h3>
                <img class="Testimonies__container--image" src="../assets/marcela (1).jpg" alt="ayahuascamed">
                <div class="Testimonies__container--stars">
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                </div>
                <p class="Testimonies__container--text" v-if="lang == 'en'">The people who guide this experience are spectacular,
                    always ready to help in any way some person. It has been the deepest journey I have ever
                    made in my life. I advise everyone that they who are looking for something in life and do
                    not know what they are looking for exactly, do it. I will Never forget this magic that I felt.</p>
                <p class="Testimonies__container--text" v-if="lang == 'es'">Las personas que guían esta experiencia son espectaculares,
                     siempre dispuestos a ayudar en cualquier forma a las persona. Ha sido el viaje más profundo que he hecho
                     hecho en mi vida. Les aconsejo a todos aquellos que buscan algo en la vida y no
                     saben lo que están buscando exactamente, hacerlo. Nunca olvidaré esta magia que sentí.</p>
            </div>
            <div class="Testimonies__container--experience">
                <h3>Jhon Pelletier</h3>
                <img class="Testimonies__container--image" src="../assets/Jhon (1).jpg" alt="ayahuascamed">
                <div class="Testimonies__container--stars">
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                </div>
                <p class="Testimonies__container--text" v-if="lang == 'en'">Just amazing a very friendly and helpful team. The place
                     is wonderful and I felt safe there. The medicine helped heal my soul and gave me the answers
                      I needed.I will repeat the treatment at the end of the year in the same place.</p>
                <p class="Testimonies__container--text" v-if="lang == 'es'">Simplemente increíble un equipo muy amable y servicial. El lugar
                      es maravilloso y me sentí seguro allí. La medicina ayudó a sanar mi alma y me dio las respuestas que
                       necesitaba. Repetiré el tratamiento a finales de año en el mismo sitio.</p>      
            </div>
            <div class="Testimonies__container--experience">
                <h3>Marcus Green</h3>
                <img class="Testimonies__container--image" src="../assets/Marcus (1).jpg" alt="ayahuascamed">
                <div class="Testimonies__container--stars">
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                </div>
                <p class="Testimonies__container--text" v-if="lang == 'en'">I am very grateful for the opportunity to receive natural
                    medicine. This organization is well run with the purest of intentions. This is the best kind
                    of trip. Heaven is in the heart.</p>
                <p class="Testimonies__container--text" v-if="lang == 'es'">Estoy muy agradecido por la oportunidad de recibir este medicamento natural.
                      Esta organización está bien dirigida con las intenciones más puras. Este es el mejor tipo
                     de viaje, el cielo está en el corazón</p>    
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Testimonies",
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
.Testimonies{
    background: #f1eae2;
    padding-bottom: 10px;
    padding-top: 10px;
    &__title{
        text-align: center;
    }
    &__container{
        width: 100%;
        &--experience{
            width: 100%;
            display: grid;
            place-items: center;
        }
        &--stars{
            margin-top: 3%;
            color: orange;
        }
        &--image{
            width: 200px;
            height: 200px;
            border-radius: 50%;
        }
        &--text{
            padding: 0% 5%;
        }
    }
}

</style>
