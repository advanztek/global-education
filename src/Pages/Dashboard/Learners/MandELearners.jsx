import Box from '@mui/material/Box'
import { CustomTable } from '../../../Component'
import { useState } from 'react'
import { LearnersData, sortOptions, timeFilterOptions } from './data'
import { useNavigate } from 'react-router-dom'

export default function MandELearners () {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [timeFilter, setTimeFilter] = useState('')
  const [page, setPage] = useState(0);
  const [rowsperPage, setRowsPerPage] = useState(5);

  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const currentRows = LearnersData.slice(
    page * rowsperPage,
    page * rowsperPage + rowsperPage
  );

  const handleSearchChange = value => {
    setSearchTerm(value)
  }

  const handleSortChange = value => {
    setSortBy(value)
  }

  const handleTimeFilterChange = value => {
    setTimeFilter(value)
  }

  const handleViewProfile = learner => {
    navigate(`/dashboard/me/learners-profile`)
  }

  return (
    <>
      <Box>
        <CustomTable
          SearchBar
          title='Your Learners'
          searchValue={searchTerm}
          onSearchChange={handleSearchChange}
          searchPlaceholder='Search'
          sortByValue={sortBy}
          onSortChange={handleSortChange}
          sortOptions={sortOptions}
          timeFilterValue={timeFilter}
          showBtn={false}
          showSearchBar={true}
          onTimeFilterChange={handleTimeFilterChange}
          timeFilterOptions={timeFilterOptions}
          learners={LearnersData}
          onViewProfile={handleViewProfile}
        />
      </Box>
    </>
  )
}
