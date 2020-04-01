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
      el.className = 'marker';
      el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
      el.style.width = marker.properties.iconSize[0] + 'px';
      el.style.height = marker.properties.iconSize[1] + 'px';
      
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

<style lang="scss" scoped>
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