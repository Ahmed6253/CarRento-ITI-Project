<template class="bg-bg_color">
  <succes-payment/>
  <div class="md:mx-10 mx-4 lg:mx-20 mb-24 pt-32">
    <div class="flex flex-nowrap mb-20">
      <div class="p-bar-container">
        <div class="p-bar-full"></div>
      </div>

      <div class="p-bar-container">
        <div class="p-bar-full"></div>
      </div>

      <div class="p-bar-container">
        <div class="p-bar-full"></div>
      </div>
    </div>

    <div class="flex mb-8">
      <h4 class="semi-header font-medium">Order Info</h4>
    </div>

    <div class="card-style">
      <div class="md:grid grid-cols-2 md:p-11 p-8">
        <div>
          <h2 class="font-semibold semi-header">{{ this.car.name }}</h2>
          <div class="w-[400px] mt-6">
            <div class="flex flex-wrap">
              <div v-for="(feature, index) in car.features" :key="index">
                <span class="flex gap-2 w-[150px] mt-3 me-5" v-if="feature">
                  <img :src="getImagePath(index)" class="h-6 w-6" />
                  <p class="text-center text-primary_color">{{ index }}</p>
                </span>
              </div>

              <div class="flex gap-4 mt-6">
                <div class="flex gap-2 w-[150px]">
                  <img
                    src="../assets/CarpageImages/Transmition.svg"
                    class="h-6 w-6"
                  />
                  <p class="text-center text-primary_color">
                    {{ this.car.manualOrAuto }}
                  </p>
                </div>

                <div class="flex gap-2 w-[150px]">
                  <img src="../assets/CarpageImages/fuel.svg" class="h-6 w-6" />
                  <p class="text-center text-primary_color">
                    {{ this.car.fuel }}
                  </p>
                </div>
              </div>

              <div class="mt-8 w-full xl:w-[73%] mb-8 lg:mb-0">
                <h1 class="text-blue-500 text-2xl">Description</h1>
                <p>{{ this.car.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            :src="url"
            class="md:ms-20 ms-0 w-10/12 md:w-9/12 lg:w-3/5 rounded-lg border border-border_color custom-shadow"
          />
        </div>
      </div>

      <hr class="bg-line_color h-0.5" />

      <div class="md:p-11 p-8 mb-16">
        <h2 class="info-header">Personal information</h2>
        <div class="mb-3">
          <h4 class="info-sub-header">Name</h4>
          <p class="info-paragraph">{{ this.personalName }}</p>
        </div>

        <div>
          <h4 class="info-sub-header">Location</h4>
          <p class="info-paragraph">{{ this.car.location }} , Egypt</p>
        </div>
      </div>

      <hr class="bg-line_color h-0.5" />

      <div class="md:p-11 p-8 mb-16">
        <h2 class="info-header">Order information</h2>
        <div class="mb-3">
          <h4 class="info-sub-header">Pick-up location</h4>
          <p class="info-paragraph">{{ this.car.location }} , Egypt</p>
        </div>

        <div class="mb-3">
          <h4 class="info-sub-header">Pick-up date</h4>
          <p class="info-paragraph">26/08/2024</p>
        </div>

        <div class="mb-3">
          <h4 class="info-sub-header">Drop-off date</h4>
          <p class="info-paragraph">26/09/2024</p>
        </div>

        <section class="grid grid-col-1">
          <div
            v-for="(feature, index) in additionalFeatures"
            :key="index"
            class="flex gap-4"
          >
            <p class="text-xl text-gray-900" v-if="feature">{{ index }}</p>
            <p class="text-gray-500 text-[16px] text-start" v-if="feature">
              {{ this.addPrices[index] }} LE added
            </p>
          </div>
        </section>
        <!-- <div class="mb-3">
          <h4 class="info-sub-header">2 Infant child seat</h4>
          <p class="info-paragraph">1050 LE added</p>
        </div>

        <div class="mb-3">
          <h4 class="info-sub-header">Collision damage protection</h4>
          <p class="info-paragraph">5034 LE added</p>
        </div> -->
      </div>
    </div>

    <div class="card-style">
      <div class="md:p-11 p-8">
        <div class="total-info">
          <p>Total</p>
          <p>{{ this.totalPrice }}</p>
        </div>
        <div class="total-info">
          <p>Service</p>
          <p>500</p>
        </div>
        <div class="total-info">
          <p>Tax’s</p>
          <p>100</p>
        </div>
        <div class="total-info">
          <p>insurance</p>
          <p>20000</p>
        </div>
      </div>
      <hr class="bg-line_color h-0.5" />

      <div class="total-info p-11">
        <p>Total</p>
        <p>{{ this.total2Price }}</p>
      </div>
    </div>

    <button
      class="bg-green w-full text-white h-12 rounded-lg mt-6 font-semibold"
    >
      Confirm Info
    </button>
  </div>
</template>

<script>
import { storage } from "@/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { mapGetters } from "vuex";
import axios from "axios";
import SuccesPayment from "@/components/SuccesPayment.vue";
export default {
  name: "ConfirmPaymentPage",
  components:{
    SuccesPayment
  },
  data() {
    return {
      car: "",
      url: "",
      additionalFeatures: {},
      addPrices: {},
      totalPrice: 0,
      personalName: "",
      total2Price: 0,
    };
  },
  computed: {
    ...mapGetters(["getlegalname"]),
  },
  async created() {
    const order = JSON.parse(sessionStorage.getItem("order"));
    this.car = order.car;
    this.additionalFeatures = order.additionalFeatures;
    this.addPrices = order.featurePrices;
    this.totalPrice = order.TotalPrice;
    this.personalName = sessionStorage.getItem("legalName");
    this.gettotal();
    getDownloadURL(ref(storage, `cars/${this.car.id}`)).then(
      (download_url) => (this.url = download_url)
    );

    /////////////////////////////////////////////////////////////////////////
    await axios
      .post(`https://carrento-9ea05-default-rtdb.firebaseio.com/orders.json`, {
        carId: this.car.id,
        status: "pending",
        renterName: this.personalName,
        paymentStatus: "done",
        owner: this.car.owner,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {
    getImagePath(prop) {
      try {
        return require(`../assets/CarpageImages/${prop}.svg`);
      } catch (e) {
        console.error(`Image for ${prop} not found.`);
        return "";
      }
    },
    gettotal() {
      this.total2Price = this.totalPrice + 500 + 100 + 20000;
    },
  },
};
</script>
