import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, useLocation } from 'react-router-dom'

import LoginStateAvator from './LoginStateAvator'

import useAppStore from '../../store/app'

export default function index(props) {
  const { title, name, logout } = props
  const { setSidebarOpen } = useAppStore()
  const location = useLocation()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setSidebarOpen()}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className='reset-link'>
            <Typography 
              variant="h6" 
              component="div"
            sx={{
              color:"#3E8E7E",
              fontWeight:"bold"
            }}  
            >
              {title}
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <LoginStateAvator
            name={name}
            logout={logout}
          />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
