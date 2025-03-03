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
import { isNavBorderTop } from './utils'
import { dashboardLayoutPad } from '../../Constants/dimensions'
import { useEffect, useRef, useState } from 'react'

export default function DashboardSideNav ({
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
  }, [])

  const { pathname } = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [expand, setExpand] = useState(false)

  function handleExpandToggle () {
    setExpand(curr => !curr)
  }

  const drawer = (
    <Box ref={navRef} sx={styles.sideNav}>
      <Box sx={styles.header}>
        <Box sx={{ pt: '3rem',}}>
          <Box component='img' src='/Logo/Logo.png' sx={styles.logo} />
        </Box>
        <Box sx={{ pt:5,}} display={{ xs: 'none', md: 'block', xl: 'none' }}>
          <Box
            onClick={handleExpandToggle}
            sx={{ backgroundColor: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', py: '10px', borderRadius: '50%', px: '10px'}}
          >
            <NavigationFilled fontSize='16px' />
          </Box>
        </Box>
      </Box>

      <Box sx={styles.navigationWrap}>
        {dashboardNavigation.map((item, i) => (
          <Box
            key={i}
            py='55px'
            
          >
            {item.nav.map((subItem, j) => (
              <DashboardNavLink
                key={j}
                active={pathname === subItem.link}
                link={subItem.link}
                icon={subItem.icon}
                label={subItem.label}
                expand={expand}
              />
            ))}
          </Box>
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
