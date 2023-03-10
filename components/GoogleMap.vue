<template>
  <div :class="b()">
    <GmapMap
      :center="center"
      :zoom="12"
      :class="b('overlay')"
      >
      <GMapCluster
        :zoomOnClick="true">
        <GmapInfoWindow
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen = false"
          >
        </GmapInfoWindow>
        <GmapMarker
          v-for="(m, index) in marker"
          :key="'m' + index.toString()"
          :position="m.position"
          :clickable="true"
          @click="toggleInfoWindow(m, index)"
          >
        </GmapMarker>
      </GMapCluster>
    </GmapMap>
  </div>
</template>

<script>
import markers from '@/utils/mapMarkersData.js';

export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 54.7065, lng: 20.511 },
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        content: '',
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position;
      let text = marker.label.text[this.$i18n.locale];
      this.infoOptions.content = text;

      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    geolocate: function () {
      // navigator.geolocation.getCurrentPosition(position => {
      //   this.center = {
      //     lat: position.coords.latitude,
      //     lng: position.coords.longitude
      //   };
      // });
    }
  },
  computed: {
    marker() {
      return markers.map(item => {
        return {
          position: {
            lat: (() => item.position.lat)(),
            lng: (() => item.position.lng)(),
          },
          label: (() => item.label)()
        }
      })
    },
  }
};
</script>

<style lang="scss" scoped>
.google-map {
  overflow:hidden;
  padding-bottom: 31.7%;
  position:relative;
  max-width: 960px;
  width: 100%;
  height:0;
  &__overlay {
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
  }
}
</style>
