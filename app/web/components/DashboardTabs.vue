<template>
  <div class="">
      <div class="flex justify-center items-end mx-auto">
          <div class="justify-evenly sm:block w-full ">
              <div class="px-3 md:px-5 bg-slate-300 dark:bg-slate-600 h-8 md:h-12 border rounded-lg">
                  <ul class="flex items-center bg-slate-300 dark:bg-slate-600 h-full">
                      <li @click="activeTab($event)" class="flex items-center justify-center text-sm bg-slate-400 text-slate-200 dark:bg-slate-200 dark:text-slate-800 py-0.5 px-3 md:px-5 md:py-2 font-normal rounded-md hover:text-gray-900 dark:hover:text-slate-900 ease-in duration-150 cursor-pointer whitespace-nowrap">Black Hole</li>
                      <li @click="activeTab($event)" class="flex items-center justify-center text-sm text-slate-700 dark:text-slate-800 py-0.5 md:py-2 px-3 md:px-5 rounded-md font-normal hover:text-gray-900 dark:hover:text-slate-300 ease-in duration-100 cursor-pointer whitespace-nowrap">hello</li>
                      <li @click="activeTab($event)" class="flex items-center justify-center text-sm text-slate-700 dark:text-slate-800 py-0.5 md:py-2 px-3 md:px-5 rounded-md font-normal hover:text-gray-900 dark:hover:text-slate-300 ease-in duration-100 cursor-pointer whitespace-nowrap">Accredit Path</li>
                      <li @click="activeTab($event)" class="flex items-center justify-center text-sm text-slate-700 dark:text-slate-800 py-0.5 md:py-2 px-3 md:px-5 rounded-md font-normal hover:text-gray-900 dark:hover:text-slate-300 ease-in duration-100 cursor-pointer whitespace-nowrap">sdfj klj</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "GrayBgActiveWhite",
  methods: {
      activeTab(event) {
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
          
      },
  },
};
</script>