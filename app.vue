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

h6 {
  font-size: 1.8rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin: 0;
}

p {
  margin: 0;
}
</style>
