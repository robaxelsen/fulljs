import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview.js';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };
  componentDidMount() {
    axios.get('/api/contests')
      .then(response => {
        this.setState({
          contests: response.data.contests
        })
      })
      .catch(console.error);
  }
  componentWillUnmount() {
    // here we usually clean timers and listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} /> 
          )}
        </div>
      </div>
    );
  };
};

export default App;
