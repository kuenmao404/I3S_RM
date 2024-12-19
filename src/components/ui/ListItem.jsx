import React from 'react'
import { ListItem as MuiListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

export default function ListItem({
  selected,
  icon,
  text,
  ...props
}) {
  return (
    <MuiListItem
      disablePadding
      {...props}
    >
      <ListItemButton selected={selected}>
        {!!icon &&
          <ListItemIcon>
            {icon}
          </ListItemIcon>
        }
        <ListItemText primary={text} />
      </ListItemButton>
    </MuiListItem>
  )
}
