<template>
  <div>
    <h1>Welcome to the homepage</h1>
  </div>
  <HoverButton @click="logout">
    Logout
  </HoverButton>
</template>

<script setup>

const logout = () => {
  useLogout()
  window.location.href = '/login'
}

</script>
