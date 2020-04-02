<template>
    <section class="map-searcher">
        <v-toolbar color="#5d4baf" class="toolbar">
            <v-icon class="mr-2">mdi-home-search</v-icon>
            <v-text-field
            v-model="rules"
            @keyup="updateData();"
            label=""
            ></v-text-field>
        </v-toolbar>
    </section>
</template>
 
<script>
    export default {
    name: 'Map-searcher',
    data() {
        return {
            rules: []
        }
    },
    props: {},
    computed: {},
    watch: {},
    mounted() {},
    created() {},
    methods: {
        updateData(){}
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
}
.toolbar {
    border-radius: 5px;
}
</style>