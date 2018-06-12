import * as React from 'react';
import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';
import ThemeViewer from './ThemeViewer';

const App = () => {
  let company = {
    name   : 'Express Scripts',
    address: '100 Forest Lane',
    city   : 'Franklin Lakes',
    state  : 'NJ',
    zip    : '07027'
  };
  return (
    <section>
      <CustomHeader today="Monday"/>
      <h1>Hello, world!</h1>
      <ThemeViewer theme="ocean"/>
      <CustomFooter company={company}/>
    </section>
  );
};

export default App;