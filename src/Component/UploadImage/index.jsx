import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


export default function UploadImage () {
  return (
    <Box
      sx={{
        border: '2px dashed #5A1F7D40',
        backgroundColor: '#F9F9F9',
        borderRadius: '12px',
        padding: '24px',
        textAlign: 'center',
        width: { xs: '260px', sm:'400px', md:'500px', lg: '570px'},
        height: '160px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          component='img'
          src='/Image/uploadImg.png'
          sx={{ color: '#6A1B9A', fontSize: 30 }}
        />
        <Box sx={{mt:3}}>
          <Typography
            variant='caption'
            sx={{ color: '#6A1B9A', fontWeight: 600 }}
          >
            Upload Profile Image
          </Typography> <br />
          <Typography variant='caption' sx={{ color: '#9C6ADE' }}>
            Drop your file here or browse
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
