import { defineStore } from 'pinia'

type RootState = {
  isDark: boolean
}

export const useTheme = defineStore('theme', {
  state: (): RootState => ({
    isDark: false,
  }),
  actions: {
    changeTheme(): void {
      this.isDark = !this.isDark
    },
  },
})
