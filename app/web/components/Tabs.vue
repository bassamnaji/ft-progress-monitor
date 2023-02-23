<template>
  <div class="">
      <div class="flex justify-end items-end mx-auto">
          <div class="justify-evenly sm:block ">
              <div class="px-3 md:px-5 bg-slate-600 h-8 md:h-12 border rounded-lg">
                  <ul class="flex items-center bg-slate-600 h-full">
                      <li @click="activeTab($event)" class="flex items-center justify-center text-sm bg-slate-200 text-slate-800 py-0.5 px-3 md:px-5 md:py-2 font-normal rounded-md hover:text-gray-800 cursor-pointer">Week</li>
                      <li @click="activeTab($event)" class="flex items-center justify-center text-sm text-slate-800 py-0.5 md:py-2 px-3 md:px-5 rounded-md font-normal hover:text-gray-800 cursor-pointer">Month</li>
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
              item.classList.add("text-gray-600");
              item.classList.remove("text-gray-800");
              item.classList.remove("bg-slate-200");
          }
          event.currentTarget.classList.remove("text-gray-600");
          event.currentTarget.classList.add("text-gray-800");
          event.currentTarget.classList.add("bg-slate-200");
          
      },
  },
};
</script>