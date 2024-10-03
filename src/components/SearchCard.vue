<template>
  <section
    class="flex w-full justify-between gap-5 p-[45px] rounded-3xl my-5 custom-shadow bg-white flex-wrap"
  >
    <div class="flex flex-col md:w-64 w-full">
      <label for="pickup-location" class="label-style">{{ $t('searchCard.pickup_location') }}</label><br />
      <select
        class="input-style p-[11px]"
        id="pickup-location"
        v-model="location"
        @change="validateInputs"
      >
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
      <label class="label-style" for="pickup-date">{{ $t('searchCard.pickup_date') }}</label><br />
      <input
        type="date"
        id="pickup-date"
        class="input-style"
        v-model="pickupDate"
        @change="validateInputs"
      />
      <img
        src="../assets/calendar.svg"
        alt=""
        class="w-5 absolute right-4 top-12"
      />
    </div>
    <div class="flex flex-col md:w-64 w-full relative">
      <label class="label-style" for="dropoff-date">{{ $t('searchCard.dropoff_location') }}</label><br />
      <input
        type="date"
        id="dropoff-date"
        class="input-style"
        v-model="dropoffDate"
        @change="validateInputs"
      />
      <img
        src="../assets/calendar.svg"
        alt=""
        class="w-5 absolute right-4 top-12"
      />
    </div>

    <button
      class="bg-primary_color px-5 py-[11px] text-white rounded-lg self-end hover:bg-primary_hover md:w-auto w-full cursor-pointer"
      @click.prevent="submitSearch"
      :disabled="isDisabled"
    >
      {{ $t('searchCard.set_and_search') }}
    </button>

    <div v-if="errorMessage" class="text-red mt-2 text-center w-full">
      {{ errorMessage }}
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SearchCard",

  data() {
    return {
      pickupDate: "",
      dropoffDate: "",
      location: "",
      errorMessage: "",
      isDisabled: false,
    };
  },
  created() {
    const pickup = sessionStorage.getItem("orderPickUp");
    const dropoff = sessionStorage.getItem("orderDropOff");
    const location = sessionStorage.getItem("orderLocation");
    if (pickup && dropoff && location) {
      this.pickupDate = pickup;
      this.dropoffDate = dropoff;
      this.location = location;
    }
  },

  computed: {
    ...mapState(["allowRent"]),
  },

  watch: {
    allowRent: function () {
      console.log(this.allowRent);

      if (!this.allowRent) {
        this.errorMessage = this.$t('searchCard.error_location_date');
        this.isDisabled = true;
      }
    },
  },

  methods: {
    validateInputs() {
      this.errorMessage = "";
      this.isDisabled = false;

      // Validate that the pick-up date is not later than the drop-off date
      const pickup = new Date(this.pickupDate);
      const dropoff = new Date(this.dropoffDate);

      if (pickup >= dropoff) {
        this.errorMessage = this.$t('searchCard.error_pickup_dropoff');
        this.isDisabled = true;
        return;
      }
      if (pickup.getDate() < new Date().getDate()) {
        console.log(new Date().getDate(), pickup.getDate());

        this.errorMessage = this.$t('searchCard.error_pickup_past');
        this.isDisabled = true;
        return;
      } else {
        this.isDisabled = false;
        this.errorMessage = "";
      }
    },

    submitSearch() {
      if (!this.location || !this.pickupDate || !this.dropoffDate) {
        this.errorMessage = this.$t('searchCard.error_all_fields');
        this.isDisabled = true;
        return;
      } else {
        this.isDisabled = false;
        this.errorMessage = "";
      }
      if (!this.isDisabled){
        const currentPath = this.$route.path;
        if (currentPath === "/") {
          this.$router.push("/cars");
        }
        sessionStorage.setItem("orderLocation", this.location);
        sessionStorage.setItem("orderPickUp", this.pickupDate);
        sessionStorage.setItem("orderDropOff", this.dropoffDate);
        const duration =
          new Date(this.dropoffDate).getDate() -
          new Date(this.pickupDate).getDate();
        console.log(duration);
        sessionStorage.setItem("duration", duration);
        window.scrollTo({ top: 230, behavior: "smooth" });

        this.$emit("search-location", this.location);
      }
    },
  },
};
</script>

<style>
input[type="date"]::-webkit-calendar-picker-indicator {
  z-index: 99999;
  cursor: pointer;
  position: absolute;
  right: 15px;
  bottom: 10px;
  width: 20px;
  height: 20px;
  opacity: 0;
}

input[type="date"]::-webkit-datetime-edit {
  color: rgb(156 163 175);
}
</style>
