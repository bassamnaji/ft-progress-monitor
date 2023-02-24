<template>
  <div class="">
    <div class="flex justify-center items-end mx-auto">
      <div class="justify-evenly sm:block w-full">
        <div
          class="px-3 md:px-5 bg-slate-300 dark:bg-slate-600 h-8 md:h-12 border rounded-lg"
        >
          <ul class="flex items-center bg-slate-300 dark:bg-slate-600 h-full">
            <li
              @click="activeTab($event, 1)"
              class="flex items-center justify-center text-sm bg-slate-400 text-slate-200 dark:bg-slate-200 dark:text-slate-800 py-0.5 px-3 md:px-5 md:py-2 font-normal rounded-md hover:text-gray-900 dark:hover:text-slate-900 ease-in duration-150 cursor-pointer whitespace-nowrap"
            >
              Black Hole
            </li>
            <li
              @click="activeTab($event, 2)"
              class="flex items-center justify-center text-sm text-slate-700 dark:text-slate-800 py-0.5 md:py-2 px-3 md:px-5 rounded-md font-normal hover:text-gray-900 dark:hover:text-slate-300 ease-in duration-100 cursor-pointer whitespace-nowrap"
            >
              Nationality
            </li>
            <li
              @click="activeTab($event, 3)"
              class="flex items-center justify-center text-sm text-slate-700 dark:text-slate-800 py-0.5 md:py-2 px-3 md:px-5 rounded-md font-normal hover:text-gray-900 dark:hover:text-slate-300 ease-in duration-100 cursor-pointer whitespace-nowrap"
            >
              Accredited
            </li>
            <li
              @click="activeTab($event, 4)"
              class="flex items-center justify-center text-sm text-slate-700 dark:text-slate-800 py-0.5 md:py-2 px-3 md:px-5 rounded-md font-normal hover:text-gray-900 dark:hover:text-slate-300 ease-in duration-100 cursor-pointer whitespace-nowrap"
            >
              Circle
            </li>
            <li
              @click="activeTab($event, 5)"
              class="flex items-center justify-center text-sm text-slate-700 dark:text-slate-800 py-0.5 md:py-2 px-3 md:px-5 rounded-md font-normal hover:text-gray-900 dark:hover:text-slate-300 ease-in duration-100 cursor-pointer whitespace-nowrap"
            >
              Pace
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div
      class="relative p-10 pt-14 bg-slate-100 dark:bg-slate-800 shadow-xl rounded overflow-hidden"
    >
      <Doughnut :options="chartOptions" :data="chartData" />
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
  labels: [ "more than 100", "more than 50", "less than 50", "less than 10", "Blockholed"],
  datasets: [
    {
      backgroundColor: ["#4e1bb4", "#8250e5", "#ff8145", "#ff4545"],
      data: [300, 150, 60, 30, 12],
    },
  ],
};

const natioanData = {
  labels: ["emirati", "indian", "yemeni", "lebanese", "chameroon", "pakistan", "nigeria", "canadian", "british", "brazilian", "jordanian", "algerian", "palestine"],
  datasets: [
    {
      backgroundColor: ["#00A36C", "#8250e5", "#ff8145", "#ff4545"],
      data: [120, 33, 4, 22, 45, 11, 10, 4],
    },
  ],
};

const accData = {
  labels: ["accredited", "not accredited"],
  datasets: [
    {
      backgroundColor: ["#4e1bb4", "#8250e5"],
      data: [242, 94],
    },
  ],
};

const circleData = {
  labels: ["circle 0", "circle 1", "circle 2", "circle 3", "circle 4", "circle 5", "circle 6"],
  datasets: [
    {
      backgroundColor: ["#4e1bb4", "#8250e5", "#ff8145", "#ff4545"],
      data: [20, 60, 30, 41, 34, 86, 5],
    },
  ],
};

const paceData = {
  labels: ["pace 8", "pace 12", "pace 15", "pace 18", "pace 22", "pace 24"],
  datasets: [
    {
      backgroundColor: ["#4e1bb4", "#8250e5", "#ff8145", "#ff4545"],
      data: [10, 45, 60, 11, 63, 86, 50],
    },
  ],
};

export default {
  name1: "DoughnutChart",
  name: "GrayBgActiveWhite",
  methods: {
    activeTab(event, num) {
      let siblings = event.currentTarget.parentNode.querySelectorAll("li");
      for (let item of siblings) {
        item.classList.add("text-slate-700");
        item.classList.add("dark:text-slate-800");
        item.classList.remove("text-slate-200");
        item.classList.remove("bg-slate-400");
        item.classList.remove("dark:bg-slate-200");
      }
      event.currentTarget.classList.remove("text-slate-700");
      event.currentTarget.classList.add("text-slate-200");
      event.currentTarget.classList.add("bg-slate-400");
      event.currentTarget.classList.add("dark:bg-slate-200");

      console.log("num is:", num);
      if (num == 1) this.chartData = blackHoleData;
      else if (num == 2) this.chartData = natioanData;
      else if (num == 3) this.chartData = accData;
      else if (num == 4) this.chartData = circleData;
      else if (num == 5) this.chartData = paceData;
    },
  },
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
