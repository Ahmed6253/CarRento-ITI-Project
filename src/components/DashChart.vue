<template>
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
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-base text-gray-700 uppercase">
          <tr>
            <th scope="col" class="px-6 py-3">Car model</th>
            <th scope="col" class="px-6 py-3">start date</th>
            <th scope="col" class="px-6 py-3">end date</th>
            <th scope="col" class="px-6 py-3">status</th>
            <th scope="col" class="px-6 py-3">owner name</th>
            <th scope="col" class="px-6 py-3">renter name</th>
            <th scope="col" class="px-6 py-3">cash</th>

          </tr>
        </thead>
        <tbody class="text-xs text-gray-500 font-thin capitalize">
          <tr>
            <th scope="col" class="px-6 py-3">Kia cerato</th>
            <th scope="col" class="px-6 py-3">08/09/2024</th>
            <th scope="col" class="px-6 py-3">09/09/2024</th>
            <th scope="col" class="px-6 py-3 text-green">paid</th>
            <th scope="col" class="px-6 py-3">Abdelmonem</th>
            <th scope="col" class="px-6 py-3">Neven</th>
            <th scope="col" class="px-6 py-3">1500</th>
          </tr>
          <tr>
            <th scope="col" class="px-6 py-3">Kia cerato</th>
            <th scope="col" class="px-6 py-3">08/09/2024</th>
            <th scope="col" class="px-6 py-3">09/09/2024</th>
            <th scope="col" class="px-6 py-3 text-red">Pending</th>
            <th scope="col" class="px-6 py-3">Abdelmonem</th>
            <th scope="col" class="px-6 py-3">Neven</th>
            <th scope="col" class="px-6 py-3">1500</th>
          </tr>
          <tr>
            <th scope="col" class="px-6 py-3">Kia cerato</th>
            <th scope="col" class="px-6 py-3">08/09/2024</th>
            <th scope="col" class="px-6 py-3">09/09/2024</th>
            <th scope="col" class="px-6 py-3 text-green">paid</th>
            <th scope="col" class="px-6 py-3">Abdelmonem</th>
            <th scope="col" class="px-6 py-3">Neven</th>
            <th scope="col" class="px-6 py-3">1500</th>
          </tr>
          <tr>
            <th scope="col" class="px-6 py-3">Kia cerato</th>
            <th scope="col" class="px-6 py-3">08/09/2024</th>
            <th scope="col" class="px-6 py-3">09/09/2024</th>
            <th scope="col" class="px-6 py-3 text-red">Pending</th>
            <th scope="col" class="px-6 py-3">Abdelmonem</th>
            <th scope="col" class="px-6 py-3">Neven</th>
            <th scope="col" class="px-6 py-3">1500</th>
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
      series: [
        {
          name: "ahmed",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "abobakr",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: "neven",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
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
<style scoped>

</style>