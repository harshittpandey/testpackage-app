import Dashboard from '../components/dashboard.vue'
import Demo from '../components/Demo/Demo.vue'
import DemoTest from '../components/Demo/DemoTest.vue'
import VerbalAndReadingComprehension from '../components/Demo/VerbalAndReadingComprehension.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/demo',
    component: Demo,
    children: [
      {
        path: '',
        name: 'DemoTest',
        component: DemoTest
      },
      {
        path: 'verbal-and-reading-comprehension',
        name: 'verbal-and-reading-comprehension',
        component: VerbalAndReadingComprehension
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes