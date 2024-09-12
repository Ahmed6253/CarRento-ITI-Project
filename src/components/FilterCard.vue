<template>
  <div class="col-span-1 bg-white rounded-3xl custom-shadow h-fit">
    <div class="flex justify-between p-6">
      <h3 class="text-primary_color font-semibold">Filter</h3>
      <button @click="applyFilters" class="cursor-pointer text-green">
        Apply Filters
      </button>
      <button class="text-warning_hover cursor-pointer" @click="clearFilters">Clear all</button>
    </div>
    <hr class="border-[1px] -mt-1" />

    <div class="p-6">
    <!-- ----------------------------------------car price--------------------------------- -->
      <!-- <div class="mb-4">
        <h3 class="text-primary_color font-semibold mb-2">Price</h3>
        <label class="mr-4">
          <input type="radio" id="lowToHigh" value="lowToHigh" name="price-range" class="accent-primary_color" v-model="priceFilter">
        </label>
        <label class="text-Paragraph_color" for="lowToHigh">Low to High</label><br />
        <label class="mr-4">
          <input type="radio" id="highToLow" value="highToLow" name="price-range" class="accent-primary_color" v-model="priceFilter"/>
        </label>
        <label class="text-Paragraph_color" for="highToLow">High to Low</label><br />
      </div> -->

    <!-- ----------------------------------car type------------------------------- -->
      <div class="mb-4">
        <h3 class="text-primary_color font-semibold mb-2">Car Type</h3>
        
        <label class="flex items-center mb-2">
          <input type="checkbox" id="sedan" value="sedan" class="mr-2 accent-primary_color" v-model="selectedCarTypes" @change="logValue"/>
          <span class="text-Paragraph_color">Sedan</span>
        </label>

        <label class="flex items-center mb-2">
          <input type="checkbox" id="suv" value="suv" class="mr-2 accent-primary_color" v-model="selectedCarTypes" @change="logValue"/>
          <span class="text-Paragraph_color">SUV</span>
        </label>

        <label class="flex items-center mb-2">
          <input type="checkbox" id="hatchback" value="hatchback" class="mr-2 accent-primary_color" v-model="selectedCarTypes" @change="logValue"/>
          <span class="text-Paragraph_color">Hatchback</span>
        </label>

        <label class="flex items-center mb-2">
          <input type="checkbox" id="crossover" value="crossover" class="mr-2 accent-primary_color" v-model="selectedCarTypes" @change="logValue"/>
          <span class="text-Paragraph_color">Crossover</span>
        </label>

        <label class="flex items-center mb-2">
          <input type="checkbox" id="coupe" value="coupe" class="mr-2 accent-primary_color" v-model="selectedCarTypes" @change="logValue"/>
          <span class="text-Paragraph_color">Coupe</span>
        </label>

        <label class="flex items-center mb-2">
          <input type="checkbox" id="convertible" value="convertible" class="mr-2 accent-primary_color" v-model="selectedCarTypes" @change="logValue"/>
          <span class="text-Paragraph_color">Convertible</span>
        </label>

        <label class="flex items-center mb-2">
          <input type="checkbox" id="truck" value="truck" class="mr-2 accent-primary_color" v-model="selectedCarTypes" @change="logValue"/>
          <span class="text-Paragraph_color">Truck</span>
        </label>

        <label class="flex items-center mb-2">
          <input type="checkbox" id="van" value="van" class="mr-2 accent-primary_color" v-model="selectedCarTypes" @change="logValue"/>
          <span class="text-Paragraph_color">Van</span>
        </label>
      </div>

      <!--  ----------------------------------------brands------------------------------------------ -->
      <div class="mb-4">
        <h3 class="text-primary_color font-semibold mb-2">Brands</h3>
        
        <label class="flex items-center mb-2">
          <input type="checkbox" id="toyota" value="toyota" class="mr-2 accent-primary_color" v-model="selectedBrands" @change="logValue"/>
          <span class="text-Paragraph_color">Toyota</span>
        </label>

        <label class="flex items-center mb-2">
          <input type="checkbox" id="nissan" value="nissan" class="mr-2 accent-primary_color" v-model="selectedBrands" @change="logValue"/>
          <span class="text-Paragraph_color">Nissan</span>
        </label>

        <label class="flex items-center mb-2">
          <input type="checkbox" id="mercedes" value="mercedes" class="mr-2 accent-primary_color" v-model="selectedBrands" @change="logValue"/>
          <span class="text-Paragraph_color">Mercedes</span>
        </label>

        <label class="flex items-center mb-2">
          <input type="checkbox" id="bmw" value="bmw" class="mr-2 accent-primary_color" v-model="selectedBrands" @change="logValue"/>
          <span class="text-Paragraph_color">BMW</span>
        </label>

        <label class="flex items-center mb-2">
          <input type="checkbox" id="hyundai" value="hyundai" class="mr-2 accent-primary_color" v-model="selectedBrands" @change="logValue"/>
          <span class="text-Paragraph_color">Hyundai</span>
        </label>

        <label class="flex items-center mb-2">
          <input type="checkbox" id="kia" value="kia" class="mr-2 accent-primary_color" v-model="selectedBrands" @change="logValue"/>
          <span class="text-Paragraph_color">Kia</span>
        </label>

        <label class="flex items-center mb-2">
          <input type="checkbox" id="audi" value="audi" class="mr-2 accent-primary_color" v-model="selectedBrands" @change="logValue"/>
          <span class="text-Paragraph_color">Audi</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterCard",

  data(){
    return{
    filtersArray: [],

    selectedCarTypes: [],
    selectedBrands: [],
    }
  },

  methods:{

    // Apply filters and send the selected car types and brands to Vuex store
    applyFilters() {
      // Dispatch both car types and brands to Vuex store separately
      this.$store.dispatch("setCarTypes", this.selectedCarTypes);
      this.$store.dispatch("setBrands", this.selectedBrands);

      console.log("Car Types:", this.selectedCarTypes);
      console.log("Brands:", this.selectedBrands);
      this.$emit("apply-filters");
    },

// Clear filters and reset arrays
clearFilters() {
      // Reset both selectedCarTypes and selectedBrands
      this.selectedCarTypes = [];
      this.selectedBrands = [];

      console.log("Cleared filters");

      // Dispatch the clear filters action for both car types and brands in the store
      this.$store.dispatch("clearCarTypes");
      this.$store.dispatch("clearBrands");
      this.$emit("clear-filters");

    },
  }
};
</script>

<style>

</style>
