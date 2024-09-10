<template>
  <div
    class="car-sum-comp custom-shadow flex flex-col-reverse md:flex-row lg:flex-col items-center p-4 w-full"
  >
    <section class="w-full md:w-1/2 lg:w-full p-0">
      <img
        :src="url"
        alt="car image"
        class="rounded-lg border border-border_color custom-shadow"
      />
    </section>
    <section class="px-8 py-0 w-full md:w-1/2 lg:w-full mt-4">
      <h3 class="text-[25px] font-bold text-start pt-0 pb-6">
        {{ getcar.name }}
      </h3>

      <div class="flex justify-between mb-6">
        <section>
          <p class="text-xl text-gray-900">Pick-up location</p>
          <p class="text-gray-500 text-[16px] text-start">Cairo, Egypt</p>
        </section>
        <button class="w-6">
          <img
            src="../assets/home-images/icons/edit.svg"
            alt=""
            class="w-full"
            @click="$router.push('/cars')"
          />
        </button>
      </div>

      <div class="flex justify-between mb-6">
        <section>
          <p class="text-xl text-gray-900">Pick-up date</p>
          <p class="text-gray-500 text-[16px] text-start">5/10/2024</p>
        </section>
        <button class="w-6">
          <img
            src="../assets/home-images/icons/edit.svg"
            alt=""
            class="w-full"
            @click="$router.push('/cars')"
          />
        </button>
      </div>

      <div class="flex justify-between mb-6">
        <section>
          <p class="text-xl text-gray-900">Drop-off date</p>
          <p class="text-gray-500 text-[16px] text-start">Cairo, Egypt</p>
        </section>
        <button class="w-6">
          <img
            src="../assets/home-images/icons/edit.svg"
            alt=""
            class="w-full"
            @click="$router.push('/cars')"
          />
        </button>
      </div>

      <div class="flex justify-between mb-6">
        <section class="grid grid-col-1">
          <div
            v-for="(feature, index) in additionalFeatures"
            :key="index"
            class="flex gap-4"
          >
            <p class="text-xl text-gray-900" v-if="feature">{{ index }}</p>
            <p class="text-gray-500 text-[16px] text-start" v-if="feature">{{this.addPrices[index]}} LE added</p>
          </div>
        </section>
        <button class="w-6">
          <img
            src="../assets/home-images/icons/edit.svg"
            alt=""
            class="w-full"
            @click="$router.push(`/cars/${car.id}`)"
          />
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { storage } from "@/firebase";
import { ref, getDownloadURL } from "firebase/storage";
export default {
  name: "OrderDetailsCard",
  data() {
    return {
      car: {},
      additionalFeatures: {},
      // url: "",
      addPrices: {
      },
    }
  },
  
  computed: {
    ...mapGetters(['getcar', 'getfeatures','getfeaturesprices'])
  },
  created() {
    this.car = this.getcar;
    console.log(this.getcar);
    this.additionalFeatures = this.getfeatures;
    this.addPrices = this.getfeaturesprices
    getDownloadURL(ref(storage, `cars/${this.getcar.id}`)).then(
      (download_url) => (this.url = download_url)
    );
  },
};
</script>
