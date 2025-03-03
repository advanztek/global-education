import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper'
import SearchBar from '../SearchBar'
import { typographyCategory } from '../../Constants/typography'

export default function CustomTable ({
  title = 'Your Learners',
  searchValue = '',
  onSearchChange = () => {},
  searchPlaceholder = 'Search',
  sortByValue = '',
  onSortChange = () => {},
  sortOptions = [],
  timeFilterValue = '',
  onTimeFilterChange = () => {},
  timeFilterOptions = [],
  addLearnerText = 'Add Learner',
  onAddLearner = () => {},
  learners = [],
  onViewProfile = () => {}
}) {
  const [page, setPage] = useState(0)
  const [rowsperPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const currentRows = learners.slice(
    page * rowsperPage,
    page * rowsperPage + rowsperPage
  )

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: '#fff', borderRadius: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
          gap: 2
        }}
      >
        <Typography
          variant='h5'
          color='#5A1F7D'
          sx={{ fontFamily: typographyCategory.base.tertiary, fontWeight: 600 }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 2
          }}
        >
          <SearchBar />

          {sortOptions.length > 0 && (
            <FormControl
              size='small'
              sx={{
                minWidth: 120,
                backgroundColor: 'transparent',
                boxShadow: 'none',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none'
                  }
                }
              }}
            >
              <Select
                value={sortByValue}
                onChange={e => onSortChange(e.target.value)}
                displayEmpty
                sx={{
                  backgroundColor: 'transparent',
                  fontSize: '12px',
                  fontFamily: typographyCategory.base.septenary,
                  boxShadow: 'none',
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  }
                }}
              >
                <MenuItem value='' disabled>
                  Sort by
                </MenuItem>
                {sortOptions.map((option, idx) => (
                  <MenuItem key={idx} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          {timeFilterOptions.length > 0 && (
            <FormControl
              size='small'
              sx={{
                minWidth: 120,
                boxShadow: 'none',
                fontFamily: typographyCategory.base.septenary,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none'
                  }
                }
              }}
            >
              <Select
                value={timeFilterValue}
                onChange={e => onTimeFilterChange(e.target.value)}
                displayEmpty
                sx={{
                  backgroundColor: 'transparent',
                  fontSize: '12px',
                  boxShadow: 'none',
                  fontFamily: typographyCategory.base.septenary,
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  }
                }}
              >
                <MenuItem value='' sx={{}} disabled>
                  Last 12 Month
                </MenuItem>
                {timeFilterOptions.map((option, idx) => (
                  <MenuItem key={idx} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <Button
            variant='contained'
            onClick={onAddLearner}
            sx={{
              textTransform: 'none',
              backgroundColor: '#702DFF',
              borderRadius: 2,
              '&:hover': { backgroundColor: '#5855cc' }
            }}
          >
            {addLearnerText}
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#F6F6F6' }}>
              <TableCell
                sx={{
                  fontWeight: 400,
                  color: '#3F3F4480',
                  fontFamily: typographyCategory.base.septenary
                }}
              >
                Learner
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 400,
                  color: '#3F3F4480',
                  fontFamily: typographyCategory.base.septenary
                }}
              >
                Email Address
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 400,
                  color: '#3F3F4480',
                  fontFamily: typographyCategory.base.septenary
                }}
              >
                Module Progress
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 400,
                  color: '#3F3F4480',
                  fontFamily: typographyCategory.base.septenary
                }}
              >
                Date Enrolled
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 400,
                  color: '#3F3F4480',
                  fontFamily: typographyCategory.base.septenary
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {learners.map(learner => (
              <TableRow key={learner.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        backgroundColor: '#3F3F44'
                      }}
                    />
                    <Typography variant='body2'>{learner.name}</Typography>
                  </Box>
                </TableCell>

                <TableCell>{learner.email}</TableCell>

                <TableCell>
                  <Box
                    sx={{
                      display: 'inline-block',
                      px: 1.5,
                      py: 0.5,
                      backgroundColor: '#CCEABB40',
                      color: '#99C183',
                      borderRadius: 2,
                      fontSize: '0.8rem'
                    }}
                  >
                    {learner.moduleProgress}
                  </Box>
                </TableCell>

                <TableCell>{learner.dateEnrolled}</TableCell>

                <TableCell>
                  <Button
                    variant='contained'
                    onClick={() => onViewProfile(learner)}
                    sx={{
                      textTransform: 'none',
                      borderRadius: 2,
                      px: 0.9,
                      py: 0.8,
                      backgroundColor: '#702DFF',
                      '&:hover': { backgroundColor: '#5855cc' },
                      fontSize: '0.7rem'
                    }}
                  >
                    View Profile
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={learners.length}
          rowsPerPage={rowsperPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  )
}
