import * as React from 'react';

import './css/local.css';

import Navbar from './Navbar';
import PayeesContainer from './payees/PayeesContainer';

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