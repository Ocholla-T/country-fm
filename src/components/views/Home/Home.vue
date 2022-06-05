<script setup lang="ts">
import NavigationBar from '@components/layouts/NavigationBar/NavigationBar.vue'
import CountryList from '@components/layouts/CountryList/CountryList.vue'
// @ts-ignore
import { useCountries } from '@store/useCountries'
import { onBeforeMount } from 'vue'

const { fetchCountries } = useCountries()

onBeforeMount(() => {
  fetchCountries()
})
</script>

<template>
  <NavigationBar />
  <CountryList />
</template>
