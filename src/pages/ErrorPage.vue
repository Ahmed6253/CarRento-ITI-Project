<template>
  <div
    class="flex justify-center items-center text-center w-full flex-col py-40 gap-6"
  >
    <img class="w-[200px] sm:w-[300px]" src="../assets/error.png" alt="error" />
    <h1 class="md:text-3xl text-lg text-primary_color m-auto font-medium">
      {{ $t("error.page") }}
      <span class="text-red font-semibold">{{ $t("error.exist") }}</span>
      {{ $t("error.you") }}
      <span class="text-warning font-semibold">
        {{ $t("error.permission") }}</span
      >!
    </h1>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style lang="scss" scoped></style>
