import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'

export default ({ countries, onClick }) => (
  <Grid container spacing={16} style={{ paddingTop: 16, marginBottom: 16 }}>
    {countries.map(country => (
      <Grid key={country.name} item xs={4} lg={3} style={{ height: '100%' }}>
        <Paper>
          <MenuItem
            onClick={onClick(country)}
            style={{
              minHeight: 100,
              whiteSpace: 'normal'
            }}
          >
            <div
              style={{
                textAlign: 'center',
                width: '100%',
                height: '100%'
              }}
            >
              <img
                src={`https://www.countryflags.io/${country.code}/flat/64.png`}
                alt={`${country.name} Flag`}
                style={{ height: 64 }}
              />
              <Typography gutterBottom>{country.name}</Typography>
            </div>
          </MenuItem>
        </Paper>
      </Grid>
    ))}
  </Grid>
)
