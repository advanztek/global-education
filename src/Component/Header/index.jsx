import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Container from '@mui/material/Container'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { IconItemsdata } from './data'
import TopNav from '../Topnav'
import HeroSection from '../HeroSection'

export default function Header () {
  const [open, setOpen] = useState(false)

  return (
    <>
      <TopNav />
      <Box
        component='header'
        sx={{ position: 'relative', bgcolor: 'white', zIndex: 10 }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 2
          }}
        >
          <Box>
            <img style={{ width: '100%', height: '100%', maxWidth: '60px', }} src='/Logo/Logo.png' alt='logo' />
          </Box>

          <Stack
            direction='row'
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {['Home', 'Contact us'].map(item => (
              <Typography key={item} variant='body1' sx={{ cursor: 'pointer' }}>
                {item}
              </Typography>
            ))}
          </Stack>

          <Stack direction='row' spacing={1} alignItems='center'>
            {IconItemsdata.map((icons, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  borderRadius: '50%',
                  alignItems: 'center',
                  color: '#fff',
                  cursor: 'pointer',
                  py: 1,
                  px: 1,
                  '&:hover': {
                    backgroundColor: '#FC800A'
                  },
                  backgroundColor: '#000'
                }}
              >
                {icons.icon}
              </Box>
            ))}
            <IconButton
              sx={{ display: { md: 'none' } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Container>
      </Box>

      <Box
        component='img'
        src='/Illus/wave-cloud.png'
        alt='Wavy Cloud'
        sx={{
          display: 'block',
          width: '100%',
          height: 'auto',
          backgroundColor: '#FFF5E7',
          margin: 0,
          padding: 0
        }}
      />

      <HeroSection />

      <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>
          <List>
            {['Home', 'About', 'Contact'].map(text => (
              <ListItem button key={text} onClick={() => setOpen(false)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}
