import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview.js';
import data from '../testData';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };
  componentDidMount() {
    this.setState({
      contests: data.contests
    })
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
