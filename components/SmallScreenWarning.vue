<template>
  <div class="small-screen-warning">
    This website is designed to work on screens larger than 300px wide. There
    may be issues with this site on a screen smaller than that.
  </div>
</template>

<style scoped lang="scss">
.small-screen-warning {
  display: none;

  @include underMobile {
    display: block;
  }
}
</style>
