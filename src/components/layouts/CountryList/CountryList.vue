<script setup lang="ts">
/*Dependencies */
import { useCountries } from '@store/useCountries'
import { useTheme } from '@store/useTheme'
import { storeToRefs } from 'pinia'
import { Ref, ref } from 'vue'
/*Components */
import CountryItem from './CountryItem/CountryItem.vue'
import SearchInput from '@components/ui/SearchInput/SearchInput.vue'
import FilterDropdown from '@components/ui/FilterDropdown/FilterDropdown.vue'

const { filteredCountries } = storeToRefs(useCountries())
const { isDark } = storeToRefs(useTheme())

const country: Ref<string> = ref<string>('')
const region: Ref<string> = ref<string>('')

function fetchRegion(element: HTMLParagraphElement): void {
  region.value = element.textContent as string
}
</script>

<template>
  <main :class="{ dark: isDark }">
    <div class="container flex flex-jc-sb form-inputs">
      <SearchInput v-model="country" />
      <FilterDropdown @fetchRegion="fetchRegion" />
    </div>
    <div class="countries container grid">
      <CountryItem :countries="filteredCountries(country || region)" />
    </div>
  </main>
</template>

<style scoped lang="scss">
@use './styles';
</style>
