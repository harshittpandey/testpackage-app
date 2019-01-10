import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


// router setup
import routes from './routes/routes'


Vue.use(VueRouter)

Vue.config.productionTip = false

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
