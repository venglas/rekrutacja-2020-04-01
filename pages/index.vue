<template>
  <v-container fluid tag="article">
    <v-card style="height: inherit">
      <v-toolbar light id="map-toolbar">
        <v-col sm="1" class="logo">
          <img src="../assets/img/logo.png">
        </v-col>

        <v-row justify="end" align="center">
          <v-col sm="1" align="center" class="fill-height py-0">
            <v-overflow-btn
              class="dropdown mt-2"
              label="Services"
              target="#map-toolbar"
              :items="service.services"
              v-model="service.selectedService"
            ></v-overflow-btn>
          </v-col>

          <v-col sm="1" class="fill-height text-center">About</v-col>
          <v-col sm="1" class="fill-height text-center">Contact</v-col>
        </v-row>
      </v-toolbar>

      <Map />
    </v-card>
  </v-container>
</template>

<script>
import Map from "@/components/map/Map";

export default {
  components: {
    Map
  },
  data(){
    return {
      service: {
        services: ['Search list', 'service 2', 'service 3'],
        selectedService: null
      }
    }
  },
  mounted(){
    const vm = this;
    window.addEventListener("resize", () => this.$store.commit('map/increaseResize'));
    
  },
  watch: {
    'service.selectedService'(){
      this.showMapSearcher();
    }
  },
  methods: {
    showMapSearcher() {
      this.$store.commit("map/showMapSearcher");
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  justify-self: self-start;
}
.container {
  position: relative;
  overflow: hidden;
  margin: 2rem auto;
  padding: 0;
  width: 95vw;
  height: 90vh;
}
.dropdown {
  height: -webkit-fill-available;
}
</style>

<style lang="scss">
.theme--light.v-overflow-btn.theme--light.v-overflow-btn .v-input__control .v-input__slot {
  border: none;
  margin-bottom: 0 !important
}
</style>