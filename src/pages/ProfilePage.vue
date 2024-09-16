<template>
  <div class="mx-4 md:mx-20 pt-32">
    <div v-if="this.rateOpen">
      <div
        class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
      >
        <div
          class="custom-shadow flex rounded-2xl sm:w-[50%] max-h-screen w-full bg-white"
        >
          <div
            v-if="loading"
            class="flex flex-row gap-2 mx-auto self-center py-16"
          >
            <div
              class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"
            ></div>
            <div
              class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"
            ></div>
            <div
              class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"
            ></div>
          </div>
          <div class="mx-auto" v-if="!loading">
            <svg
              @click="rateOpen = false"
              class="mt-6 ms-6 cursor-pointer"
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

            <h1
              class="text-2xl text-primary_color font-medium text-center mt-12 mb-2"
            >
              Please rate your order
            </h1>
            <p
              class="text-lg text-Paragraph_color font-medium text-center mb-10"
            >
              Your evaluation of us helps us improve the service for you
            </p>

            <!--stars-->
            <div class="flex justify-center mb-10">
              <div class="rating">
                <input
                  type="radio"
                  id="star5"
                  name="rate"
                  value="5"
                  @click="rate = 5"
                />
                <label title="Excellent!" for="star5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                </label>
                <input
                  value="4"
                  name="rate"
                  id="star4"
                  type="radio"
                  @click="rate = 4"
                />
                <label title="Great!" for="star4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                </label>
                <input
                  value="3"
                  name="rate"
                  id="star3"
                  type="radio"
                  @click="rate = 3"
                />
                <label title="Good" for="star3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                </label>
                <input
                  value="2"
                  name="rate"
                  id="star2"
                  type="radio"
                  @click="rate = 2"
                />
                <label title="Okay" for="star2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                </label>
                <input
                  value="1"
                  name="rate"
                  id="star1"
                  type="radio"
                  @click="rate = 1"
                />
                <label title="Bad" for="star1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                </label>
              </div>
            </div>

            <!---->
            <div class="flex justify-center mb-10">
              <button
                @click="rateOrder()"
                class="bg-primary_color text-white w-10/12 mx-auto p-3 rounded-lg mt-20 hover:bg-primary_hover"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- profile picture start -->
    <div class="mt-12 w-fit mx-auto relative">
      <img class="" src="../imagesNavfoot/User.svg" alt="" />
      <img
        class="mx-auto z-10 absolute bottom-3 right-2"
        src="../imagesNavfoot/edit.png"
        alt=""
      />
    </div>
    <!-------------------- profile picture end  ------------------>
    <!-------------------- section one start --------------------->
    <div
      class="flex flex-col justify-between custom-shadow bg-white rounded-2xl py-6 px-12 mt-6"
    >
      <div class="flex justify-between">
        <p class="text-3xl font-semibold text-primary_color">
          Basic Information
        </p>
        <img class="w-8 h-8" src="../imagesNavfoot/edit.png" alt="" />
      </div>
      <div class="flex flex-col md:flex-row justify-between pt-3">
        <div class="py-3">
          <p class="text-base text-Paragraph_color">Name</p>
          <p class="text-xl text-primary_color">{{ name }}</p>
        </div>
        <div class="py-3">
          <p class="text-base text-Paragraph_color">Email</p>
          <p class="text-xl text-primary_color">{{ email }}</p>
        </div>
        <div class="py-3">
          <p class="text-base text-Paragraph_color">Account Status</p>
          <p class="text-xl text-green">Active</p>
        </div>
      </div>
    </div>
    <!--------------------- section one end ----------------------->
    <!--------------------- section two start --------------------->
    <div class="custom-shadow mt-6 rounded-2xl bg-white py-6 md:px-12 px-5">
      <div>
        <p class="text-3xl font-semibold text-primary_color">Rentals History</p>
        <div
          class="custom-shadow rounded-xl py-6 px-6 mt-6"
          v-for="(order, index) in this.UserOrders"
          :key="index"
        >
          <p class="text-xl font-semibold text-primary_color">
            {{ order.carName }}
          </p>
          <div class="flex flex-col lg:flex-row justify-between pt-3">
            <div class="py-3">
              <p class="text-xl text-primary_color">Pick-up location</p>
              <p class="text-base text-Paragraph_color">
                {{ order.location }}
              </p>
            </div>
            <div class="py-3">
              <p class="text-xl text-primary_color">Pick-up date</p>
              <p class="text-base text-Paragraph_color">
                {{ order.pickUpDate }}
              </p>
            </div>
            <div class="py-3">
              <p class="text-xl text-primary_color">Drop-off date</p>
              <p class="text-base text-Paragraph_color">
                {{ order.dropOffDate }}
              </p>
            </div>
            <div class="py-3">
              <p class="text-xl text-primary_color">
                {{ order.TotalPrice }} LE
              </p>
              <p class="text-base text-Paragraph_color">Paid</p>
            </div>
            <div class="py-3">
              <button
                v-if="order.status === 'pending'"
                class="bg-orange-300 rounded-lg ml-2 px-6 py-2.5 text-slate-50"
                disabled
              >
                Pending
              </button>
              <button
                @click="openRate(index)"
                v-if="order.status === 'Accepted'"
                class="bg-primary_color hover:bg-primary_hover rounded-lg ml-2 px-6 py-2.5 text-white"
              >
                Rate your order
              </button>
              <button
                v-if="order.status === 'done'"
                class="bg-green rounded-lg ml-2 px-6 py-2.5 cursor-not-allowed text-slate-50"
              >
                Order rated
              </button>
              <button
                v-if="order.status === 'rejected'"
                class="bg-red rounded-lg ml-2 px-6 py-2.5 cursor-not-allowed text-slate-50"
              >
                Rejected
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--------------------- section two end  ---------------------->
    <!--------------------- section three start  -------------------->
    <div class="custom-shadow rounded-xl mb-24 py-6 px-12 mt-6 bg-white">
      <div class="border-b-[1px] border-line_color">
        <p class="text-3xl font-semibold text-primary_color">
          Settings and Privacy
        </p>
        <div class="flex gap-x-16 items-center py-5">
          <p class="text-xl text-primary_color">Password</p>
          <p class="pt-2 text-primary_color">{{ password }}</p>
          <img class="w-8 h-8" src="../imagesNavfoot/edit.png" alt="" />
        </div>
      </div>
      <div
        class="border-b-[1px] border-line_color py-6 flex gap-16 items-center"
      >
        <p class="text-xl text-primary_color">Location Sharing</p>
        <img class="pt-2" src="../imagesNavfoot/togglebutton.png" alt="" />
      </div>
      <div class="border-b-[1px] border-line_color py-6">
        <p class="text-xl text-primary_color">Payment details</p>
        <div
          class="custom-shadow rounded-xl flex items-center justify-between py-6 px-6 mt-6"
        >
          <div class="flex flex-col gap-x-16">
            <div class="flex-col md:flex-row gap-16">
              <div class="py-3">
                <p class="text-xl font-semibold text-primary_color">
                  card Number
                </p>
                <p class="text-base text-Paragraph_color">
                  **** **** **** 9012
                </p>
              </div>
              <div class="py-3">
                <p class="text-xl font-semibold text-primary_color">
                  Expiry date
                </p>
                <p class="text-base text-Paragraph_color">28/08/2036</p>
              </div>
            </div>
            <div>
              <button
                class="bg-red w-full md:w-auto px-6 py-2.5 hover:bg-red_hover text-slate-50 rounded-lg"
              >
                Delete card
              </button>
            </div>
          </div>
          <div>
            <img
              class="hidden md:block"
              src="../imagesNavfoot/visa.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <button
          class="bg-red w-full md:w-auto px-6 py-2.5 my-6 hover:bg-red_hover text-slate-50 rounded-lg"
        >
          Delete account
        </button>
      </div>
    </div>
    <!--------------------- section three end  ---------------------->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProfilePage",

  data() {
    return {
      name: "",
      email: "",
      password: "",
      id: "",
      UserOrders: {},
      rateOpen: false,
      loading: false,
      orderId: "",
      ratedOrder: {},
      carId: "",
      car: {},
      rate: 0,
      ratingCount: 0,
      ratingSum: 0,
    };
  },
  created() {
    axios
      .get("https://carrento-9ea05-default-rtdb.firebaseio.com/orders.json")
      .then((response) => {
        // console.log(response.data);
        for (let order in response.data) {
          // console.log(response.data[order]);
          if (response.data[order].renter === this.id) {
            this.UserOrders[order] = response.data[order];
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },

  mounted() {
    // Retrieve the currentUser from localStorage or sessionStorage
    const storedUser =
      localStorage.getItem("currentUser") ||
      sessionStorage.getItem("currentUser");
    this.currentUser = JSON.parse(storedUser);
    this.name = this.currentUser.userName;
    this.email = this.currentUser.email;
    const pass = this.currentUser.password;
    this.id = this.currentUser.id;
    this.password = pass.replace(/./g, "*");
  },
  methods: {
    openRate(id) {
      this.rateOpen = !this.rateOpen;
      this.orderId = id;
      this.carId = this.UserOrders[id].carId;
      axios
        .get(
          `https://carrento-9ea05-default-rtdb.firebaseio.com/orders/${id}.json`
        )
        .then((response) => {
          this.ratedOrder = response.data;
          console.log(this.ratedOrder);
        });
    },
    rateOrder() {
      axios
        .get(
          `https://carrento-9ea05-default-rtdb.firebaseio.com/cars/${this.carId}.json`
        )
        .then((response) => {
          this.car = response.data;
          this.ratingCount = this.car.ratingCount;
          this.ratingSum = this.car.ratingSum;
        })
        .then(() => {
          this.ratingCount++;
          this.ratingSum += this.rate;
          this.car.ratingCount = this.ratingCount;
          this.car.ratingSum = this.ratingSum;
          this.car.rating =
            Math.round((this.ratingSum / this.ratingCount) * 10) / 10;
          axios
            .put(
              `https://carrento-9ea05-default-rtdb.firebaseio.com/cars/${this.carId}.json`,
              this.car
            )
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .then(() => {
          this.ratedOrder.status = "done";
          this.UserOrders[this.orderId] = this.ratedOrder;
          this.loading = true;
          axios
            .put(
              `https://carrento-9ea05-default-rtdb.firebaseio.com/orders/${this.orderId}.json`,
              this.ratedOrder
            )
            .then(() => {
              this.rateOpen = false;
              this.loading = false;
            })
            .catch((error) => {
              console.log(error);
            });
        });
    },
  },
};
</script>

<style scoped>
/* From Uiverse.io by amikambs */
.rating > label {
  margin-right: 4px;
}

.rating:not(:checked) > input {
  display: none;
}

.rating:not(:checked) > label {
  float: right;
  cursor: pointer;
  font-size: 30px;
}

.rating:not(:checked) > label > svg {
  fill: #666;
  transition: fill 0.3s ease;
}

.rating > input:checked ~ label > svg {
  fill: #ffa723;
}

.rating:not(:checked) > label:hover ~ label > svg,
.rating:not(:checked) > label:hover > svg {
  fill: #ff9e0b;
}

#star1:hover ~ label > svg,
#star1:hover > svg {
  fill: #a23c3c !important;
}

#star2:hover ~ label > svg,
#star2:hover > svg {
  fill: #99542d !important;
}

#star3:hover ~ label > svg,
#star3:hover > svg {
  fill: #9f7e18 !important;
}

#star4:hover ~ label > svg,
#star4:hover > svg {
  fill: #22885e !important;
}

#star5:hover ~ label > svg,
#star5:hover > svg {
  fill: #7951ac !important;
}

#star1:checked ~ label > svg {
  fill: #ef4444;
}

#star2:checked ~ label > svg {
  fill: #e06c2b;
}

#star3:checked ~ label > svg {
  fill: #eab308;
}

#star4:checked ~ label > svg {
  fill: #19c37d;
}

#star5:checked ~ label > svg {
  fill: #ab68ff;
}
</style>
