<template>
  <div class="container px-4 mx-auto">
    <div class="relative p-10 pt-14 bg-slate-700 shadow-xl rounded overflow-hidden">
      <Tabs />
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script lang="ts">
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

const weekData = {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Login Hours',
      borderColor: '#ff8a76',
      backgroundColor: '#ff8a76',
      color: '#fff',
      data: [6, 12, 11, 7, 13, 11, 9]
    }
  ]
}

const monthData = {
  labels: ['week1', 'week2', 'week3', 'week4'],
  datasets: [
    {
      label: 'Login Hours',
      borderColor: '#ff8a76',
      backgroundColor: '#ff8a76',
      color: '#fff',
      data: [73, 56, 65, 60]
    }
  ]
}

export default {
  name: 'LoginHours',
  components: {
    Line
  },
  data() {
    return {
      chartData: weekData,
      chartOptions: {
        color: '#fff',
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
</script>
