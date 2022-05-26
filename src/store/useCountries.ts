/*Dependencies */
import { defineStore } from 'pinia'
import axios from 'axios'

type countries = {
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
    countries: [] as countries[],
  }),

  actions: {
    async fetchCountries() {
      const response = (await axios.get('https://restcountries.com/v3.1/all')).data

      this.countries = response.map((country: any) => {
        return { ...country, flagSource: country.flags.svg }
      })
    },
  },
})