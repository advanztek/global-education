import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function DashboardSettings () {
  return (
    <>
      <Box sx={{ borderRadius: 10, px: 4,height: '100vh', py: 4, backgroundColor: '#fff' }}>
        <Box>
          <Typography
            variant='h4'
            color='initial'
            sx={{ fontWeight: 600, py: '1rem' }}
          >
            Sign in method
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {xs:'column', sm:'row', md: 'row', lg: 'row', xl: 'row'},
            borderTop: '1px solid #DCDCDC',
            borderBottom: '1px solid #DCDCDC',
            py: '1.5rem',
            gap:2,
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <Typography variant='body1' color='initial'>
              Email Address
            </Typography>
            <Typography variant='body1' color='#898989'>
              eureka88@email.com
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                '&:hover': { backgroundColor: 'whitesmoke' }
              }}
              variant='outlined'
              color='secondary'
            >
              Request Email Change
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            borderY: '1px solid #898989',            
            flexDirection: {xs:'column', sm:'row', md: 'row', lg: 'row', xl: 'row'},
            alignItems: 'center',
            gap:2,
            justifyContent: 'space-between',
            py: '1.5rem',
            borderBottom: '1px solid #DCDCDC'
          }}
        >
          <Box>
            <Typography variant='body1' color='initial'>
              Password
            </Typography>
            <Typography variant='body1' color='#898989'>
              *************
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                fontWeight: 700,
                '&:hover': { backgroundColor: 'whitesmoke' }
              }}
              variant='outlined'
              color='secondary'
            >
              Change password
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: '#36B520',
            display: 'flex',
            flexDirection: {xs:'column', md:'row'},
            justifyContent: 'space-between',
            gap: 6,
            px: 4,
            py: 4,
            mt: 4,
            alignItems: 'center',
            borderRadius: 3
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: {xs:'column', md: 'row'} }}>
            <Box sx={{ pr: 2 }}>
              <Box component='img' src='/Image/Shape.png' />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant='body1' color='#fff'>
                Secure Your Account
              </Typography>
              <Typography variant='body2' color='#fff'>
                Two-factor authentication adds an extra layer of security to
                your account. To log in, in addition you'll need to provide a 6
                digit code
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                color: '#fff',
                backgroundColor: '#5A1F7D',
                borderRadius: 2,
                fontWeight: 600
              }}
            >
              Enable
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
