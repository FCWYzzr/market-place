<template>
  <nut-config-provider :theme="darkThemeStore.darkTheme">
    <RouterView />
  </nut-config-provider>
</template>

<script setup lang="ts">
import useDarkThemeStore from '@/store/darkTheme/index'

const darkThemeStore = useDarkThemeStore()

// onBeforeMount(()=> {
//   resetUser()
// })
</script>

<style scoped></style>