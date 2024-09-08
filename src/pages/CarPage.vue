<template>
  <div class="md:px-[80px] px-5 md:my-14 my-6">
    <div class="flex w-full gap-2">
      <svg class="w-1/3" width="416" height="8" viewBox="0 0 416 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect class="fill-primary_color" width="416" height="8" rx="4" fill="#D1D5DB" />
      </svg>
      <svg class="w-1/3" width="416" height="8" viewBox="0 0 416 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="416" height="8" rx="4" fill="#D1D5DB" />
      </svg>
      <svg class="w-1/3" width="416" height="8" viewBox="0 0 416 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="416" height="8" rx="4" fill="#D1D5DB" />
      </svg>
    </div>
    <section class="flex flex-wrap xl:justify-between justify-evenly mt-20 gap-y-4">
      <!-- section one -->
      <img class="lg:w-[400px] w-full mx-auto lg:mx-0 rounded-lg border border-border_color custom-shadow" :src="url" />
      <div class="w-full lg:w-80 lg:mx-0 mx-auto">
        <h1 class="text-primary_color text-2xl font-bold">{{ car.name }}</h1>
        <div class="flex flex-wrap w-[500px]" >
          <div v-for="(feature, index) in car.features" :key="index">
            <span class="flex gap-2 w-[150px] mt-3 me-5" v-if="feature">
              <img :src="getImagePath(index)" class="h-6 w-6 " />
              <p class="text-center text-primary_color">{{ index }}</p>
            </span>
          </div>

          <!-- <span class="flex gap-2 w-[150px]" v-for="(prop, index) in car.properties" :key="index"><img
              :src="getImagePath(prop)" />
            <p class="text-center text-primary_color">{{ prop }}</p>
          </span> -->
        </div>
      </div>
      <div class="w-full xl:w-72 mx-auto xl:mx-0 bg-white custom-shadow rounded-2xl p-6 flex flex-col gap-4">
        <div class="flex justify-between">
          <div>
            <h2 class="font-semibold text-lg text-primary_color">
              Pick-up location
            </h2>
            <p class="text-Paragraph_color">Cairo, Egypt</p>
          </div>
          <img src="../assets/edit.svg" alt="" @click="$router.push('/cars')" class="cursor-pointer" />
        </div>
        <div class="flex justify-between">
          <div>
            <h2 class="font-semibold text-lg text-primary_color">
              Pick-up date
            </h2>
            <p class="text-Paragraph_color">12/12/2022</p>
          </div>
          <img src="../assets/edit.svg" alt="" @click="$router.push('/cars')" class="cursor-pointer" />
        </div>
        <div class="flex justify-between">
          <div>
            <h2 class="font-semibold text-lg text-primary_color">
              Drop-off date
            </h2>
            <p class="text-Paragraph_color">12/12/2022</p>
          </div>
          <img src="../assets/edit.svg" alt="" @click="$router.push('/cars')" class="cursor-pointer" />
        </div>
      </div>

      <!-- section two -->
      <div class="bg-white custom-shadow rounded-2xl md:p-8 p-4 flex flex-col gap-2 w-full xl:w-[73%]">
        <h1 class="text-primary_color text-2xl font-bold mb-4">
        </h1>
        <div class="flex justify-between border-[1.5px] p-4 rounded-lg">
          <label class="mr-4">
            <input type="checkbox" class="accent-gray-900" id="driver" value="driver"
              v-model="AdditonalFeatures.driver" />
            <label class="text-primary_color ml-3" for="driver">Private driver</label><br />
          </label>
          <p class="text-Paragraph_color">
            <span class="text-primary_color">500 LE</span>/day
          </p>
        </div>
        <div class="flex justify-between border-[1.5px] p-4 rounded-lg">
          <label class="mr-4">
            <input type="checkbox" class="accent-gray-900" id="toddler-seat" value="toddler-seat"
              v-model="AdditonalFeatures.toddlerSeat" />
            <label class="text-primary_color ml-3" for="toddler-seat">Toddler Child Seat</label><br />
          </label>
          <p class="text-Paragraph_color">
            <span class="text-primary_color">200 LE</span>/day
          </p>
        </div>
        <div class="flex justify-between border-[1.5px] p-4 rounded-lg">
          <label class="mr-4">
            <input type="checkbox" class="accent-gray-900" id="infant-seat" value="infant-seat"
              v-model="AdditonalFeatures.infantSeat" />
            <label class="text-primary_color ml-3" for="infant-seat">Infant Child Seat</label><br />
          </label>
          <p class="text-Paragraph_color">
            <span class="text-primary_color">150 LE</span>/day
          </p>
        </div>
        <div class="flex justify-between border-[1.5px] p-4 rounded-lg">
          <label class="mr-4">
            <input type="checkbox" id="protection" value="protection" class="accent-gray-900"
              v-model="AdditonalFeatures.protection" />
            <label class="text-primary_color ml-3" for="protection">Collision Damage Protection</label><br />
          </label>
          <p class="text-Paragraph_color">
            <span class="text-primary_color">1500 LE</span>/day
          </p>
        </div>
      </div>
      <!-- section three -->
      <div class="bg-white custom-shadow rounded-2xl md:p-8 p-4 w-full xl:w-[73%]">
        <h1 class="text-primary_color text-2xl font-bold mb-4">
          About car owner
        </h1>
        <div class="flex flex-col gap-3">
          <div>
            <h2 class="font-semibold text-lg text-primary_color">Name</h2>
            <p class="text-Paragraph_color">{{this.owner.userName}}</p>
          </div>
          <div>
            <h2 class="font-semibold text-lg text-primary_color">Location</h2>
            <p class="text-Paragraph_color">Cairo, Egypt</p>
          </div>
          <div>
            <h2 class="font-semibold text-lg text-primary_color">Reviews</h2>
            <p class="text-Paragraph_color">25</p>
          </div>
          <div>
            <h2 class="font-semibold text-lg text-primary_color">Rating</h2>
            <p class="text-Paragraph_color">5.0</p>
          </div>
        </div>
      </div>
      <button
        class="bg-green rounded-lg font-medium text-white hover:bg-green_hover p-3 cursor-pointer w-full xl:w-[73%]"
        @click="booknow">
        Book Now
      </button>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { storage } from "@/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { mapState } from 'vuex';
