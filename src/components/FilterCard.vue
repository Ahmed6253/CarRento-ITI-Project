<template>
  <div class="col-span-1 bg-white rounded-3xl custom-shadow h-fit">
    <div class="flex justify-between p-6">
      <h3 class="text-primary_color font-semibold">Filter</h3>
      <button class="text-Paragraph_color cursor-pointer">Clear all</button>
    </div>
    <hr class="border-[1px] -mt-1" />

    <!-- ----------------------------------price------------------------------- -->
    <div class="p-6">
      <div class="mb-4">
        <h3 class="text-primary_color font-semibold mb-2">Price</h3>
        <label class="mr-4">
          <input type="radio" id="lowToHigh" value="lowToHigh" name="price-range" class="accent-primary_color" v-model="priceFilter">
        </label>
        <label class="text-Paragraph_color" for="lowToHigh">Low to High</label><br />
        <label class="mr-4">
          <input type="radio" id="highToLow" value="highToLow" name="price-range" class="accent-primary_color" v-model="priceFilter"/>
        </label>
        <label class="text-Paragraph_color" for="highToLow">High to Low</label><br />
      </div>

<!-- ----------------------------------------car type-------------------------------------------------- -->
      <div class="mb-4">
        <h3 class="text-primary_color font-semibold mb-2">Car Type</h3>
        <label class="mr-4">
          <input type="checkbox" id="sedan" value="sedan" />
        </label>
        <label class="text-Paragraph_color" for="sedan">Sedan</label><br />
        <label class="mr-4">
          <input type="checkbox" id="suv" value="suv" />
        </label>
        <label class="text-Paragraph_color" for="suv">SUV</label><br />
        <label class="mr-4">
          <input
            type="checkbox"
            class="input"
            id="hatchback"
            value="hatchback"
          />
        </label>
        <label class="text-Paragraph_color" for="hatchback">Hatchback</label
        ><br />
        <label class="mr-4">
          <input
            type="checkbox"
            class="input"
            id="crossover"
            value="crossover"
          />
        </label>
        <label class="text-Paragraph_color" for="crossover">Crossover</label
        ><br />
        <label class="mr-4">
          <input type="checkbox" id="coupe" value="coupe" />
        </label>
        <label class="text-Paragraph_color" for="coupe">Coupe</label><br />
        <label class="mr-4">
          <input type="checkbox" id="coupe" value="coupe" />
        </label>
        <label class="text-Paragraph_color" for="coupe">Convertible</label><br />
        <label class="mr-4">
          <input type="checkbox" id="coupe" value="coupe" />
        </label>
        <label class="text-Paragraph_color" for="coupe">Truck</label><br />
        <label class="mr-4">
          <input type="checkbox" id="coupe" value="coupe" />
        </label>
        <label class="text-Paragraph_color" for="coupe">Van</label><br />
      </div>

      <!--  ----------------------------------------brands------------------------------------------ -->
      <div class="mb-4">
        <h3 class="text-primary_color font-semibold mb-2">Brands</h3>
        <label class="mr-4">
          <input type="checkbox" class="input" id="toyota" value="toyota" />
        </label>
        <label class="text-Paragraph_color" for="toyota">Toyota</label><br />
        <label class="mr-4">
          <input type="checkbox" class="input" id="nissan" value="nissan" />
        </label>
        <label class="text-Paragraph_color" for="nissan">Nissan</label><br />
        <label class="mr-4">
          <input type="checkbox" class="input" id="mercedes" value="mercedes" />
        </label>
        <label class="text-Paragraph_color" for="mercedes">Mercedes</label
        ><br />
        <label class="mr-4">
          <input type="checkbox" class="input" id="bmw" value="bmw" />
        </label>
        <label class="text-Paragraph_color" for="bmw">BMW</label><br />
        <label class="mr-4">
          <input type="checkbox" class="input" id="hyundai" value="hyundai" />
        </label>
        <label class="text-Paragraph_color" for="hyundai">Hyundai</label><br />
        <label class="mr-4">
          <input type="checkbox" class="input" id="kia" value="kia" />
        </label>
        <label class="text-Paragraph_color" for="kia">Kia</label><br />
        <label class="mr-4">
          <input type="checkbox" class="input" id="audi" value="audi" />
        </label>
        <label class="text-Paragraph_color" for="audi">Audi</label><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterCard",

  data(){

  }
};
</script>

<style>

</style>
