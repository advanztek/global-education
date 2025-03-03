import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box'
import { typographyCategory } from '../../../Constants/typography'
import { modules } from './data'
import { LessonTracker, ModuleCard } from '../../../Component'

export default function DashboardHome () {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#0D7F41',
          px: { xs: 3, sm: 3, md: 4, lg: 7, xl: 7 },
          py: 2,
          borderRadius: '30px'
        }}
      >
        <Grid container spacing={3} justifyContent={'center'}>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 8, xl: 8 }}>
            <Box sx={{ pt: 3 }}>
              <Typography variant='body1' sx={{ pb: 3 }} color='#fff'>
                February 17, 2025
              </Typography>
              <Typography
                variant='h4'
                sx={{ py: 2, fontFamily: typographyCategory.base.secondary }}
                color='#fff'
              >
                Welcome back, Chinwe!
              </Typography>
              <Typography variant='body1' color='#fff'>
                Track your progress, access your modules, and stay updated{' '}
                <br /> on upcoming assessments—all in one place
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
            <img style={{ width: '300px' }} src='/Image/Dhero.png' alt='img' />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                variant='h5'
                color='#5A1F7D'
                sx={{
                  fontWeight: 700,
                  fontFamily: typographyCategory.base.tertiary
                }}
              >
                My Module
              </Typography>
              <Typography
                variant='body1'
                color='#5A1F7D'
                sx={{
                  fontWeight: 600,
                  fontFamily: typographyCategory.base.tertiary
                }}
              >
                See all
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1,
                py: 3
              }}
            >
              {modules.map((module, index) => (
                <ModuleCard key={module.id} index={index} {...module} />
              ))}
            </Box>
            <Box>
              <LessonTracker />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
            <Box
              sx={{
                bgcolor: '#fff',
                px: '1rem',
                py: '1rem',
                borderRadius: '20px',
                height: '75vh'
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  fontWeight: '600',
                  fontFamily: typographyCategory.base.quinary
                }}
                color='initial'
              >
                Result
              </Typography>
              <Box
                sx={{
                  py: '5px',
                  px: '12px',
                  borderRadius: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mt: 2,
                  backgroundColor: '#5A1F7D'
                }}
              >
                <Typography
                  variant='body1'
                  sx={{ fontFamily: typographyCategory.base.quaternary }}
                  color='#CB98E8'
                >
                  Click to view your result
                </Typography>
                <Box
                  component='img'
                  sx={{ width: '70px', height: 'auto' }}
                  src='/Image/blood-report.png'
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  mt: '2rem',
                  mb: '1rem',
                  height: '1px',
                  bgcolor: '#D9D9D9'
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontWeight: '600',
                    fontFamily: typographyCategory.base.quinary
                  }}
                  variant='h6'
                  color='#1A1A1A'
                >
                  Upcoming Assignment
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',py: '6rem'}}>
                <Typography variant='body2' sx={{textAlign: 'center'}} color='#667383'>
                  You don’t have any assignment <br /> at the moment
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
