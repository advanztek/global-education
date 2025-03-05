import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box'
import { typographyCategory } from '../../../Constants/typography'
import { clusters, facilitators, mandes, modules } from './data'
import { ClusterCard, FacilitatorsList, LessonTracker, ModuleCard, StudentLocation } from '../../../Component'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';


export default function FacilitatorDashHome () {
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
            <Box>
              <Typography
                variant='h5'
                color='#5A1F7D'
                sx={{
                  fontWeight: 700,
                  fontFamily: typographyCategory.base.tertiary
                }}
              >
                Overview
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'column', md:'row', lg:'row', xl:'row' },
                alignItems: 'center',
                gap: 1,
                py: 3
              }}
            >
              {facilitators.map((facilitator, index) => (
                <ClusterCard key={facilitator.id} index={index} width='410px' {...facilitator} />
              ))}
            </Box>
            <Box>
              <StudentLocation />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
            <Box>
             <FacilitatorsList />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
