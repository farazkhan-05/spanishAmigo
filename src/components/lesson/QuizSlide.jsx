import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Alert, Chip, LinearProgress } from '@mui/material';
import { CheckCircle, XCircle, Sparkles, Target, Zap, Trophy, AlertCircle } from 'lucide-react';

const QuizSlide = ({ data, onNext }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | correct | wrong
  const [confetti, setConfetti] = useState([]);
  const [shakeOption, setShakeOption] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // Trigger confetti on correct answer
  useEffect(() => {
    if (status === 'correct') {
      const particles = Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        color: ['#FF6B9D', '#FFD93D', '#6C63FF', '#00D9A3'][Math.floor(Math.random() * 4)],
        size: Math.random() * 8 + 4,
        delay: Math.random() * 0.3,
        emoji: ['🎉', '✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 5)],
      }));
      setConfetti(particles);
    }
  }, [status]);

  const handleOptionClick = (index, isCorrect) => {
    if (status === 'correct') return; // Prevent clicks after correct answer

    setSelectedOptionIndex(index);
    setAttempts(prev => prev + 1);

    if (isCorrect) {
      setStatus('correct');
      // Haptic feedback (if supported)
      if (navigator.vibrate) {
        navigator.vibrate([50, 100, 50]);
      }
    } else {
      setStatus('wrong');
      setShakeOption(index);
      // Vibrate on wrong answer
      if (navigator.vibrate) {
        navigator.vibrate(200);
      }
      
      // Reset wrong status after animation
      setTimeout(() => {
        setStatus('idle');
        setSelectedOptionIndex(null);
        setShakeOption(null);
      }, 1000);

      // Show hint after 2 attempts
      if (attempts >= 1) {
        setShowHint(true);
      }
    }
  };

  return (
    <Box 
      sx={{ 
        py: { xs: 2, md: 3 },
        position: 'relative',
      }}
    >
      {/* Confetti Particles */}
      {confetti.map((particle) => (
        <Box
          key={particle.id}
          sx={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: '1.5rem',
            opacity: 0,
            animation: `confettiBurst 2s ease-out forwards`,
            animationDelay: `${particle.delay}s`,
            transform: `rotate(${particle.rotation}deg)`,
            pointerEvents: 'none',
            zIndex: 1000,
            '@keyframes confettiBurst': {
              '0%': {
                opacity: 0,
                transform: 'scale(0) translateY(0) rotate(0deg)',
              },
              '50%': {
                opacity: 1,
                transform: 'scale(1.2) translateY(-50px) rotate(180deg)',
              },
              '100%': {
                opacity: 0,
                transform: `scale(0.5) translateY(100px) rotate(360deg)`,
              },
            },
          }}
        >
          {particle.emoji}
        </Box>
      ))}

      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Chip
          icon={<Target size={16} fill="#6C63FF" color="#6C63FF" />}
          label="Practice Quiz"
          sx={{
            mb: 2,
            background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.15) 0%, rgba(162, 155, 254, 0.15) 100%)',
            border: '2px solid rgba(108, 99, 255, 0.3)',
            fontWeight: 700,
            fontSize: '0.875rem',
            color: '#6C63FF',
          }}
        />

        {/* Question Card */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #1A1A2E 0%, #2D2D44 100%)',
            borderRadius: '20px',
            padding: { xs: 3, md: 4 },
            boxShadow: '0 12px 32px rgba(26, 26, 46, 0.4)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            mb: 3,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 30% 50%, rgba(108, 99, 255, 0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            },
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 700,
              color: 'white',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              lineHeight: 1.5,
            }}
          >
            {data.question}
          </Typography>

          {/* Attempt Indicator */}
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 2 }}>
            {[...Array(3)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: i < attempts 
                    ? status === 'correct' && i === attempts - 1
                      ? 'linear-gradient(135deg, #00D9A3 0%, #5EFFD3 100%)'
                      : 'linear-gradient(135deg, #FF6B9D 0%, #FFD93D 100%)'
                    : 'rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Hint Card (appears after wrong attempts) */}
      {showHint && status !== 'correct' && data.hint && (
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(255, 217, 61, 0.1) 0%, rgba(255, 193, 7, 0.05) 100%)',
            borderRadius: '16px',
            padding: 2,
            mb: 3,
            border: '2px solid rgba(255, 217, 61, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            animation: 'slideIn 0.5s ease-out',
            '@keyframes slideIn': {
              '0%': {
                opacity: 0,
                transform: 'translateY(-10px)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #FFD93D 0%, #FFC107 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Sparkles size={20} color="white" />
          </Box>
          <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
            💡 Hint: {data.hint || "Think about common Spanish phrases!"}
          </Typography>
        </Box>
      )}

      {/* Options Grid */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2,
          mb: 3,
        }}
      >
        {data.options.map((option, idx) => {
          const isSelected = idx === selectedOptionIndex;
          const isCorrectOption = option.isCorrect;
          const isWrongShake = idx === shakeOption;

          // Dynamic styles
          let gradient = 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)';
          let borderColor = 'rgba(108, 99, 255, 0.3)';
          let textColor = '#1A1A2E';
          let icon = null;
          let boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';

          if (status === 'correct' && isSelected) {
            gradient = 'linear-gradient(135deg, #00D9A3 0%, #5EFFD3 100%)';
            borderColor = '#00D9A3';
            textColor = 'white';
            icon = <CheckCircle size={24} color="white" fill="white" />;
            boxShadow = '0 8px 24px rgba(0, 217, 163, 0.4)';
          } else if (status === 'wrong' && isSelected) {
            gradient = 'linear-gradient(135deg, #FF6B9D 0%, #E63E7A 100%)';
            borderColor = '#FF6B9D';
            textColor = 'white';
            icon = <XCircle size={24} color="white" />;
            boxShadow = '0 8px 24px rgba(255, 107, 157, 0.4)';
          }

          return (
            <Button
              key={idx}
              variant="contained"
              onClick={() => handleOptionClick(idx, isCorrectOption)}
              disabled={status === 'correct'}
              sx={{
                background: gradient,
                color: textColor,
                py: { xs: 2, md: 2.5 },
                px: 3,
                justifyContent: 'flex-start',
                fontSize: { xs: '1rem', md: '1.1rem' },
                fontWeight: 600,
                borderRadius: '16px',
                border: `2px solid ${borderColor}`,
                boxShadow: boxShadow,
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden',
                textTransform: 'none',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                animation: isWrongShake ? 'shake 0.5s' : 'none',
                transform: isSelected && status === 'correct' ? 'scale(1.02)' : 'scale(1)',
                '&:hover:not(:disabled)': {
                  transform: 'translateY(-4px) scale(1.02)',
                  boxShadow: '0 12px 32px rgba(108, 99, 255, 0.25)',
                  borderColor: '#6C63FF',
                },
                '&:disabled': {
                  opacity: status === 'correct' && !isSelected ? 0.4 : 1,
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: isSelected && status === 'correct' 
                    ? 'linear-gradient(180deg, #00D9A3 0%, #5EFFD3 100%)'
                    : 'linear-gradient(180deg, #6C63FF 0%, #A29BFE 100%)',
                  opacity: isSelected ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                },
                '@keyframes shake': {
                  '0%, 100%': { transform: 'translateX(0)' },
                  '25%': { transform: 'translateX(-10px)' },
                  '75%': { transform: 'translateX(10px)' },
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                {/* Option Letter Badge */}
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '10px',
                    background: status === 'correct' && isSelected
                      ? 'rgba(255, 255, 255, 0.3)'
                      : status === 'wrong' && isSelected
                      ? 'rgba(255, 255, 255, 0.3)'
                      : 'linear-gradient(135deg, #6C63FF 0%, #A29BFE 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    color: 'white',
                    flexShrink: 0,
                  }}
                >
                  {String.fromCharCode(65 + idx)}
                </Box>

                {/* Option Text */}
                <Typography 
                  variant="body1" 
                  sx={{ 
                    flex: 1,
                    fontWeight: 600,
                    fontSize: { xs: '0.95rem', md: '1.05rem' },
                  }}
                >
                  {option.text}
                </Typography>

                {/* Status Icon */}
                {icon && (
                  <Box sx={{ flexShrink: 0 }}>
                    {icon}
                  </Box>
                )}
              </Box>
            </Button>
          );
        })}
      </Box>

      {/* Feedback Section */}
      {status === 'correct' && (
        <Box 
          sx={{ 
            animation: 'fadeInScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            '@keyframes fadeInScale': {
              '0%': {
                opacity: 0,
                transform: 'scale(0.9) translateY(20px)',
              },
              '100%': {
                opacity: 1,
                transform: 'scale(1) translateY(0)',
              },
            },
          }}
        >
          <Alert 
            icon={<Trophy size={24} />}
            severity="success"
            sx={{ 
              mb: 3,
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(0, 217, 163, 0.1) 0%, rgba(94, 255, 211, 0.05) 100%)',
              border: '2px solid rgba(0, 217, 163, 0.3)',
              '& .MuiAlert-icon': {
                color: '#00D9A3',
              },
              '& .MuiAlert-message': {
                fontWeight: 600,
                fontSize: '1rem',
              },
            }}
          >
            <strong>¡Perfecto!</strong> {data.feedback}
          </Alert>

          <Button 
            variant="contained"
            fullWidth
            onClick={onNext}
            sx={{
              py: 2.5,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #6C63FF 0%, #A29BFE 100%)',
              boxShadow: '0 8px 24px rgba(108, 99, 255, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 32px rgba(108, 99, 255, 0.4)',
              },
            }}
          >
            Continue to Next Challenge
            <Zap size={24} style={{ marginLeft: 12 }} />
          </Button>
        </Box>
      )}

      {status === 'wrong' && (
        <Box 
          sx={{ 
            animation: 'shake 0.5s',
          }}
        >
          <Alert 
            severity="error" 
            icon={<AlertCircle size={24} />}
            sx={{
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(230, 62, 122, 0.05) 100%)',
              border: '2px solid rgba(255, 107, 157, 0.3)',
              '& .MuiAlert-icon': {
                color: '#FF6B9D',
              },
              '& .MuiAlert-message': {
                fontWeight: 600,
              },
            }}
          >
            Oops! Try again. You can do this! 💪
          </Alert>
        </Box>
      )}
    </Box>
  );
};

export default QuizSlide;