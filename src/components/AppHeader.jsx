import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

export default props => (
  <AppBar position="sticky">
    <Toolbar>
      <IconButton
        style={{ marginLeft: -12, marginRight: 20 }}
        onClick={props.toggleDrawer}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit">
        Country Rankinator
      </Typography>
    </Toolbar>
  </AppBar>
)
