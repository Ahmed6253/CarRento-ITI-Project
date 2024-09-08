<template>
  <div>
    <div class="inline-flex rounded-md shadow-sm" role="group">
      <button
        @click="showRenter"
        type="button"
        class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
      >
        Renter
      </button>

      <button
        @click="showOwner"
        type="button"
        class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
      >
        Owner
      </button>
    </div>
    <!-------------------------------------------------- renter -------------------------------------------------->
    <div id="Renter" class="Renter relative overflow-x-auto hidden">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-base text-gray-700 uppercase">
          <tr>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">email</th>
            <th scope="col" class="px-6 py-3">orders</th>
            <th scope="col" class="px-6 py-3">spent</th>
            <th scope="col" class="px-6 py-3">block</th>
          </tr>
        </thead>
        <tbody class="text-xs text-gray-500 font-thin capitalize">
          <tr>
            <th scope="col" class="px-6 py-3">abobakr</th>
            <th scope="col" class="px-6 py-3">abobakrsobhe@mail.com</th>
            <th scope="col" class="px-6 py-3">8</th>
            <th scope="col" class="px-6 py-3">22000</th>
            <th scope="col" class="px-6 py-3">
              <button
                class="bg-red w-full py-2.5 hover:bg-red_hover text-white rounded-lg"
              >
                Delete account
              </button>
            </th>
          </tr>
          <tr>
            <th scope="col" class="px-6 py-3">abobakr</th>
            <th scope="col" class="px-6 py-3">abobakrsobhe@mail.com</th>
            <th scope="col" class="px-6 py-3">8</th>
            <th scope="col" class="px-6 py-3">22000</th>
            <th scope="col" class="px-6 py-3">
              <button
                class="bg-red w-full py-2.5 hover:bg-red_hover text-white rounded-lg"
              >
                Delete account
              </button>
            </th>
          </tr>
          <tr>
            <th scope="col" class="px-6 py-3">abobakr</th>
            <th scope="col" class="px-6 py-3">abobakrsobhe@mail.com</th>
            <th scope="col" class="px-6 py-3">8</th>
            <th scope="col" class="px-6 py-3">22000</th>
            <th scope="col" class="px-6 py-3">
              <button
                class="bg-red w-full py-2.5 hover:bg-red_hover text-white rounded-lg"
              >
                Delete account
              </button>
            </th>
          </tr>
          <tr>
            <th scope="col" class="px-6 py-3">abobakr</th>
            <th scope="col" class="px-6 py-3">abobakrsobhe@mail.com</th>
            <th scope="col" class="px-6 py-3">8</th>
            <th scope="col" class="px-6 py-3">22000</th>
            <th scope="col" class="px-6 py-3">
              <button
                class="bg-red w-full py-2.5 hover:bg-red_hover text-white rounded-lg"
              >
                Delete account
              </button>
            </th>
          </tr>
          <tr>
            <th scope="col" class="px-6 py-3">abobakr</th>
            <th scope="col" class="px-6 py-3">abobakrsobhe@mail.com</th>
            <th scope="col" class="px-6 py-3">8</th>
            <th scope="col" class="px-6 py-3">22000</th>
            <th scope="col" class="px-6 py-3">
              <button
                class="bg-red w-full py-2.5 hover:bg-red_hover text-white rounded-lg"
              >
                Delete account
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>

    <!-------------------------------------------------- owner -------------------------------------------------->

    <div id="Owner" class="Owner relative overflow-x-auto hidden">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-base text-gray-700 uppercase">
          <tr>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">email</th>
            <th scope="col" class="px-6 py-3">cars</th>
            <th scope="col" class="px-6 py-3">orders</th>
            <th scope="col" class="px-6 py-3">block</th>
          </tr>
        </thead>
        <tbody class="text-xs text-gray-500 font-thin capitalize">
          <tr>
            <th scope="col" class="px-6 py-3">abobakr</th>
            <th scope="col" class="px-6 py-3">abobakrsobhe@mail.com</th>
            <th scope="col" class="px-6 py-3">8</th>
            <th scope="col" class="px-6 py-3">22</th>
            <th scope="col" class="px-6 py-3">
              <button
                class="bg-red w-full py-2.5 hover:bg-red_hover text-white rounded-lg"
              >
                Delete account
              </button>
            </th>
          </tr>
          <tr>
            <th scope="col" class="px-6 py-3">abobakr</th>
            <th scope="col" class="px-6 py-3">abobakrsobhe@mail.com</th>
            <th scope="col" class="px-6 py-3">8</th>
            <th scope="col" class="px-6 py-3">22</th>
            <th scope="col" class="px-6 py-3">
              <button
                class="bg-red w-full py-2.5 hover:bg-red_hover text-white rounded-lg"
              >
                Delete account
              </button>
            </th>
          </tr>
          <tr>
            <th scope="col" class="px-6 py-3">abobakr</th>
            <th scope="col" class="px-6 py-3">abobakrsobhe@mail.com</th>
            <th scope="col" class="px-6 py-3">8</th>
            <th scope="col" class="px-6 py-3">22</th>
            <th scope="col" class="px-6 py-3">
              <button
                class="bg-red w-full py-2.5 hover:bg-red_hover text-white rounded-lg"
              >
                Delete account
              </button>
            </th>
          </tr>
          <tr>
            <th scope="col" class="px-6 py-3">abobakr</th>
            <th scope="col" class="px-6 py-3">abobakrsobhe@mail.com</th>
            <th scope="col" class="px-6 py-3">8</th>
            <th scope="col" class="px-6 py-3">22</th>
            <th scope="col" class="px-6 py-3">
              <button
                class="bg-red w-full py-2.5 hover:bg-red_hover text-white rounded-lg"
              >
                Delete account
              </button>
            </th>
          </tr>
          <tr>
            <th scope="col" class="px-6 py-3">abobakr</th>
            <th scope="col" class="px-6 py-3">abobakrsobhe@mail.com</th>
            <th scope="col" class="px-6 py-3">8</th>
            <th scope="col" class="px-6 py-3">22000</th>
            <th scope="col" class="px-6 py-3">
              <button
                class="bg-red w-full py-2.5 hover:bg-red_hover text-white rounded-lg"
              >
                Delete account
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "DashUsers",
  data() {
    return {};
  },
  methods: {
    showRenter() {
        if(document.getElementById("Renter").classList.contains("hidden")){
          document.getElementById("Renter").classList.remove("hidden");
          document.getElementById("Owner").classList.add("hidden");
        }

    },
    showOwner() {
        if(document.getElementById("Owner").classList.contains("hidden")){
          document.getElementById("Owner").classList.remove("hidden");
          document.getElementById("Renter").classList.add("hidden");
        }

    },
  },
};
</script>
<style scoped></style>
