import React, { useEffect } from 'react'
import { Box, Typography, Paper, Container, useTheme } from '@mui/material'
import { useLocation } from 'react-router-dom'
import TaskList from '../components/content/tasks/TaskList'
import useTaskStore from '../store/tasks'
import useAppStore from '../store/app'

const TaskListPage = () => {
  const { currentFilter, setFilter } = useTaskStore()
  const { isSidebarOpen } = useAppStore()
  const theme = useTheme()
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    const filter = path.split('/').pop()
    setFilter(filter)
  }, [location.pathname, setFilter])

  const getFilterTitle = () => {
    switch (currentFilter) {
      case 'today':
        return '今天的任務'
      case 'week':
        return '未來七天的任務'
      case 'pending':
        return '待定的任務'
      case 'completed':
        return '已完成的任務'
      default:
        return '全部任務'
    }
  }

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[50],
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: isSidebarOpen ? '240px' : '64px',
        right: 0,
        transition: theme.transitions.create(['left'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        })
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          py: 3
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '900px', px: { xs: 2, sm: 3 } }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: 1.5
            }}
          >
            {getFilterTitle()}
          </Typography>
          
          <Paper
            elevation={0}
            sx={{
              borderRadius: 2,
              border: '2px solid',
              borderColor: theme.palette.grey[300],
              backgroundColor: 'white',
              overflow: 'hidden'
            }}
          >
            <TaskList filter={currentFilter} />
          </Paper>
        </Box>
      </Box>
    </Box>
  )
}

export default TaskListPage