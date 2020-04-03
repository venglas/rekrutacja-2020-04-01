<template>
    <section class="map-searcher">
        <v-toolbar color="#5d4baf" class="toolbar">
            <v-icon class="mr-2">mdi-home-search</v-icon>
            <v-text-field
            v-model="searchingText"
            ></v-text-field>
        </v-toolbar>

        <v-row class="px-4">
            <v-col class="d-flex filter-dropdown" cols="12" sm="3">
                <v-select
                :items="filters.price"
                label="Price"
                solo
                light
                ></v-select>
            </v-col>

            <v-col class="d-flex filter-dropdown" cols="12" sm="3">
                <v-select
                :items="filters.room_bath"
                label="Room/Bath"
                solo
                light
                ></v-select>
            </v-col>

            <v-col class="d-flex filter-dropdown" cols="12" sm="3">
                <v-select
                :items="filters.policies"
                label="Policies"
                solo
                light
                ></v-select>
            </v-col>
        </v-row>

        <div class="properties-list-wrapper">
            <div style="color: rgba(0, 0, 0, .5); font-size: 11px; margin: -1rem 0 0 1.5rem; z-index: 999; position: absolute">Showing {{properties.length}} properties</div>
            <v-col 
            class="py-0"
            v-for="(property, i) in filteredProperties"
            :key="i"
            cols="12"
            >
                <v-card light flat>
                    <div class="d-flex flex-no-wrap">
                        <v-avatar
                        class="ma-3"
                        size="100"
                        tile
                        >
                            <v-img :src="`/img/properties/property${property.img}.jpg`"></v-img>
                        </v-avatar>

                        <div>
                            <v-card-title>
                                <a style="color: #69a3a5; font-size: 1rem">{{property.name}}</a>
                            </v-card-title>

                            <v-card-subtitle style="color: #000">
                                <p style="color: #000; font-size: .6rem">{{property.address}}</p>
                                <h2>${{property.price}}</h2>
                            </v-card-subtitle>
                        </div>
                    </div>

                    <v-divider />
                </v-card>
            </v-col>    
        </div>
        
    </section>
</template>
 
<script>
    export default {
    name: 'Map-searcher',
    data() {
        return {
            searchingText: "",
            filters: {
                price: ["ascending", "descending"],
                room_bath: ["1 room", "2 rooms", "3 rooms", "4+ rooms", "1 bath", "2 baths", "3+ baths"],
                policies: ["smokers", "pets"]
            },
            properties: this.$store.state.map.places
        }
    },
    props: {},
    computed: {
        filteredProperties() {
            this.resetProperties();
            
            const results = this.properties.filter((property) => {
                const propertyNameTrimmed = property.name.substring(0, this.searchingText.length);

                if (propertyNameTrimmed === this.searchingText ) {
                    return property;
                }
            });
            
            return results;
        }
    },
    watch: {},
    mounted() {},
    filters: {},
    methods: {
        resetProperties() {
            this.properties = this.$store.state.map.places;
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
}
.v-label {
    font-size: .75rem;
}
.v-text-field.v-text-field--solo .v-input__control {
    min-height: 35px;
}
</style>