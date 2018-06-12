import * as React from 'react';

import './css/local.css';

import PayeeDetailRedux from './payees/PayeeDetailRedux';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <PayeeDetailRedux/>
      </section>
    );
  }
}