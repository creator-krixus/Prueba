<template>
    <div class="Contacto" id="contacto">
        <h2 class="Contacto__title" v-if="lang == 'es'">Contáctanos</h2>
        <p class="Contacto__text" v-if="lang == 'es'">¡Nos encantaría saber de ti! Si tienes alguna pregunta,
            comentario o sugerencia, por favor no dudes en contactarnos.</p>
        <form class="Contacto__form" v-if="lang == 'es'">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" required rows="5" cols="50"></textarea>

            <button class="Contacto__form--btn" type="submit">Enviar</button>
        </form>
        <p v-if="lang == 'es'">O si lo prefieres, contáctanos por correo electrónico o teléfono:</p>
        <ul class="Contacto__form--list" v-if="lang == 'es'">
            <li class="item"><a href="mailto:info@ayahuascamed.com">info@ayahuasmed.com</a></li>
            <li class="item"><a href="tel:+573001782914">+573001782914</a></li>
        </ul>
        <h2 class="Contacto__title" v-if="lang == 'en'">contact us</h2>
        <p class="Contacto__text" v-if="lang == 'en'">We'd love to hear from you! If you have any question,
             comment or suggestion, please do not hesitate to contact us.</p>
        <form class="Contacto__form" v-if="lang == 'en'">
            <label for="nombre">Name:</label>
            <input type="text" id="nombre" name="nombre" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="mensaje">Message:</label>
            <textarea id="mensaje" name="mensaje" required rows="5" cols="50"></textarea>

            <button class="Contacto__form--btn" type="submit">Send</button>
        </form>
        <p v-if="lang == 'en'">Or if you prefer, contact us by email
              or phone:</p>
        <ul class="Contacto__form--list" v-if="lang == 'en'">
            <li class="item"><a href="mailto:info@ayahuascamed.com">info@ayahuasmed.com</a></li>
            <li class="item"><a href="tel:+573001782914">+573001782914</a></li>
        </ul>
    </div>
</template> 
<script>
export default {
    name: 'Contactanos',
    data() {
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
.Contacto{
    padding: 0 7px 10px 7px;
    &__title{
        text-align: center;
    }
    &__form{
        display: flex;
        flex-direction: column;
        textarea {
             resize: none;
        }
        &--btn{
            margin: 10px auto 0;
            width: 60px;
            padding: 5px;
            font-size: 16px;
            background: green;
            border-radius: 6px;
            color:#fff
        }
        &--list{
            .item{
                list-style: none;
                a{
                    text-decoration: none;
                    margin-bottom: 10px;
                }
            }
        }
    }
}

</style>