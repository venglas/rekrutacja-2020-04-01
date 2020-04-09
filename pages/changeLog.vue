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
                    <v-expansion-panel light v-for="(change, i) in changeLogs" :key="i">
                        <v-expansion-panel-header light> 
                            <span>
                                <b class="px-1">[{{change.version}}]</b> {{change.description}}
                                <span class="font-weight-light overline px-1">({{change.date}})</span>
                            </span>
                        </v-expansion-panel-header>

                        <v-expansion-panel-content light>
                            <div class="change-list-item" light v-for="(changeList, i) in change.changeList" :key="changeList.title">
                                <header class="change-list-item__header"><b class="px-1">{{i}})</b> {{changeList.title}}</header>
                                <p class="change-list-item__description">{{changeList.description}}</p>
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
        </v-container>
    </v-card>
  </v-container>
</template>

<script>
import ChangeLogLink from "@/components/change-log/ChangeLogLink";
import AddChangeLogModal from "@/components/change-log/AddChangeLogModal";

export default {
  components: {
    'Change-log-ink': ChangeLogLink,
    'Add-change-log-modal': AddChangeLogModal
  },
  data(){
    return {
        collapseOnScroll: true,
        changeLogs: [
            {
                version: "0.0.1",
                description: "Initialize project",
                date: "20-02-2020 for edit",
                changeList: [
                    {
                        title: "Create application java spring boot, nuxt, vuetify",
                        description: "Generate project, install dependencies create frontend base, and base config for mapboc gl js"
                    },
                    {
                        title: "Add this change log / whats new page",
                        description: "Just for you :)"
                    },
                    {
                        title: "Add base for adding polygons",
                        description: "Configure selecting and saving poligons on map"
                    }
                ]
            }
        ]
    }
  },
  mounted(){
  },
  watch: {
    
  },
  methods: {
    
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