<template>
  <div class="homepage wrapper">
    <section class="homepage__header">
      <div class="homepage__header-container">
        <h1 class="homepage__header">Ciaran Green - front end developer</h1>
      </div>
    </section>
    <section>
      <h3>Welcome</h3>
      <p>
        Hi, I'm Ciaran and I am a front end developer. If you are here then you
        are probably a recruiter/developer, the best way of contacting me is by
        dropping me an email on
        <a href="mailto:hello@ciaran.green">hello@ciaran.green</a>. Otherwise,
        feel free to have a look around.
      </p>
    </section>
    <section class="homepage-experience">
      <div class="homepage-experience__row">
        <h3>Experience</h3>
        <SvgLinkedin
          class="homepage-experience__icon"
          @click="goTo(`https://www.linkedin.com/in/ciaran-green-131615170/`)"
        />
      </div>

      <JobExperience
        v-for="(job, index) in jobExperiences"
        :key="index"
        :job-text="job.jobTitle"
        :company-text="job.companyName"
        :subheading-text="job.subheadingText"
        :body-text="job.bodyText"
        :company-link="job.companyUrl"
      />
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
import jobExperience from "@/json/JobExperience";

export default {
  data() {
    return {
      jobExperiences: jobExperience,
    };
  },
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
    margin: 0;

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
      padding-top: $unit;
    }

    &__icon {
      height: 24px;
      width: 24px;
      margin-left: $unit;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
