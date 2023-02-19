<template>
  <div class="flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-100 via-teal-300 to-teal-500">
    <div class="rounded-xl bg-gray-400 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div class="text-white">
        <div class="mb-4 flex flex-col items-center">
          <img src="/42_logo.png" width="150" alt="42 logo" srcset="" />
        </div>
        <div class="flex justify-center items-center mb-3">
          <span class="w-full border border-grey"></span>
          <span class="px-3 whitespace-nowrap">Login with</span>
          <span class="w-full border border-grey"></span>
        </div>
        <HoverButton @click="LoginWithIntra">
          Intra
        </HoverButton>
      </div>
    </div>
  </div>
</template>



<script setup>

  definePageMeta({
    layout: "animated-background",
    middleware: 'auth'
  });

  const config = useRuntimeConfig()
  const LoginWithIntra = async () => {
    window.location.href = config.public.intra_auth_uri
  }

</script>
