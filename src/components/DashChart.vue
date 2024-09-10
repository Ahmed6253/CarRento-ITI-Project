<template>
  <!-- ----------------------------section 1------------------------------------
    -->
    <div class="flex justify-between gap-4 mb-5">
   <div class="bg-white custom-shadow rounded-lg ps-8 py-5 w-1/4">
    <h5 class="text-gray-500 mb-3">Orders done</h5>
    <h2 class="text-4xl">{{ doneOrders }}</h2>
   </div>

   <div class="bg-white custom-shadow rounded-lg ps-8 py-5 w-1/4">
    <h5 class="text-gray-500 mb-3">Pending Orders</h5>
    <h2 class="text-4xl">{{ pendingOrders }}</h2>
   </div>

   <div class="bg-white custom-shadow rounded-lg ps-8 py-5 w-1/4">
    <h5 class="text-gray-500 mb-3">earnings</h5>
    <h2 class="text-4xl">{{ earnings }}</h2>
   </div>

   <div class="bg-white custom-shadow rounded-lg ps-8 py-5 w-1/4">
    <h5 class="text-gray-500 mb-3">Revenue</h5>
    <h2 class="text-4xl">{{ revenue }}</h2>
   </div>
  </div>

  <!-- --------------------------------------chart--------------------------------- -->
    <div>
        <div id="chart" >
      <apexchart
        type="bar"
        height="300"
        width="95%"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
    </div>

    <!-- --------------------------------------table---------------------------------- -->
    <h2 class="text-2xl mt-5">Recent Orders</h2>
    
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
    <thead class="text-base text-[14px] uppercase text-gray-600">
      <tr>
        <th scope="col" class="px-6 py-3">Order ID</th>
        <th scope="col" class="px-6 py-3">Car model</th>
        <th scope="col" class="px-6 py-3">Start date</th>
        <th scope="col" class="px-6 py-3">End date</th>
        <th scope="col" class="px-6 py-3">Status</th>
        <th scope="col" class="px-6 py-3">Owner name</th>
        <th scope="col" class="px-6 py-3">Renter name</th>
        <th scope="col" class="px-6 py-3">Payment Status</th>
      </tr>
    </thead>
    <tbody class="text-xs font-semibold capitalize">
      <tr v-for="order in orders" :key="order.orderId">
        <td class="px-6 py-3 text-gray-700">{{order.orderId}}</td>
        <td class="px-6 py-3 text-gray-700">{{order.carModel}}</td>
        <td class="px-6 py-3 text-gray-700">{{order.startDate}}</td>
        <td class="px-6 py-3 text-gray-700">{{order.endDate}}</td>
        <td :class="['px-6 py-3', { 'text-green': order.status === 'Done', 'text-red': order.status === 'Pending' }]">
          {{ order.status }}
        </td>
        <td class="px-6 py-3 text-gray-700">{{order.ownerName}}</td>
        <td class="px-6 py-3 text-gray-700">{{order.renterName}}</td>
        <td class="px-6 py-3 text-gray-700">{{order.payment}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
    name: "DashChart",
    el: "#app",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      doneOrders: 0,
      pendingOrders:0,
      earnings:0,
      revenue:0,
      orders:[
        {orderId: 1 , carModel: "Nissan something" , startDate:"2022-01-01" , endDate:"2022-01-02" , status:"Done" , ownerName:"Ahmed" , renterName:"aya" , payment:"done"},
        {orderId: 2 , carModel: "nissan something" , startDate:"2022-01-01" , endDate:"2022-01-02" , status:"Pending" , ownerName:"Ahmed" , renterName:"aya" , payment:"done"},
      ],
      series: [
        {
          name: "reveue",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "orders",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: "avarage feedback",
          data: [3, 4, 3, 2, 4, 4, 5, 5, 4],
        },
      ],
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
            "Oct",
          ],
        },
        yaxis: {
          title: {
            text: "$ (thousands)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  },
};
</script>
<style>

</style>