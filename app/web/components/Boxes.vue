<template>
  <div class="container px-4 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="w-full md:w-1/2 p-4">
        <div class="p-6 text-center bg-slate-200 dark:bg-slate-700 rounded shadow">
          <span class="inline-block mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ae05ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
          </span>
          <h3 class="mt-3 mb-1 text-3xl font-bold text-slate-700 dark:text-white">{{ kickoff_date }}</h3>
          <p class="text-sm text-slate-800 dark:text-slate-200 font-medium">Kick off</p>
          <span class="text-slate-400 dark:text-slate-500">Date</span>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-4">
        <div class="p-6 text-center bg-slate-200 dark:bg-slate-700 rounded shadow"><span class="inline-block mx-auto">
            <img width="30" height="30" viewbox="0 0 28 26" fill="none" src="~/assets/images/black-hole.png">
          </span>
          <h3 class="mt-3 mb-1 text-3xl font-bold text-slate-700 dark:text-white">54</h3>
          <p class="text-sm text-slate-800 dark:text-slate-200 font-medium">Blackhole Days</p>
          <span class="text-slate-400 dark:text-slate-500">Remained</span>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-4">
        <div class="p-6 text-center bg-slate-200 dark:bg-slate-700 rounded shadow">
          <span class="inline-block mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ff5e05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          </span>
          <h3 class="mt-3 mb-1 text-3xl font-bold text-slate-700 dark:text-white">31</h3>
          <p class="text-sm text-slate-800 dark:text-slate-200 font-medium">Login Hours</p>
          <span class="text-slate-400 dark:text-slate-500">Today</span>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-4">
        <div class="p-6 text-center bg-slate-200 dark:bg-slate-700 rounded shadow">
          <span class="inline-block mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#2a9dfd" class="bi bi-snow2" viewBox="0 0 16 16"> <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.086l-.646.647a.5.5 0 0 1-.707-.708L7.5 10.293V8.866l-1.236.713-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-.94.542-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495.94-.542-.882-.237a.5.5 0 1 1 .258-.966l1.85.495L7 8l-1.236-.713-1.849.495a.5.5 0 1 1-.258-.966l.883-.237-.94-.542-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 0 1 .966-.258l.495 1.849.94.542-.236-.883a.5.5 0 0 1 .966-.258l.495 1.849 1.236.713V5.707L6.147 4.354a.5.5 0 1 1 .707-.708l.646.647V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.086l.647-.647a.5.5 0 1 1 .707.708L8.5 5.707v1.427l1.236-.713.495-1.85a.5.5 0 1 1 .966.26l-.236.882.94-.542.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-.94.542.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l1.236.713 1.849-.495a.5.5 0 0 1 .259.966l-.883.237.94.542 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-.94-.542.236.883a.5.5 0 0 1-.966.258L9.736 9.58 8.5 8.866v1.427l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647v1.086l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"/> </svg>
          </span>
          <h3 class="mt-3 mb-1 text-3xl font-bold text-slate-700 dark:text-white">80</h3>
          <p class="text-sm text-slate-800 dark:text-slate-200 font-medium">Freeze Days</p>
          <span class="text-slate-400 dark:text-slate-500">Remained</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  let today = new Date();
  let kickoff_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
</script>