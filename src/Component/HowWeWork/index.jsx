import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { arrowIconData, missionData } from './data'
import { typographyCategory } from '../../Constants/typography'
import Container from '@mui/material/Container'

export default function HowWeWorkSection () {
  
  return (
    <Box
      sx={{
        backgroundImage: "url('/Image/banner_2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#fff4ec',
        pb: '8rem',
      }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ textAlign:'center', pt: '6rem', pb: '3rem' }}>
          <Typography
            variant='caption'
            sx={{
              fontWeight: '600',
              textTransform: 'uppercase',
              color: '#FC800A',
              mb: 1
            }}
          >
            How we work
          </Typography>
          <Typography
            variant='h4'
            sx={{
              fontWeight: '400',
              color: '#000',
              fontFamily: typographyCategory.base.secondary,
              textTransform: 'capitalize',
              lineHeight: 1.3
            }}
            gutterBottom
          >
            What makes our teaching unique
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {missionData.map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: item.backgroundColor,
                borderRadius: '50px',
                padding: '20px',
                maxWidth: '1000px',
                mx: 'auto',
                position: 'relative',
                border: '3px dashed black',
                transform: {
                  xs: 0,
                  md: 0,
                  lg: index % 2 === 1 ? 'translateX(-160px)' : 'translateX(0)',
                  xl: 0,

                },
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <Box sx={{ position: 'relative', px: '2rem', pb: '1rem' }}>
                <Grid container alignItems='center' spacing={3}>
                  <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        py: '9px'
                      }}
                    >
                      <Typography
                        variant='h4'
                        sx={{
                          fontWeight: 400,
                          fontFamily: typographyCategory.base.secondary
                        }}
                        color='#fff'
                      >
                        {item.label}
                      </Typography>
                      <img src={item.icon} alt='Icon' />
                    </Box>
                    <Box>
                      <Typography variant='caption' color='#fff'>
                        {item.desc}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                    <Box sx={{ pt: { xs: '1rem', md: '3rem' } }}>
                      {item.arrowIconData?.map((data, arrowIndex) => (
                        <Box
                          key={arrowIndex}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'start',
                            gap: 1
                          }}
                        >
                          <img style={{ width: '15px', height: '15px', objectFit: 'cover'}} src='/Illus/arrow.png' alt='arrow' />
                          <Typography
                            variant='caption'
                            sx={{ whiteSpace: 'nowrap' }}
                            color='#fff'
                          >
                            {data.txt}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'block',
                      lg: 'block',
                      xl: 'block'
                    },
                    position: 'absolute',
                    top: -80,
                    [item.imageAlignment]: 1
                  }}
                >
                  <img
                    style={{ width: '180px' }}
                    src={item.image}
                    alt='Illus'
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
