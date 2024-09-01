<template>
  <!-- footer start -->
  <div class="bg-primary_color text-white">
    <div class="mx-4 md:mx-20">
      <!-- section one  -->
      <div
        class="flex flex-col md:flex-row lg:justify-between items-center border-b-[1px] py-6 border-white"
      >
        <div class="w-full md:w-4/12">
          <p class="text-base font-semibold">
            Get the latest offers and updates
          </p>
          <p class="text-xs pt-1 md:pt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet
            nisi at elit venenatis fringilla. Cras ut semper quam.
          </p>
        </div>
        <div class="gap-4 flex flex-col sm:flex-row pt-3 md:pt-0 w-full sm:w-4/12">
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
          <img
            class="w-2/12"
            src="../imagesNavfoot/logo2.png"
            alt="logo car rento"
          />
          <p class="text-xs w-full md:w-5/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed laoreet
            lorem ibsum.
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
          <p class="text-xs">Pricing</p>
          <p class="text-xs">Insights</p>
          <p class="text-xs">Plans</p>
        </div>
        <!-- third colum -->
        <div class="flex flex-col gap-y-4 w-full md:w-2/12 py-3 md:py-0">
          <p class="text-base font-semibold">Company</p>
          <p class="text-xs">About Us</p>
          <p class="text-xs">Blog</p>
          <p class="text-xs">FAQ</p>
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
            <span class="flex"
              ><img
                class="w-4 h-4 mr-2"
                src="../imagesNavfoot/sms.png"
                alt=""
              />inquire@carrento.com</span
            >
          </p>
          <p class="text-xs">
            <span class="flex"
              ><img
                class="w-4 h-4 mr-2"
                src="../imagesNavfoot/location.png"
                alt=""
              />123 inquire carrento com</span
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
