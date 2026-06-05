import { createTheme } from '@mui/system'

const theme = createTheme({
    palette: {
        primary: {
            main: '#5C3D2E',
            light: '#8B6048',
            dark: '#3D251A',
            contrastText: '#FAF6EE',
        },
        secondary: {
            main: '#C2603A',
            light: '#E8856A',
            dark: '#944324',
            contrastText: '#FAF6EE',
        },
        background: {
            default: '#FAF6EE',
            paper: '#F5EFE0',
        },
        text: {
            primary: '#5C3D2E',
            secondary: '#2E5038',
        },
    },

    typography: {
        fontFamily: '"DM Sans", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
        },
        h2: {
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
        }
    }
})

export default theme;