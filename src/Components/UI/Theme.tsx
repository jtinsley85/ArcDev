import { createMuiTheme } from '@material-ui/core/styles'

const arcColors = {
  blue: '#0B72B9',
  orange: '#FFBA60',
}

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    orange: string;
    blue: string;
  }
}

const theme = createMuiTheme({
  palette: {
    common: {
      orange: `${arcColors.orange}`,
      blue: `${arcColors.blue}`
    },
    primary: {
      main: `${arcColors.blue}`
    },
    secondary: {
      main: `${arcColors.orange}`
    }
  },
  typography: {
    h3: {
      fontWeight: 300
    }
  }
})

export default theme;