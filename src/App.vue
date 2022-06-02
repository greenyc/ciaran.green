<template>
  <div class="wrapper">
    <SmallScreenWarning />
    <Navigation />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import SmallScreenWarning from "./components/SmallScreenWarning.vue";
</script>

<style lang="scss">
@import "./assets/styles/sheets/_normalize.scss";

.wrapper {
  width: 100%;
  max-width: $desktop-width;
  margin: 0 auto;
  padding: $quad-unit $double-unit;
}

#app {
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  background-color: $neutral-dark;
  color: $neutral-light;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}
</style>
