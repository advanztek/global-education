import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { styles } from './styles'
import SearchBar from '../SearchBar'
import Avatar from '@mui/material/Avatar'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AlertBadge from '../AlertBadge'

export default function DashboardNav ({
  currentRoute = 'Welcome back to your portal',
  onToggle,
  sideNavWidth
}) {
  const theme = useTheme().palette.mode

  return (
    <Box position='fixed' sx={styles.nav}>
      <Box>
        <Box sx={styles.navLabel}>
          <Box component='img' src='/Logo/Logo.png' sx={styles.logo} />
          <Typography sx={{ ...styles.navTitle, color: '#5A1F7D' }}>
            {currentRoute}
          </Typography>
        </Box>
      </Box>
      <Box
        display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
      >
        <SearchBar />
      </Box>
      <Box sx={styles.actionWrap}>
        <Box
          display={{
            xs: 'flex',
            sm: 'flex',
            md: 'flex',
            lg: 'flex',
            xl: 'flex'
          }}
          alignItems='center'
          gap={2}
        >
          <Box>
            <AlertBadge />
          </Box>

          <Box display='flex' alignItems='center' gap={1}>
            <Avatar alt='User' src='/Image/AVAR.png' />
            <ExpandMoreIcon sx={{ color: '#E5E5E5' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
