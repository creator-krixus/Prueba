<template>
  <div class="NavBar">
    <img class="NavBar__logo" src="../assets/ayahuasca.jpeg" />
    <h2>Ayahuascamed</h2>
  </div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>
<style lang="scss">
.NavBar{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background: #fcfbf9;
    padding: 0px 5px 0px 5px;
    &__logo{
    width:60px;
    border-radius: 50%
}
}


</style>