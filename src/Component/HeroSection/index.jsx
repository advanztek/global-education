import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Grid2' // Correct import for Grid2
import { styled } from '@mui/system'
import { typographyCategory } from '../../Constants/typography'

const HeroContainer = styled(Box)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#FFF5E7',
  padding: "5px 60px",
  margin: 0
})

const MainImage = styled('img')({
  width: '100%',
  maxWidth: '550px',
  height: 'auto',
  display: 'block'
})

const SmallImage = styled('img')({
  position: 'absolute',
  width: '35%',
  maxWidth: '200px',
  height: 'auto',
  top: '35%',
  left: '68%',
  transform: 'translateY(-50%) rotate(-8deg)',
  '@media (max-width: 900px)': {
    width: '20%',
    left: '30%',
    top: '40%'
  }
})

export default function HeroSection () {
  return (
    <HeroContainer>
      <Container maxWidth='xl'>
        <Grid2 container alignItems='center' spacing={10}>
          <Grid2
            size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'flex-start'
            }}
          >
            <MainImage src='/Image/hero_1.png' alt='Happy Child' />
            <SmallImage src='/Image/hero_2.png' alt='Student' />
          </Grid2>

          <Grid2
            size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
            textAlign={{ xs: 'center', md: 'left' }}
          >
            <Typography
              variant='body1'
              sx={{
                fontWeight: '600',
                textTransform: 'uppercase',
                color: '#FC800A'
              }}
            >
              Digital empowerment
            </Typography>
            <Typography
              variant='h2'
              sx={{
                fontFamily: typographyCategory.base.secondary,
                fontWeight: '600',
                textTransform: 'capitalize'
              }}
              gutterBottom
            >
              Empower, Innovate, <br /> Transform!
            </Typography>
            <Typography variant='body2' sx={{ color: '#020202' }}>
              Empower Nigerian youth with essential digital skills <br />{' '}
              through interactive courses and community mentorship.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'start' }
              }}
            >
              <Button
                variant='contained'
                sx={{
                  my: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'start' },
                  gap: 1
                }}
              >
                GET STARTED <img src='/Illus/arrow.png' alt='icon' />
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </HeroContainer>
  )
}
