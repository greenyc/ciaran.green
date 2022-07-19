<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/sheets/_normalize.scss";
@import "@/assets/styles/mixins/_wrapper.scss";

.app {
  width: 100%;
  font-family: "Roboto", sans-serif;
  color: $neutral-dark;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#__nuxt {
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
}

html {
  font-size: 10px;
}

body {
  margin: 0;
  font-size: 1.8rem;
  line-height: 3rem;
  font-weight: 300;
}

h1 {
  font-size: 4rem;
  line-height: 4.8rem;
  font-weight: 300;
  margin: 0 0 $triple-unit;
}

h2 {
  font-size: 2.6rem;
  line-height: 3.2rem;
  font-weight: 300;
  margin: 0 0 $double-unit;
}

p {
  margin: 0 0 $double-unit;
}

section {
  margin: 0 0 $triple-unit;
}
</style>
