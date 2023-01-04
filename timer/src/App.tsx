import React from 'react';
import './App.css';

import Timer from './useTimer';

const audioUrl = process.env.PUBLIC_URL + '/audio/sound_tick.mp3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
      </header>
    </div>
  );
}
export default App;
