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
      <h5 class="text-Paragraph_color mb-3">earnings</h5>
      <h2 class="text-4xl text-primary_color">{{ earnings }}</h2>
    </div>

    <div class="bg-white custom-shadow rounded-lg ps-8 py-5 w-1/4">
      <h5 class="text-Paragraph_color mb-3">Profit Share</h5>
      <h2 class="text-4xl text-primary_color">
        {{ Math.floor(earnings * 0.2) }}
      </h2>
    </div>
  </div>

  <!-- --------------------------------------chart--------------------------------- -->
  <div class="mx-0 w-full">
    <div id="chart" class="w-full mx-0 bg-slate-50">
      <apexchart
        class="text-Paragraph_color"
        type="bar"
        height="300"
        width="95%"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>

  <!-- --------------------------------------table---------------------------------- -->
  <h2 class="text-2xl mt-5 text-primary_color">Recent Orders</h2>

  <table
    class="text-sm text-left rtl:text-right text-Paragraph_color mx-0 px-0"
  >
    <thead class="text-base text-[14px] uppercase text-Paragraph_color">
      <tr>
        <th scope="col" class="px-6 py-3">Order ID</th>
        <th scope="col" class="px-6 py-3">Car ID</th>
        <th scope="col" class="px-6 py-3">Owner</th>
        <th scope="col" class="px-6 py-3">Renter</th>
        <th scope="col" class="px-6 py-3">Status</th>
        <th scope="col" class="px-6 py-3">Total Payment</th>
      </tr>
    </thead>
    <tbody class="text-xs font-semibold capitalize text-Paragraph_color">
      <tr v-for="orderId in ordersKeys" :key="orderId">
        <td class="px-6 py-3">{{ orderId }}</td>
        <!-- Display order ID -->
        <td class="px-6 py-3">{{ orders[orderId].carId }}</td>
        <td class="px-6 py-3">{{ orders[orderId].owner }}</td>
        <td class="px-6 py-3">{{ orders[orderId].renter }}</td>
        <td
          :class="[
            'px-6 py-3',
            {
              'text-blue-500': orders[orderId].status === 'done',
              'text-warning': orders[orderId].status === 'pending',
              'text-green': orders[orderId].status === 'approved',
            },
          ]"
        >
          {{ orders[orderId].status }}
        </td>
        <td class="px-6 py-3">
          {{ orders[orderId].TotalPrice }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";

export default {
  name: "DashChart",
  el: "#app",
  components: {
    apexchart: VueApexCharts,
  },

  mounted() {
    // Fetch orders data in mounted hook
    axios
      .get("https://carrento-9ea05-default-rtdb.firebaseio.com/orders.json")
      .then((response) => {
        this.orders = response.data;
        this.ordersKeys = Object.keys(response.data);

        // Call pendingOrdersCalc after data is fetched
      })
      .then(() => {
        this.ordersDoneCalc();
        this.pendingOrdersCalc();
        this.earningsCalc();
        this.chartUpdate();
      })
      .catch((e) => {
        console.log(e);
      });
  },

  data() {
    return {
      doneOrders: 0,
      pendingOrders: 0,
      earnings: 0,
      orders: {}, // Initialize cars as an empty object
      ordersKeys: [],
      septRevnue: 62,
      SeptOrders: 112,
      SeptUsers: 12,
      series: [],

      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
        },
        yaxis: {
          title: {
            text: " (metrics)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
      },
    };
  },

  methods: {
    pendingOrdersCalc() {
      this.pendingOrders = 0; // Reset count
      for (let orderId of this.ordersKeys) {
        if (this.orders[orderId].status === "pending") {
          this.pendingOrders++;
        }
      }
    },
    ordersDoneCalc() {
      for (let orderId of this.ordersKeys) {
        if (
          this.orders[orderId].status === "done" ||
          this.orders[orderId].status === "Accepted"
        ) {
          this.doneOrders++;
        }
      }
    },

    earningsCalc() {
      let sum = 0;
      let numPrice;
      for (let orderId of this.ordersKeys) {
        numPrice = Number(this.orders[orderId].TotalPrice);
        if (
          this.orders[orderId].status === "done" ||
          this.orders[orderId].status === "Accepted"
        ) {
          sum = sum + numPrice;
        }
      }
      this.earnings = sum;
    },

    chartUpdate() {
      this.septRevnue = 0;
      this.SeptOrders = 0;
      this.SeptUsers = 0;
      for (let orderId of this.ordersKeys) {
        if (this.orders[orderId].dropOffDate) {
          const month = this.orders[orderId].dropOffDate.split("-")[1];

          if (month === "09") {
            if (this.orders[orderId].status === "done") {
              this.septRevnue =
                this.septRevnue + Number(this.orders[orderId].TotalPrice);
            }
            this.SeptOrders++;
            this.SeptUsers = this.SeptUsers + 2;
          }
        }
      }
      this.series = [
        {
          name: "reveue",
          data: [
            6044,
            5055,
            5057,
            3056,
            5066,
            4058,
            6043,
            6660,
            this.septRevnue,
          ],
        },
        {
          name: "orders",
          data: [6, 8, 10, 9, 9, 10, 9, 11, this.SeptOrders],
        },
        {
          name: "users",
          data: [3, 4, 3, 2, 4, 4, 5, 5, this.SeptUsers],
        },
      ];

      this.chartOptions = { ...this.chartOptions };
    },
  },
};

//dynamic handling for each month

// data() {
//   return {
//     monthlyData: {
//       '01': { revenue: 0, orders: 0, users: 0 }, // January
//       '02': { revenue: 0, orders: 0, users: 0 }, // February
//       '03': { revenue: 0, orders: 0, users: 0 }, // March
//       '04': { revenue: 0, orders: 0, users: 0 }, // April
//       '05': { revenue: 0, orders: 0, users: 0 }, // May
//       '06': { revenue: 0, orders: 0, users: 0 }, // June
//       '07': { revenue: 0, orders: 0, users: 0 }, // July
//       '08': { revenue: 0, orders: 0, users: 0 }, // August
//       '09': { revenue: 0, orders: 0, users: 0 }, // September
//       '10': { revenue: 0, orders: 0, users: 0 }, // October
//       '11': { revenue: 0, orders: 0, users: 0 }, // November
//       '12': { revenue: 0, orders: 0, users: 0 }, // December
//     },
//     orders: {}, // Your orders data
//     ordersKeys: [], // List of order IDs
//   };
// },

// methods: {
//   calculateMonthlyData() {
//     for (let orderId of this.ordersKeys) {
//       const order = this.orders[orderId];

//       if (order.dropOffDate) {
//         const month = order.dropOffDate.split('-')[1]; // Extracts the month (e.g., '09' for September)

//         // Check if month exists in monthlyData
//         if (this.monthlyData[month]) {
//           this.monthlyData[month].revenue += Number(order.TotalPrice);
//           this.monthlyData[month].orders += 1;
//           this.monthlyData[month].users += 1; // Adjust logic to handle unique users if necessary
//         }
//       }
//     }

//     console.log(this.monthlyData); // Now contains the revenue, orders, and users for each month
//   }
// }
</script>
<style></style>
