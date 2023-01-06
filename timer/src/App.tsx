import React from 'react';
import './App.css';

import Timer from './useTimer';
import TimerManager from './timerManager';
import TimerComponent from './components/TsumeShogiTimer';
import TsumeShogiTimer from './components/TsumeShogiTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TimerManager /> */}
        <TsumeShogiTimer />
      </header>
    </div>
  );
}
export default App;
