import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Container from '@mui/material/Container';

export default function TopNav() {
  
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#FFF5E7',
        display: {xs:'none', sm:'none', md:'flex', lg:'flex', xl:'flex',},
        alignItems: 'center',
        height: 'auto',
        padding: { xs: '8px 12px', sm: '8px 16px' },

      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: { xs: '100%', sm: '50%', md: '42%' },
          backgroundColor: '#5D2580',
          clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)',
          minHeight: '40px',
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' }, 
            height: 'auto',
            paddingY: { xs: 1, sm: 0 },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              color: 'white',
              position: 'relative',
              zIndex: 1,
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <LocationOnIcon fontSize="small" />
            <Typography fontSize={{ xs: '12px', sm: '14px' }}>
              Manzana María Elena Leiva s/n., Vitoria, Can 58948
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
              zIndex: 1,
              marginTop: { xs: 1, sm: 0 }, 
              textAlign: { xs: 'center', sm: 'right' },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon fontSize="small" />
              <Typography fontSize={{ xs: '12px', sm: '14px' }}>+00 12 345 6789</Typography>
            </Stack>
            <Typography>|</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <EmailIcon fontSize="small" />
              <Typography fontSize={{ xs: '12px', sm: '14px' }}>support@example.com</Typography>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
