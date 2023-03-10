import Vue from 'vue';
import * as VueGoogleMaps from "vue2-google-maps";
import GMapCluster from 'vue2-google-maps/dist/components/cluster'

Vue.use(VueGoogleMaps, {
  load: {
    key: "",
  },
  installComponents: true,
});
Vue.component('GMapCluster', GMapCluster)
