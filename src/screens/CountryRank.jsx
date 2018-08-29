import React from 'react'
import Typography from '@material-ui/core/Typography'
import FlagList from '../components/FlagList'

import countries from '../data/countries'

class CountryGrid extends React.Component {
  render() {
    const { activePage, selectCountry } = this.props

    const filteredCountries = countries.sort(
      (a, b) => (a[activePage].value < b[activePage].value ? 1 : -1)
    )

    return (
      <div style={{ padding: 24 }}>
        <Typography variant="display1" gutterBottom>
          {activePage}
        </Typography>
        <FlagList
          countries={filteredCountries}
          criteria={activePage}
          onClick={selectCountry}
        />
      </div>
    )
  }
}

export default CountryGrid
