<template>
  <!-- ------------------------------------section 1---------------------------------------------- -->
  <div class="flex justify-between gap-4">
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

  <!-- ------------------------------------orders table--------------------------------------------------- -->
  <table>
  <tr class="bg-gray-300 ">
    <th class="font-normal">Order ID</th>
    <th class="font-normal">Start date</th>
    <th class="font-normal">End Date</th>
  </tr>
  <tr v-for="order in orders" v-bind:key="order">
    <td>{{order.orderId}}</td>
    <td>{{order.startDate}}</td>
    <td>{{order.endDate}}</td>
  </tr>

</table>
</template>

<script>
export default {
  name: "AdminOverview",
  data() {
    return{
      doneOrders: 0,
      pendingOrders:0,
      earnings:0,
      revenue:0,
      orders:[
        {orderId: 1, startDate: "2022-01-01", endDate: "2022-01-02"},
        {orderId: 1, startDate: "2022-01-01", endDate: "2022-01-02"},
      ]
    }
  }
}
</script>

<style>

</style>