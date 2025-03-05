import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { LearnersData, LearnersDataProfile, profileDetails, profileDetails2, sortOptions, timeFilterOptions } from './data'
import { typographyCategory } from '../../../Constants/typography'
import { CustomTable } from '../../../Component'
import { useNavigate } from 'react-router-dom'

export default function FacilitatorsProfileCluster() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [timeFilter, setTimeFilter] = useState('')
  const [page, setPage] = useState(0)
  const [rowsperPage, setRowsPerPage] = useState(5)

  const navigate = useNavigate()

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const currentRows = LearnersData.slice(
    page * rowsperPage,
    page * rowsperPage + rowsperPage
  )

  const handleSearchChange = value => {
    setSearchTerm(value)
  }

  const handleSortChange = value => {
    setSortBy(value)
  }

  const handleTimeFilterChange = value => {
    setTimeFilter(value)
  }

  const handleAddLearner = () => {
    navigate('/dashboard/me/add-facilitator')
  }

  const handleViewProfile = learner => {
    navigate(`/dashboard/me/facilitator-profile ${learner.name}`)
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <Card
            sx={{
              borderRadius: 5,
              p: 2
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mb: 2
                }}
              >
                <Box
                  sx={{
                    border: '6px solid #5A1F7D',
                    borderRadius: '50%',
                    mb: 1
                  }}
                >
                  <Box sx={{ p: 1 }}>
                    <Avatar
                      alt='Chinwe Edwards'
                      src='/images/avatar.png'
                      sx={{ width: 80, height: 80, p: 2 }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant='h6'
                  sx={{ color: '#5A1F7D', fontWeight: 700 }}
                >
                  Chinwe Edwards
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  ID 2342412
                </Typography>
                <Typography variant='body2' sx={{ fontWeight: 500, mt: 2 }}>
                  Enrolled At: <br />{' '}
                  <span style={{ color: '#555' }}>2025-02-08</span>
                </Typography>
                <Box>
                  {profileDetails.map((detail, index) => (
                    <Box key={index}>
                      <Box
                        sx={{
                          display: 'grid',
                          alignItems: 'flex-end',
                          gridTemplateColumns: '1fr 1fr'
                        }}
                      >
                        <Typography
                          variant='body2'
                          sx={{ mx: 6, fontWeight: 500, mt: 1 }}
                        >
                          {detail.label}:
                        </Typography>
                        <span style={{ color: '#555', fontSize: '13px' }}>
                          {detail.value}
                        </span>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{ mt: 3, mb: 3, textAlign: 'center' }}>
                <Button
                  variant='contained'
                  sx={{
                    textTransform: 'none',
                    backgroundColor: '#702DFF33',
                    color: '#5A1F7D',
                    py: 0.8,
                    px: 5,
                    '&:hover': {
                      backgroundColor: '#5B1680',
                      color: '#fff'
                    }
                  }}
                >
                  Edit facilitator Profile
                </Button>
                <Button
                  variant='contained'
                  sx={{
                    textTransform: 'none',
                    backgroundColor: '#702DFF33',
                    color: '#5A1F7D',
                    py: 0.8,
                    mt: 2,
                    px: 6.5,
                    '&:hover': {
                      backgroundColor: '#5B1680',
                      color: '#fff'
                    }
                  }}
                >
                  send a message
                </Button>
              </Box>
              <Box sx={{ borderTop: '1px solid #DCDCDC' }}></Box>
              <Box>
                {profileDetails2.map((detail, index) => (
                  <Box key={index}>
                    <Box
                      sx={{
                        display: 'grid',
                        alignItems: 'flex-end',
                        gridTemplateColumns: '1fr 1fr'
                      }}
                    >
                      <Typography
                        variant='body2'
                        sx={{ mx: 6, fontWeight: 500, mt: 1 }}
                      >
                        {detail.label2}:
                      </Typography>
                      <span style={{ color: '#555', fontSize: '13px' }}>
                        {detail.value2}
                      </span>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Card
              sx={{
                borderRadius: 5,
                py: 4,
                px: 4,
                maxHeight: '220px',
                width: '100%'
              }}
            >
              <Typography
                variant='body1'
                sx={{
                  fontFamily: typographyCategory.base.quinary,
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Pending Assignment Approvals
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#5A1F7D',
                  borderRadius: 2,
                  p: 2
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2
                  }}
                >
                  <Box
                    component='img'
                    src='/Image/education.png'
                    sx={{ fontSize: 30, color: '#C5322A' }}
                  />
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant='body1'
                    sx={{
                      fontFamily: typographyCategory.base.septenary,
                      color: '#fff',
                      fontWeight: 600
                    }}
                  >
                    Module 2 - English
                  </Typography>
                </Box>

                <Button
                  variant='contained'
                  sx={{
                    backgroundColor: '#C56EF9',
                    borderRadius: 2,
                    textTransform: 'none'
                  }}
                >
                  Review
                </Button>
              </Box>
            </Card>
            <Box>
              <CustomTable
                title='Learners'
                addLearnerText='Add Learner'
                onAddLearner={handleAddLearner}
                learners={LearnersDataProfile}
                onViewProfile={handleViewProfile}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
