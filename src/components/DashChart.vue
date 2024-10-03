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
    class="text-sm text-left rtl:text-right text-Paragraph_color mx-0 px-0 w-full "
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
      <tr v-for="orderId in ordersKeys" :key="orderId" class="border-b">
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
              'text-green': orders[orderId].status === 'Accepted',
              'text-red': orders[orderId].status === 'rejected',
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
      octoberOrders: 0,
      octoberRevnue: 0,
      octoberUsers:0,
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
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct"
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
          else if(month === "10"){
            if (this.orders[orderId].status === "done") {
              this.octoberRevnue =
                this.octoberRevnue + Number(this.orders[orderId].TotalPrice);
            }
            this.octoberOrders++;
            this.octoberUsers = this.octoberUsers + 2;
          }
        }
      }
      this.series = [
        {
          name: "reveue",
          data: [
            66044,
            55055,
            55057,
            33056,
            55066,
            44058,
            66043,
            this.septRevnue,
            this.octoberRevnue,
          ],
        },
        {
          name: "orders",
          data: [16, 18, 20, 19, 19, 20, 19, this.SeptOrders, this.octoberOrders],
        },
        {
          name: "users",
          data: [13, 14, 13, 22, 14, 14, 15, this.SeptUsers, this.octoberUsers],
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

  // Check if month exists in monthlyData
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
