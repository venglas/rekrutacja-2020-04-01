<template>
  <v-container fluid tag="article">
    <v-card style="height: inherit">
      <v-toolbar light id="map-toolbar">
        <v-row justify="end" align="center">
          <v-col sm="3" md="2" lg="2" align="center" class="fill-height py-0 col-dropdown">
            <v-select
              v-model="service.selectedService"
              :items="service.services"
              menu-props="auto"
              hide-details
              label="Services"
            ></v-select>
          </v-col>

          <v-col sm="3" md="2" lg="1" class="fill-height text-center">About</v-col>
          <v-col sm="3" md="2" lg="1" class="fill-height text-center contact">Contact</v-col>
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
        services: ['service 1', 'service 2', 'service 3'],
        selectedService: null
      }
    }
  },
  mounted(){
    const vm = this;
    this.$store.commit('map/increaseResize', window.outerWidth)
    window.addEventListener("resize", (e) => this.$store.commit('map/increaseResize', e.target.outerWidth));
  },
  watch: {
    'service.selectedService'(){
      if(this.service.selectedService === "Search list") {
        this.showMapSearcher();
      } else {
        this.hideMapSearcher();
      }
    }
  },
  methods: {
    showMapSearcher() {
      this.$store.commit("map/showMapSearcher");
    },
    hideMapSearcher() {
      this.$store.commit("map/hideMapSearcher");
    }
  }
}
</script>

<style lang="scss" scoped>
.contact{
}
.container {
  position: relative;
  overflow: hidden;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
.col-dropdown {
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