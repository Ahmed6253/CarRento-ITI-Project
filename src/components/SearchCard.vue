<template>
  <section
    class="flex w-full justify-between gap-5 p-[45px] rounded-3xl my-5 custom-shadow bg-white flex-wrap"
  >
    <div class="flex flex-col md:w-64 w-full">
      <label for="pickup-location" class="label-style">Pick-up Location</label
      ><br />
      <select class="input-style p-[11px]" id="pickup-location">
        <option>Cairo</option>
        <option>Alexandria</option>
        <option>Giza</option>
        <option>Qalyubia</option>
        <option>Port Said</option>
        <option>Suez</option>
        <option>Gharbia</option>
        <option>Dakahlia</option>
        <option>Asyut</option>
        <option>Fayoum</option>
        <option>Sharqia</option>
        <option>Ismailia</option>
        <option>Aswan</option>
        <option>Beheira</option>
        <option>Minya</option>
        <option>Damietta</option>
        <option>Luxor</option>
        <option>Qena</option>
        <option>Beni Suef</option>
        <option>Sohag</option>
        <option>Monufia</option>
        <option>Red Sea</option>
        <option>Kafr el-Sheikh</option>
        <option>North Sinai</option>
        <option>Matruh</option>
        <option>New Valley</option>
        <option>South Sinai</option>
      </select>
    </div>
    <div class="flex flex-col relative md:w-64 w-full">
      <label class="label-style" for="pickup-date">Pick-up Date</label><br />
      <input type="date" id="pickup-date" class="input-style" />
      <img
        src=""
        alt=""
        class="w-5 absolute right-4 top-12"
      />
    </div>
    <div class="flex flex-col md:w-64 w-full relative">
      <label class="label-style" for="dropoff-date">Drop-off Date</label><br />
      <input type="date" id="dropoff-date" class="input-style" />
      <img
        src=""
        alt=""
        class="w-5 absolute right-4 top-12"
      />
    </div>
    <button
      class="bg-primary_color px-[56px] py-[11px] text-white rounded-lg self-end hover:bg-primary_hover md:w-auto w-full"
    >
      Search
    </button>
  </section>
</template>

<script>
export default {
  name: "SearchCard",
};
</script>

<style lang="scss" scoped></style>
