<template>
 <v-card light flat @click="goToProperty(property), animateValue(propertyPrice, 800, 1000);">
    <div class="d-flex flex-no-wrap">
        <v-avatar class="ma-3" size="100" tile>
            <v-img :src="`/img/properties/property${property.img}.jpg`"></v-img>
        </v-avatar>

        <div>
            <v-card-title>
                <a style="color: #69a3a5; font-size: 1rem">{{property.name}}</a>
            </v-card-title>

            <v-card-subtitle style="color: #000">
                <p style="color: #000; font-size: .6rem">{{property.address}}</p>
                <h2>${{price}}</h2>
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
            price: this.property.price
        }
    },
    props: {
        property: { type: Object },
        map: { type: Object }
    },
    computed: {
        propertyPrice(){
            return JSON.parse(this.property.price);
        }
    },
    watch: {},
    created() {},
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

            console.log(random)
            const vm = this;
            const range = end - start;
            let current = start;
            const increment = end > start? 1 : -1;
            const stepTime = Math.abs(Math.floor(duration / range));
            
            const timer = setInterval(function() {
                current += increment;
                vm.price = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }
    },
}
</script>

<style lang='scss'>
</style>