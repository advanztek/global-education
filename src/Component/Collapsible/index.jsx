import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandUpLeftRegular from '@mui/icons-material/ExpandMore'
import { acdetail } from './data'
import { ChevronRight20Filled, ChevronRightFilled } from '@fluentui/react-icons'

const Collapsible = ({ label, NoVideo, min}) => {
  return (
    <Box>
      <Accordion
        sx={{
          boxShadow: 'none',
          border: 'none',
          '&:before': { display: 'none' }
        }}
      >
        <AccordionSummary
          expandIcon={<ChevronRight20Filled style={{ color:'#000'}} />}
          sx={{
            border: 'none',
            padding: 0
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='subtitle1' sx={{ fontWeight: '700', mb: 1 }}>
              {label}
            </Typography>
            <Typography variant='body2' sx={{ mb: 2 }}>
              <span style={{ color: '#1B1B1B99' }}>{NoVideo}</span>
              <span style={{ color: '#C5322A' }}>{min}</span>
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            border: 'none',
            padding: '4px 2rem'
          }}
        >
          {acdetail.map((detail, index) => (
            <Box key={index} sx={{ py: '9px',}}>
              <Typography variant='body2' sx={{ cursor: 'pointer',}} color='#1B1B1B99'>
               {detail.label}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box component='img' src='/Image/play_1.png' />
                <Typography variant='caption' color='#00DDC0'>
                 {detail.time}
                </Typography>
              </Box>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Collapsible
