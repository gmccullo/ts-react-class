import * as _ from 'lodash';
import * as data from './class-data-mapped';
import Account from './Account';
import Payee from './Payee';
import Person from './Person';
import Category from './Category';
import Transaction from './Transaction';
import HasId from './HasId';

interface Dao<T extends HasId> {
  get: (id: string | number) => T;
  size: () => number;
  list: (criteria?: object) => T[];
}

function daoFactory<T extends HasId>( daoName: string ): Dao<T> {
  return {
    get: ( id: string | number ): T => {
      return data[ daoName ].find( ( item: T ) => item.id === ( id + '' ) );
    },

    size: () => data[ daoName ].length,

    list: ( criteria: object ) => {
      return _.filter( data[ daoName ], criteria );
    }
  };
}

const payeesDAO     = daoFactory<Payee>( 'payees' ),
      accountsDAO   = daoFactory<Account>( 'accounts' ),
      peopleDAO     = daoFactory<Person>( 'people' ),
      categoriesDAO = daoFactory<Category>( 'categories' ),
      txDAO         = daoFactory<Transaction>( 'tx' );

export { categoriesDAO, accountsDAO, peopleDAO, payeesDAO, txDAO, Dao };
