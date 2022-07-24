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
      <p class="homepage-technologies__text">
        Throughout my career so far I have had the pleasure of working with a
        large range of different front end technologies and I am always up for
        learning new technologies. My JavaScript framework of choice is Vue (<a
          href="https://github.com/greenyc/ciaran.green"
          target="_blank"
          >this website</a
        >
        is built using Nuxt 3). Here are some of the technologies I enjoy using
        the most.
      </p>
      <div class="homepage-technologies__container">
        <!-- TODO: componentise this -->
        <SvgBabel
          class="homepage-technologies__icon"
          @click="goTo(`https://babeljs.io/`)"
        />
        <SvgCss
          class="homepage-technologies__icon"
          @click="goTo(`https://developer.mozilla.org/en-US/docs/Web/CSS`)"
        />
        <SvgEslint
          class="homepage-technologies__icon"
          @click="goTo(`https://eslint.org/`)"
        />
        <SvgGit
          class="homepage-technologies__icon"
          @click="goTo(`https://git-scm.com/`)"
        />
        <SvgHtml
          class="homepage-technologies__icon"
          @click="goTo(`https://developer.mozilla.org/en-US/docs/Web/HTML`)"
        />
        <SvgJavascript
          class="homepage-technologies__icon"
          @click="
            goTo(`https://developer.mozilla.org/en-US/docs/Web/JavaScript`)
          "
        />
        <SvgJenkins
          class="homepage-technologies__icon"
          @click="goTo(`https://www.jenkins.io/`)"
        />
        <SvgJest
          class="homepage-technologies__icon"
          @click="goTo(`https://jestjs.io/`)"
        />
        <SvgJson
          class="homepage-technologies__icon"
          @click="
            goTo(
              `https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON`
            )
          "
        />
        <SvgNpm
          class="homepage-technologies__icon"
          @click="goTo(`https://www.npmjs.com/`)"
        />
        <SvgNuxt
          class="homepage-technologies__icon"
          @click="goTo(`https://nuxtjs.org/`)"
        />
        <SvgPrettier
          class="homepage-technologies__icon"
          @click="goTo(`https://prettier.io/`)"
        />
        <SvgSass
          class="homepage-technologies__icon"
          @click="goTo(`https://sass-lang.com/`)"
        />
        <SvgStorybook
          class="homepage-technologies__icon"
          @click="goTo(`https://storybook.js.org/`)"
        />
        <SvgTypescript
          class="homepage-technologies__icon"
          @click="goTo(`https://www.typescriptlang.org/`)"
        />
        <SvgVim
          class="homepage-technologies__icon"
          @click="goTo(`https://www.vim.org/`)"
        />
        <SvgVite
          class="homepage-technologies__icon"
          @click="goTo(`https://vitejs.dev/`)"
        />
        <SvgVscode
          class="homepage-technologies__icon"
          @click="goTo(`https://code.visualstudio.com/`)"
        />
        <SvgVue
          class="homepage-technologies__icon"
          @click="goTo(`https://vuejs.org/`)"
        />
        <SvgWebpack
          class="homepage-technologies__icon"
          @click="goTo(`https://webpack.js.org/`)"
        />
      </div>
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

  &-technologies {
    &__text {
      margin-bottom: $triple-unit;
    }

    &__icon {
      width: 48px;
      height: 48px;
      cursor: pointer;

      &:not(:last-of-type) {
        margin-right: $unit;
      }
    }

    &__container {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
    }
  }
}
</style>
