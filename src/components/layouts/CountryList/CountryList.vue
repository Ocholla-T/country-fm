<script setup lang="ts">
/*Dependencies */
// @ts-ignore
import { useCountries } from '@store/useCountries'
// @ts-ignore
import { useTheme } from '@store/useTheme'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
/*Components */
import CountryItem from './CountryItem/CountryItem.vue'

const { countries } = storeToRefs(useCountries())
const { isDark } = storeToRefs(useTheme())
const { fetchCountries } = useCountries()

onBeforeMount(() => {
  fetchCountries()
})
</script>

<template>
  <main :class="{ dark: isDark }" class="countries container grid">
    <CountryItem :countries="countries" />
  </main>
</template>

<style scoped lang="scss">
@use './styles';
</style>
