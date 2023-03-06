import Vue from 'vue';
import * as VueGoogleMaps from "vue2-google-maps";
import GMapCluster from 'vue2-google-maps/dist/components/cluster'

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBOupV7OUW3nPvyRj06Ptnt4BhXyLoe_4Y",
  },
  installComponents: true,
});
Vue.component('GMapCluster', GMapCluster)
