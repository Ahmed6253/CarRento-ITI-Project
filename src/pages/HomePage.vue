<script setup>
import { Swiper, SwiperSlide} from "swiper/vue";

import "swiper/css";
</script>

<template>
  <!-- ------------------------------------hero section--------------------------------- -->
  <div class="bg-split-half max-h-fit">
    <div class="mx-4 md:mx-20">
      <div class="px-0 pt-12 text-left">
        <h1 class="lg:text-6xl text-4xl">
          Rent your perfect car with <br />
          a big discount
        </h1>
        <button
          class="bg-primary_color hover:bg-primary_hover text-white px-12 py-2.5 my-8 rounded-3xl"
        >
          Rent now
        </button>
        <img
          src="../assets/home-images/hero.png"
          alt="hero-car"
          class="lg:-mt-40 lg:ml-72 mt-0 mx-auto w-3/4"
        />
      </div>
    </div>
  </div>

  <div class="bg-quarter-split">
    <div class="mx-auto px-4 md:px-10 lg:px-20 py-10">
      <SearchCard class="mt-0"></SearchCard>
    </div>
  </div>

  <!-- -----------------------------------logo separator------------------------------------->
  <section class="bg-white py-5 my-0">
    <div class="mx-4 md:mx-20">
      <div class="flex flex-wrap justify-between items-center">
        <div class="logo-container w-1/2 md:w-1/3 lg:w-1/6">
          <img
            src="../assets/home-images/Mercedes.png"
            alt="mercedes"
            class="mx-auto"
          />
        </div>
        <div class="logo-container w-1/2 md:w-1/3 lg:w-1/6">
          <img src="../assets/home-images/Porsche.png" alt="Porsche" class="mx-auto"/>
        </div>
        <div class="logo-container w-1/2 md:w-1/3 lg:w-1/6">
          <img src="../assets/home-images/Kia.png" alt="kia" class="mx-auto"/>
        </div>
        <div class="logo-container w-1/2 md:w-1/3 lg:w-1/6">
          <img src="../assets/home-images/Nissan.png" alt="nissan" class="mx-auto"/>
        </div>
        <div class="logo-container w-1/2 md:w-1/3 lg:w-1/6">
          <img src="../assets/home-images/Fiat.png" alt="fiat" class="mx-auto"/>
        </div>
        <div class="logo-container w-1/2 md:w-1/3 lg:w-1/6">
          <img src="../assets/home-images/Vector.png" alt="vector" class="mx-auto"/>
        </div>
      </div>
    </div>
  </section>

  <!-- ------------------------easy steps ----------------------------------- -->

  <section class="bg-bg_color py-24 my-0 text-center">
    <div class="mx-4 md:mx-20">
      <h2 class="text-[36px] font-medium">
        Easy steps to rent your perfect car
      </h2>
      <p class="w-75% text-[16px]">
        Renting a car with us is a breeze! Simply browse our extensive fleet to
        find the perfect vehicle for your needs.
      </p>

      <div class="flex flex-wrap py-16 text-center">
        <div class="wrapper">
          <div class="blue-circle">
            <img src="../assets/home-images/icons/location.png" />
          </div>
          <h3 class="mt-4 text-[16px] font-medium">Choose Location</h3>
          <p class="text-gray-500 text-[12px]">
            choose your desired pickup and drop-off from wide range of locations
            to suit your needs
          </p>
        </div>
        <div class="w-1/5 ps-2 hidden lg:block">
          <img
            src="../assets/home-images/icons/vecteezy_hand-drawn-dotted-arrow-line-clip-art_22185823 2.png"
            alt=""
          />
        </div>

        <div class="wrapper">
          <div class="blue-circle">
            <img src="../assets/home-images/icons/calendar.png" />
          </div>
          <h3 class="mt-4 text-[16px] font-medium">Choose day and Time</h3>
          <p class="text-gray-500 text-[12px]">
            Select your preferred pick-up and drop-off dates and times, let's find
            your best availability.
          </p>
        </div>
        <div class="w-1/5 ps-2 hidden lg:block">
          <img
            src="../assets/home-images/icons/vecteezy_hand-drawn-dotted-arrow-line-clip-art_22185823 2.png"
            alt=""
          />
        </div>

        <div class="wrapper">
          <div class="blue-circle">
            <img src="../assets/home-images/icons/car.png" />
          </div>
          <h3 class="mt-4 text-[16px] font-medium">Choose a car</h3>
          <p class="text-gray-500 text-[12px]">
            Browse our fleet and find the perfect vehicle with your preferred
            with your preferred options.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ---------------------------------most popular car rentals-------------------------------------------------- -->
  <section class="bg-bg_color pt-0 pb-24 my-0 text-center">
    <div class="mx-4 md:mx-20">
      <h2 class="text-[36px] font-medium">Most popular car rentals</h2>
      <p class="w-75% text-[16px]">
        Renting a car with us is a breeze! Simply browse our extensive fleet to
        find the perfect vehicle for your needs.
      </p>
      <!-- <div class="flex justify-end my-3">
        <button class="rounded-md p-3 mx-1 bg-black" id="slide-next">
          <img src="../assets/home-images/icons/arrow-right.png" alt="" />
        </button>
        <button class="rounded-md p-3 mx-1 bg-black" id="slide-prev">
          <img src="../assets/home-images/icons/arrow-left.png" alt="" />
        </button>
      </div> -->
      <div class="mt-5">
        <swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="{
            '640': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }"
          
          :modules="modules"
          class="mySwiper"
        >
        <swiper-slide v-for="car in cars" :key="car.id" class="p-3">
                <CarCard :car="car"/>
        </swiper-slide>
                <swiper-slide v-for="car in cars" :key="car.id" class="p-3">
          <CarCard :car="car"/>
        </swiper-slide>
        <div class="swiper-pagination w-full"></div>
      </swiper>
     </div>
    </div>
  </section>

  <!-- ------------------------------rent your perfect car --------------------------------------------- -->

  <section class="bg-bg_color pt-0 pb-24 my-0">
    <div class="mx-4 md:mx-20">
      <div
        class="bg-white rounded-3xl custom-shadow ps-12 bg-[radial-gradient(circle_at_right,_rgba(219,234,254,1)_0%,_rgba(219,234,254,0)_70%)]"
      >
        <div
          class="lg:bg-rent-bg bg-none md:bg-right-bottom bg-no-repeat px-0 pt-12 pb-0 lg:pb-40"
        >
          <h1 class="text-6xl">Rent your perfect car with a big discount</h1>
          <button
            class="bg-primary_color hover:bg-primary_hover text-white px-12 py-2.5 my-8 rounded-3xl"
          >
            Rent now
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- ---------------------------------why choose us--------------------------- -->

  <section class="bg-bg_color pt-0 pb-24 my-0">
    <div class="mx-4 md:mx-20">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2">
          <h1 class="text-4xl">Rent your perfect car with a big discount</h1>
          <img src="../assets/home-images/whyus.png" alt="" />
        </div>

        <div class="flex w-full lg:w-1/2 flex-wrap">
          <div class="w-1/2 p-1">
            <div
              class="py-6 px-4 bg-white hover:bg-blue-50 rounded-2xl custom-shadow"
            >
              <h3 class="text-[24px] font-medium mb-2">Unmtched Selection</h3>
              <p class="text-gray-500 text-[12px]">
                With a vast fleet of vehicles, we offer the perfect car for
                every preference.
              </p>
            </div>
          </div>

          <div class="w-1/2 p-1">
            <div
              class="py-6 px-4 bg-white hover:bg-blue-50 rounded-2xl custom-shadow"
            >
              <h3 class="text-[24px] font-medium mb-2">Competitive Pricing</h3>
              <p class="text-gray-500 text-[12px]">
                Enjoy affordable rental prices without compromising on quality
                or service.
              </p>
            </div>
          </div>

          <div class="w-1/2 p-1">
            <div
              class="py-6 px-4 bg-white hover:bg-blue-50 rounded-2xl custom-shadow"
            >
              <h3 class="text-[24px] font-medium mb-2">Convenient Locations</h3>
              <p class="text-gray-500 text-[12px]">
                We have convenient pickup and drop-off locations to suit your
                travel needs.
              </p>
            </div>
          </div>

          <div class="w-1/2 p-1">
            <div
              class="py-6 px-4 bg-white hover:bg-blue-50 rounded-2xl custom-shadow"
            >
              <h3 class="text-[22px] font-medium mb-2">
                Flexible Rental Options
              </h3>
              <p class="text-gray-500 text-[12px]">
                Need a car for a few hours, a day, or longer, we offer flexible
                rental options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import SearchCard from "../components/SearchCard.vue";
import CarCard from "../components/CarCard.vue";

export default {
  components: { SearchCard, CarCard },
  name: "HomePage",
  data() {
    return {
      cars: [],
    };
  },
  created() {
    axios
      .get("https://carrento-9ea05-default-rtdb.firebaseio.com/cars.json")
      .then((response) => {
        this.cars = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
