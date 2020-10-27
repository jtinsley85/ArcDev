import { createMuiTheme } from '@material-ui/core/styles'


//PALETTE AUGMENTATIONS
declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    blue?: string;
    orange?: string;
  }
}

//TYPOGRAPHY AUGMENTATIONS
declare module '@material-ui/core/styles/createTypography' {
  interface Typography {
    headerTab?: TypographyStyleOptions;
    headerBtn?: TypographyStyleOptions;
  }
  interface TypographyOptions {
    headerTab?: TypographyStyleOptions;
    headerBtn?: TypographyStyleOptions;
  }
}

//CUSTOM COLORS
const arcColors = {
  blue: '#0B72B9',
  orange: '#FFBA60',
}

//THEME & CUSTOM PALETTE DEFINITION
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
})

//TYPOGRAPHY DEFINITIONS
theme.typography = {
  ...theme.typography,  //spread in base typography defs.
  headerTab: {
    fontFamily: 'Raleway',
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '.9rem',
  },
  headerBtn: {
    fontSize: '1rem',
    fontFamily: 'Pacifico',
    textTransform: 'none',
    color: 'white',
    whiteSpace: 'nowrap',
  }
}

//COMPONENT GLOBAL OVERRIDES
theme.overrides = {
}

//COMPONENT PROP DEFAULTS
theme.props = {
  MuiButton: {
    disableRipple: true,
  },
  MuiTab: {
    disableRipple: true,
  }
}

export default theme;

