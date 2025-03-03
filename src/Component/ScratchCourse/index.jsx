import Typography from '@mui/material/Typography'
import { Scratch } from './data'
import Box from '@mui/material/Box'

export default function ScratchCourse () {
  return (
    <>
      <Box>
        <Box sx={{ py: 2 }}>
          <Typography
            variant='h6'
            sx={{ fontWeight: '700', textTransform: 'uppercase' }}
            color='initial'
          >
            Scratch course
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', py: 2 }}>
              <Box
                sx={{ width: '40px', height: 'auto' }}
                component='img'
                src='/Logo/Logo.png'
              />
              <Typography
                variant='caption'
                sx={{ pl: 1, fontWeight: '700' }}
                color='#3DCBB1'
              >
                NOGALSS
              </Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              {Scratch.map((scratch, index) => (
                <Box key={index} sx={{ display: 'flex', px:'4px', alignItems: 'center'}}>
                  <Box component='img' src={scratch.src} />
                  <Typography variant='caption' sx={{px:'4px', fontWeight: '500'}} color='#1B1B1B99'>
                    {scratch.no}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography
              variant='body1'
              sx={{ fontWeight: '700' }}
              color='initial'
            >
              About Course
            </Typography>
            <Typography variant='body2' sx={{ pt: 2 }} color='#1B1B1B99'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}
