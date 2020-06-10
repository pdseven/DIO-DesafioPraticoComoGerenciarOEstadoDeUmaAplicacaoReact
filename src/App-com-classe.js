import React, { Component } from 'react';

const App = () => {
  return (
    <div>
      <Toggle />
    </div>
  );
};

class Toggle extends Component {
  state = {
    toggle: false
  };

  handleToggle = () => {
    this.setState( (prevState) => {
      return {
        toggle: !prevState.toggle
      }
    });
  };

  render() {
    return (
      <div>
        <p>The Satus is: {this.state.toggle ? "ON" : "OFF"}</p>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    )
  }
}

export default App;