import React, { useRef } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Container from '@mui/material/Container'
import { typographyCategory } from '../../Constants/typography'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material'
const images = [
  '/Image/hero_1.png',
  '/Image/learn_1.png',
  '/Image/join.png',
  '/Illus/Illus_8.png',
  '/Illus/Illus_9.png'
]

const EduCarousel = () => {
  const swiperRef = useRef(null);
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm")); 
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); 
  const isLg = useMediaQuery(theme.breakpoints.up("lg")); 

  const slidesPerView = isXs ? 1 : isMd ? 3 : isLg ? 5 : 5;

  return (
    <Box sx={{ bgcolor: '#FCF7EE', pt: 10 }}>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box>
            <Typography variant='caption' fontWeight='bold'>
              EDUCATION SOLUTION
            </Typography>
            <Typography
              variant='h4'
              sx={{ fontFamily: typographyCategory.base.secondary }}
              fontWeight='400'
            >
              Learn & Enjoy Together
            </Typography>
          </Box>

          <Box>
            <IconButton onClick={() => swiperRef.current?.slidePrev()}>
              <img src='/Image/arrowLeft.png' style={{ width: '40px',}} alt='icon' />
            </IconButton>
            <IconButton onClick={() => swiperRef.current?.slideNext()}>
              <img src='/Image/arrowRight.png' style={{ width: '40px',}} alt='icon' />
            </IconButton>
          </Box>
        </Box>
      </Container>

      <Box sx={{ mt: 3 }}>
        <Swiper
          onSwiper={swiper => (swiperRef.current = swiper)}
          modules={[Navigation]}
          slidesPerView={slidesPerView}
          spaceBetween={10}
          loop={true}
          style={{ padding: '10px' }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '10px',
                  border: '3px dashed #000',
                  overflow: 'hidden',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}
              >
                <img
                  src={img}
                  alt={`Student ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}

export default EduCarousel
