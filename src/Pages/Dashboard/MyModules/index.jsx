import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { modules } from './data'
import {
  Collapsible,
  DashboardCard,
  DashboardDataTab,
  DashboardTab,
  ModuleCard,
  ScratchCourse
} from '../../../Component'
import ReviewDash from '../../../Component/ReviewDash'

export default function MyModules () {
  const [activeTab, setActiveTab] = useState(1)

  const updateActiveTab = tab => {
    setActiveTab(tab)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 2, md: 4 }
      }}
    >
      <Grid container spacing={1}>
        <Grid size={{ xs: 8, sm: 8, md: 8, lg: 9, xl: 9 }}>
          <Box
            sx={{
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
              width: '100%',
              height: 0,
              pb: '56.25%'
            }}
          >
            <Box
              component='img'
              src='/Image/Thumbnail.png'
              alt='Video Placeholder'
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '30px',
                objectFit: 'cover'
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Button
                variant='contained'
                sx={{
                  width: 94,
                  height: 94,
                  borderRadius: '30%',
                  minWidth: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                  }
                }}
              >
                <Box component='img' src='/Image/play.png' />
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 4, sm: 4, md: 4, lg: 3, xl: 3 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '20px',
              mx: 'auto',
              gap: 2
            }}
          >
            {modules.map((module, index) => (
              <ModuleCard key={module.id} index={index} {...module} />
            ))}
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 4,
          backgroundColor: '#fff',
          borderRadius: 2,
          p: 2
        }}
      >
        <DashboardTab
          activeTab={activeTab}
          updateActiveTab={updateActiveTab}
          tabs={[
            { label: 'Description', key: 1 },
            { label: 'Courses', key: 2 },
            { label: 'Review', key: 3 }
          ]}
        >
          <DashboardDataTab tabKey={1} activeTab={activeTab}>
            <DashboardCard>
               <ScratchCourse />
            </DashboardCard>
          </DashboardDataTab>
          <DashboardDataTab tabKey={2} activeTab={activeTab}>
            <DashboardCard>
              <Collapsible
                label='Module 1: English'
                NoVideo='1/12 Videos •'
                min='28m'
              />
              <Collapsible
                label='Module 1: English'
                NoVideo='1/12 Videos •'
                min='28m'
              />
              <Collapsible
                label='Module 1: English'
                NoVideo='1/12 Videos •'
                min='28m'
              />
            </DashboardCard>
          </DashboardDataTab>
          <DashboardDataTab tabKey={3} activeTab={activeTab}>
            <DashboardCard>
              <ReviewDash />
            </DashboardCard>
          </DashboardDataTab>
        </DashboardTab>
      </Box>
    </Box>
  )
}
