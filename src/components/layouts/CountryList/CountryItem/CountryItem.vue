<script setup lang="ts">
import { storeToRefs } from 'pinia'
// @ts-ignore
import { useTheme } from '@store/useTheme'
// @ts-ignore
import { useCountries } from '@store/useCountries'
import { gsap } from 'gsap'
import { Ref, ref } from 'vue'
import { Router, useRouter } from 'vue-router'
import { Country } from '../../../../models/Country'

defineProps<{
  countries: Country[]
}>()

const card: Ref<HTMLDivElement[]> = <Ref<HTMLDivElement[]>>ref([])
const { isDark } = storeToRefs(useTheme())
const { getCountry } = useCountries()
const router: Router = useRouter()

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

function goToDetailPage(name: string) {
  let country: string = getCountry(name).name.common
  return router.push({
    name: 'Detail',
    params: {
      country,
    },
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
    @click="goToDetailPage(country.name.common)"
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
