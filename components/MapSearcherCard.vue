<template>
 <v-card light flat @click="goToProperty(property), animateValue(propertyPrice, 800, 400);" class="map-searcher-card">
    <div class="d-flex flex-no-wrap">
        <v-avatar class="ma-3" size="100" tile>
            <v-img :src="`/img/properties/property${property.img}.jpg`"></v-img>
        </v-avatar>

        <div>
            <v-card-title>
                <a style="color: #69a3a5; font-size: 1rem">{{property.name}}</a>
            </v-card-title>

            <v-card-subtitle style="color: #000">
                <div class="property-info">{{property.address}}</div>
                <div class="property-info"><b>rooms:</b> {{property.rooms}} <b>| baths:</b> {{property.baths}}</div>
                <div class="property-info"><b>policies:</b> <span v-for="police in property.policies" :key="police">{{police}}, </span> </div>
                <h2>${{propertyPrice}}</h2>
            </v-card-subtitle>
        </div>
    </div>

    <v-divider />
</v-card>
</template>
 
<script>
    export default {
    name: 'Map-searcher-card',
    data() {
        return {
            
        }
    },
    props: {
        property: { type: Object },
        map: { type: Object }
    },
    computed: {
        propertyPrice(){
            return JSON.parse(this.property.price);
        },
    },
    watch: {},
    created() {;
    },
    methods: {
        goToProperty(property){
            this.map.flyTo({
                center: [
                    property.coordinates[0], property.coordinates[1]
                ],
                essential: true
            });
        },
        animateValue(start, maxIncrease, duration) {
            const random = (Math.random() * maxIncrease).toFixed(0);
            const end = start + JSON.parse((random));

            const vm = this;
            const range = end - start;
            let current = start;
            const increment = end > start? 1 : -1;
            const stepTime = Math.abs(Math.floor(duration / range));
            
            const timer = setInterval(function() {
                current += increment;
                vm.property.price = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }
    },
}
</script>

<style lang="scss">
.map-searcher-card{
    align-items: center;
    
    .property-info {
        color: #000;
        font-size: .8rem;
    }
}
</style>