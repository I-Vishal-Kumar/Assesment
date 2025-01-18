import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // You can switch to 'dark' for dark mode
    primary: {
      main: '#4CAF50', // Green
      light: '#80E27E',
      dark: '#087F23',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF5722', // Orange
      light: '#FF8A50',
      dark: '#C41C00',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F5F5F5', // Light gray
      paper: '#FFFFFF', // White for cards and surfaces
    },
    text: {
      primary: '#212121', // Dark gray for main text
      secondary: '#757575', // Medium gray for secondary text
    },
    error: {
      main: '#F44336',
    },
    warning: {
      main: '#FF9800',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#4CAF50',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.8rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 400,
      lineHeight: 1.7,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none', // Disable uppercase text for buttons
      fontWeight: 500,
    },
  },
  spacing: 8, // Default spacing unit (8px)
  shape: {
    borderRadius: 8, // Rounded corners
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 16px',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#4CAF50',
          '&:hover': {
            backgroundColor: '#388E3C',
          },
        },
        containedSecondary: {
          backgroundColor: '#FF5722',
          '&:hover': {
            backgroundColor: '#E64A19',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#4CAF50',
          color: '#ffffff',
        },
      },
    },
  },
});

export default theme;
