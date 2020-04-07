<template>
  <v-container fluid class="map-container my-0">
    <div class="map" id="map">
        <!-- <Map-searcher :map="map"/> -->
      </div>

      <!-- helper tools -->
    <pre id="info" style="color: red; border: 1px solid red; z-index: 999; position: absolute; background-color: rgba(0, 0, 0, .65); top: 0; padding: .5rem;"></pre>
    <div id="calculation-box" class="calculation-box" style="height: 75px;
      width: 150px;
      position: absolute;
      top: 100px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, .65);
      padding: 15px;
      text-align: center;">
      <div id="calculated-area"></div>
    </div>
  </v-container>
</template>

<script>
import { mapState  } from 'vuex';
import { mapStyle } from "@/components/utility/mapStyle.js";
import * as MapboxDraw from "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw";
import turf from "turf";
import { getCoordinates } from "@/components/utility/helpers/getCoordinates.js";
import { geojson } from "@/components/map/markersCoordinates.js";
import drawPoligons from "@/components/map/polygonsGenerator.js";
// import MapSearcher from "@/components/MapSearcher";

export default {
  components: {
    // 'Map-searcher': MapSearcher
  },
  data(){
    return {
      map: null,
      dev: {
        draw: null
      }
    }
  },
  computed: {
    mapResize(){
      return this.$store.getters['map/getResize'];
    }
  },
  watch: {
    mapResize(){
      this.map.resize();
    }
  },
  mounted() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmFydDEyMzQxMiIsImEiOiJjazhobm9lMmowMjczM25tY2g5cngydHR6In0.xuM_M3yP-pxSVB9Ls2ZcOw';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      center: [-75.19279281493687, 39.99900483883425 -0.09],
      zoom: 10.80
    });
    this.map = map;
    
    var draw = new MapboxDraw({
      displayControlsDefault: true,
        controls: {
          polygon: true,
          trash: true
      }
    });

    this.dev.draw = draw;

    getCoordinates(this.map);

    map.addControl(new mapboxgl.NavigationControl()); // map controls +/-
    var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    // this.drawMarkers(map);

    map.addControl(draw);

    map.on('draw.create', () => {this.updateArea(draw)});
    map.on('draw.delete', () => {this.updateArea(draw)});
    map.on('draw.update', () => {this.updateArea(draw)});

    setTimeout(() => {
      drawPoligons(map, "test")  
    }, 1000);
    
  },
  methods: {
    updateArea(draw) {
      
      
      var data = draw.getAll();
      console.group("Coords")
        console.log(data.features[0].id);
        for(const coord of data.features[0].geometry.coordinates[0]){
          console.log(`[${coord[0]}, ${coord[1]}],`);  
        }
      console.groupEnd("Coords")
      var answer = document.getElementById('calculated-area');

      // if (data.features.length > 0) {
        var area = turf.area(data);
        // restrict to area to 2 decimal points
        var rounded_area = Math.round(area * 100) / 100;
        answer.innerHTML =
          '<p><strong>' +
          rounded_area +
          '</strong></p><p>square meters</p>';
      // } else {
        // answer.innerHTML = '';
        // if (e.type !== 'draw.delete')
        // alert('Use the draw tools to draw a polygon!');
      // }
    },
    drawMarkers(map) {
      geojson().features.forEach(function(marker) {
        var el = document.createElement('div');
        el.className = "marker";

        el.innerHTML = `
          <div class="popover">
            <p class="popover__message"></p>
          </div>
        `;
        
        el.children[0].children[0].innerHTML = `$${marker.properties.price}`;
        
        el.addEventListener('click', function(e) {});
        
        // add marker to map
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
      });
    }
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
#map {
  height: 100vh;
  width: 100vw;
}

.mapboxgl-canvas {
  left: 0;
}

.marker {
  display: block;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
}
</style>