import React from 'react'
import { Box, Divider, Drawer, Backdrop, Toolbar, List, Typography, useMediaQuery } from '@mui/material'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import useAppStore from '../../store/app'
import { Home } from '@mui/icons-material'
import ListItem from '../ui/ListItem'
import { Calendar, CalendarCheck, CalendarX, ListTodo, CalendarFold } from 'lucide-react'

const drawerWidth = 240

const drawer = [
  { text: "首頁", path: '/', icon: <Home /> },
]

const taskFilters = [
  { text: "全部任務", path: '/tasks/all', icon: <ListTodo size={20} /> },
  { text: "今天", path: '/tasks/today', icon: <Calendar size={20} /> },
  { text: "未來七天", path: '/tasks/week', icon: <CalendarFold size={20} /> },
  { text: "待定", path: '/tasks/pending', icon: <CalendarX size={20} /> },
  { text: "已完成", path: '/tasks/completed', icon: <CalendarCheck size={20} /> }
]

export default function index() {
  const { isSidebarOpen, setSidebarOpen } = useAppStore(state => state)
  let location = useLocation()
  const matches = useMediaQuery('(min-width:900px)')

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: !!matches && isSidebarOpen ? drawerWidth : 0 }}
    >
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer - 1,
          display: { md: 'none', xs: 'block' }
        }}
        open={!matches && !!isSidebarOpen}
        onClick={() => setSidebarOpen()}
      />
      <Drawer
        variant={!matches ? "temporary" : "persistent"}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        open={isSidebarOpen}
        anchor='left'
        hideBackdrop={true}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {drawer.map(({ text, path, icon }) => (
              <ListItem
                key={path}
                component={Link}
                to={path}
                className="reset-link"
                onClick={() => !matches && setSidebarOpen(false)}
                selected={location.pathname === path}
                icon={icon}
                text={text}
              />
            ))}
          </List>
          <Divider />
          <Typography
            variant="subtitle2"
            sx={{
              px: 2,
              pt: 2,
              pb: 1,
              color: 'text.secondary',
              fontSize: '0.875rem'
            }}
          >
            任務
          </Typography>
          <List>
            {taskFilters.map(({ text, path, icon }) => (
              <ListItem
                key={path}
                component={Link}
                to={path}
                className="reset-link"
                onClick={() => !matches && setSidebarOpen(false)}
                selected={location.pathname === path}
                icon={icon}
                text={text}
              />
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}
