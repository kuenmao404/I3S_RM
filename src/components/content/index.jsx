import React from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import TaskListPage from '../../pages/TaskListPage'
import useTaskStore from '../../store/tasks'

export default function Content() {
  const { setFilter } = useTaskStore()
  
  return (
    <Box sx={{ flex: "1 1 auto", p: 3 }}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tasks" element={<TaskListPage />} />
        <Route path="/tasks/all" element={<TaskListPage />} />
        <Route path="/tasks/today" element={<TaskListPage />} />
        <Route path="/tasks/week" element={<TaskListPage />} />
        <Route path="/tasks/pending" element={<TaskListPage />} />
        <Route path="/tasks/completed" element={<TaskListPage />} />
      </Routes>
    </Box>
  )
}
