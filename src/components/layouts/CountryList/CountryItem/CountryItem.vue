<script setup lang="ts">
import { storeToRefs } from 'pinia'
// @ts-ignore
import { useTheme } from '@store/useTheme'
import { gsap } from 'gsap'
import { Ref, ref } from 'vue'

type Countries = {
  capital: string[]
  flagSource: string
  name: {
    common: string
    official: string
  }
  population: string
  region: string
}

defineProps<{
  countries: Countries[]
}>()

const card = <Ref<HTMLDivElement[]>>ref([])
const { isDark } = storeToRefs(useTheme())

const scaleCard = (index: number): void => {
  gsap.to(card.value[index], {
    scale: 1.05,
    duration: 0.3,
    ease: 'linear.easeInOut',
  })
}

const descaleCard = (index: number): void => {
  gsap.to(card.value[index], {
    scale: 1,
    duration: 0.3,
    ease: 'linear.easeInOut',
  })
}
</script>
<template>
  <section
    v-for="(country, index) in countries"
    :key="index"
    ref="card"
    :class="{ dark: isDark }"
    class="card grid"
    @mouseenter="scaleCard(index)"
    @mouseleave="descaleCard(index)"
  >
    <img
      class="card__image"
      :src="country.flagSource"
      :alt="'This is the' + country.name.common + ' flag'"
    />

    <div class="card__information">
      <h3>{{ country.name.common }}</h3>
      <p>
        Population: <span> {{ country.population }}</span>
      </p>
      <p>
        Region: <span>{{ country.region }} </span>
      </p>
      <p>
        Capital: <span>{{ country.capital && country.capital[0] }} </span>
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use './styles.scss';
</style>
