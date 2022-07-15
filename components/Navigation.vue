<template>
  <div class="navigation">
    <img
      src="@/assets/img/logo.png"
      alt="ciaran.green logo"
      class="navigation__logo"
    />
    <router-link to="/" class="navigation__link">Home</router-link>
    <router-link to="/about" class="navigation__link">About</router-link>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  display: flex;
  align-items: center;

  &__link {
    color: $neutral-light;

    &:visited {
      color: $neutral-light;
    }

    &:not(:last-of-type) {
      margin-right: $unit;
    }
  }

  &__logo {
    margin-right: $one-half-unit;
    height: 24px;
    width: 24px;
  }
}
</style>
