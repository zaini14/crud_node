<template>
  <div>
    <Navbar />  
  </div>
</template>

<script>
  import Navbar from "../components/Navbar.vue"

export default {

  name: "Home",
  components: {
    Navbar
  },

  data () {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    }
  },
  methods: {
     handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style lang="css" scoped>
</style>