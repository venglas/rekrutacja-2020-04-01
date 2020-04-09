<template>
 <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
        <v-btn class="mx-3" v-on="on">Add release</v-btn>
    </template>

    <v-card>
        <v-card-title>
            <span class="headline">Add release</span>
        </v-card-title>

        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Release version" v-model="version" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Release title" hint="(not required)" v-model="releaseTitle"></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" sm="12">
                        <v-date-picker v-model="selectedDate"></v-date-picker>
                    </v-col>
                    
                
                </v-row>
            </v-container>
            <small>*Release date, date when release will be show or was show.</small>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="addRelease()">Save</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>
 
<script>
import * as request from "@/components/utility/axios/request.js";

    export default {
    name: 'Add-change-log-modal',
    data() {
        return {
            selectedDate: null,
            dialog: false,
            version: null,
            releaseTitle: null
        }
    },
    props: {},
    computed: {},
    watch: {},
    mounted() {},
    created() {},
    methods: {
        async addRelease() {
            await request.post("/changeLog/add", {
                "changeVersion": this.version,
                "changeTitle": this.releaseTitle,
	            "releaseDate": this.selectedDate
            },
            (res) => {
                if(res.status === 200) {
                    this.dialog = false;
                }
            })
        }
    }
}
</script>

<style lang='scss'>
</style>