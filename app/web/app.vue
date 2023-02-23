<template>
  <NuxtLayout />
  <NuxtPage />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0.8;
  filter: blur(1px);

}
</style>