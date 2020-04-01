<template>
  <v-container fluid tag="article">
    <v-card height="60%">
      <v-toolbar light>
        <v-icon>mdi-window-minimize</v-icon>
        <v-icon>mdi-window-maximize</v-icon>
        <v-icon>mdi-close</v-icon>
      </v-toolbar>

      <Map />
    </v-card>
  </v-container>
</template>

<script>
import Map from "@/components/Map";

export default {
  components: {
    Map
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  margin: 0;
  padding: 0;
  width: 90vw;
  height: 60vh;
}
</style>