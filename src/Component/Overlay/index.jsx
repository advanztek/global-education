import React from 'react';
import Box from '@mui/material/Box';

const Overlay = ({
  condition,
  backgroundColor = 'rgba(255, 255, 255, 0.6)'
}) => {
  if (!condition) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor,
        zIndex: 2
      }}
    />
  );
};

export default Overlay;
