import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App'
import './styles.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00d9ff', light: '#33e8ff', dark: '#00a8cc' },
    secondary: { main: '#ff6b9d', light: '#ff99b9', dark: '#e63384' },
    background: { default: '#0a0e27', paper: '#1a1f3a' },
    success: { main: '#10b981' },
    warning: { main: '#f59e0b' },
    error: { main: '#ef4444' },
    text: { primary: '#f3f4f6', secondary: '#d1d5db' }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontWeight: 700, letterSpacing: -0.5 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
          boxShadow: '0 4px 20px rgba(0, 217, 255, 0.1)'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(26, 31, 58, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 217, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 32px rgba(0, 217, 255, 0.15)',
            border: '1px solid rgba(0, 217, 255, 0.3)',
            transform: 'translateY(-4px)'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600 }
      }
    }
  }
})

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
