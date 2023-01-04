import React from 'react';
import './App.css';

import Timer from './useTimer';
import TimerManager from './timerManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimerManager />
      </header>
    </div>
  );
}
export default App;
