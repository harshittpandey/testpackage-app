<template>
  <div class="verbalAndReadingComprehension">
    <h4 style="text-align: center">Verbal and Reading Comprehension Test</h4>
    <div id="test">
      <div id="timer" class="timer">
        <span id="minutes"><strong>{{minutes}}</strong></span>
        <span id="middle">:</span>
        <span id="seconds"><strong>{{seconds}}</strong></span>
      </div>
      <div>
        <div  v-if="curr_ques.is_reading_passage == '0'">
          <h4 style="padding-left: 35px;"> <u> Question <strong>{{curr_ques_index+1}}  </strong>: </u></h4>
          <p  v-html="curr_ques.description" style="padding-left: 35px;"></p>
          <div class="buttons" v-for="option in curr_ques.options" style="">
            <label class="container"  >{{option}}
              <input type="radio" :value="option" v-model="picked">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>

        <div v-else class="row">
          <div class="col-sm-6">
            <h4 style="padding-left: 35px;"> <u> Question <strong>{{curr_ques_index+1}}  </strong>: </u></h4>
            <p  v-html="curr_ques.description" style="padding-left: 35px;"></p>            
          </div>
          <div class="col-sm-5">
            <div class="buttons" style="margin-top: 2em" v-for="option in curr_ques.options">
              <label class="container" >{{option}}
                <input type="radio" :value="option" v-model="picked">
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="nav_buttons">
        <button id="next_button" @click="nextQuestion">Next</button>
        <button id="submit_button" @click="onSubmit">Submit</button>
      </div>
    </div>
    <div id="result" style="margin-top: 5em">
      <h1 style="text-align: center">Your Score</h1>
      <h1 style="font-size: 100px; text-align: center"> {{final_res}}</h1>
      <div style="background-color: #588BAE;color:#eee;padding: 10px;width: 200px; text-align: center; cursor: pointer;">
        <router-link :to="{name: 'DemoTest'}" style="color: inherit;text-decoration: none">Go to Demo</router-link>
      </div>
    </div>
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
      totalTime: (10 * 60),
      curr_ques_index: 0,
      curr_ques: {},
      curr_res:0,
      final_res:0,
      picked: ''
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
      this.totalTime = (10 * 60);
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
    },
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time;
    },
    checkScore: function () {
      let ans= this.myJson[this.curr_ques_index].answer;
      if(this.picked){
        if(this.picked == ans) {
          this.final_res= this.final_res+1;
        }
        else {
          this.final_res= this.final_res- 0.25;
        }
      }
      this.picked=''; 
    },
    nextQuestion: function() {
        this.checkScore();
        this.curr_ques_index++;
        if (this.myJson.length- this.curr_ques_index== 1) {
          this.curr_ques=this.myJson[this.curr_ques_index];
          document.getElementById('submit_button').style.display= 'block';
          document.getElementById('next_button').style.display= 'none';
        }
        else {
          this.curr_ques=this.myJson[this.curr_ques_index];
        }
    },
    countdown: function() {
      this.totalTime--;
      if (this.totalTime==10) {
        document.getElementById('timer').style.color="red"
      }
      if(this.totalTime==0) {
        this.onSubmit()
      }
    },
    onSubmit: function () {
      document.getElementById("test").style.display= "none";
      document.getElementById("result").style.display= "block";

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
    curr_res:0
    final_res:0
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
#result {
  display: none;
}
mark {
  background-color: yellow!important
}

.timer {
  text-align: center;
  font-size: 40px
}

/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 1px;
  left: 0;
  height: 30px;
  width: 30px;
  background-color: #eee;
  border-radius: 10%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 0px;
  left: 0px;
  width: 30px;
  height: 30px;
  border-radius: 10%;
  background: #4682B4;
}

.nav_buttons {
  position: fixed;
  right: 10%;
  bottom: 5%
}

.nav_buttons button {
  padding: 10px!important;
  background-color: #588BAE;
  border: 0px;
  cursor: pointer;
  width: 200px
}
</style>
