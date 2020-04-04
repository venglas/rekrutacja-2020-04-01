<template>
<div class="aa"></div>
<!-- <div class="popover">
    <p class="popover__message">{{feature.properties.price}}</p>
</div>  -->
</template>
 
<script>
    export default {
    name: 'Map-marker',
    data() {
        return {
            
        }
    },
    props: [
        'feature',
        'map'
    ],
    computed: {},
    watch: {},
    mounted() {
        
        var el = document.createElement('div');
        el.className = "marker";
        

        el.innerHTML = `
          <div class="popover">
            <p class="popover__message"></p>
          </div>
        `;
        
        el.children[0].children[0].innerHTML = this.feature.properties.price;




        
        const vm = this;
        // console.log( vm.map);
        
        // new mapboxgl.Marker(el)
        // .setLngLat(vm.feature.geometry.coordinates)
        // .addTo(vm.map);
    },
    created() {},
    methods: {}
}
</script>

<style lang='scss'>
// .marker {
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
// }
</style>