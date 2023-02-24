<template>
  <button class="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-inherit border border-transparent rounded-md lg:inherit lg:dark:bg-inherit dark:text-slate-200 dark:bg-current hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 active:bg-gray-50" @click="switchTheme(colorMode.preference)">
    <svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 20 20" fill="currentColor" class="w-5 h-5">
      <path fill-rule="evenodd" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" clip-rule="evenodd"></path>
    </svg>
  </button>
</template>


<script setup>
  const colorMode = useColorMode()
</script>