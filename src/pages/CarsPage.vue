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
            v-model="searchInput"
          />
          <img
            src="../assets/search-normal.svg"
            alt=""
            class="absolute right-5 top-5 w-5 cursor-pointer"
            @click="search"
          />
          <div v-if="searchFail" class="text-red mt-2 text-center w-full">
            The model you're searching for doesn't seem to be available, browse through similar models
          </div>
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

              <!-- Filtered Cars Result -->
        <div v-if="filtersCarFlag" class="flex flex-wrap lg:justify-normal justify-center gap-4 mt-2">
          <CarCard v-for="car in filtersCardResult" :key="car.id" :car="car" />
        </div>

        <!-- Default Cars List -->
        <div
          v-else-if="cars && !searchFlag"
          class="flex flex-wrap lg:justify-normal justify-center gap-4 mt-2"
        >
          <CarCard v-for="car in cars" :key="car.id" :car="car" />
        </div>

           <!-- Search Results -->
        <div
          v-else-if="cars && searchFlag"
          class="flex flex-wrap lg:justify-normal justify-center gap-4 mt-2"
        >
          <CarCard v-for="car in searchOutput" :key="car.id" :car="car" />
        </div>

        <div v-else>Loading...</div>
      </div>
    </section>
  </div>

</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

import FilterCard from "@/components/FilterCard.vue";
import SearchCard from "@/components/SearchCard.vue";
import CarCard from "@/components/CarCard.vue";

export default {
  components: { SearchCard, FilterCard, CarCard },
  name: "CarsPage",
  data() {
    return {
      cars: {},               // Initialize cars as an empty object
      carskeys: [],           // carskeys as an empty array
      filter: false,
      orderLocation: "",
      orderPickupDate: "",
      orderDropoffDate: "",
      searchInput: "",
      searchOutput: [],
      searchFlag: false,
      searchFail: false,

      filtersCardResult : [],
      filtersCarFlag : false,
    };
  },
  created() {
    axios
      .get("https://carrento-9ea05-default-rtdb.firebaseio.com/cars.json")
      .then((response) => {
        this.cars = response.data;
        this.carskeys = Object.keys(response.data);  // Get car keys
      })
      .catch((e) => {
        console.log(e);
      });

    // Get search data from localStorage for filtering
    // this.cardSearchFilter();
  },

  //filters logic start
  computed:{
    ...mapState(["selectedCarTypes", "selectedBrands"]),
  },

  methods: {
    // Fetch stored search data (like location) from localStorage
    cardSearchFilter() {
      this.orderLocation = localStorage.getItem("orderLocation");
      this.orderPickupDate = localStorage.getItem("pickupDate");
      this.orderDropoffDate = localStorage.getItem("dropoffDate");
    },


    filtersCardsResult() {
      this.filtersCardResult = Object.values(this.cars).filter((car) => {
        // Check if car matches selected car types
        const matchesCarType = this.selectedCarTypes.length === 0 || this.selectedCarTypes.includes(car.type);
        
        // Check if car matches selected brands
        const matchesBrand = this.selectedBrands.length === 0 || this.selectedBrands.includes(car.brand);

        // Return cars that match both selected types and brands
        return matchesCarType && matchesBrand;
      });

      // Set flag to true to display filtered results
      this.filtersCarFlag = true;
    },

    // Search cars based on user input
    search() {
      this.searchOutput = []; // Clear previous search results

      // Iterate through cars (since cars is an object, use Object.values())
      for (let car of Object.values(this.cars)) {
        if (car.name.toLowerCase().includes(this.searchInput.toLowerCase())) {
          this.searchOutput.push(car);
        }
      }

      // Log the search output or display a message if no matches
      if (this.searchOutput.length > 0) {
        console.log(this.searchOutput);
        this.searchFlag = true;
      } else {
        this.searchFlag = false;
        this.searchFail = true;
        console.log(
          "The model you're searching for doesn't seem to be available, browse through similar models"
        );
      }
    },
  },
};

</script>
