import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Overlay from '../Overlay'

const ModuleCard = ({
  moduleName,
  subject,
  viewLink,
  Link,
  backgroundImage,
  educationImage,
  index
}) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: '280px' }}>
      <img
        src={backgroundImage}
        alt='Module Background'
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 3,
          zIndex: 1
        }}
      >
        <Box>
          <Typography
            variant='body1'
            sx={{
              fontWeight: 500,
              fontSize: {
                xs: '9px',
                sm: '9px',
                md: '11px',
                lg: '18px',
                xl: '18px'
              }
            }}
            color='initial'
          >
            {moduleName}
          </Typography>
          <Typography
            variant='h5'
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '18px',
                lg: '26px',
                xl: '26px'
              }
            }}
            color='initial'
          >
            {subject}
          </Typography>
          <Box
            component='a'
            href={viewLink}
            sx={{
              color: '#000',
              whiteSpace: 'nowrap',
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '11px',
                lg: '15px',
                xl: '15px'
              }
            }}
          >
            {Link}
          </Box>
        </Box>
        <Box>
          <img
            src={educationImage}
            alt='Education Icon'
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </Box>
      </Box>

      <Overlay
        condition={index !== 0}
        backgroundColor='rgba(255, 255, 255, 0.6)'
      />
    </Box>
  )
}

export default ModuleCard
