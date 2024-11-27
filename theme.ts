
  "use client";
  import { createTheme } from '@mui/material/styles';


  declare module '@mui/material/styles' {
    interface TypeBackground {
      rowAlt?: string; // Add the custom property
    }
    interface PaletteBackground {
      rowAlt?: string; // Add the custom property
    }
  }
  const theme = createTheme({


    palette: {
      mode: 'light', // or 'dark' for dark mode
      primary: {
        main: '#008000', // Your green color
      },
      // background: {
      //   default: '#f9f9f9',
      //   paper: '#ffffff',
      //   rowAlt: '#f4f4f4',
      // },
      // text: {
      //   primary: '#333333',
      // },
      // action: {
      //   hover: '#e0f5e0',
      // },


      
    },


    cssVariables: {
      colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { 
      light: {
        palette: {
          background: {
            default: '#f9f9f9',
            paper: '#ffffff',
            rowAlt: '#f4f4f4',
          },
          text: {
            primary: '#333333',
          },
          action: {
            hover: '#e0f5e0',
          },
        },
      }, 
      dark: {
        palette: {
          background: {
            default: '#121212', // Dark mode main background
            paper: '#1e1e1e',   // Dark mode paper background
            rowAlt: '#252525',     // Alternating row background in dark mode
          },
          text: {
            primary: '#e0e0e0', // Light text for dark mode
          },
          action: {
            hover: '#333333',   // Darker hover color for dark mode
          },
          primary: {
            main: '#4caf50',    // Slightly lighter green for dark mode
          },
        },
      }, 
    },
  });

  export default theme;
  