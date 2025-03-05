import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import styles from './styles';

export default function DashboardNavLink({
  icon,
  label,
  link = '#',
  active = false,
  expand = false,
}) {
  const theme = useTheme();
  const sxStyles = styles(theme, active, expand);

  return (
    <Box sx={{ pl: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box component={Link} to={link} sx={sxStyles.wrap}>
        <Box className="icon">{icon}</Box>
        <Typography className="label default">{label}</Typography>
        {expand && <Typography className="label mini">{label}</Typography>}
      </Box>
    </Box>
  );
}
