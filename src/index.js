import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ message }) => {
  return (
    <h2 className="text-center">
      {message}
    </h2>
  );
};

Header.propTypes = {
  message: React.PropTypes.string
};

const App = () => {
  return (
    <div>
      <Header message="Naming Contests" />
      <div>
        ...
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
