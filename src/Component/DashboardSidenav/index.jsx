import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styles } from './styles'
import { modalProps, dashboardNavigation } from './data'
import { NavigationFilled } from '@fluentui/react-icons'
import DashboardNavLink from '../DashboardNavLink'
import { useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const sideNavColors = {
  learning: '#5A1F7D',
  facilitator: '#BE2431',
  me: '#DF9A0C',
  'cluster-manager': '#0D7F41'
}

export default function DashboardSidenav ({
  dashboardType,
  mobileOpen,
  onClose,
  onTransitionEnd,
  setWidth
}) {
  const navRef = useRef(null)

  useEffect(() => {
    if (navRef.current) {
      setWidth(navRef.current.offsetWidth)
    }
  }, [setWidth])

  const { pathname } = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [expand, setExpand] = useState(false)

  function handleExpandToggle () {
    setExpand(curr => !curr)
  }

  const navItems = dashboardNavigation[dashboardType] || []

  const drawer = (
    <Box
      ref={navRef}
      sx={{ ...styles.sideNav, backgroundColor: sideNavColors[dashboardType] }}
    >
      <Box sx={styles.header}>
        <Box sx={{ pt: '3rem' }}>
          <Box component='img' src='/Logo/Logo.png' sx={styles.logo} />
        </Box>
        <Box sx={{ pt: 10 }} display={{ xs: 'none', md: 'block', xl: 'none' }}>
          <Box
            onClick={handleExpandToggle}
            sx={{
              backgroundColor: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              py: '10px',
              borderRadius: '50%',
              px: '10px'
            }}
          >
            <NavigationFilled fontSize='16px' />
          </Box>
        </Box>
      </Box>

      <Box sx={styles.navigationWrap}>
        {navItems.map((item, i) => (
          <DashboardNavLink
            key={i}
            active={pathname === item.link}
            link={item.link}
            icon={item.icon}
            label={item.label}
            expand={expand}
            dashboardType={dashboardType}
          />
        ))}
      </Box>
    </Box>
  )

  return (
    <Drawer
      variant={isMobile ? 'temporary' : expand ? 'temporary' : 'permanent'}
      open={isMobile ? mobileOpen : true}
      onClose={onClose}
      onTransitionEnd={onTransitionEnd}
      ModalProps={modalProps}
      sx={styles.paper(expand)}
    >
      {drawer}
    </Drawer>
  )
}
