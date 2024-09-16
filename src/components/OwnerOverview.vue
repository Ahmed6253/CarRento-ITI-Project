<template>
  <!-- ----------------------------section 1------------------------------------
    -->
  <div class="flex justify-between gap-4 mb-5">
    <div class="bg-white custom-shadow rounded-lg ps-8 py-5 w-1/4">
      <h5 class="text-Paragraph_color mb-3">Orders done</h5>
      <h2 class="text-4xl text-primary_color">{{ doneOrders }}</h2>
    </div>

    <div class="bg-white custom-shadow rounded-lg ps-8 py-5 w-1/4">
      <h5 class="text-Paragraph_color mb-3">Pending Orders</h5>
      <h2 class="text-4xl text-primary_color">{{ pendingOrders }}</h2>
    </div>

    <div class="bg-white custom-shadow rounded-lg ps-8 py-5 w-1/4">
      <h5 class="text-Paragraph_color mb-3">Orders earnings</h5>
      <h2 class="text-4xl text-primary_color">{{ earnings }}</h2>
    </div>

    <div class="bg-white custom-shadow rounded-lg ps-8 py-5 w-1/4">
      <h5 class="text-Paragraph_color mb-3">Revenue</h5>
      <h2 class="text-4xl text-primary_color">
        {{ Math.floor(earnings * 0.8) }}
      </h2>
    </div>
  </div>
  <!-- --------------------------------------table---------------------------------- -->
  <h2 class="text-xl text-primary_color font-bold my-5">Recent Orders</h2>

  <table class="w-full text-sm text-left rtl:text-right text-Paragraph_color">
    <thead class="text-xs text-gray-700 uppercase">
      <tr>
        <th scope="col" class="px-6 py-3 text-Paragraph_color">Car Number</th>
        <th scope="col" class="px-6 py-3 text-Paragraph_color">Car Location</th>
        <th scope="col" class="px-6 py-3 text-Paragraph_color">Renter Name</th>
        <th scope="col" class="px-6 py-3 text-Paragraph_color">Pick-up Date</th>
        <th scope="col" class="px-6 py-3 text-Paragraph_color">
          Drop-off Date
        </th>
        <th scope="col" class="px-6 py-3 text-Paragraph_color">Total Price</th>
        <th scope="col" class="px-6 py-3 text-Paragraph_color">Status</th>
        <!-- <th scope="col" class="px-6 py-3">Rating</th> -->
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(order, index) in ownerOrders"
        :key="index"
        class="bg-white border-b rounded-2xl animated"
      >
        <td class="px-6 py-4">{{ order.carId }}</td>
        <td class="px-6 py-4">{{ order.location }}</td>
        <td class="px-6 py-4">{{ order.renter }}</td>
        <td class="px-6 py-4">{{ order.pickUpDate }}</td>
        <td class="px-6 py-4">{{ order.dropOffDate }}</td>
        <td class="px-6 py-4">{{ order.TotalPrice }}</td>
        <td
          class="px-6 py-4"
          :class="{
            'text-blue-500': order.status === 'done',
            'text-yellow-500': order.status === 'pending',
            'text-green': order.status === 'approved',
          }"
        >
          {{ order.status }}
        </td>
        <!-- <td class="px-6 py-4">{{ ownerOrders[orderId].rating }}</td> -->
      </tr>
    </tbody>
  </table>
</template>
<script>
import axios from "axios";

export default {
  name: "OwnerOverview",

  data() {
    return {
      doneOrders: 0,
      pendingOrders: 0,
      earnings: 0,
      owner: "",
      ownerOrders: [],
    };
  },
  created() {
    const owner =
      JSON.parse(localStorage.getItem("currentUser")) ||
      JSON.parse(sessionStorage.getItem("currentUser"));
    if (owner) {
      this.owner = owner.id;
    } else {
      this.$router.push("/");
    }
  },
  mounted() {
    // Fetch orders data in mounted hook
    axios
      .get("https://carrento-9ea05-default-rtdb.firebaseio.com/orders.json")
      .then((response) => {
        this.orders = response.data;
        this.ordersKeys = Object.keys(response.data);

        // Call pendingOrdersCalc after data is fetched
        this.currentOwnerOrders();
      })
      .then(() => {
        this.pendingOrdersCalc();
        this.ordersDoneCalc();
        this.earningsCalc();
      })
      .catch((e) => {
        console.log(e);
      });
  },

  methods: {
    pendingOrdersCalc() {
      this.pendingOrders = 0; // Reset count

      for (let order of this.ownerOrders) {
        order.owner = order.owner.trim().toLowerCase();
        if (order.owner === this.owner && order.status === "pending") {
          this.pendingOrders++;
        }
      }
      // Final check
      console.log("Total pending orders:", this.pendingOrders);
    },

    ordersDoneCalc() {
      this.doneOrders = 0; // Reset count

      for (let order of this.ownerOrders) {
        order.owner = order.owner.trim().toLowerCase();
        if (
          order.owner === this.owner &&
          (order.status === "done" || order.status === "Accepted")
        ) {
          this.doneOrders++;
        }
      }
      // Final check
      console.log("Total done orders:", this.doneOrders);
    },
    earningsCalc() {
      for (let order of this.ownerOrders) {
        this.earnings += Number(order.TotalPrice);
      }
    },

    currentOwnerOrders() {
      for (let orderId of this.ordersKeys) {
        if (
          this.orders[orderId].owner.trim().toLowerCase() ===
          this.owner.trim().toLowerCase()
        ) {
          this.ownerOrders.push(this.orders[orderId]);
        }
      }
    },
  },
};
</script>
<style></style>
