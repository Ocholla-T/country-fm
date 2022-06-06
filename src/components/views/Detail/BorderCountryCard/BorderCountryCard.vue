<script setup lang="ts">
import { Country } from '@models/Country'
import { useTheme } from '@store/useTheme'
import { storeToRefs } from 'pinia'

const { isDark } = storeToRefs(useTheme())

defineProps<{
  borderCountry: Country[] | undefined
}>()
</script>

<template>
  <div
    :class="{ dark: isDark }"
    class="border-card"
    v-for="(country, index) in borderCountry"
    :key="index"
  >
    <p>{{ country.name.common }}</p>
  </div>
</template>

<style scoped lang="scss">
@use './styles';
</style>
