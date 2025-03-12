import { create } from 'zustand'

type ThemeState = {
  darkMode: boolean
  fontSize: 'sm' | 'base' | 'lg' | 'xl'
  toggleTheme: () => void
  setFontSize: (size: ThemeState['fontSize']) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  darkMode: true,
  fontSize: 'base',
  toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),
  setFontSize: (size) => set({ fontSize: size }),
}))