import Box from '@mui/material/Box'
import { CustomTable } from '../../../Component'
import { useState } from 'react'
import { LearnersData, sortOptions, timeFilterOptions } from './data'
import { useNavigate } from 'react-router-dom'

export default function MandE () {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [timeFilter, setTimeFilter] = useState('')
  const [page, setPage] = useState(0);
  const [rowsperPage, setRowsPerPage] = useState(5);

  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleAddLearner = () => {
    navigate('/dashboard/cluster-manager/add-mande')
  }

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
    navigate(`/dashboard/cluster-manager/learners-profile`)
  }

  return (
    <>
      <Box>
        <CustomTable
          title='M and E'
          searchValue={searchTerm}
          onSearchChange={handleSearchChange}
          searchPlaceholder='Search'
          sortByValue={sortBy}
          onSortChange={handleSortChange}
          sortOptions={sortOptions}
          timeFilterValue={timeFilter}
          showSearchBar={true}
          showBtn={true}
          addLearnerText='Add M and E'
          onAddLearner={handleAddLearner}
          onTimeFilterChange={handleTimeFilterChange}
          timeFilterOptions={timeFilterOptions}
          learners={LearnersData}
          onViewProfile={handleViewProfile}
        />
      </Box>
    </>
  )
}
