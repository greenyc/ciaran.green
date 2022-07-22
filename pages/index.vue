<template>
  <div class="homepage wrapper">
    <section>
      <div class="homepage__header-container">
        <h1 class="homepage__header">Ciaran Green - front end developer</h1>
        <Computer class="homepage__header-icon" />
      </div>
    </section>
    <section>
      <h6>Experience</h6>
      <!-- Start of Evri (previously Hermes) -->
      <p>Evri (previously Hermes)</p>
      <p>Senior Front End Developer - January 2022 - Present</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        error consequuntur nobis a. Porro nihil qui placeat natus pariatur ullam
        repellat quibusdam, dolore eos. Praesentium voluptates qui vitae amet
        explicabo fugiat blanditiis harum id repellendus dignissimos tempore
        labore, quaerat facilis.
      </p>
      <!-- End of Evri (previously Hermes) -->

      <!-- Start of Hermes -->
      <p>Hermes</p>
      <p>Front End UI Developer - July 2020 - January 2022</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        error consequuntur nobis a. Porro nihil qui placeat natus pariatur ullam
        repellat quibusdam, dolore eos. Praesentium voluptates qui vitae amet
        explicabo fugiat blanditiis harum id repellendus dignissimos tempore
        labore, quaerat facilis.
      </p>
      <!-- End of Hermes -->

      <!-- Start of Jet2.com and Jet2Holidays -->
      <p>Jet2.com and Jet2Holidays</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        error consequuntur nobis a. Porro nihil qui placeat natus pariatur ullam
        repellat quibusdam, dolore eos. Praesentium voluptates qui vitae amet
        explicabo fugiat blanditiis harum id repellendus dignissimos tempore
        labore, quaerat facilis.
      </p>
      <!-- End of Jet2.com and Jet2Holidays -->

      <!-- Start of Ultima Furniture -->
      <p>Ultima Furniture</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        error consequuntur nobis a. Porro nihil qui placeat natus pariatur ullam
        repellat quibusdam, dolore eos. Praesentium voluptates qui vitae amet
        explicabo fugiat blanditiis harum id repellendus dignissimos tempore
        labore, quaerat facilis.
      </p>
      <!-- End of Ultima Furniture -->

      <!-- Start of Frog Education -->
      <p>Frog Education</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        error consequuntur nobis a. Porro nihil qui placeat natus pariatur ullam
        repellat quibusdam, dolore eos. Praesentium voluptates qui vitae amet
        explicabo fugiat blanditiis harum id repellendus dignissimos tempore
        labore, quaerat facilis.
      </p>
      <!-- End of Frog Education -->
    </section>
    <section>
      <h6>Technologies</h6>
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

<style scoped lang="scss">
.homepage {
  margin-top: $unit * 16;

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
}
</style>
