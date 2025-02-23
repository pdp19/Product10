import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f8f8f8', // Light grey background for a neutral, clean look
      paper: '#ffffff',   // White background for cards and modals
    },
    primary: {
      main: '#6a1b9a',     // Deep purple for primary actions (royal and professional)
      contrastText: '#fff' // White text for contrast
    },
    secondary: {
      main: '#ffb74d',     // Soft peach for secondary actions (warm and inviting)
      contrastText: '#fff' // White text for contrast
    },
    error: {
      main: '#e57373',     // Soft red for error states (subtle yet noticeable)
    },
    text: {
      primary: '#212121',  // Dark grey for primary text
      secondary: '#757575', // Medium grey for secondary text
    },
    action: {
      active: '#6a1b9a',    // Active state for icons in purple
    },
  },
  typography: {
    fontFamily: `'Open Sans', sans-serif`, // A clean, modern sans-serif font
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#6a1b9a',   // Deep purple for main headings
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      color: '#6a1b9a',   // Deep purple for secondary headings
    },
    h3: {
      fontWeight: 500,
      fontSize: '2rem',
      color: '#ffb74d',   // Soft peach for tertiary headings
    },
    body1: {
      fontSize: '1rem',
      color: '#212121', // Dark grey for body text
    },
    body2: {
      fontSize: '0.875rem',
      color: '#757575', // Medium grey for smaller body text
    },
    button: {
      textTransform: 'none', // Keep button text normal case
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners for a clean, modern look
          padding: '12px 20px',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.15)', // Soft shadow on hover
            transform: 'scale(1.05)', // Slight scaling effect on hover
          },
        },
        containedPrimary: {
          backgroundColor: '#6a1b9a', // Deep purple for primary button
          '&:hover': {
            backgroundColor: '#4e148c', // Darker purple on hover
          },
        },
        containedSecondary: {
          backgroundColor: '#ffb74d', // Soft peach for secondary button
          '&:hover': {
            backgroundColor: '#fb8c00', // Darker peach on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners for cards
          boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
          padding: '20px',
          backgroundColor: '#ffffff', // Clean white background
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            borderRadius: '10px', // Rounded text fields
            backgroundColor: '#fafafa', // Light grey background for text fields
            color: '#212121', // Dark text inside text fields
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          '& th': {
            backgroundColor: '#f1f1f1', // Light grey for table headers
            color: '#212121', // Dark grey for header text
            fontWeight: 600,
          },
          '& td': {
            color: '#757575', // Medium grey for table data
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#6a1b9a', // Deep purple for the app bar
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Soft shadow for app bar
        },
      },
    },
  },
  shape: {
    borderRadius: 8, // Consistent rounded corners
  },
  shadows: [
    'none',
    '0px 6px 18px rgba(0, 0, 0, 0.1)', // Light shadow for components
    // Additional shadows as needed
  ],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
