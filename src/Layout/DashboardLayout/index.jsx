import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { DashboardNav, DashboardSidenav } from '../../Component'
import { Outlet } from 'react-router-dom'
import { styles as contentStyles } from './styles'

const dashboardActiveColors = {
  learning: '#5A1F7D',
  facilitator: '#BE2431',
  me: '#DF9A0C',
  'cluster-manager': '#0D7F41'
}

export default function DashboardLayout ({ dashboardType }) {
  const [sideNavWidth, setSideNavWidth] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const activeColor = dashboardActiveColors[dashboardType]

  const handleTransitionEnd = () => setIsClosing(false)
  const handleClose = () => {
    setIsClosing(true)
    setMobileOpen(false)
  }

  return (
    <Box style={{ '--active-color': activeColor }}>
      <DashboardNav dashboardType={dashboardType} />
      <DashboardSidenav
        dashboardType={dashboardType}
        mobileOpen={mobileOpen}
        onClose={handleClose}
        onTransitionEnd={handleTransitionEnd}
        setWidth={setSideNavWidth}
      />
      <Box component='main' sx={contentStyles.content}>
        <Outlet />
      </Box>
    </Box>
  )
}
