<template>
    <section class="map-searcher" v-if="$store.state.map.mapSearcher.visible">
        <v-toolbar color="#5d4baf" class="toolbar">
            <v-row>
                <v-col col="12" sm="1" align-self="center">
                    <v-icon class="mr-2">mdi-home-search</v-icon>
                </v-col>
                
                <v-col col="12" sm="10">
                    <v-text-field
                    autofocus
                    v-model="searchingText"
                    ></v-text-field>
                </v-col>
                
                <v-col col="12" sm="1" @click="$store.commit('map/hideMapSearcher')">
                    <v-icon size="medium" class="close">mdi-close-thick</v-icon>
                </v-col>
            </v-row>
            
        </v-toolbar>

        <v-row class="px-4">
            <v-col class="d-flex filter-dropdown" cols="12" sm="3">
                <v-select
                :items="filters.price"
                v-model="dropdownsSelectedOptions.price"
                label="Price"
                solo
                light
                ></v-select>
            </v-col>

            <v-col class="d-flex filter-dropdown" cols="12" sm="3">
                <v-select
                :items="filters.room_bath"
                v-model="dropdownsSelectedOptions.room_bath"
                label="Room/Bath"
                solo
                light
                ></v-select>
            </v-col>

            <v-col class="d-flex filter-dropdown" cols="12" sm="3">
                <v-select
                :items="filters.policies"
                v-model="dropdownsSelectedOptions.policies"
                label="Policies"
                solo
                light
                ></v-select>
            </v-col>

            <v-col>
                <v-btn color="success" fab x-small dark title="Reset filters" @click="resetFilters()">
                    <v-icon>mdi-reload</v-icon>
                </v-btn>
            </v-col>

        </v-row>

        <div class="properties-list-wrapper">
            <div style="color: rgba(0, 0, 0, .5); font-size: 11px; margin: -1rem 0 0 1.5rem; z-index: 999; position: absolute">Showing {{properties.length}} properties</div>
            <v-col 
            class="py-0"
            v-for="(property, i) in properties"
            :key="i"
            cols="12"
            >
                <Map-searcher-card :map="map" :property="property" />
            </v-col>    
        </div>
        
    </section>
</template>
 
<script>
import MapSearcherCard from "@/components/MapSearcherCard";

    export default {
    name: 'Map-searcher',
    components: {
        'Map-searcher-card': MapSearcherCard
    },
    data() {
        return {
            searchingText: "",
            filters: {
                price: ["ascending", "descending"],
                room_bath: ["1 room", "2 rooms", "3 rooms", "4+ rooms", "1 bath", "2 baths", "3+ baths"],
                policies: ["smokers", "pets"]
            },
            dropdownsSelectedOptions: {
                price: null,
                room_bath: null,
                policies: null
            },
            properties: this.$store.state.map.places
        }
    },
    props: {
        map: { type: Object }
    },
    computed: {},
    watch: {
        searchingText(){
            this.filteredProperties();
        },
        'dropdownsSelectedOptions.price'() {
            this.filteredProperties();
            let sorted;

            switch(this.dropdownsSelectedOptions.price) {
                case null: return;
                case "descending": {
                    sorted = this.properties.sort((a, b) => {
                        return b.price - a.price;
                    });
                    break;
                }
                case "ascending": {
                    sorted = this.properties.sort((a, b) => {
                        return a.price - b.price;
                    });
                    break;
                }
            };

            this.properties = sorted;
        },

        'dropdownsSelectedOptions.room_bath'() {
            const vm = this;
            this.filteredProperties();
            let filtered;

            const filterRoomsBath = (which, count) => {
                filtered = vm.properties.filter( property => {
                    if (which === "rooms"){
                        if (property.rooms === count) {
                            return property;
                        }
                    } else if (which === "baths") {
                        if (property.baths === count) {
                            return property;
                        }
                    }
                } )
            }

            switch(this.dropdownsSelectedOptions.room_bath) {
                case null: return;
                case "1 room": {
                    filterRoomsBath("rooms", 1);
                    break;
                }
                case "2 rooms": {
                    filterRoomsBath("rooms", 2);
                    break;
                }
                case "3 rooms": {
                    filterRoomsBath("rooms", 3);
                    break;
                }
                case "4+ rooms": {
                    filtered = this.properties.filter( property => {
                        if (property.rooms >= 4){
                            return property;
                        }
                    });
                    break;
                }

                case "1 bath": {
                    filterRoomsBath("baths", 1);
                    break;
                }
                case "2 baths": {
                    filterRoomsBath("baths", 2);
                    break;
                }
                case "3+ baths": {
                    filtered = this.properties.filter( property => {
                        if (property.baths >= 3){
                            return property;
                        }
                    });
                    break;
                }
            }

            this.properties = filtered;
        },

        'dropdownsSelectedOptions.policies'() {
            this.filteredProperties();
            let filtered;

            switch (this.dropdownsSelectedOptions.policies) {
                case null: return;
                case "smokers": {
                    filtered = this.properties.filter( property => {
                        if (property.policies.includes("smoking")){
                            return property;
                        }
                    });
                    break;
                }
                case "pets": {
                    filtered = this.properties.filter( property => {
                        if (property.policies.includes("pets")){
                            return property;
                        }
                    });
                    break;
                }
            }

            this.properties = filtered;
        }
    },
    mounted() {this.filteredProperties()},
    filters: {},
    methods: {
        resetProperties() {
            this.properties = this.$store.state.map.places;
        },
        filteredProperties() {
            this.resetProperties();
            
            const results = this.properties.filter( property => {
                const propertyNameTrimmed = property.name.substring(0, this.searchingText.length);

                if (propertyNameTrimmed === this.searchingText ) {
                    return property;
                }
            });
            
            this.properties = results;
        },

        resetFilters() {
            this.resetProperties();

            this.searchingText = "";
            this.dropdownsSelectedOptions = {
                price: null,
                room_bath: null,
                policies: null
            };
        }
    }
}
</script>

<style lang='scss'>
.map-searcher {
    position: absolute;
    z-index: 999;
    left: 5%;
    margin-top: 1%;
    width: 33%;
    height: calc(60vh - 2rem);
    overflow: hidden;
    background-color: #fff;

    .properties-list-wrapper {
        height: inherit;
        overflow: scroll;
    }
}
.toolbar {
    border-radius: 5px 5px 0 0;
    .close {
        position: absolute;
        right: 3px;
        top: 3px;
        padding: 5px;
        border-radius: 3px;
        opacity: .85;

        &:hover {
            background-color: rgba(0, 0, 0, .3);
            opacity: 1;

        }
    }
}
.v-label {
    font-size: .75rem;
}
.v-text-field.v-text-field--solo .v-input__control {
    min-height: 35px;
}
</style>