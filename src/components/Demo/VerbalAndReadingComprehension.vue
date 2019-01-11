<template>
  <div class="verbalAndReadingComprehension">
    <h4 style="text-align: center">Verbal and Reading Comprehension Test</h4>
    <div id="timer">
      <span id="minutes">{{minutes}}</span>
      <span id="middle">:</span>
      <span id="seconds">{{seconds}}</span>
    </div>
    <div >
      <h4>Question {{curr_ques_index+1}}: </h4>
      <p v-html="curr_ques.description"></p>
      <div class="buttons">
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
      </div>
    </div>
    <button id="next_button" @click="nextQuestion">Next</button>
    <button id="submit_button">Submit</button>
  </div>
</template>

<script>
  import json from '../../questions/question.json'
  
  
export default {
  name: 'verbal-and-reading-comprehension',
  data(){
    return{
      myJson: json,
      timer: null,
      totalTime: (1 * 60),
      curr_ques_index: 0,
      curr_ques: {}
    }
  },
  props: {
    msg: String
  },
  methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
    },
    resetTimer: function() {
      this.totalTime = (1 * 60);
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
    },
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time;
    },
    nextQuestion: function() {
      this.resetTimer();
        this.curr_ques_index++;
        if (this.myJson.length- this.curr_ques_index== 1) {
          document.getElementById('submit_button').style.display= 'block';
          document.getElementById('next_button').style.display= 'none';
          this.startTimer()  
        }
        else {
          this.curr_ques=this.myJson[this.curr_ques_index];
          this.startTimer()  
        }
    },
    countdown: function() {
      this.totalTime--;
      if(this.totalTime==0) {
        this.nextQuestion()
      }
    }
  },
  computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    }
  },
  created: function() {
    this.startTimer()
    this.curr_ques=this.myJson[this.curr_ques_index]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.verbalAndReadingComprehension {
  text-align: left
}
#submit_button {
  display: none;
}
mark {
  background-color: yellow!important
}
</style>
