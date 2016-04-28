import React from 'react'
import AppContainer from './containers/AppContainer'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = ({}) =>  {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AppContainer />
      </MuiThemeProvider>
    )
}

export default App
