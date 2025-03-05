import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { typographyCategory } from '../../Constants/typography';

export default function StudentLocation() {
  const locations = [
    { city: 'Makurdi', count: 3551, percentage: 30 },
    { city: 'Sokoto', count: 2951, percentage: 20 },
    { city: 'Maiduguri', count: 2125, percentage: 15 }
  ];

  return (
    <Box
    >
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: 2,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          p: 3,
          maxHeight: 400,
          overflowY: 'auto'
        }}
      >
        <Typography variant="body1" sx={{ fontFamily: typographyCategory.base.septenary, fontWeight: 600, mb: 3 }}>
          Top Student Location
        </Typography>

        {locations.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              
              py: 1,
              px: 3,
              borderRadius: 3,
              width:'240px',
              fontFamily: typographyCategory.base.septenary,
              background: 'linear-gradient(to right, #fff, #FDE68A, #F59E0B)',
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: '#3F3F44', width: '100px', fontWeight: 400 }}
            >
              {item.city}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mx: 2
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: 400 }}>
                {item.count.toLocaleString()}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
