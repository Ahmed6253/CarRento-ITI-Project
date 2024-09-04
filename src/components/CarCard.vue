<template>
          <div class="w-[308px] rounded-3xl custom-shadow bg-white py-6 px-4 hover:bg-blue-50">
            <div id="image-place"></div>
            <h3 class="mt-4 text-[16px] font-medium text-start pb-0.5">Mercedes-Benz AMG</h3>
            <p class="text-gray-500 text-[12px] text-start pb-2">In excellent condition with low mileage, comfortable seating, and a powerful engine.</p>
            
            <div class="flex pb-4 border-b-2 border-gray-300">
              <img src="../assets/home-images/icons/automatic.png" alt="automatic">
              <span class="text-[12px] ps-0.5 pe-4">Automatic</span>

              <img src="../assets/home-images/icons/electricity.png" alt="electric">
              <span class="text-[12px] ps-0.5 pe-4">Electic</span>

              <img src="../assets/home-images/icons/Air.png" alt="Air conditioned">
              <span class="text-[12px] ps-0.5 pe-4">Air Conditioner</span>
            </div>

            <div class="flex text-[16px] py-3 justify-between">
              <span>Price</span>
              <span>1449 LE<span class="text-gray-500">/day</span></span>
            </div>
            <button class="bg-primary_color hover:bg-primary_hover text-white w-full py-2.5 rounded-3xl">Rent now</button>
          </div>
</template>

<script>
export default {
  name: "CarCard",
};
</script>