export default {
  name: "CarPage",
  data() {
    return {
      car: "",
      AdditonalFeatures: {
        driver: false,
        protection: false,
        infantSeat: false,
        toddlerSeat: false
      },
      url: "",
      owner: "",
    };
  },
  computed: {
    ...mapState(['car'])
  },
  async created() {
    await axios
      .get(
        `https://carrento-9ea05-default-rtdb.firebaseio.com/cars/${this.$route.params.id}.json`
      )
      .then((response) => {
        this.car = response.data;
        this.setcar(this.car);
        this.setfeatures(this.AdditonalFeatures);
        console.log(this.car.id)
        getDownloadURL(ref(storage, `cars/${this.car.id}`)).then(
          (download_url) => (this.url = download_url)
        );
      });

    await axios
      .get(
        `https://carrento-9ea05-default-rtdb.firebaseio.com/users/${this.car.owner}.json`
      )
      .then((response) => {
        this.owner = response.data;
        console.log(this.car)
      });

      


  },
  methods: {
    getImagePath(prop) {
      try {
        return require(`../assets/CarpageImages/${prop}.svg`);
      } catch (e) {
        console.error(`Image for ${prop} not found.`);
        return ""; // Return a placeholder or empty string if image not found
      }
    },
    booknow() {
      this.$router.push('/checkout');
    },
    setcar(car) {
      this.$store.dispatch('setcar', car);
    },
    setfeatures(features) {
      this.$store.dispatch('setfeatures', features);
    },


  },

  mounted() {

  },
};
</script>

<style>
.input[type="checkbox"] {
  display: none;
}

.custom-checkbox {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1.8px solid #6b7280;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
}a

.custom-checkbox::after {
  content: "";
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-55%, -55%);
  width: 8px;
  height: 8px;
  background-color: #6b7280;
  border-radius: 2px;
  opacity: 0;
}

.input[type="checkbox"]:checked+.custom-checkbox::after {
  opacity: 1;
}
</style>
