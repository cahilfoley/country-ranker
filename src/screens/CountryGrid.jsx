import React from 'react'
import SearchBar from 'material-ui-search-bar'
import Typography from '@material-ui/core/Typography'
import FlagGrid from '../components/FlagGrid'

import countries from '../data/countries'

class CountryGrid extends React.Component {
  state = { searchString: '' }

  updateSearch = searchString => this.setState({ searchString })

  render() {
    const { selectCountry } = this.props
    const searchString = this.state.searchString.toLowerCase()
    const filteredCountries = countries
      .filter(country => country.name.toLowerCase().includes(searchString))
      .sort((a, b) => (a.name > b.name ? 1 : -1))

    return (
      <div style={{ padding: 24 }}>
        <Typography variant="display1" gutterBottom>
          All Countries
        </Typography>
        <SearchBar
          value={searchString}
          onChange={this.updateSearch}
          cancelOnEscape
          onCancelSearch={() => this.updateSearch('')}
          placeholder="Search countries..."
        />
        <FlagGrid countries={filteredCountries} onClick={selectCountry} />
      </div>
    )
  }
}

export default CountryGrid
