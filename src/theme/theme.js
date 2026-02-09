import { createTheme } from '@mui/material/styles';

// Function to create theme based on mode
export const createAppTheme = (mode = 'light') => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#A29BFE' : '#FF6B9D',
      light: mode === 'dark' ? '#C5BFFF' : '#FFB5D1',
      dark: mode === 'dark' ? '#6C63FF' : '#E63E7A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: mode === 'dark' ? '#FFC857' : '#FFD93D',
      light: mode === 'dark' ? '#FFE084' : '#FFF176',
      dark: mode === 'dark' ? '#FFB020' : '#FFC107',
      contrastText: '#1A1A2E',
    },
    accent: {
      main: mode === 'dark' ? '#A29BFE' : '#6C63FF',
      light: mode === 'dark' ? '#C5BFFF' : '#A29BFE',
      dark: mode === 'dark' ? '#6C63FF' : '#4834DF',
    },
    success: {
      main: '#00D9A3',
      light: '#5EFFD3',
      dark: '#00A67E',
    },
    background: {
      default: mode === 'dark' ? '#0F0F1E' : '#F0F4FF',
      paper: mode === 'dark' ? '#1A1A2E' : '#FFFFFF',
      gradient: mode === 'dark' 
        ? 'linear-gradient(135deg, #1A1A2E 0%, #2D2D44 100%)'
        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      gradientLight: mode === 'dark'
        ? 'linear-gradient(135deg, #6C63FF 0%, #FFC857 100%)'
        : 'linear-gradient(135deg, #FF6B9D 0%, #FFD93D 100%)',
      mesh: mode === 'dark'
        ? 'radial-gradient(circle at 20% 50%, rgba(162, 155, 254, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 200, 87, 0.15) 0%, transparent 50%)'
        : 'radial-gradient(circle at 20% 50%, rgba(255, 107, 157, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(108, 99, 255, 0.15) 0%, transparent 50%)',
    },
    text: {
      primary: mode === 'dark' ? '#FFFFFF' : '#1A1A2E',
      secondary: mode === 'dark' ? '#B0B3C1' : '#6B7280',
      disabled: mode === 'dark' ? '#6B7280' : '#9CA3AF',
    },
    divider: mode === 'dark' ? 'rgba(162, 155, 254, 0.12)' : 'rgba(108, 99, 255, 0.12)',
  },
  typography: {
    fontFamily: '"Poppins", "Space Grotesk", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      letterSpacing: '-0.02em',
      background: mode === 'dark'
        ? 'linear-gradient(135deg, #A29BFE 0%, #FFC857 50%, #5EFFD3 100%)'
        : 'linear-gradient(135deg, #FF6B9D 0%, #FFD93D 50%, #6C63FF 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    h2: {
      fontWeight: 700,
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
      fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
    },
    h4: {
      fontWeight: 700,
      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
    },
    h5: {
      fontWeight: 600,
      fontSize: 'clamp(1rem, 2vw, 1.5rem)',
    },
    h6: {
      fontWeight: 600,
      fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 20,
  },
  shadows: [
    'none',
    mode === 'dark' ? '0px 2px 8px rgba(0, 0, 0, 0.4)' : '0px 2px 8px rgba(108, 99, 255, 0.08)',
    mode === 'dark' ? '0px 4px 16px rgba(0, 0, 0, 0.5)' : '0px 4px 16px rgba(108, 99, 255, 0.12)',
    mode === 'dark' ? '0px 8px 24px rgba(0, 0, 0, 0.6)' : '0px 8px 24px rgba(108, 99, 255, 0.16)',
    mode === 'dark' ? '0px 12px 32px rgba(0, 0, 0, 0.7)' : '0px 12px 32px rgba(108, 99, 255, 0.2)',
    mode === 'dark' ? '0px 16px 48px rgba(162, 155, 254, 0.24)' : '0px 16px 48px rgba(255, 107, 157, 0.24)',
    mode === 'dark' ? '0px 20px 56px rgba(162, 155, 254, 0.28)' : '0px 20px 56px rgba(255, 107, 157, 0.28)',
    mode === 'dark' ? '0px 24px 64px rgba(162, 155, 254, 0.32)' : '0px 24px 64px rgba(255, 107, 157, 0.32)',
    mode === 'dark' ? '0 0 40px rgba(162, 155, 254, 0.3)' : '0 0 40px rgba(255, 107, 157, 0.3), 0 0 80px rgba(108, 99, 255, 0.2)',
    mode === 'dark' ? '0 0 60px rgba(255, 200, 87, 0.4)' : '0 0 60px rgba(255, 217, 61, 0.4), 0 0 100px rgba(108, 99, 255, 0.3)',
    ...Array(15).fill(mode === 'dark' ? '0px 24px 64px rgba(0, 0, 0, 0.5)' : '0px 24px 64px rgba(0, 0, 0, 0.12)'),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '14px 32px',
          fontSize: '1rem',
          borderRadius: '16px',
          fontWeight: 600,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover::before': {
            opacity: 1,
          },
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: mode === 'dark' ? '0 12px 32px rgba(108, 99, 255, 0.4)' : '0 12px 32px rgba(108, 99, 255, 0.3)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        contained: {
          background: mode === 'dark'
            ? 'linear-gradient(135deg, #6C63FF 0%, #FFC857 100%)'
            : 'linear-gradient(135deg, #FF6B9D 0%, #FFD93D 100%)',
          boxShadow: mode === 'dark'
            ? '0 8px 24px rgba(108, 99, 255, 0.4)'
            : '0 8px 24px rgba(255, 107, 157, 0.3)',
          '&:hover': {
            background: mode === 'dark'
              ? 'linear-gradient(135deg, #5A52E0 0%, #FFB020 100%)'
              : 'linear-gradient(135deg, #E63E7A 0%, #FFC107 100%)',
            boxShadow: mode === 'dark'
              ? '0 12px 32px rgba(108, 99, 255, 0.5)'
              : '0 12px 32px rgba(255, 107, 157, 0.4)',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderColor: mode === 'dark' ? '#A29BFE' : '#6C63FF',
          '&:hover': {
            borderWidth: '2px',
            background: mode === 'dark' ? 'rgba(162, 155, 254, 0.1)' : 'rgba(108, 99, 255, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          boxShadow: mode === 'dark' ? '0 8px 32px rgba(0, 0, 0, 0.6)' : '0 8px 32px rgba(108, 99, 255, 0.12)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          border: mode === 'dark' ? '1px solid rgba(162, 155, 254, 0.2)' : '1px solid rgba(108, 99, 255, 0.08)',
          background: mode === 'dark' ? '#1A1A2E' : '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: mode === 'dark'
              ? 'linear-gradient(90deg, #A29BFE 0%, #FFC857 50%, #5EFFD3 100%)'
              : 'linear-gradient(90deg, #FF6B9D 0%, #FFD93D 50%, #6C63FF 100%)',
          },
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: mode === 'dark' ? '0 20px 48px rgba(162, 155, 254, 0.3)' : '0 20px 48px rgba(108, 99, 255, 0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: mode === 'dark' ? '0 4px 16px rgba(0, 0, 0, 0.5)' : '0 4px 16px rgba(108, 99, 255, 0.08)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          fontWeight: 600,
          fontSize: '0.875rem',
          padding: '4px',
        },
        filled: {
          background: mode === 'dark'
            ? 'linear-gradient(135deg, #6C63FF 0%, #FFC857 100%)'
            : 'linear-gradient(135deg, #FF6B9D 0%, #FFD93D 100%)',
          color: '#FFFFFF',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '16px',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: mode === 'dark' ? '0 4px 16px rgba(162, 155, 254, 0.15)' : '0 4px 16px rgba(108, 99, 255, 0.12)',
            },
            '&.Mui-focused': {
              boxShadow: mode === 'dark' ? '0 8px 24px rgba(162, 155, 254, 0.25)' : '0 8px 24px rgba(108, 99, 255, 0.2)',
            },
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          height: '12px',
          background: mode === 'dark' ? 'rgba(162, 155, 254, 0.15)' : 'rgba(108, 99, 255, 0.1)',
        },
        bar: {
          borderRadius: '10px',
          background: mode === 'dark'
            ? 'linear-gradient(90deg, #6C63FF 0%, #FFC857 100%)'
            : 'linear-gradient(90deg, #FF6B9D 0%, #FFD93D 100%)',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
  },
});

// Custom utility styles for global use
export const customStyles = {
  gradientText: (mode = 'light') => ({
    background: mode === 'dark'
      ? 'linear-gradient(135deg, #A29BFE 0%, #FFC857 50%, #5EFFD3 100%)'
      : 'linear-gradient(135deg, #FF6B9D 0%, #FFD93D 50%, #6C63FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }),
  glassCard: (mode = 'light') => ({
    background: mode === 'dark' ? 'rgba(26, 26, 46, 0.7)' : 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(20px)',
    border: mode === 'dark' ? '1px solid rgba(162, 155, 254, 0.3)' : '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: mode === 'dark' ? '0 8px 32px rgba(0, 0, 0, 0.4)' : '0 8px 32px rgba(108, 99, 255, 0.15)',
  }),
  floatingAnimation: {
    animation: 'float 6s ease-in-out infinite',
    '@keyframes float': {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-20px)' },
    },
  },
};