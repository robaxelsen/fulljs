import React from 'react';
import Header from './Header';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };
  componentDidMount() {
    // we usually integrate third party sdk etc here, as well as any
    // ajax fetching, as well as timers and listeners to other events
  }
  componentWillUnmount() {
    // here we usually clean timers and listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          ----
        </div>
      </div>
    );
  };
};

export default App;
