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
      <h5 class="text-gray-500 mb-3">Rating</h5>
      <h2 class="text-4xl">{{ revenue }}</h2>
    </div>
  </div>
  <!-- --------------------------------------table---------------------------------- -->
  <h2 class="text-xl font-bold my-5">Recent Orders</h2>

  <table class="w-full text-sm text-left rtl:text-right text-gray-500">
    <thead class="text-xs text-gray-700 uppercase">
      <tr>
        <th scope="col" class="px-6 py-3">Car Model</th>
        <th scope="col" class="px-6 py-3">Reter Name</th>
        <th scope="col" class="px-6 py-3">Start Date</th>
        <th scope="col" class="px-6 py-3">End Date</th>
        <th scope="col" class="px-6 py-3">Price</th>
        <th scope="col" class="px-6 py-3">Status</th>
        <th scope="col" class="px-6 py-3">Car Rating</th>
        <th scope="col" class="px-6 py-3">Owner Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white border-b rounded-2xl animated">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {{}}
        </th>
        <td class="px-6 py-4">{{}}</td>
        <td class="px-6 py-4">{{}}</td>
        <td class="px-6 py-4">{{}}</td>
        <td class="px-6 py-4">{{}}</td>
        <td class="px-6 py-4">{{}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "OwnerOverview",

  data() {
    return {
      doneOrders: 0,
      pendingOrders: 0,
      earnings: 0,
      revenue: 0,
      orders: [
        {
          orderId: 1,
          carModel: "Nissan something",
          startDate: "2022-01-01",
          endDate: "2022-01-02",
          status: "Done",
          ownerName: "Ahmed",
          renterName: "aya",
          payment: "done",
        },
        {
          orderId: 2,
          carModel: "nissan something",
          startDate: "2022-01-01",
          endDate: "2022-01-02",
          status: "Pending",
          ownerName: "Ahmed",
          renterName: "aya",
          payment: "done",
        },
      ],
    };
  },
};
</script>
<style></style>
