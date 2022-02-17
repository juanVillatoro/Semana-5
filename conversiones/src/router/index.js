import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'
//import Home from '../views/Home.vue'

//Importamos las vistas
import ConvertirTiempo from '../views/ConvertirTiempo.vue'
import ConversionMasa from '../views/ConvertirMasa.vue'
import ConversionLongitud from '../views/ConvertirLongitud.vue'
import ConversionAlmacenamiento from '../views/ConvertirAlmacenamiento.vue'
import ConversionMoneda from '../views/ConvertirMoneda.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },

  {
    path: '/Tiempo',
    name: 'ConversionTiempo',
    component: ConvertirTiempo
  },
  {
    path: '/Masa',
    name: 'ConversionMasa',
    component: ConversionMasa
  },
  {
    path: '/Longitud',
    name: 'ConversionLongitud',
    component: ConversionLongitud
  },
  {
    path: '/Almacenamiento',
    name: 'ConversionAlmacenamiento',
    component: ConversionAlmacenamiento
  },
  {
    path: '/Moneda',
    name: 'ConversionMoneda',
    component: ConversionMoneda
  }, 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
