<template>
  <div class="container">
    <div class="relative p-10 pt-14 bg-slate-100 dark:bg-slate-800 shadow-xl rounded overflow-hidden">
      <Doughnut
        :options="chartOptions"
        :data="chartData"
      />
    </div>
  </div>
</template>

<script>

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const blackHoleData = {
  labels: ["more than 50", "less than 50", "less than 10", "Blockholed"],
  datasets: [
    {
      backgroundColor: ["#4e1bb4", "#8250e5", "#ff8145", "#ff4545"],
      data: [200, 60, 30, 40],
    },
  ]
}

// const accreditPathData = {
//   labels: ["1 course", "2 courses", "3 courses", "4 courses"],
//   datasets: [
//     {
//       backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
//       data: [40, 20, 80, 10],
//     },
//   ]
// }

export default {
  name: "DoughnutChart",
  components: {
    Doughnut,
  },
  data() {
    return {
      chartData: blackHoleData,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "left",
          },
        },
      },
    };
  },
};
</script>
