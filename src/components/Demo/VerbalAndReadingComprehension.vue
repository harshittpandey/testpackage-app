<template>
  <div class="verbalAndReadingComprehension">
    <p style="text-align: center">Verbal and Reading Comprehension Test</p>
    <div style="margin-left: 15px" v-for="(question, index) in myJson" >
      <h4>Question:{{index+1}}</h4>  <p v-html="question.description"></p>
      <h4>Options</h4>
        <div v-for="(option, opindex) in question.options">
          <p>
            {{opindex+1}}: {{option}}
          </p>
        </div>
      <hr>
    </div>
  </div>
</template>

<script>
  import json from '../../questions/question.json'
  
export default {
  name: 'verbal-and-reading-comprehension',
  data(){
    return{
      myJson: json
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.verbalAndReadingComprehension {
  text-align: left
}
</style>
