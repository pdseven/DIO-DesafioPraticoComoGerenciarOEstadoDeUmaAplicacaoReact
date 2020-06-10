import React from 'react';
import Toggle from './Toggle';
import { ToggleProvider } from './ContextProvider';

const App = () => {
  return (
    <div>
      <ToggleProvider>
        <Toggle />
      </ToggleProvider>
    </div>
  );
};

export default App;
