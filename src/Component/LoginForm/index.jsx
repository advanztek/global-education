import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { typographyCategory } from '../../Constants/typography'

export default function LoginForm ({
  title = 'Login to your account!',
  fields,
  buttonText,
  subTitle,
  backBtn,
  nextBtn,
  supportText
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        padding: {xs: 4.5, sm: 4, md: 6, lg:8, xl:8},
        backgroundColor: '#fff',
        borderRadius: 2,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: 640,
        width: '100%',
        margin: '0 auto'
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          variant='h5'
          sx={{
            fontWeight: '400',
            fontFamily: typographyCategory.base.secondary,
            color: '#FC800A',
            mb: 1
          }}
        >
          {title}
        </Typography>
        {subTitle && (
          <Typography
            variant='body2'
            sx={{
              fontWeight: '400',
              fontFamily: typographyCategory.base.secondary,
              color: '#5A1F7D52',
              mb: 3
            }}
          >
            {subTitle}
          </Typography>
        )}

        {fields &&
          fields.map((label, idx) => (
            <TextField
              key={idx}
              variant='standard'
              label={label}
              fullWidth
              InputLabelProps={{
                style: {
                  textAlign: 'center',
                  fontFamily: typographyCategory.base.secondary,
                  fontSize: '18px',
                  color: '#5A1F7D52',
                  fontWeight: '800',
                  width: '100%'
                }
              }}
              inputProps={{
                style: { textAlign: 'center' }
              }}
              sx={{
                mb: 2,
                textAlign: 'center',
                '& .MuiInput-underline:before': {
                  borderBottomColor: '#86227F',
                  fontWeight: 800
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: '#86227F',
                  fontWeight: 800
                },
                '& .MuiInput-underline:after': {
                  fontWeight: 800,
                  borderBottomColor: '#86227F'
                }
              }}
            />
          ))}

        {buttonText ? (
          <Button
            variant='contained'
            sx={{
              my: 3,
              px: 3,
              py: 1.4,
              fontWeight: 400,
              fontFamily: typographyCategory.base.secondary
            }}
          >
            {buttonText}
            <Box
              component='img'
              src='/Illus/arrow.png'
              sx={{ fontSize: 16, ml: 1 }}
            />
          </Button>
        ) : (
          backBtn &&
          nextBtn && (
            <Box
              sx={{
                display: {xs: 'block', md:'flex'},
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Button
                disabled
                variant='contained'
                sx={{
                  my: 3,
                  px: 3,
                  mx: 2,
                  py: 1.4,
                  fontWeight: 400,
                  fontFamily: typographyCategory.base.secondary
                }}
              >
                {backBtn}
                <Box
                  component='img'
                  src='/Illus/arrow.png'
                  sx={{ fontSize: 16, ml: 1 }}
                />
              </Button>
              <Button
                variant='contained'
                sx={{
                  my: 3,
                  px: 3,
                  py: 1.4,
                  fontWeight: 400,
                  fontFamily: typographyCategory.base.secondary
                }}
              >
                {nextBtn}
                <Box
                  component='img'
                  src='/Illus/arrow.png'
                  sx={{ fontSize: 16, ml: 1 }}
                />
              </Button>
            </Box>
          )
        )}

        {supportText && (
          <Typography
            variant='body2'
            sx={{
              fontFamily: typographyCategory.base.secondary,
              mt: 2,
              color: '#5A1F7D52',
              textAlign: 'center'
            }}
          >
            {supportText}
          </Typography>
        )}
      </Box>
    </Box>
  )
}
