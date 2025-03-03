import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import { typographyCategory } from '../../Constants/typography'
import Container from '@mui/material/Container'
export default function Footer () {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            bottom: -2,
            left: 0,
            width: '100wv',
            height: { xs: '120px', sm: '160px', md: '120px', lg: '110px' },
            overflow: 'hidden'
          }}
        >
          <img
            src='/Illus/wave.png'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt='wave'
          />
        </Box>
      </Box>
      <Box sx={{ bgcolor: '#171E45', color: 'white', pt: 9 }}>
        <Container maxWidth='lg'>
          <Box
            sx={{
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              gap: 4
            }}
          >
            <Box>
              <Typography
                variant='h6'
                fontWeight='bold'
                sx={{ color: '#F4D03F', mb: 1 }}
              >
                <img src='/Logo/footerLogo.png' alt='logo' />
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  fontFamily: typographyCategory.base.primary,
                  fontWeight: '300',
                  mx: 1,
                  mb: 2
                }}
              >
                Pioneering innovative digital education for <br />
                Nigerian youth through community-driven <br />
                learning solutions.
              </Typography>

              <Typography
                variant='h5'
                fontWeight='200'
                sx={{
                  fontFamily: typographyCategory.base.secondary,
                  mb: 1,
                  mx: 1
                }}
              >
                Social Media
              </Typography>
              <Stack direction='row' spacing={1}>
                <IconButton sx={{ color: 'white' }}>
                  <img src='/Illus/F_icon.png' alt='icon' />
                </IconButton>
                <IconButton sx={{ color: 'white' }}>
                  <img src='/Illus/X_icon.png' alt='icon' />
                </IconButton>
                <IconButton sx={{ color: 'white' }}>
                  <img src='/Illus/Y_icon.png' alt='icon' />
                </IconButton>
                <IconButton sx={{ color: 'white' }}>
                  <img src='/Illus/I_icon.png' alt='icon' />
                </IconButton>
              </Stack>
            </Box>

            <Box sx={{ pt: 2 }}>
              <Typography
                variant='h6'
                fontWeight='300'
                sx={{ fontFamily: typographyCategory.base.secondary, mb: 2 }}
              >
                Get In Touch
              </Typography>
              <Typography fontWeight='300' variant='body2' sx={{ mb: 3 }}>
                [Your Organization Name], <br />
                [Your Address, Nigeria]
              </Typography>
              <Typography variant='body2' fontWeight='300' sx={{ mt: 1 }}>
                Call us: <br />
                +00 (0) 123 456 789
              </Typography>
              <Typography variant='body2' fontWeight='300' sx={{ mt: 1 }}>
                E-Mail: admin@example.com
              </Typography>
            </Box>

            <Box sx={{ pt: 2 }}>
              <Typography
                variant='h6'
                fontWeight='300'
                sx={{ fontFamily: typographyCategory.base.secondary, mb: 1 }}
              >
                Useful Links
              </Typography>
              <Typography variant='body2' fontWeight='300' sx={{ pt: 1.1 }}>
                Contact us
              </Typography>
              <Typography variant='body2' fontWeight='300' sx={{ pt: 2 }}>
                History
              </Typography>
              <Typography variant='body2' fontWeight='300' sx={{ pt: 2 }}>
                Privacy Policy
              </Typography>
              <Typography variant='body2' fontWeight='300' sx={{ pt: 2 }}>
                Terms & Conditions
              </Typography>
            </Box>

            <Box sx={{ pt: 2 }}>
              <Typography variant='h6' fontWeight='bold' sx={{ mb: 1 }}>
                Customer Services
              </Typography>
              <Typography variant='body2' fontWeight='300' sx={{ pt: 1.1 }}>
                FAQs
              </Typography>
              <Typography variant='body2' fontWeight='300' sx={{ pt: 2 }}>
                Support
              </Typography>
              <Typography variant='body2' fontWeight='300' sx={{ pt: 2 }}>
                Our Modules
              </Typography>
              <Typography variant='body2' fontWeight='300' sx={{ pt: 2 }}>
                Our Mentors
              </Typography>
              <Typography variant='body2' fontWeight='300' sx={{ pt: 2 }}>
                Community Guidelines
              </Typography>
            </Box>
          </Box>
          {/* <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <img src='/Image/sunflower.png' alt='img' />
            <img src='/Image/dots.png' alt='img' />
            <img src='/Image/musroom.png' alt='img' /> */}
          {/* </Box> */}
        </Container>

        <Box
          sx={{
            bgcolor: '#662D91',
            textAlign: 'center',
            py: 2,
            mt: 3
          }}
        >
          <Typography variant='body2'>
            © 2025 Advanztek. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </>
  )
}
