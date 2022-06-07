<script setup lang="ts">
import NavigationBar from '@components/layouts/NavigationBar/NavigationBar.vue'
import { computed, ComputedRef } from 'vue'
import { useCountries } from '@store/useCountries'
import { useTheme } from '@store/useTheme'
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
import BorderCountryCard from './BorderCountryCard/BorderCountryCard.vue'
import { Country } from '../../../models/Country'
import { storeToRefs } from 'pinia'

const route: RouteLocationNormalizedLoaded = useRoute()
const { getCountry, getCountryNameFromCode } = useCountries()
const { isDark } = storeToRefs(useTheme())
const country: ComputedRef<Country> = computed((): Country => getCountry(route.params.country))
const borderCountry: ComputedRef<Country[] | undefined> = computed((): Country[] | undefined => {
  return getCountryNameFromCode(route.params.country)
})
</script>

<template>
  <section>
    <NavigationBar />
    <section class="detail container" :class="{ dark: isDark }">
      <router-link
        to="/"
        tag="div"
        :class="{ 'dark-element': isDark }"
        class="detail__back-button flex flex-ai-c"
      >
        <img
          class="detail__back-button__icon"
          src="../../../assets/images/arrow-back.svg"
          alt="go back"
        />
        <p>Back</p>
      </router-link>

      <div class="detail__country flex">
        <img
          class="detail__country__flag"
          :src="country.flagSource"
          :alt="'This is the ' + country.name.common + 'flag'"
        />
        <div class="detail__country__desc grid">
          <h1 class="detail__country__desc--title">{{ country.name.common }}</h1>
          <div class="detail__country__desc--info grid">
            <div>
              <p>
                <strong class="detail__country__desc--subtitle">Population:</strong>
                {{ country.population }}
              </p>
              <p>
                <strong class="detail__country__desc--subtitle">Region:</strong>
                {{ country.region }}
              </p>
              <p v-if="country.subregion">
                <strong class="detail__country__desc--subtitle">Sub Region:</strong>
                {{ country.subregion }}
              </p>
              <p v-if="country.capital">
                <strong class="detail__country__desc--subtitle">Capital:</strong>
                {{ country.capital && country.capital.join() }}
              </p>
            </div>
            <div>
              <p>
                <strong class="detail__country__desc--subtitle">Top Level Domain:</strong>
                {{ country.tld.join() }}
              </p>
              <p v-if="country.currencies">
                <strong class="detail__country__desc--subtitle">Currencies:</strong>
                {{ country.currencies && Object.values(country.currencies)[0].name }}
              </p>
              <p>
                <strong class="detail__country__desc--subtitle">Languages:</strong>
                {{ Object.values(country?.languages).join(', ') }}
              </p>
            </div>
          </div>
          <div v-if="borderCountry" class="detail__country__desc--border grid">
            <p class="detail__country__desc--subtitle">Border Countries:</p>
            <div class="flex">
              <BorderCountryCard :borderCountry="borderCountry" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">
@use './styles';
</style>
