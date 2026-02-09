import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Button, Chip, LinearProgress } from '@mui/material';
import { Lock, Star, CheckCircle, Zap, Trophy, Flame, Sparkles, MapPin, Rocket } from 'lucide-react';

// Data & Context
import { courseData } from '../data/curriculum';
import { useProgress } from '../context/ProgressContext';

const CourseMap = () => {
  const navigate = useNavigate();
  const { completedLessons } = useProgress();
  const [hoveredNode, setHoveredNode] = useState(null);
  const [particles, setParticles] = useState([]);

  // Calculate progress
  const progressPercent = Math.round((completedLessons.length / courseData.length) * 100);

  // Generate celebration particles
  useEffect(() => {
    if (progressPercent > 0) {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        emoji: ['✨', '🌟', '💫', '⭐', '🎉'][Math.floor(Math.random() * 5)],
      }));
      setParticles(newParticles);
    }
  }, [progressPercent]);

  // Helper to determine lesson status
  const getLessonStatus = (lessonId, index) => {
    if (completedLessons.includes(lessonId)) return 'completed';
    const prevLessonId = index > 0 ? courseData[index - 1].id : null;
    if (index === 0 || completedLessons.includes(prevLessonId)) return 'active';
    return 'locked';
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        py: 6,
      }}
    >
      {/* Animated Particles */}
      {particles.map((particle) => (
        <Box
          key={particle.id}
          sx={{
            position: 'fixed',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: '1.5rem',
            opacity: 0,
            animation: `particleFloat ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            pointerEvents: 'none',
            zIndex: 0,
            '@keyframes particleFloat': {
              '0%': { 
                opacity: 0,
                transform: 'translateY(0) scale(0)',
              },
              '50%': { 
                opacity: 0.6,
                transform: 'translateY(-30px) scale(1.2)',
              },
              '100%': { 
                opacity: 0,
                transform: 'translateY(-60px) scale(0.8)',
              },
            },
          }}
        >
          {particle.emoji}
        </Box>
      ))}

      <Container maxWidth="md">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #FF6B9D 0%, #FFD93D 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 12px 40px rgba(255, 107, 157, 0.4)',
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                  '50%': { transform: 'translateY(-10px) rotate(5deg)' },
                },
              }}
            >
              <MapPin size={40} color="#FFFFFF" strokeWidth={2.5} />
            </Box>
          </Box>

          <Typography 
            variant="h3" 
            sx={{ 
              mb: 1.5,
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FF6B9D 0%, #FFD93D 50%, #6C63FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em',
            }}
          >
            Tu Viaje Español
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4,
              color: 'text.secondary',
              fontWeight: 500,
              fontStyle: 'italic',
            }}
          >
            Una conversación a la vez ✨
          </Typography>

          {/* Progress Stats Card */}
          <Box
            sx={{
              background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(255, 217, 61, 0.1) 100%)',
              borderRadius: '24px',
              padding: 3,
              border: '2px solid rgba(255, 107, 157, 0.2)',
              backdropFilter: 'blur(10px)',
              mb: 2,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#FF6B9D' }}>
                  {completedLessons.length}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  Completadas
                </Typography>
              </Box>
              
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#6C63FF' }}>
                  {courseData.length}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  Total
                </Typography>
              </Box>
              
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#FFD93D' }}>
                  {progressPercent}%
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  Progreso
                </Typography>
              </Box>
            </Box>

            <LinearProgress 
              variant="determinate" 
              value={progressPercent}
              sx={{
                height: 12,
                borderRadius: '10px',
                background: 'rgba(108, 99, 255, 0.15)',
                '& .MuiLinearProgress-bar': {
                  background: 'linear-gradient(90deg, #FF6B9D 0%, #FFD93D 100%)',
                  borderRadius: '10px',
                },
              }}
            />
          </Box>

          {/* Achievement Badges */}
          {completedLessons.length > 0 && (
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
              {completedLessons.length >= 1 && (
                <Chip 
                  icon={<Flame size={16} />}
                  label="Beginner"
                  sx={{ 
                    background: 'linear-gradient(135deg, #FF6B9D 0%, #FF8FAB 100%)',
                    color: 'white',
                    fontWeight: 700,
                  }}
                />
              )}
              {completedLessons.length >= 5 && (
                <Chip 
                  icon={<Zap size={16} />}
                  label="On Fire"
                  sx={{ 
                    background: 'linear-gradient(135deg, #FFD93D 0%, #FFC107 100%)',
                    color: '#1A1A2E',
                    fontWeight: 700,
                  }}
                />
              )}
              {completedLessons.length >= 10 && (
                <Chip 
                  icon={<Trophy size={16} />}
                  label="Champion"
                  sx={{ 
                    background: 'linear-gradient(135deg, #6C63FF 0%, #A29BFE 100%)',
                    color: 'white',
                    fontWeight: 700,
                  }}
                />
              )}
            </Box>
          )}
        </Box>

        {/* Journey Path */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: 3,
            position: 'relative',
          }}
        >
          {/* Animated Connecting Path */}
          <Box 
            sx={{ 
              position: 'absolute', 
              top: 60, 
              bottom: 60, 
              width: 6,
              background: `linear-gradient(180deg, 
                #00D9A3 0%, 
                #00D9A3 ${progressPercent}%, 
                rgba(108, 99, 255, 0.2) ${progressPercent}%, 
                rgba(108, 99, 255, 0.2) 100%
              )`,
              borderRadius: '10px',
              zIndex: 0,
              transition: 'all 1s ease',
              boxShadow: `0 0 20px rgba(0, 217, 163, ${progressPercent / 100})`,
            }} 
          />

          {courseData.map((lesson, index) => {
            const status = getLessonStatus(lesson.id, index);
            const isLeft = index % 2 === 0;

            return (
              <Box 
                key={lesson.id} 
                sx={{ 
                  zIndex: 1, 
                  position: 'relative', 
                  width: '100%',
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  px: { xs: 2, sm: 8 },
                }}
              >
                <NodeButton 
                  lesson={lesson} 
                  status={status}
                  index={index}
                  isLeft={isLeft}
                  isHovered={hoveredNode === lesson.id}
                  onHover={() => setHoveredNode(lesson.id)}
                  onLeave={() => setHoveredNode(null)}
                  onClick={() => status !== 'locked' && navigate(`/lesson/${lesson.id}`)}
                />
              </Box>
            );
          })}

          {/* Finish Line */}
          {progressPercent === 100 && (
            <Box
              sx={{
                textAlign: 'center',
                mt: 4,
                animation: 'celebrationPulse 2s ease-in-out infinite',
                '@keyframes celebrationPulse': {
                  '0%, 100%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.05)' },
                },
              }}
            >
              <Rocket size={60} color="#FFD93D" strokeWidth={2} />
              <Typography variant="h4" sx={{ mt: 2, fontWeight: 800, color: '#FF6B9D' }}>
                ¡Felicidades! 🎉
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                You've completed the journey!
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

// Enhanced Node Button Component
const NodeButton = ({ lesson, status, index, isLeft, isHovered, onHover, onLeave, onClick }) => {
  const isLocked = status === 'locked';
  const isCompleted = status === 'completed';
  const isActive = status === 'active';

  // Dynamic Styles
  let gradient = 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)';
  let icon = <Lock size={28} color="#9CA3AF" />;
  let boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
  let borderColor = 'transparent';

  if (isActive) {
    gradient = 'linear-gradient(135deg, #6C63FF 0%, #A29BFE 100%)';
    icon = <Star size={28} color="#FFFFFF" fill="#FFFFFF" />;
    boxShadow = '0 0 40px rgba(108, 99, 255, 0.6), 0 8px 32px rgba(108, 99, 255, 0.4)';
    borderColor = 'rgba(255, 255, 255, 0.5)';
  } else if (isCompleted) {
    gradient = 'linear-gradient(135deg, #00D9A3 0%, #5EFFD3 100%)';
    icon = <CheckCircle size={28} color="#FFFFFF" fill="#FFFFFF" />;
    boxShadow = '0 8px 24px rgba(0, 217, 163, 0.4)';
    borderColor = 'rgba(255, 255, 255, 0.3)';
  }

  return (
    <Box 
      sx={{ 
        textAlign: 'center',
        position: 'relative',
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Connecting Line to Node */}
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 40, sm: 80 },
          height: 4,
          background: isCompleted || isActive 
            ? 'linear-gradient(90deg, #00D9A3 0%, rgba(108, 99, 255, 0.3) 100%)'
            : 'rgba(108, 99, 255, 0.2)',
          top: '50%',
          [isLeft ? 'right' : 'left']: { xs: 60, sm: 100 },
          transform: 'translateY(-50%)',
          borderRadius: '10px',
        }}
      />

      {/* Main Node Button */}
      <Button
        onClick={onClick}
        disabled={isLocked}
        variant="contained"
        sx={{
          width: { xs: 90, sm: 110 },
          height: { xs: 90, sm: 110 },
          borderRadius: '50%',
          background: gradient,
          minWidth: 0,
          position: 'relative',
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transform: isHovered && !isLocked ? 'scale(1.15) rotate(5deg)' : 'scale(1)',
          boxShadow: boxShadow,
          border: `3px solid ${borderColor}`,
          '&:hover': {
            background: gradient,
            transform: isLocked ? 'scale(1)' : 'scale(1.15) rotate(-5deg)',
          },
          '&.Mui-disabled': {
            background: gradient,
            opacity: 0.6,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -8,
            left: -8,
            right: -8,
            bottom: -8,
            borderRadius: '50%',
            background: isActive 
              ? 'linear-gradient(135deg, #6C63FF, #FFD93D, #FF6B9D)'
              : 'transparent',
            opacity: isActive ? 0.3 : 0,
            animation: isActive ? 'pulse 2s ease-in-out infinite' : 'none',
            zIndex: -1,
            '@keyframes pulse': {
              '0%, 100%': { transform: 'scale(1)', opacity: 0.3 },
              '50%': { transform: 'scale(1.1)', opacity: 0.5 },
            },
          },
        }}
      >
        {icon}
        
        {/* Lesson Number Badge */}
        <Box
          sx={{
            position: 'absolute',
            top: -8,
            right: -8,
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF6B9D 0%, #FFD93D 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '0.875rem',
            color: 'white',
            boxShadow: '0 4px 12px rgba(255, 107, 157, 0.4)',
            border: '2px solid white',
          }}
        >
          {index + 1}
        </Box>
      </Button>
      
      {/* Lesson Title Card */}
      <Box
        sx={{
          mt: 2,
          background: isHovered && !isLocked
            ? 'linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(108, 99, 255, 0.1) 100%)'
            : 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: { xs: 1.5, sm: 2 },
          border: '1px solid rgba(255, 255, 255, 0.3)',
          transition: 'all 0.3s ease',
          boxShadow: isHovered && !isLocked
            ? '0 8px 24px rgba(108, 99, 255, 0.15)'
            : '0 2px 8px rgba(0, 0, 0, 0.05)',
          transform: isHovered && !isLocked ? 'translateY(-4px)' : 'translateY(0)',
          minWidth: { xs: 140, sm: 180 },
        }}
      >
        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontWeight: 700,
            fontSize: { xs: '0.875rem', sm: '1rem' },
            color: isLocked ? '#9CA3AF' : '#1A1A2E',
            mb: 0.5,
          }}
        >
          {lesson.title}
        </Typography>
        
        {lesson.description && (
          <Typography 
            variant="caption" 
            sx={{ 
              color: 'text.secondary',
              fontSize: { xs: '0.7rem', sm: '0.75rem' },
              display: 'block',
            }}
          >
            {lesson.description}
          </Typography>
        )}

        {/* Status Indicator */}
        {isCompleted && (
          <Chip
            icon={<Sparkles size={12} />}
            label="Completado"
            size="small"
            sx={{
              mt: 1,
              height: 20,
              fontSize: '0.7rem',
              background: 'linear-gradient(135deg, #00D9A3 0%, #5EFFD3 100%)',
              color: 'white',
              fontWeight: 700,
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default CourseMap;