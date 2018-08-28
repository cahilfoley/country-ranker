import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListIcon from '@material-ui/icons/List'

import criteria from '../data/criteria'

const AppDrawer = ({ activePage, classes, open, toggle, navigateTo }) => {
  return (
    <Drawer open={open} onClose={toggle}>
      <Typography
        variant="title"
        className={classes.drawerHeader}
        color="primary"
      >
        Country Rankinator
      </Typography>
      <Divider />
      <List style={{ width: 320 }} component="nav">
        <MenuItem
          onClick={navigateTo('All Countries')}
          selected={activePage === 'All Countries'}
        >
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="All Countries" />
        </MenuItem>
      </List>
      <Divider />
      <List style={{ width: 320 }} component="nav">
        {criteria.map(({ label, icon: Icon }) => (
          <MenuItem onClick={navigateTo(label)} selected={activePage === label}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
          </MenuItem>
        ))}
      </List>
    </Drawer>
  )
}

const styles = theme => ({
  drawerHeader: {
    textAlign: 'center',
    lineHeight: '56px',
    [theme.breakpoints.up('md')]: {
      lineHeight: '64px'
    }
  }
})

export default withStyles(styles)(AppDrawer)
