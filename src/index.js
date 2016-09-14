import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

render(
  <AppContainer> 
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <MuiThemeProvider>
          <NextApp />
        </MuiThemeProvider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
