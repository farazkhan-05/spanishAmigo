import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ContextSlide = ({ data, onNext }) => {
  return (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant="h5" sx={{ mb: 4, color: 'text.primary', lineHeight: 1.6 }}>
        {data.text}
      </Typography>
      
      {/* Optional: Add an image if the data has one */}
      {data.image && (
        <Box 
          component="img" 
          src={data.image} 
          alt="Context" 
          sx={{ maxWidth: '100%', borderRadius: 4, mb: 4, maxHeight: 300 }} 
        />
      )}

      <Button variant="contained" size="large" onClick={onNext} fullWidth>
        Got it
      </Button>
    </Box>
  );
};

export default ContextSlide;