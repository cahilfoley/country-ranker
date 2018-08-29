import React from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import ArrowLeft from 'mdi-material-ui/ArrowLeft'

import criteria from '../data/criteria'

export default ({ back, country }) => (
  <div style={{ padding: 24 }}>
    <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 8 }}>
      <IconButton onClick={back} style={{ marginRight: 16 }}>
        <ArrowLeft />
      </IconButton>
      <Typography variant="display1">{country.name}</Typography>
    </div>
    <Paper>
      {criteria.map(item => (
        <List>
          <ListItem key={item.label} divider>
            <Typography variant="subheading" style={{ flexGrow: 1 }}>
              {item.label}
            </Typography>
            <Typography variant="subheading">
              {country[item.label].value}%
            </Typography>
          </ListItem>
          {country[item.label].components &&
            country[item.label].components.map(component => (
              <ListItem key={component.label} style={{ paddingLeft: 48 }}>
                <Typography
                  variant="subheading"
                  style={{ flexGrow: 1, paddingRight: 16 }}
                >
                  {component.label}
                </Typography>
                <Typography variant="subheading">{component.value}%</Typography>
              </ListItem>
            ))}
        </List>
      ))}
    </Paper>
  </div>
)
