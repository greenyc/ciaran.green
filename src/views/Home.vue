<template>
  <h1>Home Page</h1>
  <h2>Breakpoints</h2>
</template>

<style scoped lang="scss">
h1 {
  width: 100%;
}
h2 {
  color: $brand;

  @include tablet {
    color: $error;
  }

  @include desktop {
    color: $success;
  }
}
</style>
