<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="grid max-w-2xl mx-auto">
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 opacity-0 sm:h-full"></div>
          <div>
            <div class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
              c-0
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <!-- Big Cirlce Color is down here -->
            <div :style="{ backgroundColor: color[0] }" class="flex items-center justify-center w-16 h-16 my-3 rounded-full sm:w-24 sm:h-24">
              <!-- Icon can be changed here -->
              <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
          </div>
          <div>
            <p class="text-xl font-semibold sm:text-base">Libft</p>
            <p class="text-sm text-gray-700">
              Libft should be done in 03/01/2023
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
              c-1
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div :style="{ backgroundColor: color[1] }" class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
          </div>
          <div>
            <p class="text-xl font-semibold sm:text-base">Born, Get, Print</p>
            <p class="text-sm text-gray-700">
              They should be done quick
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
              c-2
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div :style="{ backgroundColor: color[2] }" class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
          </div>
          <div>
            <p class="text-xl font-semibold sm:text-base">Push Swap, Pixel, Mini-Pipe</p>
            <p class="text-sm text-gray-700">
              They should be done quick
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
              c-3
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div :style="{ backgroundColor: color[3] }" class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
          </div>
          <div>
            <p class="text-xl font-semibold sm:text-base">Philo, Minishell</p>
            <p class="text-sm text-gray-700">
              They should be done quick
            </p>
            <p class="text-sm text-gray-700">
              They should be done quick
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
              c-4
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div :style="{ backgroundColor: color[4] }" class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
          </div>
          <div>
            <p class="text-xl font-semibold sm:text-base">Cpp, Cub-Rt, Netpractice</p>
            <p class="text-sm text-gray-700">
              They should be done quick
            </p>
            <p class="text-sm text-gray-700">
              They should be done quick
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
              c-5
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div :style="{ backgroundColor: color[5] }" class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
          </div>
          <div>
            <p class="text-xl font-semibold sm:text-base">Inception, IRC, Containers</p>
            <p class="text-sm text-gray-700">
              They should be done quick
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
              c-6
            </div>
          </div>
          <div class="w-px h-full opacity-0"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div :style="{ backgroundColor: color[6] }" class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
          </div>
          <div>
            <p class="text-xl font-semibold sm:text-base">Transendnece</p>
            <p class="text-sm text-gray-700">
              They should be done quick
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

// after we fetch, we get the circle number, student is an object to test, the circle property is set to 3 in this example and can be changed to 7 max;
const student = {
  // change color to see design change
  circle: 4
}

// we are destructuring the circle propert from the student object and setting it to num
const {circle: num} = student;

// this is an array of the color of each circle, there are 7 elements from 0 to 6 corresponding to circle numbers, they're all
// set to the color 42 theme grey
let color = ["#414141", "#414141", "#414141", "#414141", "#414141", "#414141", "#414141"];


// loop untill the current cirle and mark every completed cirlce with color green
let i;
for (i = 0; i < num; i++)
{
    color[i] = "#00FA9A";
}

// mark the current circle with blue
color[i] = "#0437F2";

</script>

<style scoped>

</style>