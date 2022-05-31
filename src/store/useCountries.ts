/*Dependencies */
import { defineStore } from 'pinia'
import axios from 'axios'

type country = {
  capital: string[]
  flagSource: string
  name: {
    common: string
    official: string
  }
  population: string
  region: string
}

export const useCountries = defineStore('countries', {
  state: () => ({
    countries: [] as country[],
  }),
  getters: {
    filteredCountries: (state) => {
      return (country: string) =>
        state.countries.filter((element: country): RegExpMatchArray | null => {
          if (
            country === 'Africa' ||
            country === 'Europe' ||
            country === 'Asia' ||
            country === 'Oceania' ||
            country === 'Americas'
          ) {
            return element.region.toUpperCase().match(country.toUpperCase())
          }
          return element.name.common.toUpperCase().match(country.toUpperCase())
        })
    },
  },
  actions: {
    async fetchCountries(): Promise<void> {
      const response: object[] = (await axios.get('https://restcountries.com/v3.1/all')).data

      this.countries = response.map((country: any) => ({
        ...country,
        flagSource: country.flags.svg,
      }))
    },
  },
})
