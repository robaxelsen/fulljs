import React from 'react';
import ReactDOM from 'react-dom';

import data from './testData';
console.log(data);
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

setTimeout(() => {
  ReactDOM.render(
    <h2>...</h2>,
    document.getElementById('root')
  );
}, 4000);
