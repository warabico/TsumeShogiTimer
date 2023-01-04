import React from 'react';
import { useTimer } from 'react-timer-hook';

const audioUrl1 = process.env.PUBLIC_URL + '/audio/sound_tick.mp3';
const audioUrl2 = process.env.PUBLIC_URL + '/audio/sound_end.mp3';

function MyTimer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const audio1 = new Audio(audioUrl1);
  const audio2 = new Audio(audioUrl2);

  const [ restartCount, setRestartCount ] = React.useState(0);

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, autoStart: false, onExpire: () => autoRestart() });

  const autoRestart = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 5);

    setRestartCount(restartCount + 1);

    if ( restartCount < 4 )
    {
      audio1.play();
      setTimeout(() => restart(time), 0);
    }
    else
    {
      audio2.play();
      setRestartCount(0);
    }
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        setRestartCount(0);
        const time = new Date();
        time.setSeconds(time.getSeconds() + 5);
        pause();
      }}>Stop</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        audio1.play();
        setRestartCount(0);
        const time = new Date();
        time.setSeconds(time.getSeconds() + 5);
        restart(time);
      }}>Restart</button>
    </div>
  );
}

export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}