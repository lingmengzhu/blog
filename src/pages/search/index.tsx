import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  state = {
      count: 1,
  };

  render() {
      return (
          <div>
        search
              <button type="button" onClick={() => this.setState({ count: 2 })}>
          +{this.state.count}
              </button>
          </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
