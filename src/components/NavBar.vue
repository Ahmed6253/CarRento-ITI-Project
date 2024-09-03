<template>
   <!-- navbar start -->
  <div class="mx-4 md:mx-20">
    <nav class=" border-gray-200">
      <div
        class=" dark:bg-gray-900 bg-white py-4 md:py-0 md:h-20 flex flex-wrap px-8 items-center justify-between rounded-lg md:rounded-full shadow"
      >
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../imagesNavfoot/logo.png" class="h-8" alt="Flowbite Logo" />
        </a>
        <div
          class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3"
        >
          <!-- login button -->
          <button
            type="button"
            class="px-8 py-3 bg-primary_color hidden lg:block text-white rounded-full"
          >
            login
          </button>
          <!-- user picture  -->
          <button
            type="button"
            class="bg-gray-800 hidden md:block rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <img
              class="rounded-full"
              src="../imagesNavfoot/User.png"
              alt="user photo"
            />
          </button>
          <!-- Dropdown menu -->
          <button
            @click="showMenu = !showMenu"
            data-collapse-toggle="navbar-user"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <img src="../imagesNavfoot/menu.png" alt="" />
          </button>
        </div>
        <div
          class="items-center justify-between w-full md:flex md:w-auto md:order-1"
          :class="showMenu ? 'block' : 'hidden'"
          id="navbar-user"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white bg-primary_color rounded md:bg-transparent md:text-primary_color md:border-b-2 md:border-primary_color md:p-0 md:rounded-none md:px-8 md:py-7 box-border"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-gray-300 md:hover:text-white md:px-8 md:py-7"
                >Cars</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-gray-300 md:hover:text-white md:px-8 md:py-7"
                >About</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-gray-300 md:hidden md:hover:text-white md:px-8 md:py-8"
                >Login</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-gray-300 md:hidden md:hover:text-white md:px-8 md:py-8"
                >Profile</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <!-- navbar end -->
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      showMenu: false,

    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
