import React from 'react';
import { useTimer } from 'react-timer-hook';

const audioOKUrl = process.env.PUBLIC_URL + '/audio/sound_ok.mp3';
const audioNGUrl = process.env.PUBLIC_URL + '/audio/sound_ng.mp3';
const audioEndUrl = process.env.PUBLIC_URL + '/audio/sound_end.mp3';

function MyTimer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const [ audioOK ] = React.useState( new Audio(audioOKUrl) );
  const [ audioNG ] = React.useState( new Audio(audioNGUrl) );
  const [ audioEnd ] = React.useState( new Audio(audioEndUrl) );

  const [ restartCount, setRestartCount ] = React.useState(0);
  const [ answerFlag, setAnswerFlag ] = React.useState( true );

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
    if ( answerFlag == false )
    {
      audioNG.play();
      setRestartCount(restartCount + 1);
    }
    else
    {
      setAnswerFlag(false);
    }

    if ( restartCount >= 3 )
    {
      audioEnd.play();
      setRestartCount(0);
    }
    else
    {
      const time = new Date();
      time.setSeconds(time.getSeconds() + 5);
      setTimeout(() => restart(time), 10);
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

      <button disabled={answerFlag} onClick={() => {
        setAnswerFlag(true);
        audioOK.play();
        setRestartCount( restartCount + 1 );

        const time = new Date();
        time.setSeconds(time.getSeconds() - 1);
        restart(time);
      }}>Skip</button>

      <button onClick={() => {
        // Restarts to 5 minutes timer
        audioOK.load();
        audioNG.load();
        audioEnd.load();

        setAnswerFlag(false);
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