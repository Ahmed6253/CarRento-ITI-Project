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
          >
            <path
              d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
              class="fill-primary_color cursor-pointer"
            />
          </svg>
          <h2 class="text-3xl ps-4 font-medium">Review your booking</h2>
        </div>
      </div>
      <h3 class="text-2xl mt-10 hidden lg:block">ID verification</h3>

      <div class="flex flex-wrap flex-col-reverse lg:flex-row">
        <!-- ----------------------------------------form start----------------------------------------------------- -->

        <div class="form-container w-full lg:w-2/3 pe-1">
          <h3 class="text-2xl mt-10 lg:hidden">ID verification</h3>

          <hr class="bg-line_color h-0.5 mt-3 mb-6" />
          <p class="text-red mb-4" v-if="nameError">All fields are required</p>

          <div class="flex justify-between flex-wrap">
            <section class="w-full md:w-1/2 pe-28">
              <h3 class="text-2xl mb-3 w-full">First name</h3>
              <input
                type="text"
                placeholder="Enter your legal first name"
                name="f-name"
                id="f-name"
                class="ps-2 pe-14 py-2 mb-6 border-gray-200 border-2 rounded-lg bg-gray-50 w-full text-black"
                v-model="firstName"
              />
            </section>

            <section class="w-full md:w-1/2 pe-28">
              <h3 class="text-2xl mb-3 w-full">Last name</h3>
              <input
                type="text"
                placeholder="Enter your legal last name"
                name="l-name"
                id="l-name"
                class="ps-2 pe-14 py-2 mb-6 border-gray-200 border-2 rounded-lg bg-gray-50 w-full text-black"
                v-model="secondName"
              />
            </section>

            <section class="w-full md:w-1/2 pe-28">
              <h3 class="text-2xl mb-3">Front-side photo of ID</h3>
              <div class="upload-file mb-6">
                <label
                  for="front-id"
                  class="text-slate-50 bg-black rounded-lg ps-2 pe-2 py-2 flex justify-between cursor-pointer"
                >
                  <span>Upload Your Photo </span>
                  <img
                    src="../assets/home-images/icons/document-upload.svg"
                    alt=""
                    class="w-6"
                  />
                </label>
                <input
                  type="file"
                  id="front-id"
                  name="front-id"
                  class="hidden"
                  @change="handleFileChange($event, 1)"
                />
                <span class="border-1"> {{ firstFileName }}</span>
              </div>
            </section>

            <section class="w-full md:w-1/2 pe-28">
              <h3 class="text-2xl mb-3">Back-side photo of ID</h3>
              <div class="upload-file mb-6">
                <label
                  for="back-id"
                  class="bg-black text-slate-50 rounded-lg ps-2 pe-2 py-2 flex justify-between cursor-pointer text-Paragraph_color"
                >
                  <span>Upload Your Photo </span>
                  <img
                    src="../assets/home-images/icons/document-upload.svg"
                    alt=""
                    class="w-6"
                  />
                </label>
                <input
                  type="file"
                  id="back-id"
                  name="back-id"
                  class="hidden"
                  @change="handleFileChange($event, 2)"
                />
                <span class="border-1"> {{ secondFileName }}</span>
              </div>
            </section>

            <div class="card-style w-full">
              <div class="md:p-11 p-8">
                <div class="total-info">
                  <p>Rent per day:</p>
                  <p>{{ totalPrice }}</p>
                </div>
                <div class="total-info">
                  <p>Service:</p>
                  <p>500</p>
                </div>
                <div class="total-info">
                  <p>Tax’s:</p>
                  <p>{{ tax }}</p>
                </div>

                <div class="total-info">
                  <p>Total:</p>
                  <p class="text-green">{{ totalPriceFinal }} LE</p>
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
              Pay Now
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
      firstFileName: "",
      secondFileName: "",
      stripeOn: false,
      nameError: false,
      url: "",
      car: {},
      pickUpDate: "",
      dropOffDate: "",
      location: "",
      additionalFeatures: {},
      firstName: "",
      secondName: "",
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
    handleFileChange(event, num) {
      const firstFile = event.target.files[0];
      if (num == 1) {
        this.firstFileName = firstFile ? firstFile.name : "";
      } else if (num == 2) {
        this.secondFileName = firstFile ? firstFile.name : "";
      }
    },
    setlegalname(fn, ln) {
      this.$store.dispatch("setlegalname", fn, ln);
    },
    async confirminfo() {
      if (this.firstName == "" || this.secondName == "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.nameError = true;
        return;
      } else {
        this.nameError = false;
        this.stripeOn = true;
        await this.setlegalname(this.firstName + " " + this.secondName);
        sessionStorage.setItem(
          "legalName",
          this.firstName + " " + this.secondName
        );
        sessionStorage.setItem("orderStatus", JSON.stringify("confirm"));
        console.log(this.firstName, this.secondName);
        this.$refs.checkoutRef.redirectToCheckout();
        // this.$router.push('/confirmpayment');
      }
    },
    getPrice() {
      for (let i in this.additionalFeatures) {
        if (this.additionalFeatures[i]) {
          console.log("price", this.addPrices[i]);
          this.totalPrice += this.addPrices[i] * this.days;
        }
      }
      this.totalPrice += parseInt(this.car.price * this.days);
      this.tax = parseInt((this.totalPrice + 500) * 0.14);
      this.totalPriceFinal = this.tax + this.totalPrice + 500;
    },
  },
  mounted() {
    this.firstName = this.getlegalname.split(" ")[0];
    this.secondName = this.getlegalname.split(" ")[1];
  },
};
</script>
