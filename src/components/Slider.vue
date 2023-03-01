<script>
export default {
    name:"Slider"
}
</script>

<template>
    <div class="container__slider">
        <div class="container">
            <input type="radio" name="slider" id="item-1" checked />
            <input type="radio" name="slider" id="item-2" />
            <input type="radio" name="slider" id="item-3" />
            <div class="cards">
                <label class="card" for="item-1" id="selector-1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad ipsum reiciendis quae vel, nobis illum hic obcaecati, ex asperiores quas rerum, eum excepturi. Distinctio rerum est quis esse cupiditate.</p>
                    <img src="../assets/marcela.jpg" alt="img">
                </label>
                <label class="card" for="item-2" id="selector-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis illo quis, aut ducimus reiciendis suscipit voluptate, laboriosam culpa facere consectetur neque repellat delectus optio animi odit magni corporis cupiditate? Repellat.</p>
                    <img src="../assets/marcela.jpg" alt="img">
                </label>
                <label class="card" for="item-3" id="selector-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde veritatis perferendis repellendus nemo sequi praesentium, exercitationem adipisci voluptas molestias voluptates harum debitis atque nobis rerum ducimus enim obcaecati expedita dignissimos!</p>
                    <img src="../assets/marcela.jpg" alt="img">
                </label>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.container__slider{
    max-width: 500px;
    width: 100%;
    height: 500px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.container{
    width: 100%;
    height: 100%;
    max-width: 300px;

    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
}
.cards{
    position: relative;
    width: 100%;
    height: 50%;
}
.card{
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    margin: auto;
    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: #f1eae2;
    justify-content: space-between;
    border-radius: 12px;
    overflow: hidden;
}
img{
    width: 50%;
    height: 100%;
    object-fit: cover;
    transition: 1s;
    cursor: pointer;
    user-select: none;
}
[type=radio]{
    position: relative;
    top: 30%;
}
#item-2:checked ~ .cards #selector-1,
#item-1:checked ~ .cards #selector-3,
#item-3:checked ~ .cards #selector-2{
    transform: translateX(-40%) scale(0.8);
    opacity: 0.8;
    z-index: 0;
    p{
        display: none;
    }

}

#item-3:checked ~ .cards #selector-1,
#item-1:checked ~ .cards #selector-2,
#item-2:checked ~ .cards #selector-3{
    transform: translateX(40%) scale(0.8);
    opacity: 0.6;
    z-index: 0;
    p{
        display: none;
    }
}
#item-1:checked ~ .cards #selector-1,
#item-2:checked ~ .cards #selector-2,
#item-3:checked ~ .cards #selector-3{
    transform: translateX(0) scale(1);
    z-index: 1;
}

</style>