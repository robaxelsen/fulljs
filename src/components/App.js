import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

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
  fetchContest = (contestId) => {
    pushState(
      { currenContestId: contestId },
      `/contest/${contestId}`
    );
    // lookup the state
    // this.state.contest[contestId]
    this.setState({
      pageHeader: this.state.contests[contestId].contestName
    })
  };
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList
          onContestClick={this.fetchContest}
          contests={this.state.contests} />
      </div>
    );
  };
};

export default App;
