import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './store';
import Container from './components/Container';
import './style.css';

class App extends Component {

  render() {
    return (
      <div>
        <Container />
      </div>
    );
  }
}

const AppWithStore=()=>(
  <Provider store={appStore}>
      <App />
  </Provider>
)

render(<AppWithStore />, document.getElementById('root'));
