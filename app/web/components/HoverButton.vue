<template>
  <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div class="absolute inset-0 w-3 bg-purple-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-black group-hover:text-white">
      <slot />
    </span>
  </button>
</template>
