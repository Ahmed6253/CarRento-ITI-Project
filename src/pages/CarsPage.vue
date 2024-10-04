<template>
  <div class="lg:px-[80px] px-[20px] pt-32 pb-14 bg-bg_color">
    <SearchCard @search-location="cardSearchFilter" />

    <section class="grid gap-4 grid-cols-4 text-poppins">
      <div class="lg:block hidden">
        <FilterCard
          @apply-filters="filtersCardsResult"
          @clear-filters="clearFiltersCardResult"
        />
      </div>
      <div class="lg:col-span-3 col-span-4">
        <div class="relative">
          <input
            type="text"
            placeholder="Search"
            class="p-5 rounded-2xl w-full custom-shadow"
            v-model="searchInput"
            @input="search"
          />
          <img
            src="../assets/search-normal.svg"
            alt=""
            :class="
              this.$i18n.locale == 'Ar'
                ? 'absolute left-5 top-5 w-5 cursor-pointer'
                : 'absolute right-5 top-5 w-5 cursor-pointer'
            "
          />
          <div v-if="searchFail" class="text-red mt-2 text-center w-full">
            The model you're searching for doesn't seem to be available, browse
            through similar models
          </div>
        </div>
        <div class="flex items-center gap-6 relative">
          <img
            @click="filter = !filter"
            class="lg:hidden block"
            src="../assets/filter-add.svg"
            alt=""
          />

          <div class="absolute top-3/4 left-0" v-if="filter">
            <FilterCard />
          </div>
        </div>
        <!-- loading -->
        <div
          v-if="!fetchError && !cars"
          class="flex flex-wrap lg:justify-normal justify-center gap-4 mt-2"
        >
          <div
            class="w-[308px] h-[480px] animate-pulse rounded-3xl custom-shadow pt-10 bg-white py-6 px-4 flex flex-col justify-between hover:bg-card_hover hover:scale-105 transition-all"
          >
            <div
              class="w-full p-1 h-1/2 bg-Placeholder_color rounded-2xl"
            ></div>
            <div class="w-1/2 p-[6px] bg-Placeholder_color rounded-2xl"></div>
            <div class="w-full p-1 h-1 bg-Placeholder_color rounded-2xl"></div>
            <div class="w-full p-1 h-1 bg-Placeholder_color rounded-2xl"></div>
            <div class="w-full p-1 h-1 bg-Placeholder_color rounded-2xl"></div>
            <div class="w-full p-3 h-10 bg-Placeholder_color rounded-3xl"></div>
          </div>
          <div
            class="w-[308px] h-[480px] animate-pulse rounded-3xl custom-shadow pt-10 bg-white py-6 px-4 flex flex-col justify-between hover:bg-card_hover hover:scale-105 transition-all"
          >
            <div
              class="w-full p-1 h-1/2 bg-Placeholder_color rounded-2xl"
            ></div>
            <div class="w-1/2 p-[6px] bg-Placeholder_color rounded-2xl"></div>
            <div class="w-full p-1 h-1 bg-Placeholder_color rounded-2xl"></div>
            <div class="w-full p-1 h-1 bg-Placeholder_color rounded-2xl"></div>
            <div class="w-full p-1 h-1 bg-Placeholder_color rounded-2xl"></div>
            <div class="w-full p-3 h-10 bg-Placeholder_color rounded-3xl"></div>
          </div>
        </div>

        <!-- Filtered Cars Result -->
        <div
          v-if="filtersCarFlag && !searchFlag && !searchFail"
          class="flex flex-wrap lg:justify-normal justify-center gap-4 mt-2"
        >
          <CarCard
            v-for="car in filtersCardResult"
            :key="car.id"
            :car="car"
            :fullWidth="false"
          />
        </div>

        <!-- Search Card Results -->
        <div
          v-else-if="cardLocationFlag && !searchFlag && !searchFail"
          class="flex flex-wrap lg:justify-normal justify-center gap-4 mt-2"
        >
          <CarCard
            v-for="car in matchedLocation"
            :key="car.id"
            :car="car"
            :fullWidth="false"
          />
        </div>

        <!-- Default Cars List -->
        <div
          v-else-if="cars && !searchFlag && !searchFail"
          class="flex flex-wrap lg:justify-normal justify-center gap-4 mt-2"
        >
          <CarCard
            v-for="car in cars"
            :key="car.id"
            :car="car"
            :fullWidth="false"
          />
        </div>

        <!-- Search Results -->
        <div
          v-else-if="cars && searchFlag && !searchFail"
          class="flex flex-wrap lg:justify-normal justify-center gap-4 mt-2"
        >
          <CarCard
            v-for="car in searchOutput"
            :key="car.id"
            :car="car"
            :fullWidth="false"
          />
        </div>
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
      cars: "", // Initialize cars as an empty object
      carskeys: [], // carskeys as an empty array
      filter: false,
      orderLocation: "",
      orderPickupDate: "",
      orderDropoffDate: "",
      searchInput: "",
      searchOutput: [],
      searchFlag: false,
      searchFail: false,
      fetchError: false,

      location: "",
      cardLocationFlag: false,
      matchedLocation: [],

      filtersCardResult: [],
      filtersCarFlag: false,
    };
  },
  created() {
    axios
      .get("https://carrento-9ea05-default-rtdb.firebaseio.com/cars.json")
      .then((response) => {
        this.cars = response.data;
        this.carskeys = Object.keys(response.data); // Get car keys
      })
      .then(() => {
        this.location = sessionStorage.getItem("orderLocation");

        if (this.location) {
          this.matchedLocation = Object.values(this.cars).filter((car) => {
            return (
              car.location.toLowerCase() === this.location.toLocaleLowerCase()
            );
          });
          this.cardLocationFlag = true;
          return this.matchedLocation;
        }
      })
      .then(() => {})
      .catch((e) => {
        this.fetchError = e;
      });

    // Get search data from localStorage for filtering
    // this.cardSearchFilter();
  },
  beforeRouteLeave(to, from, next) {
    if (to.name !== "CarPage") {
      sessionStorage.removeItem("orderLocation");
      sessionStorage.removeItem("orderPickUp");
      sessionStorage.removeItem("orderDropOff");
      sessionStorage.removeItem("duration");
    }

    next();
  },

  //filters logic start
  computed: {
    ...mapState(["selectedCarTypes", "selectedBrands"]),
  },

  watch: {
    selectedCarTypes: function () {
      this.cardSearchFilter();
      this.filtersCardsResult();
    },
    selectedBrands: function () {
      this.cardSearchFilter();
      this.filtersCardsResult();
    },
  },

  methods: {
    // Fetch stored search data (like location) from localStorage
    cardSearchFilter() {
      this.clearFiltersCardResult();
      this.searchOutput = "";
      this.searchFlag = false;
      this.searchFail = false;
      this.filtersCardResult = [];
      this.filtersCarFlag = false;
      this.location = sessionStorage.getItem("orderLocation");

      if (this.location) {
        this.matchedLocation = Object.values(this.cars).filter((car) => {
          return (
            car.location.toLowerCase() === this.location.toLocaleLowerCase()
          );
        });
        if (this.filtersCarFlag) {
          this.filtersCardsResult();
        }

        if (this.searchFlag) {
          this.search();
        }

        this.cardLocationFlag = true;
        return this.matchedLocation;
      }
    },

    filtersCardsResult() {
      this.filtersCardResult = Object.values(
        (this.searchOutput.length > 0 && this.searchOutput) ||
          (this.matchedLocation.length > 0 && this.matchedLocation) ||
          this.cars
      ).filter((car) => {
        // Check if car matches selected car types
        const matchesCarType =
          this.selectedCarTypes.length === 0 ||
          this.selectedCarTypes
            .map((type) => type.toLowerCase())
            .includes(car.type.toLowerCase());

        // Convert both the car's brand and selected brands to lowercase for comparison
        const matchesBrand =
          this.selectedBrands.length === 0 ||
          this.selectedBrands
            .map((brand) => brand.toLowerCase())
            .includes(car.brand.toLowerCase());

        // Return cars that match both selected types and brands
        return matchesCarType && matchesBrand;
      });

      // Set flag to true to display filtered results
      this.filtersCarFlag = true;
    },

    clearFiltersCardResult() {
      this.filtersCardResult = [];
      this.filtersCarFlag = false;
    },

    // Search cars based on user input
    search() {
      this.searchOutput = []; // Clear previous search results

      // Iterate through cars (since cars is an object, use Object.values())
      for (let car of Object.values(
        (this.filtersCardResult.length > 0 && this.filtersCardResult) ||
          (this.matchedLocation.length > 0 && this.matchedLocation) ||
          this.cars
      )) {
        if (car.name.toLowerCase().includes(this.searchInput.toLowerCase())) {
          this.searchOutput.push(car);
        }
      }

      // Log the search output or display a message if no matches
      if (this.searchOutput.length > 0 || this.searchInput === "") {
        this.searchFlag = true;
        this.searchFail = false;
      } else {
        this.searchFlag = false;
        this.searchFail = true;
      }
    },
  },
};
</script>
