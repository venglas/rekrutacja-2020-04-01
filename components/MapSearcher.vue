<template>
    <section class="map-searcher" ref="mapSearcher" v-if="$store.getters['map/getMapSearcherVisiblility']">
        <v-toolbar color="#5d4baf" class="toolbar">
            <v-row>
                <v-col col="12" sm="1" align-self="center">
                    <v-icon class="mr-2">mdi-home-search</v-icon>
                </v-col>
                
                <v-col col="12" sm="10" @click="showResults()">
                    <v-text-field
                    autofocus
                    v-model="searchingText"
                    ></v-text-field>
                </v-col>
                
                <v-col v-if="$store.getters['map/getResize'] > 960" col="12" sm="1" @click="$store.commit('map/hideMapSearcher')">
                    <v-icon size="medium" class="close">mdi-close-thick</v-icon>
                </v-col>
            </v-row>
            
        </v-toolbar>

        <v-col v-show="!$store.getters['map/searcherSortingVisibility']" class="reload-button-wrapper">
            <v-btn color="gray" class="uncollapse-button" fab x-small dark title="Collapse filters" @click="$store.commit('map/showSearcherSorting')">
                <v-icon>mdi-arrow-collapse-down</v-icon>
            </v-btn>
        </v-col>

        <transition name="fade">
            <v-row class="px-4 sorting-tool" v-show="$store.getters['map/searcherSortingVisibility']">
                <v-col class="d-flex filter-dropdown" cols="12" sm="9" md="4" lg="3">
                    <v-select
                    :items="filters.price"
                    v-model="dropdownsSelectedOptions.price"
                    label="Price"
                    solo
                    light
                    ></v-select>
                </v-col>

                <v-col class="d-flex filter-dropdown" cols="12" sm="9" md="4" lg="3">
                    <v-select
                    :items="filters.room_bath"
                    v-model="dropdownsSelectedOptions.room_bath"
                    label="Room/Bath"
                    solo
                    light
                    ></v-select>
                </v-col>

                <v-col class="d-flex filter-dropdown" cols="12" sm="9" md="4" lg="4">
                    <v-select
                    :items="filters.policies"
                    v-model="dropdownsSelectedOptions.policies"
                    label="Policies"
                    solo
                    light
                    ></v-select>
                </v-col>

                <v-col class="reload-button-wrapper">
                    <v-btn color="success" class="reload-button" fab x-small dark title="Reset filters" @click="resetFilters()">
                        <v-icon>mdi-reload</v-icon>
                    </v-btn>

                    <v-btn color="gray" class="collapse-button" fab x-small dark title="Collapse filters" @click="$store.commit('map/hideSearcherSorting')">
                        <v-icon>mdi-arrow-collapse-up</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </transition>

        <div class="properties-list-wrapper">
            <div style="color: rgba(0, 0, 0, .5); font-size: 11px; margin: -1rem 0 0 1.5rem; z-index: 999; position: absolute">Showing {{properties.length}} properties</div>
            <v-col 
            class="py-0"
            v-for="(property, i) in properties"
            :key="i"
            cols="12"
            >
                <Map-searcher-card :map="map" :property="property" @click.native="hideResults()"/>
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
            properties: this.$store.getters['map/getProperties']
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
        hideResults(){
            this.$refs.mapSearcher.style.height = "54px";
        },
        showResults(){
            if (this.$store.getters['map/getResize'] < 960){
                this.$refs.mapSearcher.style.height = "70%";
            } else {
                this.$refs.mapSearcher.style.height = "90%";
            }
        },
        resetProperties() {
            this.properties = this.$store.getters['map/getProperties'];
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
    width: 33vw;
    height: calc(100% - 7rem);
    overflow: hidden;
    background-color: #fff;
    transition: height ease-in-out 500ms;


    .properties-list-wrapper {
        height: inherit;
        overflow: scroll;
    }

    @media (max-width: 960px) {
        // display: none;

        width: 100%;
        left: 0;
        height: 70%;
        bottom: 54px;

        .sorting-tool {
            flex-direction: row;

            .filter-dropdown {
                max-width: 50%;
            }
            .collapse-button {
                display: none;
            }
        }   
    }
}
.sorting-tool {
    .collapse-button {
        display: none;
    }
    
    @media (max-width: 1080px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: .5rem 0 .7rem 0;

        .collapse-button {
            display: block;
        }

        .filter-dropdown {
            padding: 0;
            margin: .3rem 0;
            max-width: 90%;
            
            .v-select {
                height: 32px;
            }
        }

        .reload-button {}
        .reload-button-wrapper {
            display: flex;
            justify-content: center;

            @media (max-width: 1260px) {
                display: none;
            }
        }
    }
    .reload-button-wrapper {
        display: flex;
        justify-content: center;

        @media (min-width: 1080px) and (max-width: 1260px) {
            margin-top: -35px;
        }
    }
}
.reload-button-wrapper {
    display: flex;
    justify-content: center;
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
    // font-size: .75rem;
}
.v-text-field.v-text-field--solo .v-input__control {
    min-height: 35px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  animation: show 400ms;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  animation: hide 500ms ease;
}

.delayed-enter-active{
    animation-name: show;
    animation-duration: 400ms;
}

.delayed-leave-active {
    animation-name: hide;
    animation-duration: 400ms;
}

@keyframes show {
    0% {max-height: 0;}
    100%{max-height: 200px;}
}

@keyframes hide {
    0% {max-height: 200px; opacity: 0;}
    100%{max-height: 0px;}
}
</style>