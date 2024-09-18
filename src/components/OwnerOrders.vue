<template>
  <h2 class="text-xl font-semibold my-5 text-primary_color">All Orders</h2>

  <table class="w-full text-sm text-left rtl:text-right text-Paragraph_color">
    <thead class="text-xs text-Paragraph_color uppercase">
      <tr>
        <th scope="col" class="px-6 py-3">Car Model</th>
        <th scope="col" class="px-6 py-3">Renter Name</th>
        <th scope="col" class="px-6 py-3">Start Date</th>
        <th scope="col" class="px-6 py-3">End Date</th>
        <th scope="col" class="px-6 py-3">Price</th>
        <th scope="col" class="px-6 py-3">Car Number</th>
      </tr>
    </thead>
    <tbody class="direction-rtl">
      <tr
        v-for="(order, key) in orders"
        class="bg-white border-b rounded-2xl animated"
        :key="key"
      >
        <td class="px-6 py-4">{{ order.carName }}</td>
        <td class="px-6 py-4">{{ order.renter }}</td>
        <td class="px-6 py-4">{{ order.pickUpDate }}</td>
        <td class="px-6 py-4">{{ order.dropOffDate }}</td>
        <td class="px-6 py-4">{{ order.TotalPrice }}</td>
        <td class="px-6 py-4">{{ order.carId }}</td>
        <td v-if="order.status === 'pending'" class="px-6 py-4 flex gap-1">
          <button
            @click="acceptOrder(order, key)"
            class="bg-green hover:bg-green_hover text-slate-50 rounded p-2"
          >
            Accept
          </button>
          <button
            @click="rejectOrder(order, key)"
            class="bg-red hover:bg-red_hover text-slate-50 rounded p-2"
          >
            Reject
          </button>
        </td>
        <td v-if="order.status === 'Accepted'" class="px-6 py-4">
          <button
            class="bg-blue-500 cursor-not-allowed text-slate-50 rounded p-2"
          >
            Accepted
          </button>
        </td>
        <td v-if="order.status === 'done'" class="px-6 py-4">
          <button
            class="bg-primary_color cursor-not-allowed rounded text-white p-2"
          >
            Rated
          </button>
        </td>
        <td v-if="order.status === 'rejected'" class="px-6 py-4">
          <button class="bg-red cursor-not-allowed rounded text-slate-50 p-2">
            Rejected
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import axios from "axios";

export default {
  name: "OwnerOrders",
  created() {
    axios
      .get("https://carrento-9ea05-default-rtdb.firebaseio.com/orders.json")
      .then((response) => {
        const ordersData = response.data;
        const ordersKeys = Object.keys(ordersData).reverse();

        ordersKeys.forEach((key) => {
          if (ordersData[key].owner === this.$route.params.id) {
            this.orders[key] = ordersData[key];
          }
        });
      });
  },

  data() {
    return {
      orders: {},
      doneOrders: 0,
      pendingOrders: 0,
      earnings: 0,
      rating: 0,
      car: {},
    };
  },

  methods: {
    acceptOrder(order, key) {
      const acceptConfirm = confirm(
        "Are you sure you want to accept this order?"
      );
      if (!acceptConfirm) return;
      axios
        .put(
          `https://carrento-9ea05-default-rtdb.firebaseio.com/orders/${key}.json`,
          {
            ...order,
            status: "Accepted",
          }
        )
        .then(() => {
          this.orders[key].status = "Accepted";
        })
        .then(() => {
          const carId = this.orders[key].carId;
          axios
            .get(
              `https://carrento-9ea05-default-rtdb.firebaseio.com/cars/${carId}.json`
            )
            .then((response) => {
              this.car = response.data;
              this.car.available = false;
              axios.put(
                `https://carrento-9ea05-default-rtdb.firebaseio.com/cars/${carId}.json`,
                this.car
              );
            });
        })
        .then(() => {
          axios.put(
            `https://carrento-9ea05-default-rtdb.firebaseio.com/messages/${order.renter}.json`,
            {
              message: "Accepted",
              id: order.renter,
            }
          );
        });
    },
    rejectOrder(order, key) {
      const rejectConfirm = confirm(
        "Are you sure you want to reject this order?"
      );
      if (!rejectConfirm) return;
      axios
        .put(
          `https://carrento-9ea05-default-rtdb.firebaseio.com/orders/${key}.json`,
          {
            ...order,
            status: "rejected",
          }
        )
        .then(() => {
          this.orders[key].status = "rejected";
        })
        .then(() => {
          axios.put(
            `https://carrento-9ea05-default-rtdb.firebaseio.com/messages/${order.renter}.json`,
            {
              message: "Rejected",
              id: order.renter,
            }
          );
        });
    },
  },
};
</script>
<style></style>
