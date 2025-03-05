import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { typographyCategory } from '../../Constants/typography'
export default function ClusterCard ({ width = '350px', cardImg, label, chartSrc }) {
  return (
    <Box
      sx={{
        width: width,
        height: '120px',
        backgroundColor: '#fff',
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <Box
          component='img'
          src={cardImg}
          alt='Backpack Icon'
          sx={{
            width: 80,
            height: 'auto'
          }}
        />

        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant='body2'
            sx={{
              fontFamily: typographyCategory.base.septenary,
              fontWeight: 600,
              color: '#333'
            }}
          >
            {label}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ textAlign: 'right', pt:2, }}>
        <Typography
          variant='h5'
          sx={{ color: '#5A1F7D', 
            fontFamily: typographyCategory.base.septenary, fontWeight: 800, lineHeight: 1 }}
        >
          622
        </Typography>
        <Box
          component='img'
          src={chartSrc}
          alt='Trend Chart'
          sx={{ width: 40, height: 'auto', mt: 1 }}
        />
      </Box>
    </Box>
  )
}
