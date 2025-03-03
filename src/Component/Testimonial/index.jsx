import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Container from '@mui/material/Container'
import { typographyCategory } from '../../Constants/typography'
const testimonials = [
  {
    text: 'Ever since enrolling in the digital learning platform, my child has become more confident and enthusiastic about technology. The interactive lessons and engaging content have truly transformed their educational journey.',
    name: 'Adanna’s Mom',
    avatar: '/Image/hero_1.png',
    cloudImage: '/Illus/Cloud.png'
  },
  {
    text: 'This platform is a game-changer. The hands-on digital courses and supportive community have helped my child develop essential tech skills and a love for learning.',
    name: 'Chinwe’s Dad',
    avatar: '/Image/learn_1.png',
    cloudImage: '/Illus/Cloud_2.png'
  },
  {
    text: 'I appreciate the innovative approach and personalized attention. The curriculum not only boosts digital literacy but also inspires creativity and critical thinking.',
    name: 'Emeka’s Guardian',
    avatar: '/Image/join.png',
    cloudImage: '/Illus/Cloud_4.png'
  }
]

const TestimonialCarousel = () => {
  return (
    <Box sx={{ backgroundColor: '#FDF7EC', py: 15 }}>
      <Container maxWidth='xl'>
        <Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant='caption'
              sx={{
                color: '#8BC34A',
                fontWeight: '500',
                textAlign: 'center',
                textTransform: 'uppercase'
              }}
            >
              TESTIMONIAL
            </Typography>
            <Typography
              variant='h4'
              sx={{
                fontWeight: '500',
                fontFamily: typographyCategory.base.secondary,
                mb: 4
              }}
            >
              What Parents Say
            </Typography>
          </Box>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            style={{ maxWidth: '90%', margin: 'auto', paddingBottom: '30px' }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <Stack spacing={2} alignItems='center'>
                  <Box
                    sx={{
                      width: '380px',
                      height: '200px',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      px: 3
                    }}
                  >
                    <img
                      src={item.cloudImage}
                      alt='Speech Bubble'
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        zIndex: -1
                      }}
                    />
                    <Stack
                      direction='row'
                      spacing={0.5}
                      justifyContent='center'
                    >
                      {[...Array(5)].map((_, i) => (
                        <Typography key={i} color='#fff'>
                          ★
                        </Typography>
                      ))}
                    </Stack>
                    <Typography
                      variant='caption'
                      color='#fff'
                      sx={{ maxWidth: '80%' }}
                    >
                      {item.text}
                    </Typography>
                  </Box>

                  <Stack direction='row' spacing={1} alignItems='center'>
                    <Avatar src={item.avatar} sx={{ width: 50, height: 50 }} />
                    <Typography
                      variant='body2'
                      sx={{
                        fontFamily: typographyCategory.base.secondary,
                        fontWeight: '600'
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Stack>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  )
}

export default TestimonialCarousel
