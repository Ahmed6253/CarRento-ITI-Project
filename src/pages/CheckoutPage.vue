<template>
  <div class="bg-bg_color mx-0 px-0">
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
          <img
            src="../assets/home-images/icons/arrow_back_24px.svg"
            alt=""
            class="w-6 h-6 cursor-pointer"
            @click="$router.push(`/cars/${this.car.id}`)"
          />
          <h2 class="text-3xl ps-4 font-medium">Review your booking</h2>
        </div>
        <p class="text-xl px-0 mx-0 mb-4">
          Total: LE <span class="text-4xl font-semibold">12,125</span>.63
        </p>
      </div>
      <h3 class="text-2xl mt-10 hidden lg:block">ID verification</h3>

      <div class="flex flex-wrap flex-col-reverse lg:flex-row">
        <!-- ----------------------------------------form start----------------------------------------------------- -->

        <div class="form-container w-full lg:w-2/3 pe-1">
          <h3 class="text-2xl mt-10 lg:hidden">ID verification</h3>

          <hr class="bg-line_color h-0.5 mt-3 mb-6" />
          <form action="">
            <div class="flex justify-between flex-wrap">
              <section class="w-full md:w-1/2 pe-28">
                <h3 class="text-2xl mb-3 w-full">First name</h3>
                <input
                  type="text"
                  placeholder="Enter your legal first name"
                  name="f-name"
                  id="f-name"
                  class="ps-2 pe-14 py-2 mb-6 border-gray-200 border-2 rounded-lg bg-gray-50 w-full"
                />
              </section>

              <section class="w-full md:w-1/2 pe-28">
                <h3 class="text-2xl mb-3 w-full">Last name</h3>
                <input
                  type="text"
                  placeholder="Enter your legal last name"
                  name="l-name"
                  id="l-name"
                  class="ps-2 pe-14 py-2 mb-6 border-gray-200 border-2 rounded-lg bg-gray-50 w-full"
                />
              </section>

              <section class="w-full md:w-1/2 pe-28">
                <h3 class="text-2xl mb-3">Front-side photo of ID</h3>
                <div class="upload-file mb-6">
                  <label
                    for="front-id"
                    class="text-white bg-black rounded-lg ps-2 pe-2 py-2 flex justify-between"
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
                    class="text-white bg-black rounded-lg ps-2 pe-2 py-2 flex justify-between"
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

              <section class="w-full">
                <h3 class="text-2xl mt-10">Payment Method</h3>
                <hr class="bg-line_color h-0.5 mt-3 mb-6" />
              </section>

              <section class="w-full md:w-1/2 pe-28">
                <div
                  class="pe-6 ps-2 py-2 mb-6 flex justify-between border-gray-200 border-2 rounded-lg bg-gray-50 h-fit"
                >
                  <div>
                    <input
                      type="radio"
                      id="master"
                      name="pay-method"
                      value="master"
                    />
                    <label for="master" class="ps-2 text-gray-400"
                      >Pay with Master Card</label
                    >
                  </div>
                  <img
                    src="../assets/home-images/icons/MasterCard_Logo.svg"
                    alt=""
                    class="h-6"
                  />
                </div>
              </section>

              <section class="w-full md:w-1/2 pe-28">
                <div
                  class="ps-2 pe-6 py-2 mb-6 flex justify-between border-gray-200 border-2 rounded-lg bg-gray-50 h-fit"
                >
                  <div>
                    <input
                      type="radio"
                      id="visa"
                      name="pay-method"
                      value="visa"
                    />
                    <label for="visa" class="ps-2 text-gray-400"
                      >Pay with Visa</label
                    >
                  </div>
                  <img
                    src="../assets/home-images/icons/visa svg.svg"
                    alt=""
                    class="h-6"
                  />
                </div>
              </section>

              <section class="w-full md:w-1/2 pe-28">
                <h3 class="text-2xl mb-3 w-full">Name on card</h3>
                <input
                  type="text"
                  placeholder="Enter the name on the card"
                  name="card-name"
                  id="card-name"
                  class="ps-2 pe-14 py-2 mb-6 border-gray-200 border-2 rounded-lg bg-gray-50 w-full"
                />
              </section>

              <section class="w-full md:w-1/2 pe-28">
                <h3 class="text-2xl mb-3 w-full">Card number</h3>
                <input
                  type="text"
                  placeholder="Enter the card number"
                  name="card-no"
                  id="card-no"
                  class="ps-2 pe-14 py-2 mb-6 border-gray-200 border-2 rounded-lg bg-gray-50 w-full"
                />
              </section>

              <section class="w-full md:w-1/2 pe-28 relative">
                <h3 class="text-2xl mb-3 w-full">Expiry date</h3>
                <input
                  type="date"
                  name="fname"
                  id="expiry"
                  class="ps-2 pe-14 py-2 mb-6 border-gray-200 border-2 rounded-lg bg-gray-50 w-full"
                />
                <img
                  src="../assets/calendar.svg"
                  alt=""
                  class="w-5 absolute bottom-9 left-96 md:left-64 lg:left-72"
                />
              </section>

              <section class="w-full md:w-1/2 pe-28">
                <h3 class="text-2xl mb-3 w-full">CVC</h3>
                <input
                  type="text"
                  placeholder="Enter the CVC"
                  name="cvc"
                  id="cvc"
                  class="ps-2 pe-14 py-2 mb-6 border-gray-200 border-2 rounded-lg bg-gray-50 w-full"
                />
              </section>

              <section class="w-full">
                <input
                  type="checkbox"
                  id="save-details"
                  name="save-details"
                  class="accent-gray-900"
                />
                <label for="save-details" class="text-[20px] ps-4"
                  >save my details for future purchases</label
                >
              </section>

              <button
                class="rounded-lg mt-8 text-white w-full bg-green py-[10px]"
                @click="$router.push('confirmpayment')"
              >
                Confirm info
              </button>
            </div>
          </form>
        </div>

        <!-- ------------------------------------form end ----------------------------------------------------- -->

        <!-- ---------------------------------order details card-------------------------------------------- -->
        <aside class="w-full lg:w-1/3 p-3">
          <OrderDetailsCard />
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import OrderDetailsCard from "../components/OrderDetailsCard.vue";
import { mapGetters } from "vuex";

export default {
  components: { OrderDetailsCard },
  name: "CheckoutPage",

  data() {
    return {
      firstFileName: "",
      secondFileName: "",
      car: {},
      additionalFeatures: {},
    };
  },
  computed: {
    ...mapGetters(["getcar", "getfeatures"]),
  },
  created() {
    this.car = this.getcar;
    this.additionalFeatures = this.getfeatures;
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
  },
};
</script>
