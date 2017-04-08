import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './components/App';

axios.get('/api/contests')
  .then(response => {
    ReactDOM.render(
      <App initialContests={response.data.contests} />,
      document.getElementById('root')
    );
    //this.setState({
    //  contests: response.data.contests
    //});
  })
  .catch(console.error);

