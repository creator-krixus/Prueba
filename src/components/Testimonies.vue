<template>
    <div class="Testimonies">
        <h1 class="Testimonies__title">Experiencias Ayahuascamed</h1>
        <div class="Testimonies__container">
            <div class="Testimonies__container--experience">
                <img class="Testimonies__container--image" src="../assets/marcela.jpg" alt="">
                <div class="Testimonies__container--stars">
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                </div>
                <p class="Testimonies__container--text">Lorem ipsum dolor sit amet consectetur adipiscing elit mauris, scelerisque feugiat ullamcorper fusce id magna nulla nam, mollis placerat torquent iaculis elementum nunc sed. Nam lacus placerat cubilia cras metus orci, semper ligula gravida facilisis venenatis ante, quisque class tempus pulvinar quam. Torquent rhoncus id facilisi tristique porta eget sem malesuada penatibus tincidunt donec primis, curabitur risus hendrerit venenatis sollicitudin faucibus netus tempus fusce libero lectus.</p>
            </div>
            <div class="Testimonies__container--experience">
                <img class="Testimonies__container--image" src="../assets/marcela.jpg" alt="">
                <div class="Testimonies__container--stars">
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                </div>
                <p class="Testimonies__container--text">Lorem ipsum dolor sit amet consectetur adipiscing elit mauris, scelerisque feugiat ullamcorper fusce id magna nulla nam, mollis placerat torquent iaculis elementum nunc sed. Nam lacus placerat cubilia cras metus orci, semper ligula gravida facilisis venenatis ante, quisque class tempus pulvinar quam. Torquent rhoncus id facilisi tristique porta eget sem malesuada penatibus tincidunt donec primis, curabitur risus hendrerit venenatis sollicitudin faucibus netus tempus fusce libero lectus.</p>
            </div>
            <div class="Testimonies__container--experience">
                <img class="Testimonies__container--image" src="../assets/marcela.jpg" alt="">
                <div class="Testimonies__container--stars">
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="icon__star"/>
                </div>
                <p class="Testimonies__container--text">Lorem ipsum dolor sit amet consectetur adipiscing elit mauris, scelerisque feugiat ullamcorper fusce id magna nulla nam, mollis placerat torquent iaculis elementum nunc sed. Nam lacus placerat cubilia cras metus orci, semper ligula gravida facilisis venenatis ante, quisque class tempus pulvinar quam. Torquent rhoncus id facilisi tristique porta eget sem malesuada penatibus tincidunt donec primis, curabitur risus hendrerit venenatis sollicitudin faucibus netus tempus fusce libero lectus.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Testimonies"
}
</script>
<style lang="scss">
.Testimonies{
    background: #f1eae2;
    padding-bottom: 10px;
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
