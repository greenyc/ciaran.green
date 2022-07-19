<template>
  <div class="homepage wrapper">
    <div class="homepage__header-container">
      <h1 class="homepage__header">
        Ciaran Green: front end software developer
      </h1>
      <Computer class="homepage__header-icon" />
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium error
      consequuntur nobis a. Porro nihil qui placeat natus pariatur ullam
      repellat quibusdam, dolore eos. Praesentium voluptates qui vitae amet
      explicabo fugiat blanditiis harum id repellendus dignissimos tempore
      labore, quaerat facilis. Saepe molestias quia sint quas exercitationem
      veritatis sapiente obcaecati vitae optio, voluptates ad aspernatur non
      dolore ea temporibus assumenda hic, dolores, debitis cupiditate iusto
      perferendis laborum nisi ipsam. Molestias repellat similique cupiditate,
      nulla iste dolor earum voluptatum recusandae deleniti, sunt quis
      repellendus ab harum ut assumenda, officiis itaque dolorum. Ad magnam
      repudiandae incidunt! Amet ipsum ut aspernatur aliquid odit tempore rem
      alias ducimus dolore veniam assumenda unde laudantium iste velit aperiam,
      fugiat sint praesentium possimus numquam nam incidunt temporibus
      necessitatibus illum nisi? Nulla cum explicabo delectus dolor ratione modi
      alias assumenda quod quaerat architecto. Animi voluptates vero, eveniet
      repellat natus excepturi enim tenetur! Aperiam modi nostrum molestias
      fugit! Quam ab blanditiis porro voluptas, sed, ratione quisquam laborum,
      ipsam molestiae accusamus aperiam quo itaque a. Maiores deleniti
      distinctio illum. Assumenda, placeat cupiditate! Iure suscipit maxime
      error quas illo rem quae doloribus fugiat aut perferendis unde, harum
      culpa, quam incidunt fuga possimus ipsam omnis dolore veritatis sapiente
      numquam iusto molestiae. Minus, possimus.
    </p>
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
      margin-bottom: $quad-unit * 2;
    }

    &-icon {
      width: 64px;
      fill: $neutral-dark;
    }
  }
}
</style>
