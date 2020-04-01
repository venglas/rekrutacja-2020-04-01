<template>
  <v-app dark>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss" scoped>
.v-application {
  z-index: 1;
  background: none;
}
.v-application::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-color: #b86fa7c5;
  height: 100vh;
  width: 100vw;
  z-index: 0;
}
.v-application::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../assets/img/background-map.png");
  background-size: cover;
  opacity: .5;
  height: 100vh;
  width: 100vw;
  z-index: -1;
}
</style>