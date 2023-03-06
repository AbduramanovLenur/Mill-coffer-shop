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
          v-for="(m, index) in markers"
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
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 54.7065, lng: 20.511 },
      markers: [],
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
      this.infoOptions.content = marker.label.text;

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
      this.markers = [
        {
          position: {
            lat: 59.92680900250736,
            lng: 30.324273540882416,
          },
          label: {
            text: {
              ru: 'Гороховая 53',
              en: 'Gorokhovaya 53'
            },
            color: 'white',
            fontSize: "12px"
          }
        },
        {
          position: {
            lat: 59.91121850056813,
            lng: 30.31802618505715,
          },
          label: {
            text: 'Московский 53',
            color: 'white',
            fontSize: "12px"
          }
        },
        {
          position: {
            lat: 55.08432094230384,
            lng: 21.893569747683117,
          },
          label: {
            text: 'Советск, Гончарова 2а',
            color: 'white',
            fontSize: "12px"
          }
        },
        {
          position: {
            lat: 54.635424554177156,
            lng: 21.811588057293378,
          },
          label: {
            text: 'Черняховск, Пионерская 1',
            color: 'white',
            fontSize: "12px"
          }
        },
        {
          position: {
            lat: 54.671046635849926,
            lng: 20.501011120833557,
          },
          label: {
            text: 'Ульяны-Громовой 15',
            color: 'white',
            fontSize: "12px"
          }
        },
        {
          position: {
            lat: 54.72221660392132,
            lng: 20.499351198400152,
          },
          label: {
            text: 'Советский проспект 6а',
            color: 'white',
            fontSize: "12px"
          }
        },
        {
          position: {
            lat: 54.7641079227565,
            lng: 20.60857065729696,
          },
          label: {
            text: 'Гурьевск, Каштановая 1г',
            color: 'white',
            fontSize: "12px"
          }
        },
        {
          position: {
            lat: 54.7204304658891,
            lng: 20.51047365729582,
          },
          label: {
            text: 'Черняховского 15',
            color: 'white',
            fontSize: "12px"
          }
        },
        {
          position: {
            lat: 54.747761278538654,
            lng: 20.4998423984009,
          },
          label: {
            text: 'Панина 2а',
            color: 'white',
            fontSize: "12px"
          }
        },
        {
          position: {
            lat: 54.71522877037361,
            lng: 20.50329482740869,
          },
          label: {
            text: 'Ленинский 8Б',
            color: 'white',
            fontSize: "12px"
          }
        },
        {
          position: {
            lat: 54.71136360454073,
            lng: 20.5842523983999,
          },
          label: {
            text: 'Аксакова 133',
            color: 'white',
            fontSize: "12px"
          }
        },
        {
          position: {
            lat: 54.73197102643434,
            lng: 20.55058189042249,
          },
          label: {
            text: 'Липовая Аллея 2',
            color: 'white',
            fontSize: "12px"
          }
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.google-map {
  overflow:hidden;
  padding-bottom: 31.7%;
  position:relative;
  max-width: 960px;
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
