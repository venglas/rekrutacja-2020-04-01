<template>
  <v-container>
      <div class="map" id="map">

      </div>
  </v-container>
</template>

<script>
import { mapStyle } from "@/components/utility/mapStyle.js";

export default {
  components: {},
  mounted() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmFydDEyMzQxMiIsImEiOiJjazhobm9lMmowMjczM25tY2g5cngydHR6In0.xuM_M3yP-pxSVB9Ls2ZcOw';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: mapStyle, // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
  }
}
</script>

<style lang="scss" scoped>
.map {
    position: static;
    width: 100%;
    height: 100%;
}
</style>