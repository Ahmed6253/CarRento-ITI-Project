<template>
  <div class="w-full">
    <div class="inline-flex rounded-md shadow-sm" role="group">
      <button
        @click="shown = 'renter'"
        type="button"
        class="px-10 py-3 text-sm font-medium"
        :class="
          shown === 'renter'
            ? 'bg-footer text-slate-50 hover:bg-gray-200 hover:text-black'
            : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-black'
        "
      >
        Renters
      </button>

      <button
        @click="shown = 'owner'"
        type="button"
        class="px-10 py-3 text-sm font-medium"
        :class="
          shown === 'owner'
            ? 'bg-footer text-slate-50 hover:bg-gray-200 hover:text-black'
            : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-black'
        "
      >
        Owners
      </button>
    </div>

    <!-- Renters Section -->
    <div
      v-if="shown === 'renter'"
      class="Renter relative overflow-x-auto w-full"
    >
      <div
        class="fixed top-1/2 left-1/2 translate-x-[-50%] flex justify-between flex-col translate-y-[-50%] bg-white w-full h-lvh m-auto p-14 z-50 gap-2"
        v-if="viweImages"
      >
        <button
          class="text-slate-50 bg-red w-8 h-8 rounded-md font-bold self-end"
          @click="viweImages = false"
        >
          X
        </button>
        <div class="flex gap-4">
          <img class="w-1/3 h-fit" :src="frontUrl" />
          <img class="w-1/3 h-fit" :src="backUrl" />
          <img class="w-1/3 h-fit" :src="licenceUrl" />
        </div>

        <div>
          <button
            @click="acceptRenter()"
            class="bg-green hover:bg-green_hover text-slate-50 rounded p-2 mr-2"
          >
            Accept
          </button>
          <button
            @click="rejectRenter()"
            class="bg-red hover:bg-red_hover text-slate-50 rounded p-2"
          >
            Reject
          </button>
        </div>
      </div>
      <h1 class="text-primary_color text-2xl my-10">Renters</h1>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-base text-Paragraph_color uppercase">
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Block</th>
          </tr>
        </thead>
        <tbody class="text-xs text-primary_color font-thin capitalize">
          <tr v-for="(renter, index) in renters" :key="index" class="border-b">
            <th scope="col" class="px-6 py-3">{{ renter.id }}</th>
            <th scope="col" class="px-6 py-3">{{ renter.userName }}</th>
            <th scope="col" class="px-6 py-3">{{ renter.email }}</th>
            <th scope="col" class="px-6 py-3">
              <button
                @click="
                  renter.status === 'Requested' && viweRenter(renter, index)
                "
                :class="{
                  'text-green': renter.status === 'Verified',
                  'text-red': renter.status === 'Unverified',
                  'text-slate-50 bg-warning p-2 rounded-md':
                    renter.status === 'Requested',
                }"
              >
                {{ renter.status }}
              </button>
            </th>
            <th scope="col" class="px-6 py-3">
              <button
                :class="{
                  'bg-black text-slate-50': renter.blocked,
                  'bg-red text-slate-50': !renter.blocked,
                }"
                class="py-2.5 px-5 hover:bg-gray-700 rounded-lg"
                @click="toggleBlockUser(renter)"
              >
                {{ renter.blocked ? "Unblock" : "Block account" }}
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Owners Section -->
    <div v-if="shown === 'owner'" class="Owner relative overflow-x-auto w-full">
      <h1 class="text-primary_color text-2xl my-10">Owners</h1>
      <table class="w-full text-sm text-left rtl:text-right text-primary_color">
        <thead class="text-base text-paragraph_color uppercase">
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Block</th>
          </tr>
        </thead>
        <tbody class="text-xs text-primary_color font-thin capitalize">
          <tr v-for="(owner, index) in owners" :key="index" class="border-b">
            <th scope="col" class="px-6 py-3">{{ owner.id }}</th>
            <th scope="col" class="px-6 py-3">{{ owner.userName }}</th>
            <th scope="col" class="px-6 py-3">{{ owner.email }}</th>
            <th scope="col" class="px-6 py-3">
              <button
                :class="{
                  'bg-footer text-slate-50': owner.blocked,
                  'bg-red text-slate-50': !owner.blocked,
                }"
                class="py-2.5 px-5 hover:bg-gray-700 rounded-lg"
                @click="toggleBlockUser(owner)"
              >
                {{ owner.blocked ? "Unblock" : "Block account" }}
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
import { storage } from "@/firebase";
import { ref, getDownloadURL } from "firebase/storage";

export default {
  name: "DashUsers",
  data() {
    return {
      shown: "renter",
      viweImages: false,
      currRenter: {},
      currIndex: "",
      imageError: "",
      frontUrl: "",
      backUrl: "",
      licenceUrl: "",
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
          console.log(
            `${user.blocked ? "Blocked" : "Unblocked"} user: ${user.userName}`
          );
        })
        .catch((err) => console.log(err));
    },

    viweRenter(renter, index) {
      getDownloadURL(ref(storage, `users/${renter.id}1`))
        .then((download_url) => (this.frontUrl = download_url))
        .then(() => {
          getDownloadURL(ref(storage, `users/${renter.id}2`)).then(
            (download_url) => (this.backUrl = download_url)
          );
        })
        .then(() => {
          getDownloadURL(ref(storage, `users/${renter.id}3`)).then(
            (download_url) => (this.licenceUrl = download_url)
          );
        })
        .then(() => {
          this.viweImages = true;
          this.currRenter = renter;
          this.currIndex = index;
        })
        .catch((e) => {
          this.imageError = e;
        });
    },
    acceptRenter() {
      axios
        .put(
          `https://carrento-9ea05-default-rtdb.firebaseio.com/users/${this.currRenter.id}.json`,
          {
            ...this.currRenter,
            status: "Verified",
          }
        )
        .then(() => {
          axios.put(
            `https://carrento-9ea05-default-rtdb.firebaseio.com/messages/${this.currRenter.id}.json`,
            {
              message: "Verified",
              id: this.currRenter.id,
            }
          );
          this.renters[this.currIndex].status = "Verified";
          this.viweImages = false;
        });
    },

    rejectRenter() {
      axios
        .put(
          `https://carrento-9ea05-default-rtdb.firebaseio.com/users/${this.currRenter.id}.json`,
          {
            ...this.currRenter,
            status: "Unverified",
          }
        )
        .then(() => {
          axios.put(
            `https://carrento-9ea05-default-rtdb.firebaseio.com/messages/${this.currRenter.id}.json`,
            {
              message: "Unverified",
              id: this.currRenter.id,
            }
          );
          this.renters[this.currIndex].status = "Unverified";
          this.viweImages = false;
        });
    },
  },
};
</script>

<style scoped></style>
