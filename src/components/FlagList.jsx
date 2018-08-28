import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

export default ({ countries, criteria, onClick }) => (
  <Paper>
    <List>
      {countries.map(country => (
        <ListItem button onClick={onClick(country)}>
          <img
            src={`https://www.countryflags.io/${country.code}/flat/64.png`}
            alt={`${country.name} Flag`}
            style={{ flexBasis: 'min-content', marginRight: 24, marginLeft: 8 }}
          />
          <Typography variant="subheading" style={{ flex: 1 }}>
            {country.name}
          </Typography>
          <Typography variant="subheading" style={{ marginRight: 16 }}>
            {country[criteria]}%
          </Typography>
        </ListItem>
      ))}
    </List>
  </Paper>
)
