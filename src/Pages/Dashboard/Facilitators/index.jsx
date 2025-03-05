import Box from '@mui/material/Box'
import { CustomTable } from '../../../Component'
import { useState } from 'react'
import { LearnersData, sortOptions, timeFilterOptions } from './data'
import { useNavigate } from 'react-router-dom'

export default function Facilitators () {
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

  const handleAddLearner = () => {
    navigate('/dashboard/me/add-facilitator');
  }

  const handleViewProfile = learner => {
    navigate(`/dashboard/me/facilitator-profile`)
  }

  return (
    <>
      <Box>
        <CustomTable
          title='Facilitators'
          showSearchBar={true}
          searchValue={searchTerm}
          onSearchChange={handleSearchChange}
          searchPlaceholder='Search'
          sortByValue={sortBy}
          onSortChange={handleSortChange}
          sortOptions={sortOptions}
          timeFilterValue={timeFilter}
          onTimeFilterChange={handleTimeFilterChange}
          timeFilterOptions={timeFilterOptions}
          addLearnerText='Add Facilitators'
          onAddLearner={handleAddLearner}
          learners={LearnersData}
          onViewProfile={handleViewProfile}
        />
      </Box>
    </>
  )
}
