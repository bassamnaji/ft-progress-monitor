<template>
  <div class="container px-4 mx-auto">
    <div class="relative pt-14 bg-slate-200 dark:bg-slate-700 shadow rounded overflow-hidden">
      <img class="absolute top-0 left-0 w-full h-24 object-cover" src="https://images.unsplash.com/photo-1621246159024-e53b1d25fc1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Njk4NDUwMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
      <img class="relative w-16 h-16 mb-4 mx-auto rounded-full object-cover hoverZoomLink object-center" src="~/assets/images/bnaji.jpg" alt=""/>
      <div class="px-6 text-center">
        <div class="absolute">
          <svg class="absolute  fill-purple-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8250e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
            <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/>
          </svg>
          <svg class="absolute ml-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ed6c00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <h3 class="font-medium text-slate-800 dark:text-slate-200">Bnaji</h3>
        <p class="mb-2 text-sm text-slate-700 dark:text-slate-100">Bassam Naji</p>
        <div class="flex items-center justify-center mb-6"><span class="mr-2">
            <svg width="18" height="14" viewbox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.8332 0.333496H3.16656C2.50352 0.333496 1.86764 0.596888 1.3988 1.06573C0.929957 1.53457 0.666565 2.17045 0.666565 2.8335V11.1668C0.666565 11.8299 0.929957 12.4658 1.3988 12.9346C1.86764 13.4034 2.50352 13.6668 3.16656 13.6668H14.8332C15.4963 13.6668 16.1322 13.4034 16.601 12.9346C17.0698 12.4658 17.3332 11.8299 17.3332 11.1668V2.8335C17.3332 2.17045 17.0698 1.53457 16.601 1.06573C16.1322 0.596888 15.4963 0.333496 14.8332 0.333496ZM3.16656 2.00016H14.8332C15.0542 2.00016 15.2662 2.08796 15.4225 2.24424C15.5788 2.40052 15.6666 2.61248 15.6666 2.8335L8.9999 6.90016L2.33323 2.8335C2.33323 2.61248 2.42103 2.40052 2.57731 2.24424C2.73359 2.08796 2.94555 2.00016 3.16656 2.00016ZM15.6666 11.1668C15.6666 11.3878 15.5788 11.5998 15.4225 11.7561C15.2662 11.9124 15.0542 12.0002 14.8332 12.0002H3.16656C2.94555 12.0002 2.73359 11.9124 2.57731 11.7561C2.42103 11.5998 2.33323 11.3878 2.33323 11.1668V4.7335L8.56657 8.54183C8.69325 8.61497 8.83695 8.65347 8.98323 8.65347C9.12951 8.65347 9.27322 8.61497 9.3999 8.54183L15.6666 4.7335V11.1668Z" fill="#8a2be2"></path>
            </svg>
          </span>
          <a class="text-sm text-slate-600 dark:text-slate-300" src="bnaji@student.42abudhabi.ae">bnaji@student.42abudhabi.ae</a>
        </div>
        <div class="mb-6 grid md:grid-cols-3 gap-8">
          <a class="w-auto col-start-2 h-auto p-5 text-slate-700 bg-slate-100 dark:bg-slate-500 ease-in duration-200 hover:text-purple-700 hover:bg-slate-300 rounded-full" href="#">
            ft_transcendence
          </a>
          <a class="col-span-3 justify-center w-auto h-auto p-5 text-slate-700 bg-slate-100 dark:bg-slate-500 ease-in duration-200 hover:text-purple-900 hover:bg-slate-300 rounded-full" href="#">
            exam_rank_06
          </a>
        </div>
      </div>
          <NuxtLink to="/studyplan" class="flex justify-center w-full h-20 py-5 border-t border-gray-400 text-xs text-slate-400 dark:text-white ease-in duration-200 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-slate-300 dark:hover:bg-slate-600 uppercase">
            <span class="text-lg">study plan</span>
            <svg class="m-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
          </NuxtLink>
    </div>
  </div>
</template>