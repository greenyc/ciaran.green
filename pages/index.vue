<template>
  <div class="homepage wrapper">
    <section>
      <div class="homepage__header-container">
        <h1 class="homepage__header">Ciaran Green - front end developer</h1>
        <SvgComputer class="homepage__header-icon" />
      </div>
    </section>
    <section class="homepage-experience">
      <div class="homepage-experience__row">
        <h3>Experience</h3>
        <SvgLinkedin
          class="homepage-experience__icon"
          @click="goTo(`https://www.linkedin.com/in/ciaran-green-131615170/`)"
        />
      </div>
      <!-- Start of Evri (previously Hermes) -->
      <div class="homepage-experience__section">
        <h4>Evri (previously Hermes)</h4>
        <p>Senior Front End Developer - January 2022 - Present</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          error consequuntur nobis a. Porro nihil qui placeat natus pariatur
          ullam repellat quibusdam, dolore eos. Praesentium voluptates qui vitae
          amet explicabo fugiat blanditiis harum id repellendus dignissimos
          tempore labore, quaerat facilis.
        </p>
      </div>

      <!-- End of Evri (previously Hermes) -->

      <!-- Start of Hermes -->
      <div class="homepage-experience__section">
        <h4>Hermes</h4>
        <p>Front End UI Developer - July 2020 - January 2022</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          error consequuntur nobis a. Porro nihil qui placeat natus pariatur
          ullam repellat quibusdam, dolore eos. Praesentium voluptates qui vitae
          amet explicabo fugiat blanditiis harum id repellendus dignissimos
          tempore labore, quaerat facilis.
        </p>
      </div>

      <!-- End of Hermes -->

      <!-- Start of Jet2.com and Jet2Holidays -->
      <div class="homepage-experience__section">
        <h4>Jet2.com and Jet2Holidays</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          error consequuntur nobis a. Porro nihil qui placeat natus pariatur
          ullam repellat quibusdam, dolore eos. Praesentium voluptates qui vitae
          amet explicabo fugiat blanditiis harum id repellendus dignissimos
          tempore labore, quaerat facilis.
        </p>
      </div>

      <!-- End of Jet2.com and Jet2Holidays -->

      <!-- Start of Ultima Furniture -->
      <div class="homepage-experience__section">
        <h4>Ultima Furniture</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          error consequuntur nobis a. Porro nihil qui placeat natus pariatur
          ullam repellat quibusdam, dolore eos. Praesentium voluptates qui vitae
          amet explicabo fugiat blanditiis harum id repellendus dignissimos
          tempore labore, quaerat facilis.
        </p>
      </div>

      <!-- End of Ultima Furniture -->

      <!-- Start of Frog Education -->
      <div class="homepage-experience__section">
        <h4>Frog Education</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          error consequuntur nobis a. Porro nihil qui placeat natus pariatur
          ullam repellat quibusdam, dolore eos. Praesentium voluptates qui vitae
          amet explicabo fugiat blanditiis harum id repellendus dignissimos
          tempore labore, quaerat facilis.
        </p>
      </div>

      <!-- End of Frog Education -->
    </section>
    <section>
      <h3>Technologies</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        error consequuntur nobis a. Porro nihil qui placeat natus pariatur ullam
        repellat quibusdam, dolore eos. Praesentium voluptates qui vitae amet
        explicabo fugiat blanditiis harum id repellendus dignissimos tempore
        labore, quaerat facilis. Saepe molestias quia sint quas exercitationem
        veritatis sapiente obcaecati vitae optio, voluptates ad aspernatur non
        dolore ea temporibus assumenda hic, dolores, debitis cupiditate iusto
        perferendis laborum nisi ipsam.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(url) {
      window.open(url, "_blank").focus();
    },
  },
};
</script>

<style scoped lang="scss">
.homepage {
  margin-top: $unit * 4;
  @include tablet {
    margin-top: $unit * 8;
  }

  @include desktop {
    margin-top: $unit * 12;
  }

  &__header {
    text-align: center;
    margin-bottom: $triple-unit;

    &-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: $quad-unit;
    }

    &-icon {
      width: 64px;
      fill: $neutral-dark;
    }
  }

  &-experience {
    &__row {
      display: flex;
    }

    &__icon {
      height: 24px;
      width: 24px;
      margin-left: $unit;

      &:hover {
        cursor: pointer;
      }
    }

    &__section {
      margin-bottom: $double-unit;
    }
  }
}
</style>
