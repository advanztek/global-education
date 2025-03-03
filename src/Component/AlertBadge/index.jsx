import React from 'react';
import Box from '@mui/material/Box';
import { Alert24Filled } from '@fluentui/react-icons';


export default function AlertBadge() {
  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      <Alert24Filled style={{ color: '#5A1F7D' }} />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          border: '1px solid #fff',
          transform: 'translate(-20%, -1%)',
          backgroundColor: 'green',
          width: '9px',
          height: '9px',
          borderRadius: '50%',
        }}
      />
    </Box>
  );
}
