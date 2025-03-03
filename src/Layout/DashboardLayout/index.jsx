import Box from '@mui/material/Box';
import { DashboardNav, DashboardSidenav } from '../../Component';
import { useState } from 'react';
import { styles } from './styles';

export default function DashboardLayout({ children }) {
  const [sideNavWidth, setSideNavWidth] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTransitionEnd = () => setIsClosing(false);
  const handleClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  return (
    <Box>
      <DashboardNav />
      <DashboardSidenav
        mobileOpen={mobileOpen}
        onClose={handleClose}
        onTransitionEnd={handleTransitionEnd}
        setWidth={setSideNavWidth}
      />
      <Box component="main" sx={styles.content}>
        {children}
      </Box>
    </Box>
  );
}
