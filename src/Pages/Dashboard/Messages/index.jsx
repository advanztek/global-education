import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { typographyCategory } from '../../../Constants/typography'
import { SearchBar } from '../../../Component'
import { userData } from './data'
import { Heart16Filled } from '@fluentui/react-icons'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import MicIcon from '@mui/icons-material/Mic'

export default function Messages () {
  return (
    <Box>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item size={{ xs: 12, sm: 12, md: 4, lg: 3, xl: 3 }}>
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              height: '100%',
              minHeight: '80vh',
              p: {xs:1, sm:2, md:1.5, lg:3, xl:3,},
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography
              variant='h6'
              sx={{
                mt: 2,
                fontFamily: typographyCategory.base.tertiary,
                mb: 2,
                fontWeight: 600
              }}
            >
              All Messages
            </Typography>

            <Box sx={{ pb: 4 }}>
              <SearchBar width={{xs:'300px', sm:'300px', md:'200px', lg: '250px'}} />
            </Box>

            {userData.map((user, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 3,
                  cursor: 'pointer'
                }}
              >
                <Avatar sx={{ bgcolor: '#3F3F3F', mr: 2 }}>
                  {user.avatar}
                </Avatar>
                <Typography
                  variant='body2'
                  sx={{
                    fontFamily: typographyCategory.base.tertiary,
                    fontWeight: 500
                  }}
                >
                  {user.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, sm: 12, md: 7, lg: 9, xl: 9 }}>
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              p: 4
            }}
          >
            <Box
              sx={{
                borderBottom: '1px solid #E5E7EB',
                pb: 1,
                mb: 2
              }}
            >
              <Typography
                variant='body2'
                sx={{
                  fontFamily: typographyCategory.base.tertiary,
                  fontWeight: 600
                }}
              >
                James admin 1
              </Typography>
              <Typography
                variant='caption'
                sx={{ color: 'green', display: 'block' }}
              >
                @ Online
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                pb: 2
              }}
            >
              <Box sx={{ mb: 2, mt: 4 }}>
                <Box
                  sx={{
                    display: 'inline-block',
                    alignItems: 'center',
                    backgroundColor: '#F5F0FF',
                    borderRadius: 2,
                    p: 2
                  }}
                >
                  <Typography
                    variant='body2'
                    color='#3F3F4499'
                    sx={{ fontFamily: typographyCategory.base.septenary }}
                  >
                    Uk voluptate pulvinar ullamcorper
                    <span style={{ color: '#6A1B9A' }}>
                      <Heart16Filled style={{ mt: 5 }} />
                    </span>
                  </Typography>
                </Box>
                <Typography
                  variant='caption'
                  sx={{ display: 'block', mt: 0.5, color: '#999' }}
                >
                  03:20 AM
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                p: 3,
                borderRadius:3,
                backgroundColor: '#F5F5F5',
                py: 3
              }}
            >
              <TextField
                fullWidth
                variant='filled'
                InputProps={{ disableUnderline: true }}
                sx={{
                  backgroundColor: '#F5F5F5',
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
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    color: '#CFCFCF',
                    mr: 2
                  }}
                >
                  <InsertPhotoIcon />
                  <AttachFileIcon sx={{ transform: 'rotate(45deg)' }} />
                  <InsertEmoticonIcon />
                  <MicIcon />
                </Box>
                <Button
                  variant='contained'
                  sx={{
                    backgroundColor: '#6A1B9A',
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#5B1680'
                    }
                  }}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
