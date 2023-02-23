<template>
  <div>
    <div class="bg-slate-50 dark:bg-slate-900" >
      <Navbar class="mb-10"/>
      <StudentCard />
      <Boxes class="my-10"/>
      <LineChart class="mt-10"/>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  class: 'dark',
})
const appConfig = useAppConfig();
</script>