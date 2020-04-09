<template>
  <v-container fluid class="change-log">
    <v-card class="overflow-hidden" light>
        <v-app-bar 
            :collapse="!collapseOnScroll"
            :collapse-on-scroll="collapseOnScroll"
            light
            scroll-target="#scrolling-techniques-6"
            class="change-log-bar"
        >

            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Whats news? Here is right place for you ;)</v-toolbar-title>

            <!--TODO: if admin -->
            <Add-change-log-modal />
        </v-app-bar>

        <v-container 
            tag="article"
            id="scrolling-techniques-6"
            class="overflow-y-auto article-container"
            >
                <v-expansion-panels
                    accordion="accordion"
                    light
                >
                    <v-expansion-panel light v-for="(release, i) in releases" :key="release.changeId">
                        <v-expansion-panel-header light> 
                            <span>
                                <b class="px-1">[{{release.changeVersion}}]</b> {{release.changeTitle}}
                                <span class="font-weight-light overline px-1">({{release.releaseDate}})</span>
                            </span>
                        </v-expansion-panel-header>

                        <v-expansion-panel-content light>
                            <Add-change-item-modal :version="release.changeVersion"/>

                            <!-- <div class="change-list-item" light v-for="(changeList, i) in change.changeList" :key="changeList.title">
                                <header class="change-list-item__header"><b class="px-1">{{i}})</b> {{changeList.title}}</header>
                                <p class="change-list-item__description">{{changeList.description}}</p>
                            </div> -->
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
        </v-container>
    </v-card>
  </v-container>
</template>

<script>
import {get, post} from "@/components/utility/axios/request.js";

import ChangeLogLink from "@/components/change-log/ChangeLogLink";
import AddChangeLogModal from "@/components/change-log/AddChangeLogModal";
import AddChangeItemModal from "@/components/change-log/AddChangeItemModal";

export default {
  components: {
    'Change-log-ink': ChangeLogLink,
    'Add-change-log-modal': AddChangeLogModal,
    'Add-change-item-modal': AddChangeItemModal
  },
  data(){
    return {
        collapseOnScroll: true,
        releases: null
    }
  },
  mounted(){
    get('/changeLog/all', (res) => {
        console.log(res.data);
        
        this.releases = res.data;
    });
  },
  watch: {
    
  },
  methods: {
    addReleaseFeature(version) {
        post('/changeItem/add', {
            changeVersion: version,
            changeTitle: "test title",
            description: "test description"
        },
        res => {},
        err => {console.log(err)}
        );
    }
  }
}
</script>

<style lang="scss" scoped>
.change-log {
    padding: 0;

    .article-container {
        max-height: 100vh;
    }
}
.change-list-item {
    padding: 0 0 .5rem 1rem;
    
    &__header{
        padding: 1rem 0;
        text-transform: capitalize;
    }
    &__description{
        padding-left: 1rem;
    }
}
</style>