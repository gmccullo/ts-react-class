import * as React from 'react';

import './css/local.css';

import {payeesDAO} from './data/class-data';
import PayeeDetail from './payees/PayeeDetail';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.payee = payeesDAO.get( 23 );
  }

  render() {
    return (
      <section>
        <PayeeDetail payee={this.payee}/>
      </section>
    );
  }
}