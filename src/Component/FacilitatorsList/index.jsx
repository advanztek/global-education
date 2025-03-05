import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { typographyCategory } from '../../Constants/typography';
export default function FacilitatorsList() {
  const facilitators = [
    {
      name: 'Mr. Bolu Daniels',
      subText: 'Lorem Ipsum',
      avatar: '/images/facilitator1.png' 
    },
    {
      name: 'Mr. Bolu Daniels',
      subText: 'Lorem Ipsum',
      avatar: '/images/facilitator2.png'
    },
    {
      name: 'Mr. Bolu Daniels',
      subText: 'Lorem Ipsum',
      avatar: '/images/facilitator3.png'
    },
    {
      name: 'Mr. Bolu Daniels',
      subText: 'Lorem Ipsum',
      avatar: '/images/facilitator4.png'
    },
    {
      name: 'Mr. Bolu Daniels',
      subText: 'Lorem Ipsum',
      avatar: '/images/facilitator5.png'
    },
    {
      name: 'Mr. Bolu Daniels',
      subText: 'Lorem Ipsum',
      avatar: '/images/facilitator6.png'
    }
  ];

  return (
    <Box
      sx={{
        bgcolor: '#F5F0FF',     
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2
      }}
    >
      <Paper
        sx={{
          width: '100%',
          maxWidth: 400,
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          p: 3
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, fontFamily: typographyCategory.base.quinary, mb: 3 }}
        >
          Your Facilitators
        </Typography>

        {facilitators.map((facilitator, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2
            }}
          >
            <Avatar
              src={facilitator.avatar}
              alt={facilitator.name}
              sx={{ width: 50, height: 50, mr: 2 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ 
                fontFamily: typographyCategory.base.quinary, fontWeight: 600 }}>
                {facilitator.name}
              </Typography>
              <Typography variant="caption" sx={{ fontFamily: typographyCategory.base.quinary, color: '#666' }}>
                {facilitator.subText}
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                py: 0.4,
                px: 0.9,
                fontSize: '9px',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                fontFamily: typographyCategory.base.quinary,
                backgroundColor: '#702DFF',
                '&:hover': {
                  backgroundColor: '#5B1680'
                }
              }}
            >
              View Profile
            </Button>
          </Box>
        ))}

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button
            variant="outlined"
            sx={{
              color: '#702DFF',

              backgroundColor:'#702DFF33',
              textTransform: 'none',
              py: 0.6,
              px:8,
              '&:hover': {
                borderColor: '#5B1680',
                backgroundColor: '#F3E5F5'
              }
            }}
          >
            See All
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
