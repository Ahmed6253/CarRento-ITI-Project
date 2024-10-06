<template>
  <div class="bg-bg_color mx-0 px-0 text-primary_color">
    <div class="mx-4 md:mx-20 pt-32 pb-14">
      <!-- ------------------------------------------upper bars------------------------------------------- -->
      <div class="flex flex-nowrap">
        <div class="p-bar-container">
          <div class="p-bar-full"></div>
        </div>

        <div class="p-bar-container">
          <div class="p-bar-full"></div>
        </div>

        <div class="p-bar-container">
          <div class="p-bar-empty"></div>
        </div>
      </div>

      <!-- ---------------------------------------review your booking---------------------------------------- -->
      <div
        class="flex justify-start md:justify-between flex-col lg:flex-row pt-24 ps-3"
      >
        <div class="py-3 lg:py-0 px-0 flex items-center">
          <svg
            @click="$router.go(-1)"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="this.$i18n.locale === 'Ar' ? 'scale-x-[-1]' : ''"
          >
            <path
              d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
              class="fill-primary_color cursor-pointer"
            />
          </svg>
          <h2 class="text-3xl font-medium p-3">{{ $t("checkout.review") }}</h2>
        </div>
      </div>

      <div class="flex flex-wrap flex-col-reverse lg:flex-row w-full">
        <!-- ----------------------------------------form start----------------------------------------------------- -->

        <div class="form-container w-full lg:w-2/3 pe-1">
          <div class="flex justify-between flex-wrap">
            <div class="card-style w-full">
              <div class="md:p-11 p-8">
                <div class="total-info">
                  <p>{{ $t("checkout.total") }}:</p>
                  <p>{{ totalPrice }}</p>
                </div>
                <div class="total-info">
                  <p>{{ $t("checkout.service") }}:</p>
                  <p>500</p>
                </div>
                <div class="total-info">
                  <p>{{ $t("checkout.tax") }}:</p>
                  <p>{{ tax }}</p>
                </div>

                <div class="total-info">
                  <p>{{ $t("checkout.totalPrice") }}:</p>
                  <p class="text-green">
                    {{ totalPriceFinal }} {{ $t("checkout.le") }}
                  </p>
                </div>
              </div>
            </div>

            <stripe-checkout
              v-if="stripeOn"
              ref="checkoutRef"
              mode="payment"
              :pk="publishableKey"
              :line-items="lineItems"
              :success-url="successURL"
              :cancel-url="cancelURL"
              @loading="(v) => (loading = v)"
            />

            <button
              class="rounded-lg mt-8 text-slate-50 w-full bg-green py-[10px]"
              @click="confirminfo"
            >
              {{ $t("checkout.submit") }}
            </button>
          </div>
        </div>

        <!-- ------------------------------------form end ----------------------------------------------------- -->

        <!-- ---------------------------------order details card-------------------------------------------- -->
        <aside class="w-full lg:w-1/3 p-3">
          <OrderDetailsCard
            :imgUrl="url"
            :pickUpDate="pickUpDate"
            :dropOffDate="dropOffDate"
            :location="location"
          />
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import OrderDetailsCard from "../components/OrderDetailsCard.vue";
import axios from "axios";
import { storage } from "@/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import { StripeCheckout } from "@vue-stripe/vue-stripe";

export default {
  components: { OrderDetailsCard, StripeCheckout },

  name: "CheckoutPage",

  data() {
    this.publishableKey =
      "pk_test_51PwRObP0Cf7C3nbxE0eAkp8fyZMex6IBMPPN8d1pUiwKr19hvfwOpuDL8j1FB400fqqu7Z8MKlxa8iTU1k7DzaPF00ox6ArmnI";
    return {
      loading: false,
      lineItems: [
        {
          price: "price_1PwVBVP0Cf7C3nbxoDfzFY16",
          quantity: 1,
        },
      ],
      successURL: "https://car-rento-iti-project.netlify.app/confirmpayment",
      cancelURL: "https://car-rento-iti-project.netlify.app/cars",

      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      stripeOn: false,
      nameError: false,
      url: "",
      car: {},
      pickUpDate: "",
      dropOffDate: "",
      location: "",
      additionalFeatures: {},

      addPrices: {},
      days: 0,
      totalPrice: 0,
      totalPriceFinal: 0,
      tax: 0,
    };
  },
  computed: {
    ...mapGetters([
      "getcar",
      "getfeatures",
      "getlegalname",
      "getfeaturesprices",
    ]),
    ...mapState(["LegalName"]),
  },
  created() {
    // this.car=this.getcar;
    this.days = sessionStorage.getItem("duration");
    this.pickUpDate = sessionStorage.getItem("orderPickUp");
    this.dropOffDate = sessionStorage.getItem("orderDropOff");
    this.location = sessionStorage.getItem("orderLocation");
    this.additionalFeatures = this.getfeatures;
    this.addPrices = this.getfeaturesprices;

    axios
      .get(
        `https://carrento-9ea05-default-rtdb.firebaseio.com/cars/${this.$route.params.id}.json`
      )
      .then((response) => {
        this.car = response.data;
        this.getPrice();
        this.order = {
          car: this.car,
          additionalFeatures: this.additionalFeatures,
          featurePrices: this.addPrices,
          TotalPrice: this.totalPriceFinal,
        };
        sessionStorage.setItem("order", JSON.stringify(this.order));
      })
      .then(() => {
        if (this.car) {
          getDownloadURL(ref(storage, `cars/${this.car.id}`)).then(
            (download_url) => {
              this.url = download_url;
            }
          );
        }
      });
  },

  methods: {
    async confirminfo() {
      this.stripeOn = true;
      await sessionStorage.setItem("orderStatus", JSON.stringify("confirm"));

      this.$refs.checkoutRef.redirectToCheckout();
      // this.$router.push('/confirmpayment');
    },
    getPrice() {
      for (let i in this.additionalFeatures) {
        if (this.additionalFeatures[i]) {
          this.totalPrice += this.addPrices[i] * this.days;
        }
      }
      this.totalPrice += parseInt(this.car.price * this.days);
      this.tax = parseInt((this.totalPrice + 500) * 0.14);
      this.totalPriceFinal = this.tax + this.totalPrice + 500;
    },
  },
};
</script>
