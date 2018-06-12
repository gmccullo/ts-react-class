import * as _ from 'lodash';
import * as classData from './class-data-mapped';

interface HasId {
  id: number | string;

  [ key: string ]: any;
}

const daoFactory = ( daoName: string ) => {
  return {
    get: ( id: string | number ) => {
      return classData[ daoName ].find( ( item: HasId ) => item.id === ( id + '' ) );
    },

    size: () => classData[ daoName ].length,

    list: ( criteria: object ) => {
      return _.filter( classData[ daoName ], criteria );
    }
  };
};

const payeesDAO     = daoFactory( 'payees' ),
      accountsDAO   = daoFactory( 'accounts' ),
      peopleDAO     = daoFactory( 'people' ),
      categoriesDAO = daoFactory( 'categories' ),
      txDAO         = daoFactory( 'tx' ),
      // tslint:disable-next-line
      staticData    = classData[ 'staticData' ];

export { categoriesDAO, staticData, accountsDAO, peopleDAO, payeesDAO, txDAO };
