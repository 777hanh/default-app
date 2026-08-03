import { defineStore } from 'pinia'

type ThemeMode = 'light' | 'dark' | 'system'

export const useThemeStore = defineStore('theme', () => {
  const mode = ref<ThemeMode>('system')

  // Native composable — no external library needed
  const systemPrefersDark = ref(false)

  // Only run on the client
  onMounted(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    systemPrefersDark.value = mq.matches
    mq.addEventListener('change', (e) => {
      systemPrefersDark.value = e.matches
    })
  })

  const isDark = computed(() => {
    if (mode.value === 'dark') return true
    if (mode.value === 'light') return false
    return systemPrefersDark.value
  })

  function setMode(newMode: ThemeMode) {
    mode.value = newMode
  }

  function toggleDark() {
    mode.value = isDark.value ? 'light' : 'dark'
  }

  return { mode, isDark, systemPrefersDark, setMode, toggleDark }
})
