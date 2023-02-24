<template>
  <div class="bg-slate-200 dark:bg-slate-700">
  <Navbar />
    <div class="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  
      <div class="col-span-2 grid grid-cols-2">
        
        <DashboardBox  />
        <DashboardBox />
        <DashboardBox />
        <DashboardBox />
        
      </div>
      <div class="m-5 col-span-3 lg:col-span-1">
        <DashboardTabs class="mb-2"/>
        <DoughnutChart class="mx-auto" />
      </div>
    </div>
    <UserTable />
  </div>
</template>

<script setup>

  const boxData = [
    {
      title: 'Logged In',
      value: 400,
    },
    {
      title: 'In Progress',
      value: 300,
    },
    {
      title: 'Not Started',
      value: 300,
    },
    {
      title: 'Not Started',
      value: 300,
    },
  ];

</script>
