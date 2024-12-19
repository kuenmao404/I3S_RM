import React from 'react'

import { Button, IconButton } from '@mui/material'

import Login from '../elements/dialog/Login'
import { Avatar } from '../ui'

import { useDialogStore, useAlertStore, useAccountStore } from '../../store'

const LoginStateAvator = ({
  logout = () => { },
}) => {
  const { isLogin, isLoading, name = "" } = useAccountStore()
  const { setDialog, closeDialog } = useDialogStore()
  const { setAlert } = useAlertStore()

  // 抓取使用者資訊中
  if (!!isLoading) {
    return (
      <span style={{color:"#3E8E7E"}}>Loading...</span>
    )
  }

  // 未登入
  if (!isLogin) {
    return (
      <Button
        sx={{ 
          color: '#3E8E7E',  
          '& .MuiAvatar-root': {  
            color: 'white',  // Avatar text color
            backgroundColor: '#3E8E7E'  // Avatar background color
          }
        }}
        onClick={() => setDialog({
          title: '登入',
          content: <Login state={`${location.pathname}${location.search}`} />,
          actions: <Button onClick={() => closeDialog()}>關閉</Button>
        })}
      >
        登入
      </Button>
    )
  }

  // 登入
  return (
    <IconButton
      size="large"
      sx={{ 
        color: '#3E8E7E',  // Use sx instead of color prop
        '& .MuiAvatar-root': {  
          color: 'white',  // Avatar text color
          backgroundColor: '#3E8E7E'  // Avatar background color
        }
      }}
      onClick={() => setAlert({
        title: "登出",
        content: "確定要登出？",
        handleAgree: (callback) => (logout(), callback())
      })}
    >
      <Avatar name={name} />
    </IconButton>
  )
}

export default LoginStateAvator;