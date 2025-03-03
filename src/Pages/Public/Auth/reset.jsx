import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import { LoginForm } from '../../../Component'

export default function ResetPage () {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        backgroundColor: '#FBF1E3'
      }}
    >
      <Box
        component='img'
        src='/Image/banner_2.png'
        alt='Background Banner'
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          zIndex: 0
        }}
      />

      <Container
        maxWidth='lg'
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}
      >
        <Grid container spacing={4} alignItems='center'>
          <Grid
            display={{ xs: 'none', sm: 'none', md: 'flex' }}
            size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
          >
            <Box sx={{ height: '100%', overflow: 'hidden' }}>
              <img
                src='/Image/hero_1.png'
                alt='Hero'
                style={{
                  width: '100%',
                  height: '100vh',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Box
              sx={{
                py: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box
                component='img'
                sx={{ width: '110px' }}
                src='/Logo/Logo.png'
              />
            </Box>
            <LoginForm
              title='Reset your Password'              
              subTitle='Type in your registered email address to rest password'
              fields={['Email Address']}
              backBtn='BACK TO LOGIN'
              nextBtn='NEXT'
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
