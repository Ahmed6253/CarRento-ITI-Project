<template>
            <div class="car-sum-comp custom-shadow flex lg:flex-col items-center">
            <section class="w-1/2 lg:w-full p-0">
             <img src="../assets/home-images/red-car.svg" alt="car image">
            </section>
            <section class="px-8 py-0">
              <h3 class="text-[25px] font-bold text-start pt-0 pb-6">
                Mercedes-Benz AMG
              </h3>

              <div class="flex justify-between mb-6">
                <section>
                  <p class="text-xl text-gray-900">Pick-up location</p>
                  <p class="text-gray-500 text-[16px] text-start">Cairo, Egypt</p>
                </section>
                <button class="w-6">
                  <img src="../assets/home-images/icons/edit.svg" alt="" class="w-full">
                </button>
              </div>

              <div class="flex justify-between mb-6">
                <section>
                  <p class="text-xl text-gray-900">Pick-up date</p>
                  <p class="text-gray-500 text-[16px] text-start">5/10/2024</p>
                </section>
                <button class="w-6">
                  <img src="../assets/home-images/icons/edit.svg" alt="" class="w-full">
                </button>
              </div>

              <div class="flex justify-between mb-6">
                <section>
                  <p class="text-xl text-gray-900">Drop-off date</p>
                  <p class="text-gray-500 text-[16px] text-start">Cairo, Egypt</p>
                </section>
                <button class="w-6">
                  <img src="../assets/home-images/icons/edit.svg" alt="" class="w-full">
                </button>
              </div>

              <div class="flex justify-between mb-6">
                <section>
                  <p class="text-xl text-gray-900">2 Infant child seets</p>
                  <p class="text-gray-500 text-[16px] text-start">1025 LE added</p>
                </section>
                <button class="w-6">
                  <img src="../assets/home-images/icons/edit.svg" alt="" class="w-full">
                </button>
              </div>

            </section>
          </div>
</template>


<script>
export default {
  name: "OrderDetailsCard"
};

</script>