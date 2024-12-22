import React from 'react'
import { Box, Typography, Paper, Container, Toolbar, useTheme } from '@mui/material'
import TaskList from '../components/content/tasks/TaskList'
import useTaskStore from '../store/tasks'
import useLayoutStore from '../store/layout'

const TaskListPage = () => {
  const { currentFilter } = useTaskStore()
  const { isSidebarOpen } = useLayoutStore()
  const theme = useTheme()

  const getFilterTitle = () => {
    switch (currentFilter) {
      case 'today':
        return '今天的任務'
      case 'week':
        return '未來七天的任務'
      case 'pending':
        return '待定任務'
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
        minHeight: '100vh',
        pb: 4,
        display: 'flex',
        flexDirection: 'column',
        marginLeft: isSidebarOpen ? '240px' : '64px',
        width: isSidebarOpen ? 'calc(100% - 240px)' : 'calc(100% - 64px)',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        })
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ flex: 1 }}>
        <Box sx={{ pt: 3, pb: 4 }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: 3
            }}
          >
            {getFilterTitle()}
          </Typography>
          
          <Paper
            elevation={0}
            sx={{
              borderRadius: 2,
              border: '1px solid',
              borderColor: theme.palette.grey[200],
              backgroundColor: 'white',
              overflow: 'hidden'
            }}
          >
            <TaskList filter={currentFilter} />
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default TaskListPage