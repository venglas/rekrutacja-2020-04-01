<template>
 <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
        <v-btn class="mx-3" v-on="on">Add release</v-btn>
    </template>

    <v-card>
        <v-card-title>
            <span class="headline">Add feature for {{version}}</span>
        </v-card-title>

        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Feature title" v-model="featureTitle" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12">
                        <v-text-field label="Feature description" hint="Describe added feature." v-model="featureDescription"></v-text-field>
                    </v-col>
                    
                </v-row>
            </v-container>
            <small>*Release date, date when release will be show or was show.</small>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="addFeature()">Save</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>
 
<script>
import * as request from "@/components/utility/axios/request.js";

    export default {
    name: 'Add-change-item-modal',
    data() {
        return {
            dialog: false,
            featureTitle: null,
            featureDescription: null
        }
    },
    props: {
        version: { type: String }
    },
    computed: {},
    watch: {},
    mounted() {},
    created() {},
    methods: {
        async addFeature() {
            await request.post("/changeItem/add", {
	            changeVersion: this.version,
                changeTitle: this.featureTitle,
                description: this.featureDescription
            },
            res => {
                this.dialog = false;    
            });
        }
    }
}
</script>

<style lang='scss'>
</style>