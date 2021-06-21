<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon>
        <img
          src="./assets/Fakelogo.png"
          alt="logo of adidas 3 stripes plus name"
        />
      </v-app-bar-nav-icon>
      <v-toolbar-title>Adidas</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
  }),
  created() {
    console.log(this.$vuetify.application); // 56
  },
};
</script>

<style lang="sass" scoped>
// styles/generic/_index.scss

// Generic styling for bare HTML elements (like H1, A, etc.).
// These come with default styling from the browser so that
// we can redefine them here.
@import './reset.scss'

@import './animations.scss'

@import './colors.scss'

@import './elevation.scss'

@import './transitions.scss'
.title-logo
  height: 30px
</style>