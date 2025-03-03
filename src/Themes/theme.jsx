import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { typographyCategory } from '../Constants/typography'

const baseTheme = createTheme({
  palette: {
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: typographyCategory.base,
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      '@media (max-width:900px)': { fontSize: '2.5rem' }, // Tablet
      '@media (max-width:600px)': { fontSize: '2rem' } // Mobile
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      '@media (max-width:900px)': { fontSize: '2rem' },
      '@media (max-width:600px)': { fontSize: '1.75rem' }
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      '@media (max-width:900px)': { fontSize: '1.75rem' },
      '@media (max-width:600px)': { fontSize: '1.5rem' }
    },
    body1: {
      fontSize: '1rem',
      '@media (max-width:900px)': { fontSize: '0.95rem' },
      '@media (max-width:600px)': { fontSize: '0.9rem' }
    },
    button: {
      fontWeight: 600
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#fff',
          fontFamily: typographyCategory.base.primary
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '40px',
          padding: '8px 20px',
          whiteSpace: 'nowrap',
          fontSize: '0.7rem',
          backgroundColor: '#FC800A',
          '&:hover': {
            backgroundColor: '#000'
          }
        }
      }
    }
  }
})

const theme = responsiveFontSizes(baseTheme)

export default theme
