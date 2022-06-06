export type Country = {
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
