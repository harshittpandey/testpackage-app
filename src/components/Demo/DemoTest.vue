<template>
  <div class="DemoTest">
    <router-link :to="{name: 'verbal-and-reading-comprehension'}">Verbal and communication</router-link>
  </div>
</template>

<script>
export default {
  name: 'DemoTest'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
