/*Dependencies */
import { defineStore } from 'pinia'
import { Country } from '../models/Country'
import axios from 'axios'

export const useCountries = defineStore('countries', {
  state: () => ({
    countries: [] as Country[],
  }),
  persist: {
    paths: ['countries'],
  },
  getters: {
    filteredCountries: (state: { countries: Country[] }) => {
      return (country: string): Country[] =>
        state.countries.filter((element: Country): RegExpMatchArray | null => {
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
    getCountry: (state: { countries: Country[] }): Function => {
      return (commonName: string): Country | undefined =>
        state.countries.find((element: Country) => element.name.common === commonName)
    },
    getCountryNameFromCode: (state: { countries: Country[] }): Function => {
      return (name: string): Country[] | undefined => {
        let country: Country | undefined = state.countries.find(
          (element: Country) => element.name.common === name,
        )
        if (country?.borders !== undefined) {
          let borderCountries: Country[] = country.borders.map((code: string) =>
            state.countries.find((element) => element.cca3 === code),
          ) as Country[]

          return borderCountries
        }

        return
      }
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
