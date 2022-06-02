<template>
  <div class="navigation">
    <router-link to="/" class="navigation__link">Home</router-link> |
    <router-link to="/about" class="navigation__link">About</router-link>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  &__link {
    color: $neutral-light;

    &:visited {
      color: $neutral-light;
    }
  }
}
</style>
