<script setup lang="ts">
import { useCountries } from '@store/useCountries'
import { onBeforeMount } from 'vue'

const { fetchCountries } = useCountries()

onBeforeMount(() => {
  fetchCountries()
})
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@use '@styles/main';
</style>
