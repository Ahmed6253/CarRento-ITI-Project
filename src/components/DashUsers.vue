<template>
  <div class="ms-5">
    <div class="inline-flex rounded-md shadow-sm" role="group">
      <button
        @click="shown = 'renter'"
        type="button"
        class="px-10 py-3 text-sm font-medium"
        :class="shown === 'renter' ? 'bg-black text-white hover:bg-black hover:text-white' : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-white'"
      >
        Renter
      </button>

      <button
        @click="shown = 'owner'"
        type="button"
        class="px-10 py-3 text-sm font-medium"
        :class="shown === 'owner' ? 'bg-black text-white hover:bg-black hover:text-white' : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-white'"
      >
        Owner
      </button>
    </div>

    <!-- Renters Section -->
    <div v-if="shown === 'renter'" class="Renter relative overflow-x-auto">
      <h1 class="text-primary_color text-2xl my-10"> Renters</h1>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-base text-gray-700 uppercase">
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Block</th>
          </tr>
        </thead>
        <tbody class="text-xs text-gray-500 font-thin capitalize">
          <tr v-for="(renter, index) in renters" :key="index">
            <th scope="col" class="px-6 py-3">{{ renter.id }}</th>
            <th scope="col" class="px-6 py-3">{{ renter.userName }}</th>
            <th scope="col" class="px-6 py-3">{{ renter.email }}</th>
            <th scope="col" class="px-6 py-3">
              <button
                :class="{
                  'bg-black text-white': renter.blocked,
                  'bg-red text-white': !renter.blocked
                }"
                class=" py-2.5 px-5 hover:bg-gray-700 rounded-lg"
                @click="toggleBlockUser(renter)"
              >
                {{ renter.blocked ? 'Unblock' : 'Block account' }}
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Owners Section -->
    <div v-if="shown === 'owner'" class="Owner relative overflow-x-auto">
      <h1 class="text-primary_color text-2xl my-10"> Owners</h1>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-base text-gray-700 uppercase">
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Block</th>
          </tr>
        </thead>
        <tbody class="text-xs text-gray-500 font-thin capitalize">
          <tr v-for="(owner, index) in owners" :key="index">
            <th scope="col" class="px-6 py-3">{{ owner.id }}</th>
            <th scope="col" class="px-6 py-3">{{ owner.userName }}</th>
            <th scope="col" class="px-6 py-3">{{ owner.email }}</th>
            <th scope="col" class="px-6 py-3">
              <button
                :class="{
                  'bg-black text-white': owner.blocked,
                  'bg-red text-white': !owner.blocked
                }"
                class="py-2.5 px-5 hover:bg-gray-700 rounded-lg"
                @click="toggleBlockUser(owner)"
              >
                {{ owner.blocked ? 'Unblock' : 'Block account' }}
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DashUsers",
  data() {
    return {
      shown: "renter",
      owners: [],
      renters: [],
    };
  },

  created() {
    this.filterUsers();
  },

  methods: {
    filterUsers() {
      axios
        .get("https://carrento-9ea05-default-rtdb.firebaseio.com/users.json")
        .then((res) => {
          const users = res.data;
          for (const key in users) {
            const user = users[key];
            if (user.role === "owner") {
              this.owners.push(user);
            } else if (user.role === "renter") {
              this.renters.push(user);
            }
          }
        })
        .catch((err) => console.log(err));
    },

    toggleBlockUser(user) {
      const confirmMessage = user.blocked
        ? `Are you sure you want to unblock ${user.userName}?`
        : `Are you sure you want to block ${user.userName}?`;

      const confirmAction = confirm(confirmMessage);

      if (confirmAction) {
        user.blocked = !user.blocked;
        this.updateBlockStatus(user);
      }
    },

    updateBlockStatus(user) {
      // Update the user's blocked status in the Firebase database
      axios
        .patch(
          `https://carrento-9ea05-default-rtdb.firebaseio.com/users/${user.id}.json`,
          { blocked: user.blocked }
        )
        .then(() => {
          console.log(`${user.blocked ? 'Blocked' : 'Unblocked'} user: ${user.userName}`);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped></style>
