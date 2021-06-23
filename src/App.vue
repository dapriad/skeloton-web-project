<template>
  <!-- App.vue -->

  <v-app>
    <TopNav />

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import TopNav from "./components/TopNav.vue";

export default {
  name: "app",
  components: {
    TopNav,
  },
};
</script>

<style lang="sass" scoped>
.title-logo
  height: 30px
</style>