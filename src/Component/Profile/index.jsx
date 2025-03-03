import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { typographyCategory } from '../../Constants/typography'

export default function ProfileOverview ({
  title = 'Overview',
  avatarSrc = '/Image/profile.png',
  avatarAlt = 'Profile Picture',
  avatarName = '',
  avatarEmail = '',
  editButtonText = 'Edit my Profile Picture',
  onEditProfile = () => {},
  fields = [],
  emailSectionTitle = 'My email Address',
  emailValue = '',
  emailTimestamp = '',
  emailIcon = '/Image/sms.png'
}) {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        minHeight: '100vh',
        borderRadius: 10,
        boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.2)',
        px: { xs: 2, md: 2 },
        py: { xs: 2, md: 4 }
      }}
    >
      <Typography
        variant='h5'
        sx={{
          mb: 3,
          px: { xs: 2, md: 3 },
          pt: { xs: 2, md: 4 },
          fontWeight: 600
        }}
      >
        {title}
      </Typography>

      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Grid
          container
          alignItems='center'
          justifyContent='space-between'
          spacing={2}
        >
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt={avatarAlt}
              src={avatarSrc}
              sx={{ width: 80, height: 80, mr: 2 }}
            />
            <Box>
              <Typography
                variant='body1'
                sx={{
                  fontFamily: typographyCategory.base.tertiary,
                  fontWeight: 600
                }}
              >
                {avatarName}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {avatarEmail}
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <Button
              variant='contained'
              onClick={onEditProfile}
              sx={{
                textTransform: 'none',
                backgroundColor: '#E8E8FF',
                borderRadius: 2,
                fontSize: '14px',
                color: '#6966FF',
                fontWeight: 400,
                fontFamily: typographyCategory.base.tertiary,
                '&:hover': {
                  backgroundColor: '#D4D4FF'
                }
              }}
            >
              {editButtonText}
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 4 }}>
          {fields.map((field, i) => (
            <Grid item xs={12} md={6} key={i}>
              <TextField
                fullWidth
                variant='filled'
                label={field.label}
                value={field.value || ''}
                placeholder={field.placeholder || ''}
                InputProps={{ disableUnderline: true }}
                sx={{
                  backgroundColor: '#F5F5F5',
                  borderRadius: 3,
                  fontFamily: typographyCategory.base.tertiary,
                  '& .MuiFilledInput-root': {
                    backgroundColor: '#F5F5F5',
                    borderRadius: 3,
                    py: 0.2,
                    fontFamily: typographyCategory.base.tertiary
                  },
                  '& .MuiInputLabel-root': {
                    color: '#666',
                    borderRadius: 3,
                    fontFamily: typographyCategory.base.tertiary
                  }
                }}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant='body1'
            sx={{
              fontFamily: typographyCategory.base.tertiary,
              mb: 1,
              fontWeight: 600
            }}
          >
            {emailSectionTitle}
          </Typography>
          <Box sx={{ display: 'flex', mt: 2 }}>
            <Box sx={{ pr: '6px' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  py: '1rem',
                  px: '1rem',
                  backgroundColor: '#E8E8FF',
                  borderRadius: '50px'
                }}
              >
                <Box component='img' src={emailIcon} alt='Email Icon' />
              </Box>
            </Box>
            <Box sx={{ pt: 1 }}>
              <Typography
                variant='body2'
                sx={{ fontFamily: typographyCategory.base.tertiary }}
              >
                {emailValue}
              </Typography>
              <Typography
                variant='caption'
                sx={{ fontFamily: typographyCategory.base.tertiary }}
                color='text.secondary'
              >
                {emailTimestamp}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
