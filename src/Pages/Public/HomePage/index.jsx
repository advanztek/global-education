import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import { typographyCategory } from '../../../Constants/typography'
import { aboutUsdata, excellenceData } from './data'
import {
  EduCarouselSection,
  HowWeWorkSection,
  JoinTodaySection,
  TestimonialSection
} from '../../../Component'

export default function HomePage () {
  return (
    <>
      <Box>
        <Container maxWidth='lg'>
          <Grid2 container alignItems='center' spacing={6} sx={{ py: '1rem' }}>
            <Grid2
              size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              <Typography
                variant='caption'
                sx={{
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: '#FC800A'
                }}
              >
                About us
              </Typography>
              <Typography
                variant='h4'
                sx={{
                  fontFamily: typographyCategory.base.secondary,
                  fontWeight: '600',
                  textTransform: 'capitalize'
                }}
                gutterBottom
              >
                Empowering Digital Futures for Nigeria’s Youth
              </Typography>
              <Typography variant='caption' sx={{ color: '#020202' }}>
                We are committed to bridging the digital divide by delivering
                innovative, community-focused digital education to out-of-school
                children and youth across Nigeria. Our mission is to equip
                learners with essential digital skills—from literacy and
                numeracy to social studies and digital survival skills—through
                engaging, interactive online courses supported by dedicated
                facilitators and local community mentors.
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {aboutUsdata.map((data, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      py: '1.5rem'
                    }}
                  >
                    <img
                      src={data.src}
                      style={{
                        width: '100%',
                        height: '100%',
                        maxWidth: '60px'
                      }}
                      alt={'Icon'}
                    />
                    <Typography
                      variant='body1'
                      sx={{
                        fontWeight: '400',
                        textTransform: 'capitalize',
                        fontFamily: typographyCategory.base.secondary
                      }}
                      color='initial'
                    >
                      {data.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                  justifyContent: { xs: 'center', md: 'start' }
                }}
              >
                <Button
                  variant='contained'
                  sx={{
                    whiteSpace: 'nowrap',
                    my: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { xs: 'center', md: 'start' },
                    gap: 1
                  }}
                >
                  learn more about us <img src='/Illus/arrow.png' alt='icon' />
                </Button>
                <a
                  href='#'
                  style={{ marginTop: '1rem', fontSize: '12px', color: '#000' }}
                >
                  Free Access for All Learners
                </a>
              </Box>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <Box sx={{ pt: '6rem' }}>
                <img
                  src='/Image/about_1.png'
                  style={{ width: '100%', maxWidth: '600px' }}
                  alt='about'
                />
                <img
                  src='/Image/about_2.png'
                  style={{ width: '100%', maxWidth: '600px' }}
                  alt='about'
                />
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Box>
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center', pt: '5rem', pb: '2rem' }}>
            <Typography
              variant='caption'
              sx={{
                fontWeight: '600',
                textTransform: 'uppercase',
                color: '#FC800A'
              }}
            >
              Dedicated to Excellence
            </Typography>
            <Typography
              variant='h4'
              sx={{
                fontFamily: typographyCategory.base.secondary,
                fontWeight: '600',
                textTransform: 'capitalize'
              }}
              gutterBottom
            >
              Building a Strong Digital Foundation <br /> for Future Innovators
            </Typography>
          </Box>

          <Box
            sx={{
              display: {
                xs: 'block',
                sm: 'block',
                md: 'flex',
                lg: 'flex',
                xl: 'flex'
              },
              alignItems: 'center'
            }}
          >
            {excellenceData.map((data, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: 'center',
                  position: 'relative',
                  paddingX: 2,
                  pb: '2rem',
                  '&:not(:last-child)': {
                    borderRight: '2px dotted #9E9E9E80'
                  }
                }}
              >
                <img
                  src={data.src}
                  style={{ width: '100%', maxWidth: '150px' }}
                  alt={'Illus'}
                />
                <Typography
                  variant='body1'
                  sx={{
                    fontFamily: typographyCategory.base.secondary,
                    fontWeight: '600',
                    textTransform: 'capitalize'
                  }}
                  color='initial'
                >
                  {data.label}
                </Typography>
                <Typography variant='caption' color='initial'>
                  {data.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: '#FCF7EE',
          pb: '6rem'
        }}
      >
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center', pt: '3rem', pb: '2rem' }}>
            <Typography
              variant='caption'
              sx={{
                fontWeight: '600',
                textTransform: 'uppercase',
                color: '#FC800A'
              }}
            >
              Patners
            </Typography>
            <Typography
              variant='h4'
              sx={{
                fontFamily: typographyCategory.base.secondary,
                fontWeight: '600',
                textTransform: 'capitalize'
              }}
              gutterBottom
            >
              Our Patners
            </Typography>
          </Box>

          <Box
            sx={{
              display: {
                xs: 'block',
                sm: 'block',
                md: 'flex',
                lg: 'flex',
                xl: 'flex'
              },
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}
          >
            <Box>
              <img
                src='/Image/patners.png'
                style={{ width: '100%', maxWidth: '200px' }}
                alt='patners'
              />
            </Box>
            <Box
              sx={{
                backgroundColor: '#fff',
                py: '0.2rem',
                px: '1rem',
                borderRadius: '10px'
              }}
            >
              <img src='/Image/patners_3.png' alt='patners' />
            </Box>
            <Box>
              <img
                src='/Image/patners_2.png'
                style={{ width: '100%', maxWidth: '110px' }}
                alt='patners'
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{ position: 'relative', padding: 0, margin: 0, overflow: 'hidden' }}
      >
        <Box sx={{ backgroundColor: '#5A1F7D', py: { xs: 2, md: 5 } }}>
          <Container maxWidth='lg'>
            <Grid2 container alignItems='center' spacing={4}>
              <Grid2
                size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
                textAlign={{ xs: 'center', md: 'left' }}
              >
                <Typography
                  variant='caption'
                  sx={{
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: '#FC800A',
                    mb: 1
                  }}
                >
                  Play & Learn
                </Typography>
                <Typography
                  variant='h2'
                  sx={{
                    fontWeight: '400',
                    color: '#fff',
                    fontFamily: typographyCategory.base.secondary,
                    textTransform: 'capitalize',
                    lineHeight: 1.3
                  }}
                  gutterBottom
                >
                  Committed to Engaging Digital Education
                </Typography>
                <Typography
                  variant='caption'
                  sx={{
                    color: '#fff',
                    display: 'block',
                    mb: 2
                  }}
                >
                  Experience interactive, game-based lessons designed to ignite
                  creativity and build essential digital skills. Our fun and
                  dynamic modules empower young learners to explore coding,
                  digital storytelling, and multimedia creation—making every
                  session an exciting adventure in the digital world.
                </Typography>
                <Box>
                  <Button
                    variant='contained'
                    sx={{
                      whiteSpace: 'nowrap',
                      mt: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'center', md: 'start' },
                      gap: 1
                    }}
                  >
                    Get Started <img src='/Illus/arrow.png' alt='icon' />
                  </Button>
                </Box>
              </Grid2>

              <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'flex-end' },
                    alignItems: 'center',
                    pt: { xs: 2, md: '3rem' }
                  }}
                >
                  <img
                    src='/Image/learn_1.png'
                    style={{
                      width: '100%',
                      maxWidth: '350px',
                      objectFit: 'cover'
                    }}
                    alt='about'
                  />
                </Box>
              </Grid2>
            </Grid2>
          </Container>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: -1,
            left: 0,
            width: '100vw',
            height: { xs: '120px', sm: '160px', md: '120px' },
            overflow: 'hidden'
          }}
        >
          <img
            src='/Illus/wave-up.png'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt='wave'
          />
        </Box>
      </Box>
      <HowWeWorkSection />
      <JoinTodaySection />
      <EduCarouselSection />
      <TestimonialSection />
    </>
  )
}
