import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { Box, Container, IconButton, LinearProgress, Typography, Chip } from '@mui/material';
import { X, Award, Zap, Heart, Target, TrendingUp } from 'lucide-react';

import { courseData } from '../data/curriculum';
import { useProgress } from '../context/ProgressContext';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

import ContextSlide from '../components/lesson/ContextSlide';
import RevealSlide from '../components/lesson/RevealSlide';
import QuizSlide from '../components/lesson/QuizSlide';
import SuccessScreen from '../components/lesson/SuccessScreen';

const LessonPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { markLessonComplete, completedLessons } = useProgress();

  const [isCompleted, setIsCompleted] = useState(false);
  const [slideTransition, setSlideTransition] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [streak, setStreak] = useState(0);

  const lessonId = parseInt(id);
  const lesson = courseData.find((l) => l.id === lessonId);

  // Calculate current streak
  useEffect(() => {
    const currentStreak = completedLessons.length;
    setStreak(currentStreak);
  }, [completedLessons]);

  // Trigger celebration confetti on completion
  const handleLessonFinish = () => {
    markLessonComplete(lessonId);
    
    // Generate confetti particles
    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10,
      rotation: Math.random() * 360,
      color: ['#FF6B9D', '#FFD93D', '#6C63FF', '#00D9A3'][Math.floor(Math.random() * 4)],
      size: Math.random() * 10 + 5,
      delay: Math.random() * 0.5,
    }));
    setConfetti(particles);
    
    setTimeout(() => {
      setIsCompleted(true);
    }, 300);
  };

  const { 
    currentSlide, 
    progress, 
    nextSlide 
  } = useLessonNavigation(lesson, handleLessonFinish);

  // Trigger slide transition animation
  useEffect(() => {
    setSlideTransition(true);
    const timer = setTimeout(() => setSlideTransition(false), 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  if (!lesson) return <Navigate to="/" />;

  // Success Screen
  if (isCompleted) {
    return <SuccessScreen onBackToMap={() => navigate('/')} />;
  }

  const renderSlide = () => {
    if (!currentSlide) return null;
    switch (currentSlide.type) {
      case 'context': return <ContextSlide data={currentSlide} onNext={nextSlide} />;
      case 'reveal': return <RevealSlide data={currentSlide} onNext={nextSlide} />;
      case 'practice': return <QuizSlide data={currentSlide} onNext={nextSlide} />;
      default: return null;
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
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
          background: `
            radial-gradient(circle at 30% 40%, rgba(255, 107, 157, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(108, 99, 255, 0.2) 0%, transparent 50%)
          `,
          animation: 'meshFloat 15s ease-in-out infinite',
          '@keyframes meshFloat': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(20px, -20px)' },
          },
        }}
      />

      {/* Confetti Particles */}
      {confetti.map((particle) => (
        <Box
          key={particle.id}
          sx={{
            position: 'fixed',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            borderRadius: '50%',
            animation: `confettiFall 3s ease-in forwards`,
            animationDelay: `${particle.delay}s`,
            transform: `rotate(${particle.rotation}deg)`,
            zIndex: 1000,
            '@keyframes confettiFall': {
              '0%': {
                opacity: 1,
                transform: `translateY(0) rotate(0deg)`,
              },
              '100%': {
                opacity: 0,
                transform: `translateY(100vh) rotate(720deg)`,
              },
            },
          }}
        />
      ))}

      {/* Top Navigation Bar */}
      <Box 
        sx={{ 
          p: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Close Button */}
        <IconButton 
          onClick={() => navigate('/')}
          sx={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'rgba(255, 107, 157, 0.3)',
              transform: 'rotate(90deg) scale(1.1)',
            },
          }}
        >
          <X size={24} color="#FFFFFF" />
        </IconButton>

        {/* Progress Bar with Glow */}
        <Box sx={{ flexGrow: 1, position: 'relative' }}>
          <LinearProgress 
            variant="determinate" 
            value={progress}
            sx={{
              height: 12,
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.2)',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(90deg, #FF6B9D 0%, #FFD93D 100%)',
                borderRadius: '10px',
                boxShadow: `0 0 20px rgba(255, 107, 157, ${progress / 100})`,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              },
            }}
          />
          
          {/* Progress Percentage */}
          <Typography
            variant="caption"
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.7rem',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            {Math.round(progress)}%
          </Typography>
        </Box>

        {/* Lesson Info Badge */}
        <Chip
          icon={<Target size={16} />}
          label={lesson.title}
          sx={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'white',
            fontWeight: 700,
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            display: { xs: 'none', sm: 'flex' },
          }}
        />

        {/* Streak Counter */}
        {streak > 0 && (
          <Chip
            icon={<Zap size={16} />}
            label={`${streak} 🔥`}
            sx={{
              background: 'linear-gradient(135deg, #FFD93D 0%, #FF6B9D 100%)',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.875rem',
              boxShadow: '0 4px 12px rgba(255, 107, 157, 0.4)',
            }}
          />
        )}
      </Box>

      {/* Main Content Container */}
      <Container 
        maxWidth="md" 
        sx={{ 
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: { xs: 3, md: 4 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Slide Card with Glass Morphism */}
        <Box
          sx={{
            width: '100%',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(40px) saturate(200%)',
            borderRadius: '32px',
            boxShadow: `
              0 0 0 1px rgba(255, 255, 255, 0.5),
              0 20px 60px rgba(108, 99, 255, 0.3),
              0 40px 100px rgba(255, 107, 157, 0.2)
            `,
            border: '1px solid rgba(255, 255, 255, 0.3)',
            p: { xs: 3, sm: 4, md: 5 },
            minHeight: { xs: 400, md: 500 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            transform: slideTransition ? 'scale(0.95) rotateY(10deg)' : 'scale(1) rotateY(0deg)',
            opacity: slideTransition ? 0.7 : 1,
            transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: 'linear-gradient(90deg, #FF6B9D 0%, #FFD93D 33%, #6C63FF 66%, #FF6B9D 100%)',
              backgroundSize: '200% 100%',
              animation: 'gradientSlide 3s linear infinite',
              '@keyframes gradientSlide': {
                '0%': { backgroundPosition: '0% 0%' },
                '100%': { backgroundPosition: '200% 0%' },
              },
            },
          }}
        >
          {/* Decorative Corner Elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(108, 99, 255, 0.1) 100%)',
              animation: 'float 4s ease-in-out infinite',
              '@keyframes float': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              },
            }}
          />
          
          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(255, 217, 61, 0.1) 0%, rgba(255, 107, 157, 0.1) 100%)',
              animation: 'float 5s ease-in-out infinite',
              animationDelay: '1s',
            }}
          />

          {/* Slide Content */}
          <Box
            sx={{
              opacity: slideTransition ? 0 : 1,
              transform: slideTransition ? 'translateX(-20px)' : 'translateX(0)',
              transition: 'all 0.5s ease',
            }}
          >
            {renderSlide()}
          </Box>
        </Box>
      </Container>

      {/* Bottom Encouragement Bar */}
      <Box
        sx={{
          p: 2,
          textAlign: 'center',
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Chip
            icon={<Heart size={14} />}
            label="¡Muy bien!"
            size="small"
            sx={{
              background: 'rgba(255, 107, 157, 0.2)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              fontWeight: 600,
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          />
          <Chip
            icon={<TrendingUp size={14} />}
            label="Keep going!"
            size="small"
            sx={{
              background: 'rgba(108, 99, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              fontWeight: 600,
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          />
          <Chip
            icon={<Award size={14} />}
            label="You got this!"
            size="small"
            sx={{
              background: 'rgba(255, 217, 61, 0.2)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              fontWeight: 600,
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LessonPlayer;