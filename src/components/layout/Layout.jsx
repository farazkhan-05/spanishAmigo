import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, Box, IconButton, useScrollTrigger, Slide } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Heart, Zap, Moon, Sun } from 'lucide-react';

// Hide navbar on scroll
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Layout = ({ children, darkMode, onToggleDarkMode }) => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingEmojis] = useState(['🌟', '💃', '🎸', '🌮', '🎨', '☀️']);

  // Track mouse for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        background: darkMode 
          ? 'linear-gradient(135deg, #1A1A2E 0%, #2D2D44 50%, #3A3A5C 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.5s ease',
      }}
    >
      {/* Animated Background Mesh */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: darkMode
            ? `
              radial-gradient(circle at 20% 50%, rgba(162, 155, 254, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255, 200, 87, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(94, 255, 211, 0.1) 0%, transparent 40%)
            `
            : `
              radial-gradient(circle at 20% 50%, rgba(255, 107, 157, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(108, 99, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(255, 217, 61, 0.2) 0%, transparent 40%)
            `,
          animation: 'meshMove 20s ease-in-out infinite',
          '@keyframes meshMove': {
            '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
            '50%': { transform: 'translate(30px, -30px) scale(1.1)' },
          },
        }}
      />

      {/* Floating Decorative Elements */}
      {floatingEmojis.map((emoji, i) => (
        <Box
          key={i}
          sx={{
            position: 'fixed',
            fontSize: { xs: '2rem', md: '3rem' },
            opacity: darkMode ? 0.1 : 0.15,
            userSelect: 'none',
            pointerEvents: 'none',
            left: `${15 + i * 15}%`,
            top: `${10 + i * 12}%`,
            animation: `float${i} ${8 + i * 2}s ease-in-out infinite`,
            transform: `translate(${mousePosition.x * (i % 2 ? 1 : -1)}px, ${mousePosition.y * (i % 2 ? 1 : -1)}px)`,
            transition: 'transform 0.3s ease-out, opacity 0.5s ease',
            [`@keyframes float${i}`]: {
              '0%, 100%': { 
                transform: 'translateY(0px) rotate(0deg)',
              },
              '50%': { 
                transform: `translateY(-${30 + i * 10}px) rotate(${10 + i * 5}deg)`,
              },
            },
          }}
        >
          {emoji}
        </Box>
      ))}

      {/* Glass Morphism Navbar */}
      <HideOnScroll>
        <AppBar 
          position="sticky" 
          elevation={0} 
          sx={{ 
            background: darkMode 
              ? 'rgba(26, 26, 46, 0.3)'
              : 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px) saturate(180%)',
            borderBottom: darkMode 
              ? '1px solid rgba(162, 155, 254, 0.2)'
              : '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: darkMode 
              ? '0 8px 32px rgba(0, 0, 0, 0.3)'
              : '0 8px 32px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.5s ease',
          }}
        >
          <Toolbar sx={{ py: 1 }}>
            {/* Logo with Gradient */}
            <Box
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '16px',
                  background: darkMode
                    ? 'linear-gradient(135deg, #6C63FF 0%, #FFC857 100%)'
                    : 'linear-gradient(135deg, #FF6B9D 0%, #FFD93D 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: darkMode
                    ? '0 8px 24px rgba(108, 99, 255, 0.4)'
                    : '0 8px 24px rgba(255, 107, 157, 0.4)',
                  animation: 'pulse 2s ease-in-out infinite',
                  transition: 'all 0.5s ease',
                  '@keyframes pulse': {
                    '0%, 100%': { 
                      boxShadow: darkMode
                        ? '0 8px 24px rgba(108, 99, 255, 0.4)'
                        : '0 8px 24px rgba(255, 107, 157, 0.4)',
                      transform: 'scale(1)',
                    },
                    '50%': { 
                      boxShadow: darkMode
                        ? '0 12px 32px rgba(108, 99, 255, 0.6)'
                        : '0 12px 32px rgba(255, 107, 157, 0.6)',
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              >
                <Sparkles size={24} color="#FFFFFF" strokeWidth={2.5} />
              </Box>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 800,
                  background: darkMode
                    ? 'linear-gradient(135deg, #FFFFFF 0%, #FFC857 100%)'
                    : 'linear-gradient(135deg, #FFFFFF 0%, #FFD93D 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.02em',
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                }}
              >
                Spanish
                <Box component="span" sx={{ 
                  background: darkMode
                    ? 'linear-gradient(135deg, #A29BFE 0%, #FFC857 100%)'
                    : 'linear-gradient(135deg, #FF6B9D 0%, #FFD93D 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Amigo
                </Box>
              </Typography>
            </Box>

            {/* Decorative Icon Buttons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                sx={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(255, 107, 157, 0.3)',
                    transform: 'rotate(15deg) scale(1.1)',
                  },
                }}
              >
                <Heart size={20} color="#FFFFFF" />
              </IconButton>
              
              <IconButton
                sx={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(255, 217, 61, 0.3)',
                    transform: 'rotate(-15deg) scale(1.1)',
                  },
                }}
              >
                <Zap size={20} color="#FFFFFF" />
              </IconButton>

              {/* Dark Mode Toggle */}
              <IconButton
                onClick={onToggleDarkMode}
                sx={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: darkMode 
                      ? 'rgba(255, 200, 87, 0.3)'
                      : 'rgba(108, 99, 255, 0.3)',
                    transform: 'rotate(180deg) scale(1.1)',
                  },
                }}
              >
                {darkMode ? <Sun size={20} color="#FFFFFF" /> : <Moon size={20} color="#FFFFFF" />}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Main Content with Glass Card */}
      <Container 
        maxWidth="md" 
        sx={{ 
          flexGrow: 1, 
          py: { xs: 4, md: 6 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            background: darkMode
              ? 'rgba(26, 26, 46, 0.8)'
              : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(40px) saturate(200%)',
            borderRadius: '32px',
            padding: { xs: 3, md: 5 },
            boxShadow: darkMode
              ? `
                0 0 0 1px rgba(162, 155, 254, 0.3),
                0 20px 60px rgba(0, 0, 0, 0.5),
                0 40px 100px rgba(0, 0, 0, 0.3)
              `
              : `
                0 0 0 1px rgba(255, 255, 255, 0.5),
                0 20px 60px rgba(108, 99, 255, 0.2),
                0 40px 100px rgba(255, 107, 157, 0.15)
              `,
            border: darkMode
              ? '1px solid rgba(162, 155, 254, 0.2)'
              : '1px solid rgba(255, 255, 255, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: darkMode
                ? 'linear-gradient(90deg, #A29BFE 0%, #FFC857 33%, #5EFFD3 66%, #A29BFE 100%)'
                : 'linear-gradient(90deg, #FF6B9D 0%, #FFD93D 33%, #6C63FF 66%, #FF6B9D 100%)',
              backgroundSize: '200% 100%',
              animation: 'gradientSlide 3s linear infinite',
              '@keyframes gradientSlide': {
                '0%': { backgroundPosition: '0% 0%' },
                '100%': { backgroundPosition: '200% 0%' },
              },
            },
          }}
        >
          {children}
        </Box>
      </Container>

      {/* Futuristic Footer */}
      <Box 
        sx={{ 
          py: 4,
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          background: darkMode 
            ? 'rgba(0, 0, 0, 0.3)'
            : 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          borderTop: darkMode
            ? '1px solid rgba(162, 155, 254, 0.1)'
            : '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.5s ease',
        }}
      >
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#FFFFFF',
            fontWeight: 600,
            fontSize: { xs: '0.9rem', md: '1rem' },
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            flexWrap: 'wrap',
          }}
        >
          <span>✨</span>
          <Box component="span" sx={{
            background: darkMode
              ? 'linear-gradient(135deg, #FFC857 0%, #FFFFFF 100%)'
              : 'linear-gradient(135deg, #FFD93D 0%, #FFFFFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 700,
          }}>
            Un poquito cada día
          </Box>
          <span>-</span>
          <Box component="span" sx={{ fontStyle: 'italic', opacity: 0.9 }}>
            A little bit every day
          </Box>
          <span>💫</span>
        </Typography>
        
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
          {['🌮', '🎉', '🎸', '💃'].map((emoji, i) => (
            <Box
              key={i}
              sx={{
                fontSize: '1.5rem',
                animation: `bounce${i} 2s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                [`@keyframes bounce${i}`]: {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
              }}
            >
              {emoji}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;