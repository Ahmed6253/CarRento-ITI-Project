<template>
  <h2 class="text-xl font-semibold my-5">All Orders</h2>

  <table class="w-full text-sm text-left rtl:text-right text-gray-500">
    <thead class="text-xs text-gray-700 uppercase">
      <tr>
        <th scope="col" class="px-6 py-3">Car Model</th>
        <th scope="col" class="px-6 py-3">Renter Name</th>
        <th scope="col" class="px-6 py-3">Start Date</th>
        <th scope="col" class="px-6 py-3">End Date</th>
        <th scope="col" class="px-6 py-3">Price</th>
        <th scope="col" class="px-6 py-3">Status</th>
        <th scope="col" class="px-6 py-3">Car Number</th>
        <th scope="col" class="px-6 py-3">Set Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white border-b rounded-2xl animated">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        ></th>
        <td class="px-6 py-4"></td>
        <td class="px-6 py-4"></td>
        <td class="px-6 py-4"></td>
        <td class="px-6 py-4"></td>
        <td class="px-6 py-4"></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "OwnerOrders",

  data() {
    return {
      doneOrders: 0,
      pendingOrders: 0,
      earnings: 0,
      rating: 0,
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
