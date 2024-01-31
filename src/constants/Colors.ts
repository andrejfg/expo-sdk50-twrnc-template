import {
  Theme,
  DarkTheme as DefaultDarkTheme,
  DefaultTheme as DefaultLightTheme,
} from '@react-navigation/native'
import tailwindConfig from 'tailwind.config'

const DarkTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultDarkTheme.colors,
    primary: tailwindConfig.theme.extend.colors.dark.tint,
    background: tailwindConfig.theme.extend.colors.dark.background,
    text: tailwindConfig.theme.extend.colors.dark.text,
  },
}

const LightTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultLightTheme.colors,
    primary: tailwindConfig.theme.extend.colors.light.tint,
    background: tailwindConfig.theme.extend.colors.light.background,
    text: tailwindConfig.theme.extend.colors.light.text,
  },
}

export { DarkTheme, LightTheme }
