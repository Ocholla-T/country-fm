<script setup lang="ts">
import { Country } from '../../../../models/Country'

defineProps<{
  borderCountry: Country[] | undefined
}>()
</script>

<template>
  <div class="border-card" v-for="(country, index) in borderCountry" :key="index">
    <p>{{ country.name.common }}</p>
  </div>
</template>

<style scoped lang="scss">
@use './styles';
</style>
