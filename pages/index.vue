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
        <h4 class="homepage-experience__heading">
          Senior Front End Developer @ Evri (previously Hermes)
        </h4>
        <p class="homepage-experience__subheading">January 2022 - Present</p>
        <p class="homepage-experience__info">
          In late 2021 to early 2022, we were given the mammoth task of
          rebuilding the entire Hermes website against a new set of designs as
          part of the rebrand from Hermes to Evri - I was a part of the core
          team.
        </p>
        <p class="homepage-experience__info">
          During this project, we moved from using CrownPeak to Prismic as the
          CMS. This change from a traditional CMS to a Headless CMS came with
          it's own set of problems which we had to solve.
        </p>
        <p class="homepage-experience__info">
          We created an entirely new Vue component library using Storybook to
          expedite the process of rebranding each of the SPAs.
        </p>
        <p class="homepage-experience__info">
          As a lot of offshore contractors were brought on to help with this
          project, a considerable amount of my time also went into training
          people, co-ordinating them and making sure that they were maintaining
          the standards which we had set.
        </p>
        <p class="homepage-experience__info">
          It was mid-way through this project that I was promoted to Senior due
          to my contributions to the task.
        </p>
      </div>
      <!-- End of Evri (previously Hermes) -->

      <!-- Start of Hermes -->
      <div class="homepage-experience__section">
        <h4 class="homepage-experience__heading">
          Front End UI Developer @ Hermes
        </h4>
        <p class="homepage-experience__subheading">July 2020 - January 2022</p>
        <p class="homepage-experience__info">
          Soon after joining Hermes, I was tasked with rewriting the Tracking
          SPA (a Nuxt app) which is the most viewed page on the website. Since
          then, I have been the sole front end developer on the Track squad and
          have been involved in all of the additions to the product.
        </p>
        <p class="homepage-experience__info">
          Aside from the Track work, I have been involved in many areas of
          development on the Hermes website. Some examples include my work to
          integrate what3words into the Hermes web flows and the handling of CMS
          (CrownPeak) issues.
        </p>
      </div>
      <!-- End of Hermes -->

      <!-- Start of Jet2.com and Jet2Holidays -->
      <div class="homepage-experience__section">
        <h4 class="homepage-experience__heading">
          UI Developer @ Jet2.com and Jet2Holidays
        </h4>
        <p class="homepage-experience__subheading">July 2019 - July 2020</p>
        <p class="homepage-experience__info">
          At Jet2 I worked closely with UX designers to improve the booking
          flows and account sections of the website. I also gained experience in
          writing components for a CMS (Sitecore) and creating SPAs using Nuxt.
        </p>
        <p class="homepage-experience__info">
          In the latter half of my time at Jet2, I was added onto the CRO team
          where we utilised Optimizely to perform multivariate tests on the
          website to increase revenue.
        </p>
      </div>
      <!-- End of Jet2.com and Jet2Holidays -->

      <!-- Start of Ultima Furniture -->
      <div class="homepage-experience__section">
        <h4 class="homepage-experience__heading">
          Javascript Developer @ Ultima Furniture
        </h4>
        <p class="homepage-experience__subheading">May 2019 - July 2019</p>
        <p class="homepage-experience__info">
          In my short time at Ultima Furniture, I wrote a script using Node.js
          which took the data that a piece of warehouse management software
          output, normalised and cleansed it, and then inserted it into a MySQL
          database.
        </p>
        <p class="homepage-experience__info">
          I also wrote a simple interface in AngularJS for handling the running
          of this script.
        </p>
        <p class="homepage-experience__info">
          At the time, I was more interested in a front end specific role so
          decided to pursue other opportunities.
        </p>
      </div>

      <!-- End of Ultima Furniture -->

      <!-- Start of Frog Education -->
      <div class="homepage-experience__section">
        <h4 class="homepage-experience__heading">
          Junior Developer @ Frog Education
        </h4>
        <p class="homepage-experience__subheading">May 2018 - May 2019</p>
        <p class="homepage-experience__info">
          In my first role after university, I was working as a junior full
          stack developer for an educational technology company's virtual
          learning platform.
        </p>
        <p class="homepage-experience__info">
          The project used JavaScriptMVC (the predecessor to DoneJS) with LESS
          on the front end. On the back end, the APIs were written in PHP and
          the databases were built using MySQL.
        </p>
        <p class="homepage-experience__info">
          During my time at Frog Education, I became responsible for the
          company's cross-platform mobile application which was written using
          the Cordova framework.
        </p>
      </div>
      <!-- End of Frog Education -->
    </section>
    <section>
      <h3>Technologies</h3>
      <p>
        This website is still very much under construction. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Praesentium error consequuntur
        nobis a. Porro nihil qui placeat natus pariatur ullam repellat
        quibusdam, dolore eos. Praesentium voluptates qui vitae amet explicabo
        fugiat blanditiis harum id repellendus dignissimos tempore labore,
        quaerat facilis. Saepe molestias quia sint quas exercitationem veritatis
        sapiente obcaecati vitae optio, voluptates ad aspernatur non dolore ea
        temporibus assumenda hic, dolores, debitis cupiditate iusto perferendis
        laborum nisi ipsam.
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
  margin-bottom: $unit * 4;
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

    &__heading {
      margin: 0 0 $half-unit;
    }

    &__subheading {
      font-style: italic;
      color: $neutral-dark-text-light;

      margin: 0 0 $unit;
    }

    &__section {
      margin-bottom: $triple-unit;
    }

    &__info {
      margin-bottom: $half-unit;
    }
  }
}
</style>
