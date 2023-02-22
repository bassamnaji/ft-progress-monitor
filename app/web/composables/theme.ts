export const switchTheme = (theme: string, modeIcon: string) => {
  const colorMode = useColorMode()
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}