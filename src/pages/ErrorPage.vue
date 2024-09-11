<template>
  <div
    class="flex justify-center items-center text-center w-full flex-col py-40 gap-6"
  >
    <img class="w-[200px] sm:w-[300px]" src="../assets/error.png" alt="error" />
    <h1 class="md:text-3xl text-lg text-primary_color m-auto font-medium">
      This page <span class="text-red font-semibold">doesn't exist</span> or you
      <span class="text-warning font-semibold"> don't have permission</span>!
    </h1>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style lang="scss" scoped></style>
