<template>
  <div class="job-experience">
    <div class="job-experience__row">
      <div class="job-experience__top">
        <h4 class="job-experience__heading">
          {{ headingText }}
        </h4>
        <p class="job-experience__subheading">{{ subheadingText }}</p>
      </div>
      <SvgChevron
        :class="[
          'job-experience__chevron',
          { 'job-experience__chevron--expanded': expanded },
        ]"
        @click="toggleExpanded"
      />
    </div>
    <div v-if="expanded">
      <p
        v-for="(item, index) in bodyText"
        :key="index"
        class="job-experience__info"
      >
        {{ item }}
      </p>
    </div>
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
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    toggleExpanded() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style lang="scss" scoped>
.job-experience {
  margin-bottom: $triple-unit;

  &:last-of-type {
    margin-bottom: 0;
  }

  &__chevron {
    min-width: 24px;
    min-height: 24px;
    width: 24px;
    height: 24px;
    margin-left: $double-unit;
    cursor: pointer;
    transform: rotate(180deg);

    :deep(path) {
      stroke: $neutral-dark-text-light;
    }

    &--expanded {
      transform: rotate(0deg);
    }
  }

  &__row {
    display: flex;
    align-items: center;
    margin: 0 0 $unit;
  }

  &__top {
    flex-grow: 1;
  }

  &__heading {
    margin: 0 0 $half-unit;
  }

  &__subheading {
    font-style: italic;
    color: $neutral-dark-text-light;
  }

  &__info {
    margin-bottom: $half-unit;
  }
}
</style>
