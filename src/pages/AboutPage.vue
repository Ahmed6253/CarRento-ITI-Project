<template>
  <div class="bg-bg_color text-primary_color">
    <div
      class="about-bg py-64 md:h-[400px] h-[250px] flex-shrink-0 flex items-center"
    >
      <h1
        class="text-primary_color text-center md:text-7xl text-4xl font-normal mx-auto"
      >
        {{ $t("about.title") }}
      </h1>
    </div>
    <div class="md:mx-10 mx-4 lg:mx-20 pb-12">
      <div class="mt-20 lg:w-6/12 w-full mx-auto mb-48">
        <section class="sec-1 showAnimate">
          <h3 class="res-header animate">{{ $t("about.ourStoryHeader") }}</h3>
          <p class="res-parapgraph animate">
            {{ $t("about.ourStoryText") }}
          </p>
        </section>

        <img
          src="../assets/images/dotted_Arrow.png"
          class="mx-auto mt-10 pb-4 w-32 h-44 md:w-52 md:h-72"
        />

        <section class="showAnimate">
          <h3 class="res-header">{{ $t("about.ourMissionHeader") }}</h3>
          <p class="res-parapgraph">
            {{ $t("about.ourMissionText") }}
          </p>
        </section>
      </div>
      <div class="grid lg:grid-cols-2 mb-20">
        <img src="../assets/images/our_values.png" class="mx-auto lg:mx-0" />
        <div class="lg:ms-6 md:mx-auto">
          <h3
            class="res-header md:text-left text-center md:ms-2 ms-4 lg:ms-0 mt-10 lg:mt-0 mb-6"
          >
            {{ $t("about.ourValuesHeader") }}
          </h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div
              :class="
                this.$i18n.locale === 'Ar'
                  ? 'values_card mx-auto md:ms-0 text-right'
                  : 'values_card mx-auto md:ms-0'
              "
            >
              <h6 class="values-card-header">
                {{ $t("about.values.customerSatisfaction.header") }}
              </h6>
              <p class="values-card-paragraph">
                {{ $t("about.values.customerSatisfaction.text") }}
              </p>
            </div>

            <div
              :class="
                this.$i18n.locale === 'Ar'
                  ? 'values_card mx-auto md:ms-0 text-right'
                  : 'values_card mx-auto md:ms-0'
              "
            >
              <h6 class="values-card-header">
                {{ $t("about.values.reliability.header") }}
              </h6>
              <p class="values-card-paragraph">
                {{ $t("about.values.reliability.text") }}
              </p>
            </div>

            <div
              :class="
                this.$i18n.locale === 'Ar'
                  ? 'values_card mx-auto md:ms-0 text-right'
                  : 'values_card mx-auto md:ms-0'
              "
            >
              <h6 class="values-card-header">
                {{ $t("about.values.innovation.header") }}
              </h6>
              <p class="values-card-paragraph">
                {{ $t("about.values.innovation.text") }}
              </p>
            </div>

            <div
              :class="
                this.$i18n.locale === 'Ar'
                  ? 'values_card mx-auto md:ms-0 text-right'
                  : 'values_card mx-auto md:ms-0'
              "
            >
              <h6 class="values-card-header">
                {{ $t("about.values.integrity.header") }}
              </h6>
              <p class="values-card-paragraph">
                {{ $t("about.values.integrity.text") }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-radial-one-color rounded-3xl bg-white custom-shadow grid lg:grid-cols-2 p-6 md:p-0"
      >
        <div class="bg-custom-20-40">
          <div class="md:mb-20 md:w-7/12 md:ms-12 md:mt-20 p-4">
            <h1 class="md:text-6xl text-4xl text-primary_color mb-4">
              {{ $t("about.joinUsHeader") }}
            </h1>
            <p class="md:text-base text-sm text-Paragraph_color mb-6">
              {{ $t("about.joinUsText") }}
            </p>
            <button
              class="bg-primary_color text-white rounded-3xl p-2.5 md:w-36 w-full hover:bg-primary_hover"
              @click="$router.push('/cars')"
            >
              {{ $t("about.rentNowButton") }}
            </button>
          </div>
        </div>

        <img
          src="../assets/images/about-car.png"
          :class="
            this.$i18n.locale === 'Ar'
              ? 'lg:block hidden mt-44 scale-x-[-1]'
              : 'mt-44 lg:block hidden'
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {};
  },

  methods: {
    scrollsection() {},
  },
};
</script>
<style scoped></style>
