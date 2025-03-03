import Typography from '@mui/material/Typography'
import { reviewData } from './data'
import Box from '@mui/material/Box';


export default function ReviewDash () {
  return (
    <>
      <Box>
        <Typography variant='body1' sx={{fontWeight: '700', py: 2}} color='initial'>
          Review
        </Typography>
        {reviewData.map((rev, index) => (
          <Box key={index} sx={{ display: 'flex', py: 1,  gap: '15px', }}>
            <Box>
              <Box component='img' src='/Image/user_1.png' />
            </Box>
            <Box>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700' }}
                color='#3DCBB1'
              >
                {rev.label}
              </Typography>
              <Typography sx={{ fontSize: '11px', color: '#1B1B1B1A', fontWeight: '500' }}>
                {rev.sub}
              </Typography>
              <Typography
                sx={{ fontSize: '14px', color: '#1B1B1B99', fontWeight: '500' }}
              >
                {rev.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )
}
