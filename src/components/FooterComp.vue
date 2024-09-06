<template>
  <!-- footer start -->
  <div class="bg-primary_color text-white">
    <div class="mx-4 md:mx-20">
      <!-- section one  -->
      <div
        class="flex justify-between flex-col md:flex-row items-center border-b-[1px] py-6 border-white"
      >
        <div class="w-full md:w-4/12">
          <p class="text-base font-semibold">
            Get the latest offers and updates
          </p>
          <p class="text-xs pt-1 md:pt-0">
            Stay informed with our exclusive deals, latest car models, and special promotions tailored just for you. Subscribe now!
          </p>
        </div>
        <div class="gap-4 flex flex-col sm:flex-row pt-3 md:pt-0 w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter your email"
            class="w-full md:w-72 bg-primary_color h-12 rounded-lg px-4 border border-border_color"
          />
          <button class="px-8 h-12 rounded-lg md bg-white text-primary_color">
            Subscribe
          </button>
        </div>
      </div>
      <!-- section two -->
      <div
        class="flex flex-col md:flex-row justify-between border-b-[1px] py-6 border-white"
      >
        <!-- first colum -->
        <div class="flex flex-col gap-y-4 w-full md:w-5/12 py-3 md:py-0">
          <a href="/">
            <img
            class="w-2/12"
            src="../imagesNavfoot/logo2.png"
            alt="logo car rento"
          />
          </a>
          <p class="text-xs w-full md:w-5/12">
            Reliable car rentals, offering comfort and style for every journey you take.
          </p>
          <div class="flex gap-3">
            <img src="../imagesNavfoot/facebook.png" alt="" />
            <img src="../imagesNavfoot/instagram.png" alt="" />
            <img src="../imagesNavfoot/youtube.png" alt="" />
          </div>
        </div>
        <!-- second colum -->
        <div class="flex flex-col gap-y-4 w-full md:w-2/12 py-3 md:py-0">
          <p class="text-base font-semibold">Support</p>
          <a href="/cars" class="text-xs">Pricing</a>
          <a href="/cars" class="text-xs">Insights</a>
          <a href="/cars" class="text-xs">Plans</a>
        </div>
        <!-- third colum -->
        <div class="flex flex-col gap-y-4 w-full md:w-2/12 py-3 md:py-0">
          <p class="text-base font-semibold">Company</p>
          <a href="/about" class="text-xs">About Us</a>
          <a href="/about" class="text-xs">Blog</a>
          <a href="/about" class="text-xs">FAQ</a>
        </div>
        <!-- fourth colum -->
        <div class="flex flex-col gap-y-4 w-full md:w-2/12 py-3 md:py-0">
          <p class="text-base font-semibold">Contact Us</p>
          <p class="text-xs">
            <span class="flex"
              ><img
                class="w-4 h-4 mr-2"
                src="../imagesNavfoot/call.png"
                alt=""
              />+07757998578</span
            >
          </p>
          <p class="text-xs">
            <a href="mailto:inquire@carrento.com" class="flex"
              ><img
                class="w-4 h-4 mr-2"
                src="../imagesNavfoot/sms.png"
                alt=""
              />inquire@carrento.com</a
            >
          </p>
          <p class="text-xs">
            <a class="flex" href="https://maps.app.goo.gl/xENjCAT8guw1yiYu6" target=”_blank”
              ><img
                class="w-4 h-4 mr-2"
                src="../imagesNavfoot/location.png"
                alt=""
              />123 inquire carrento com</a
            >
          </p>
        </div>
      </div>
      <div class="flex gap-2 flex-col md:flex-row w-full justify-center py-4">
        <p class="flex items-center gap-1">
          Copyright<span
            ><img src="../imagesNavfoot/copyright.png" alt=""
          /></span>
        </p>

        <p>2024 Car Rento. All Rights Reserved</p>
      </div>
    </div>
  </div>
  <!-- footer end  -->
</template>

<script>
export default {
  name: "FooterComp",
};
</script>

<style lang="scss" scoped></style>
