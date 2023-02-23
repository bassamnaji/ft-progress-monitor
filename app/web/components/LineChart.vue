<template>
  <div class="container px-4 mx-auto">
    <div class="relative p-10 pt-14 bg-slate-700 shadow-xl rounded overflow-hidden">
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

const mydata = {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Login Hours',
      borderColor: '#ff8a76',
      backgroundColor: '#820bbb',
      color: '#fff',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
}

export default {
  name: 'App',
  components: {
    Line
  },
  data() {
    return {
      chartData: {
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
          {
            label: 'Login Hours',
            borderColor: '#ff8a76',
            backgroundColor: '#ff8a76',
            borderWidth: 2,
            data: [40, 39, 10, 40, 39, 80, 40]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        lineTension: 0.2,
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
