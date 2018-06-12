import * as React from 'react';
import {createStore} from 'redux';

import './css/local.css';

import payeeApp from './payees/payee-reducers';
import PayeesContainerRedux from './payees/PayeesContainerRedux';

const store = createStore( payeeApp );

export default class App extends React.Component {
  render() {
    return (
      <section>
        <PayeesContainerRedux store={store}/>
      </section>
    );
  }
}