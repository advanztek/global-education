import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import Grid from '@mui/material/Grid2'

export default function LessonTracker() {
  const lessons = [
    'Lesson 1 - Module introduction',
    'Lesson 2 - Module introduction',
    'Lesson 3 - Module introduction',
    'Lesson 4 - Module introduction'
  ]

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        bgcolor: '#fff',
        borderRadius: 2,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        p: {xs: 3, sm:4, md:8, lg:8, xl:8},
        maxWidth: 900,
        boxSizing: 'border-box',
        height: { xs: 'auto', md: 'auto' }
      }}
    >
      <Grid container spacing={8}>
        <Grid xs={4} sm={4} md={4} lg={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'inline-flex',
                width: '100%'
              }}
            >
              <CircularProgress
                variant="determinate"
                value={100}
                size={160}
                thickness={4}
                sx={{
                  color: 'whitesmoke',
                  transform: 'rotate(90deg)',
                  '& .MuiCircularProgress-circle': {
                    strokeLinecap: 'round'
                  }
                }}
              />
              <CircularProgress
                variant="determinate"
                value={60}
                size={160}
                thickness={4}
                sx={{
                  color: '#1473E6',
                  position: 'absolute',
                  right: 0,
                  transform: 'rotate(260deg)',
                  '& .MuiCircularProgress-circle': {
                    strokeLinecap: 'round'
                  }
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="h5" component="div" fontWeight="bold">
                  60%
                </Typography>
                <Typography variant="caption" sx={{ color: '#666' }}>
                  Progress
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <EmojiEventsIcon sx={{ color: '#FFB300', mr: 0.5 }} />
              <Typography variant="body2" sx={{ color: '#555' }}>
                4th in leaderboard
              </Typography>
            </Box>
          </Box>         
        </Grid>
        
        <Grid xs={8} sm={8} md={8} lg={8}>
          <Box
            sx={{
              position: 'relative',
              maxHeight: 220,
              overflowY: 'auto',
              width: '100%',
              maxWidth: { xs: '100%', sm: '440px' },
              '&::-webkit-scrollbar': { width: '6px' },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
                borderRadius: '4px'
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#E5E7EB',
                borderRadius: '4px'
              }
            }}
          >
            <Grid container spacing={2}>
              {lessons.map((lesson, index) => (
                <Grid xs={12} key={index}>
                  <Grid container spacing={5}>
                    <Grid size={{ xs:10, sm:10, md:10, lg:10, xl:10}} >
                      <Box
                        sx={{
                          bgcolor: '#36B52030',
                          borderRadius: 4,
                          p: 2.5
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: '#667383', fontWeight: 500 }}
                        >
                          {lesson}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid size={{ xs:2, sm:2, md:2, lg:2, xl:2}} >
                      <Box
                        component="img"
                        src="/Image/check.png"
                        alt="Check Icon"
                        sx={{
                          width: '60px',
                          height: 'auto'
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
