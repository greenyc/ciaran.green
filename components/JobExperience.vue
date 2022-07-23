<template>
  <div class="job-experience">
    <h4 class="job-experience__heading">
      {{ headingText }}
    </h4>
    <p class="job-experience__subheading">{{ subheadingText }}</p>
    <p
      v-for="(item, index) in bodyText"
      :key="index"
      class="job-experience__info"
    >
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    headingText: {
      type: String,
      required: true,
    },
    subheadingText: {
      type: String,
      required: true,
    },
    bodyText: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.job-experience {
  margin-bottom: $triple-unit;

  &__heading {
    margin: 0 0 $half-unit;
  }

  &__subheading {
    font-style: italic;
    color: $neutral-dark-text-light;

    margin: 0 0 $unit;
  }

  &__info {
    margin-bottom: $half-unit;
  }
}
</style>
