import * as React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './css/local.css';

import Navbar from './Navbar';
import PayeesContainer from './payees/PayeesContainer';
import payeeApp from './payees/payee-reducers';

const store = createStore(
  payeeApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends React.Component {
  render() {
    return (
        <section>
          <Navbar/>
          <PayeesContainer/>
        </section>
    );
  }
}