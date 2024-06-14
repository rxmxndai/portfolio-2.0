import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body3"
          },
          style: {
            fontSize: 12,
            fontFamily: '"Montserrat", serif'
          }
        }


      ]
    }
  },
  typography: {
    fontFamily: '"Montserrat", serif',
  },
  palettte: {
    primary: {
      main: "#6A98F0"
    },
    secondary: {
      main: "#dc004e"
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);

