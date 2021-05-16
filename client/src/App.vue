<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  components: {
    // HelloWorld
},

data() {
  return {
      form: {
          email: "",
          password: ""
        }
    }
},

 methods: {

    }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  margin: 0 5rem;
}


</style>
