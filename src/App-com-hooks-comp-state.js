import React, { useState } from 'react';

const App = () => {
  return (
    <div>
      <Toggle />
      <p>Other Status: </p>
    </div>
  );
};

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    return setToggle(prevState => !prevState);}

  return (
    <div>
      <ToggleStatus toggle={toggle} />
      <ToggleButton handleToggle={handleToggle} />
    </div>
  )
};

const ToggleStatus = ({ toggle }) => (<p>The Status is: {toggle ? "ON" : "OFF"}</p>)

const ToggleButton = ({ handleToggle }) => (<button onClick={handleToggle}>Toggle</button>);

export default App;
