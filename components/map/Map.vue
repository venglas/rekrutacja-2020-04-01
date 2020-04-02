<template>
  <v-container>
    <div class="map" id="map"></div>
    <pre id="info" style="color: red; border: 1px solid red; z-index: 999; position: absolute;"></pre>
  </v-container>
</template>

<script>
import { mapStyle } from "@/components/utility/mapStyle.js";
import { getCoordinates } from "@/components/utility/helpers.js";
import { geojson } from "@/components/map/markersCoordinates.js";

export default {
  components: {},
  async mounted() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmFydDEyMzQxMiIsImEiOiJjazhobm9lMmowMjczM25tY2g5cngydHR6In0.xuM_M3yP-pxSVB9Ls2ZcOw';
    var map = new mapboxgl.Map({
      container: 'map',
      style: mapStyle,
      center: [-74.5, 40],
      zoom: 9
    });
    getCoordinates(map);
    var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });

    geojson().features.forEach(function(marker) {
      var el = document.createElement('div');
      el.className = "marker";

      el.innerHTML = `
        <div class="popover">
          <p class="popover__message"></p>
        </div>
      `;
      
      el.children[0].children[0].innerHTML = marker.properties.message
      
      el.addEventListener('click', function() {
        window.alert(marker.properties.message);
      });
      
      // add marker to map
      new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
    });
  }
}
</script>

<style lang="scss">
.marker {
  .popover {
    opacity: 1;
    transform: translate(0, 10px);
    background-color: #5d4baf;
    padding: 0 10px;
    border-radius: 4px;
    font-weight: bold;
    width: fit-content;

     &:before {
      position: absolute;
      z-index: -1;
      content: "";
      right: calc(50% - 10px);
      bottom: -8px;
      border-style: solid;
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent #5d4baf transparent;
      transition-duration: 0.3s;
      transition-property: transform;
      transform: rotate(180deg)
    }
  }
}
.mapboxgl-map {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
}

.marker {
  display: block;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
}
</style>