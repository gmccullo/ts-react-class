import * as React from 'react';

import './css/local.css';

import {payeesDAO} from './data/class-data';
import PayeeDetail from './payees/PayeeDetail';
import Payee from './data/Payee';

export default class App extends React.Component {
  payee: Payee;

  constructor(props: any) {
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