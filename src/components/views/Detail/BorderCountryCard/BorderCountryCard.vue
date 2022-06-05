<script setup lang="ts">
type Country = {
  capital: string[]
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }

  flagSource: string
  languages: object
  name: {
    common: string
    official: string
  }
  nativeName: {
    [key: string]: {
      official: string
      common: string
    }
  }
  population: string
  region: string
  subregion: string
  tld: string[]
  cca3: string
  borders: string[]
}

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
