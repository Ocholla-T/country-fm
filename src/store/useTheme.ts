import { defineStore } from 'pinia'

export type RootState = {
  isDark: boolean
}

export const useTheme = defineStore('theme', {
  state: () => ({
    isDark: false as boolean,
  }),
  actions: {
    changeTheme() {
      this.isDark = !this.isDark
    },
  },
})
