<template>
  <div class="DemoTest">
    <div class="m-5 row">
        <b-card title="Verbal and communication"
          img-src="download.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 18rem;border: 1px solid lightgray"
          class="m-2 ">
          <p class="card-text">
              This is a demo test having 8 questions.
          </p>
          <b-button href="#" variant="primary" style="cursor: pointer">
              <router-link :to="{name: 'verbal-and-reading-comprehension'}">Take Test</router-link>
          </b-button>
      </b-card>

        <b-card title="Dummy Card"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 18rem;opacity: 0.5"
          class="m-2">
          <p class="card-text">
              This Link is not active.
          </p>
          <b-button href="#" variant="primary">
            Dummy Button
          </b-button>
      </b-card>

        <b-card title="Dummy card"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 18rem;opacity: 0.5"
          class="m-2">
          <p class="card-text">
              This link is not active.
          </p>
          <b-button href="#" variant="primary" disabled>
            Dummy Button
          </b-button>
      </b-card>
    </div>

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
