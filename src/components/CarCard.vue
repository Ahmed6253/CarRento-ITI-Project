<template>
  <div
    class="lg:max-w-[308px] max-w-[85%] rounded-3xl custom-shadow bg-white py-6 px-4 flex flex-col justify-between"
  >
    <div class="rating flex justify-end gap-2">
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
        <path
          class="fill-Paragraph_color"
          d="M8.51948 1.625C9.1214 1.625 10.0427 4.16625 10.4636 5.43013C10.6014 5.8437 10.9837 6.13054 11.4192 6.14904C12.7373 6.20505 15.375 6.39722 15.375 7.0384C15.375 7.66696 13.5161 9.17543 12.5322 9.92976C12.1816 10.1986 12.0365 10.6604 12.1687 11.082C12.5631 12.34 13.2755 14.8755 12.7573 15.3009C12.2506 15.717 10.2147 14.2326 9.15246 13.4009C8.77021 13.1016 8.22949 13.1012 7.84719 13.4004C6.78473 14.2321 4.75246 15.717 4.28166 15.3009C3.79912 14.8745 4.47615 12.3275 4.84741 11.0727C4.97086 10.6555 4.82425 10.2029 4.47885 9.93826C3.49798 9.18681 1.625 7.66933 1.625 7.0384C1.625 6.3962 4.2711 6.20444 5.5871 6.14878C6.0197 6.13048 6.3998 5.84769 6.53973 5.43793C6.97041 4.17673 7.91633 1.625 8.51948 1.625Z"
          stroke="#6B7280"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>

      <p class="text-Paragraph_color font-medium text-[12px]">4.8</p>
    </div>
    <img src="../assets/car.png" />
    <h3 class="mt-4 text-[18px] font-medium text-start pb-0.5">
      Mercedes-Benz AMG
    </h3>
    <p class="text-Paragraph_color text-[12px] text-start pb-2">
      {{ car.description }}
    </p>

    <div
      class="flex justify-between flex-wrap pb-4 border-b-[1px] border-gray-300 gap-2 w-full"
    >
      <span
        v-for="(prop, index) in car.properties"
        :key="index"
        class="flex gap-1 text-[11px] text-center rounded-md w-fit px-1"
      >
        <img :src="getImagePath(prop)" alt="" />
        <p class="mt-0.5">{{ prop }}</p></span
      >
    </div>

    <div class="flex text-[16px] py-3 justify-between">
      <span>Price</span>
      <span>{{ car.price }} LE<span class="text-gray-500">/day</span></span>
    </div>

    <button
      @click="$router.push(`/cars/${car.id}`)"
      class="bg-primary_color hover:bg-primary_hover text-white w-full py-2.5 rounded-3xl"
    >
      Rent now
    </button>
  </div>
</template>

<script>
export default {
  name: "CarCard",
  props: ["car", "carKey"],
  methods: {
    getImagePath(prop) {
      try {
        return require(`../assets/home-images/icons/${prop}.svg`);
      } catch (e) {
        console.error(`Image for ${prop} not found.`);
        return ""; // Return a placeholder or empty string if image not found
      }
    },
  },
};
</script>
