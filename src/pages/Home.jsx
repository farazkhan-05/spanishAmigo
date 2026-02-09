import React from 'react';
import { courseData } from '../data/curriculum';
import { useProgress } from '../context/ProgressContext';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Home = () => {
  const { completedLessons } = useProgress();

  return (
    <Box>
      <Typography variant="h4" className="mb-6 font-bold text-slate-800 text-center">
        Your Path
      </Typography>
      
      <Box className="flex flex-col gap-4">
        {courseData.map((lesson) => {
          const isDone = completedLessons.includes(lesson.id);
          return (
            <Card key={lesson.id} sx={{ opacity: 1 }}>
              <CardActionArea component={Link} to={`/lesson/${lesson.id}`}>
                <CardContent className="flex items-center justify-between p-4">
                  <Box>
                    <Typography variant="h6" className="font-bold">
                      {lesson.id}. {lesson.title}
                    </Typography>
                    <Typography variant="body2" className="text-slate-500">
                      {lesson.intro}
                    </Typography>
                  </Box>
                  {isDone && <CheckCircleIcon color="success" />}
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Home;