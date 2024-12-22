import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'
import Sidebar from './components/sidebar'
import TaskListPage from './pages/TaskListPage'

const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          backgroundColor: (theme) => theme.palette.grey[100]
        }}
      >
        <Routes>
          <Route path="/" element={<TaskListPage />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App 