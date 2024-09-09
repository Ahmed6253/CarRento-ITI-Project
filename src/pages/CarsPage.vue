<template>
  <div class="lg:px-[80px] px-[20px] pt-32 pb-14">
    <SearchCard />
    <section class="grid gap-4 grid-cols-4 text-poppins">
      <div class="lg:block hidden">
        <FilterCard />
      </div>
      <div class="lg:col-span-3 col-span-4">
        <div class="relative">
          <input
            type="text"
            placeholder="Search"
            class="p-5 rounded-2xl w-full custom-shadow"
          />
          <img
            src="../assets/search-normal.svg"
            alt=""
            class="absolute right-5 top-5 w-5 cursor-pointer"
          />
        </div>
        <div class="flex items-center gap-6 relative">
          <img
            @click="filter = !filter"
            class="lg:hidden block"
            src="../assets/filter-add.svg"
            alt=""
          />
          <h3 class="text-primary_color my-6">
            <span @click="postCar()" class="font-semibold mr-1">15</span>cars in
            Cairo
          </h3>
          <div class="absolute top-3/4 left-0" v-if="filter">
            <FilterCard />
          </div>
        </div>

        <div
          v-if="cars"
          class="flex flex-wrap lg:justify-normal justify-center gap-4 mt-2"
        >
          <CarCard v-for="car in cars" :key="car.id" :car="car" />
        </div>

        <div v-else>Loading...</div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import FilterCard from "@/components/FilterCard.vue";
import SearchCard from "@/components/SearchCard.vue";
import CarCard from "@/components/CarCard.vue";
export default {
  components: { SearchCard, FilterCard, CarCard },
  name: "CarsPage",
  created() {
    axios
      .get("https://carrento-9ea05-default-rtdb.firebaseio.com/cars.json")
      .then((response) => {
        this.cars = response.data;
        this.carskeys = Object.keys(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  data() {
    return {
      cars: "",
      carskeys: ``,
      filter: false,
    };
  },
  methods: {
    
  },
};
</script>
