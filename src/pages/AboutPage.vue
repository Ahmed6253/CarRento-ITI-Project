<template>
  <div class="bg-bg_color">
    <div
      class="about-bg py-64 md:h-[400px] h-[250px] flex-shrink-0 flex items-center"
    >
      <h1
        class="text-primary_color text-center md:text-7xl text-4xl font-normal mx-auto"
      >
        About Us
      </h1>
    </div>
    <div class="md:mx-10 mx-4 lg:mx-20 pb-12">
      <div class="mt-20 lg:w-6/12 w-full mx-auto mb-48">
        <h3 class="res-header">Our Story</h3>
        <p class="res-parapgraph">
          "At Car Rento, we're passionate about providing hassle-free and
          enjoyable car rental experiences. With professionals having years of
          industry expertise, we've built a reputation for reliability,
          exceptional service, and a diverse fleet of vehicles to suit every
          need. Our team of dedicated professionals is committed to ensuring
          your journey is comfortable and memorable."
        </p>

        <img
          src="../assets/images/dotted_Arrow.png"
          class="mx-auto mt-10 pb-4 w-32 h-44 md:w-52 md:h-72"
        />
        <h3 class="res-header">Our Mission</h3>
        <p class="res-parapgraph">
          Our mission is to make car rental a seamless and enjoyable experience
          for everyone. We strive to offer a diverse range of vehicles to suit
          every need, competitive pricing, and exceptional customer service. We
          believe that travel should be accessible and hassle-free, and we're
          committed to making that a reality.
        </p>
      </div>
      <div class="grid lg:grid-cols-2 mb-20">
        <img src="../assets/images/our_values.png" class="mx-auto lg:mx-0" />
        <div class="lg:ms-6 md:mx-auto">
          <h3
            class="res-header md:text-left text-center md:ms-2 ms-4 lg:ms-0 mt-10 lg:mt-0 mb-6"
          >
            Our Values
          </h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="values_card mx-auto md:ms-0">
              <h6 class="values-card-header">Customer Satisfaction:</h6>
              <p class="values-card-paragraph">
                We prioritize the needs and satisfaction of our customers above
                all else.
              </p>
            </div>

            <div class="values_card mx-auto md:ms-0">
              <h6 class="values-card-header">Reliability:</h6>
              <p class="values-card-paragraph">
                We are dedicated to providing reliable and well-maintained
                vehicles.
              </p>
            </div>

            <div class="values_card mx-auto md:ms-0">
              <h6 class="values-card-header">Innovation:</h6>
              <p class="values-card-paragraph">
                We continuously seek new ways to enhance the customer
                experience.
              </p>
            </div>

            <div class="values_card mx-auto md:ms-0">
              <h6 class="values-card-header">Integrity:</h6>
              <p class="values-card-paragraph">
                We conduct our business with honesty, transparency, and ethical
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-radial-one-color rounded-3xl bg-white custom-shadow grid lg:grid-cols-2 p-6 md:p-0"
      >
        <div class="bg-custom-20-40">
          <div class="md:mb-48 md:w-7/12 md:ms-12 md:mt-20 p-4">
            <h1 class="md:text-6xl text-4xl text-primary_color mb-4">
              Join Us
            </h1>
            <p class="md:text-base text-sm text-Paragraph_color mb-6">
              We invite you to experience the difference of renting from Car
              Rento. Whether you're planning a vacation, business trip, or road
              trip, we're here to make your journey unforgettable.
            </p>
            <button
              class="bg-primary_color text-white rounded-3xl p-2.5 md:w-36 w-full hover:bg-primary_hover"
              @click="$router.push('/cars')"
            >
              Rent now
            </button>
          </div>
        </div>

        <div
          class="md:car-bg lg:bg-custom-60 w-full md:h-96 h-0 lg:h-auto md:bg-custom-130"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>
