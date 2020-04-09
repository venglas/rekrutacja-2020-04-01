<template>
  <v-container fluid tag="article">
    <Change-log-ink />
  </v-container>
</template>

<script>
import ChangeLogLink from "@/components/change-log/ChangeLogLink";

export default {
  components: {
    'Change-log-ink': ChangeLogLink
  },
  data(){
    return {
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
</style>