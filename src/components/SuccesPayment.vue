<template>
  <div v-if="isOpen">
    <div
      class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="custom-shadow m-4 rounded-2xl px-5 md:px-0 mx-auto w-[50%] max-h-screen bg-white"
      >
        <img src="../assets/successPayment.png" class="mx-auto my-10" />
        <h1 class="md:text-2xl text:xl text-primary_color font-medium text-center mb-2">
          congratulation
        </h1>
        <p class="md:text-2xl text:xl text-Paragraph_color font-medium text-center mb-8">
          Your request is completed
        </p>
        <div class="flex justify-center mb-10">
          <button
            class="bg-primary_color text-white w-10/12 mx-auto p-3 rounded-lg hover:bg-primary_hover"
            @click="close()"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.isOpen = false;
      window.scrollTo({ top: 1500, behavior: "smooth" });
    },
  },
  name: "SuccesPayment",
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>

<style scoped></style>
