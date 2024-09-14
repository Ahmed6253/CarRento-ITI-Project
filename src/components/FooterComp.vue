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
            Stay informed with our exclusive deals, latest car models, and
            special promotions tailored just for you. Subscribe now!
          </p>
        </div>
        <div
          class="gap-4 flex flex-col sm:flex-row pt-3 md:pt-0 w-full md:w-auto"
        >
          <input
            type="text"
            placeholder="Enter your email"
            class="w-full md:w-72 bg-primary_color h-12 rounded-lg px-4 border border-white"
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
            <LogoSVG :color="'white'"></LogoSVG>
          </a>
          <p class="text-xs w-full md:w-5/12">
            Reliable car rentals, offering comfort and style for every journey
            you take.
          </p>
          <div class="flex gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/youtube">
                <g id="youtube">
                  <path
                    id="Vector"
                    d="M17 20H7C4 20 2 18 2 15V9C2 6 4 4 7 4H17C20 4 22 6 22 9V15C22 18 20 20 17 20Z"
                    class="stroke-white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M11.4001 9.50006L13.9001 11.0001C14.8001 11.6001 14.8001 12.5001 13.9001 13.1001L11.4001 14.6001C10.4001 15.2001 9.6001 14.7001 9.6001 13.6001V10.6001C9.6001 9.30006 10.4001 8.90006 11.4001 9.50006Z"
                    class="stroke-white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/instagram">
                <g id="instagram">
                  <path
                    id="Vector"
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    class="stroke-white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                    class="stroke-white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M17.6361 7H17.6477"
                    class="stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/facebook">
                <g id="facebook">
                  <path
                    id="Vector"
                    d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z"
                    class="stroke-white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    id="Vector_2"
                    d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
                    class="stroke-white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
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
              ><svg
                class="mr-2"
                width="20"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="vuesax/linear/call">
                  <g id="call">
                    <g id="call_2">
                      <path
                        id="Vector"
                        d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                        class="stroke-white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                      />
                    </g>
                  </g>
                </g></svg
              >+07757998578</span
            >
          </p>
          <p class="text-xs">
            <a href="mailto:inquire@carrento.com" class="flex"
              ><svg
                class="mr-2"
                width="20"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="vuesax/linear/sms">
                  <g id="sms">
                    <path
                      id="Vector"
                      d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                      class="stroke-white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                      class="stroke-white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g></svg
              >inquire@carrento.com</a
            >
          </p>
          <p class="text-xs">
            <a
              class="flex"
              href="https://maps.app.goo.gl/xENjCAT8guw1yiYu6"
              target="”_blank”"
              ><svg
                width="20"
                class="mr-2"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="vuesax/linear/location">
                  <g id="location">
                    <path
                      id="Vector"
                      d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                      class="stroke-white"
                      stroke-width="1.5"
                    />
                    <path
                      id="Vector_2"
                      d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                      class="stroke-white"
                      stroke-width="1.5"
                    />
                  </g>
                </g></svg
              >123 inquire carrento com</a
            >
          </p>
        </div>
      </div>
      <div class="flex gap-2 flex-col md:flex-row w-full justify-center py-4">
        <p class="flex">Copyright</p>
        <span class="text-3xl">&#174;</span>

        <p>2024 Car Rento. All Rights Reserved</p>
      </div>
    </div>
  </div>
  <!-- footer end  -->
</template>

<script>
import LogoSVG from "../components/LogoSVG.vue";
export default {
  name: "FooterComp",
  components: { LogoSVG },
};
</script>

<style lang="scss" scoped></style>
