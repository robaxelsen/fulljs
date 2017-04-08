import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview.js';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };
  componentDidMount() {
  
  }
  componentWillUnmount() {
    // clean timers and listeners
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
