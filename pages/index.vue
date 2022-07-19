<template>
  <div class="homepage wrapper">
    <section>
      <div class="homepage__header-container">
        <h1 class="homepage__header">
          Ciaran Green: front end software developer
        </h1>
        <Computer class="homepage__header-icon" />
      </div>
    </section>
    <section>
      <h2>Experience</h2>
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
    <section>
      <h2>Technologies</h2>
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
