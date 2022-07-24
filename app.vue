<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// eslint disabled because it doesn't understand useHead
// eslint-disable-next-line no-undef
useHead({
  title: "Ciaran Green",
  charset: "utf-8",
});
</script>

<style lang="scss">
@import "@/assets/styles/sheets/_normalize.scss";
@import "@/assets/styles/mixins/_wrapper.scss";

#__nuxt {
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
}

.app {
  width: 100%;
  font-family: "Quicksand", sans-serif;
  color: $neutral-dark;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: 400;
  text-size-adjust: 100%;
  font-weight: 400;
}

h1 {
  font-size: 4.2rem;
  line-height: 4.8rem;
  font-weight: 300;
  letter-spacing: -1px;
  margin: 0;
}

h3 {
  font-size: 1.8rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin: 0 0 $double-unit;
  text-decoration: underline;
  text-underline-offset: $half-unit;
}

h4 {
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: 2px;
  font-weight: 600;
  margin: 0 0 $unit;
}

p {
  margin: 0;
}

a {
  color: $neutral-dark;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: $neutral-dark-text-light;
  }

  &:visited {
    color: $neutral-dark;
  }
}

section {
  padding: $quad-unit 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid $neutral-mid;
  }
}
</style>
