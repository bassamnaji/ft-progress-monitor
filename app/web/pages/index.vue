<template>
  <div>
    <h1>Welcome to the homepage</h1>
  </div>
  <HoverButton @click="logout">
    Logout
  </HoverButton>
  <button @click="fetchMe" class="border p-10 bg-slate-200">Fetch</button>
</template>

<script setup>


const logout = () => {
  useLogout()
  window.location.href = '/login'
}
const { data, error } = await useFetchMe(useCookie('access_token').value)

</script>


