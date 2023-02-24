<template>
    <div class="relative p-10 pt-14 bg-slate-200 dark:bg-slate-700 shadow-xl rounded overflow-hidden">
      <div class="">
      <div class="flex justify-end items-end mx-auto">
          <div class="justify-evenly sm:block ">
              <div class="px-3 md:px-5 bg-slate-300 dark:bg-slate-600 h-8 md:h-12 border rounded-lg">
                  <ul class="flex items-center bg-slate-300 dark:bg-slate-600 h-full">
                      <li @click="activeTab($event, 2)" class="flex items-center justify-center text-sm bg-slate-400 text-slate-200 dark:bg-slate-200 dark:text-slate-800 py-0.5 px-3 md:px-5 md:py-2 font-normal rounded-md hover:text-gray-900 dark:hover:text-slate-900 ease-in duration-150 cursor-pointer">Week</li>
                      <li @click="activeTab($event, 3)" class="flex items-center justify-center text-sm text-slate-700 dark:text-slate-800 py-0.5 md:py-2 px-3 md:px-5 rounded-md font-normal hover:text-gray-900 dark:hover:text-slate-300 ease-in duration-100 cursor-pointer">Month</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
      <Line :data="chartData" :options="chartOptions" />
    </div>
</template>

<script lang="ts">

import { dataToEsm } from '@rollup/pluginutils';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
let numprop = 2;

const weekData = {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Login Hours',
      borderColor: '#ff8a76',
      backgroundColor: '#ff8a76',
      data: [6, 12, 11, 7, 13, 11, 9]
    }
  ]
};


let chartData = weekData
let chartOptions = {
  color: '#999',
  responsive: true,
  scales: {
    x: {
      grid: {
        borderColor: '#ff8a76',
        color: '#666'
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        color: '#666'
      }
    },
  }
}
let dataTest = weekData

// weekData.value.datasets[0].data[1] = 120;
export default {
  name: "GrayBgActiveWhite",
  methods: {
      activeTab(event: any, num: number) {
          let siblings: any = event.currentTarget.parentNode.querySelectorAll("li");
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
          if (num == 2)
            dataTest = weekData;
            else
            dataTest = monthData
          this.chartData = dataTest
          console.log(this.chartData);
      },
  },
  name1: 'LoginHours',
  components: {
    Line
  },
  data() {
    return {
      chartData: dataTest,
      chartOptions: {
        color: '#999',
        responsive: true,
        scales: {
          x: {
            grid: {
              borderColor: '#ff8a76',
              color: '#666'
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: '#666'
            }
          },
        }
      }
    }
  }
}

const monthData = {
  labels: ['week1', 'week2', 'week3', 'week4'],
  datasets: [
    {
      label: 'Login Hours',
      borderColor: '#ff8a76',
      backgroundColor: '#ff8a76',
      data: [73, 56, 65, 60]
    }
  ]
}


</script>
