<template>
  <div class="home">
    <NavBar />
    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Main from '@/components/Main.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    Main,
    NavBar
  }
}
</script>
