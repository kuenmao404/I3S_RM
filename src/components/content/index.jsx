import React from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import TaskList from './tasks'
import useTaskStore from '../../store/tasks'

export default function Content() {
  const { currentFilter, setFilter } = useTaskStore()
  
  return (
    <Box sx={{ flex: "1 1 auto", p: 3 }}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tasks" element={<TaskList filter="all" />} />
        <Route path="/tasks/all" element={<TaskList filter="all" />} />
        <Route path="/tasks/today" element={<TaskList filter="today" />} />
        <Route path="/tasks/week" element={<TaskList filter="week" />} />
        <Route path="/tasks/pending" element={<TaskList filter="pending" />} />
        <Route path="/tasks/completed" element={<TaskList filter="completed" />} />
      </Routes>
    </Box>
  )
}
