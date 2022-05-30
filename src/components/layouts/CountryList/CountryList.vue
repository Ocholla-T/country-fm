<script setup lang="ts">
/*Dependencies */
// @ts-ignore
import { useCountries } from '@store/useCountries'
// @ts-ignore
import { useTheme } from '@store/useTheme'
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'
/*Components */
import CountryItem from './CountryItem/CountryItem.vue'
import SearchInput from '@components/ui/SearchInput/SearchInput.vue'

const { filteredCountries } = storeToRefs(useCountries())
const { isDark } = storeToRefs(useTheme())
const { fetchCountries } = useCountries()
const text = ref('')

onBeforeMount(() => {
  fetchCountries()
})
</script>

<template>
  <main :class="{ dark: isDark }">
    <div class="container flex">
      <SearchInput v-model="text" />
    </div>
    <div class="countries container grid">
      <CountryItem :countries="filteredCountries(text)" />
    </div>
  </main>
</template>

<style scoped lang="scss">
@use './styles';
</style>
