import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import withTheme from '@material-ui/core/styles/withTheme'

import AppHeader from './components/AppHeader'
import AppDrawer from './components/AppDrawer'
import CountryDetails from './screens/CountryDetails'
import CountryGrid from './screens/CountryGrid'
import CountryRank from './screens/CountryRank'

class App extends React.Component {
  state = {
    country: null,
    drawerOpen: false,
    activePage: 'All Countries'
  }

  toggleDrawer = () => {
    this.setState(state => ({ drawerOpen: !state.drawerOpen }))
  }

  navigateTo = pageTitle => () => {
    this.setState({ activePage: pageTitle, country: null, drawerOpen: false })
  }

  selectCountry = country => () => {
    this.setState({ country })
  }

  render() {
    const { theme } = this.props
    const { activePage, country, drawerOpen } = this.state

    return (
      <div style={{ background: theme.palette.background.default }}>
        <CssBaseline />
        <AppHeader toggleDrawer={this.toggleDrawer} />
        <AppDrawer
          activePage={activePage}
          open={drawerOpen}
          toggle={this.toggleDrawer}
          navigateTo={this.navigateTo}
        />
        {country ? (
          <CountryDetails country={country} back={this.selectCountry(null)} />
        ) : activePage === 'All Countries' ? (
          <CountryGrid selectCountry={this.selectCountry} />
        ) : (
          <CountryRank
            activePage={activePage}
            selectCountry={this.selectCountry}
          />
        )}
      </div>
    )
  }
}

const Root = withTheme()(App)

const rootElement = document.getElementById('root')
setTimeout(() => {
  document.getElementById('loadingMapWrapper').style.display = 'none'
  ReactDOM.render(<Root />, rootElement)
}, 2000)
