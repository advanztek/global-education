import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import { steps } from './data'
import { typographyCategory } from '../../Constants/typography'

export default function JoinTodaySection () {
  return (
    <Box
      sx={{
        backgroundColor: '#F8AD12',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth='lg' sx={{padding:{xs: 4, sm: 5, md: 6, lg:2, xl:2},}}>
        <Grid container alignItems='center' >
          <Grid
            size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
            sx={{ bottom: {xs:0, sm:0, md:0, lg:-70, xl: -70}, position: 'relative', zIndex: 2 }}
          >
            <img
              src='/Image/join.png'
              alt='Student'
              style={{  width: '100%', maxWidth: '500px' }}
            />
          </Grid>

          <Grid sx={{ py: '2rem'}}  size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
            <Typography
              variant='body2'
              sx={{
                pt: '3rem',
                color: '#FFF',
                textTransform: 'uppercase'
              }}
            >
              Loved by Kids
            </Typography>
            <Typography
              variant='h4'
              sx={{
                fontWeight: '500',
                fontFamily: typographyCategory.base.secondary,
                color: '#FFF',
                mt: 1,
                mb: 3
              }}
            >
              Join Today & Become Confident Learner
            </Typography>

            <Grid
              container
              spacing={4}
              justifyContent='center'
              alignItems='center'
              sx={{pt: '3rem'}}
            >
              {steps.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} md={3} textAlign='center'>
                  <Box
                    sx={{
                      paddingLeft: {xs: 0, sm: 0, md: item.type === 'small' ? 8 : 0, lg:item.type === 'small' ? 8 : 0,},
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      style={{ width: '80px' }}
                    />
                    <Typography
                      variant='h6'
                      fontWeight='400'
                      color='#fff'
                      sx={{ fontFamily: typographyCategory.base.secondary}}
                      mt={1}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='#fff'
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <img
        src='/Illus/Illus_16.png'
        alt='Rocket Kid'
        style={{ position: 'absolute', top: 20, right: 20, width: '200px' }}
      />
    </Box>
  )
}
