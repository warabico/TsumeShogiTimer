import React from 'react';
import { Button, Stack } from '@mui/material';

import TimerComponent from './timerComponent';

const audioOKUrl = process.env.PUBLIC_URL + '/audio/sound_ok.mp3';
const audioNGUrl = process.env.PUBLIC_URL + '/audio/sound_ng.mp3';

const TimerManager = () => {
    const [ audioOK ] = React.useState( new Audio(audioOKUrl) );
    const [ audioNG ] = React.useState( new Audio(audioNGUrl) );
    const [ quizCount, setQuizCount ] = React.useState( 0 );
    const [ running, setRunning ] = React.useState( false );
    const [ seconds, setSeconds ] = React.useState( 30 );

    const changeRunning = () => {
        if ( running === false )
        {
            setQuizCount(0);
            setRunning(true);
        }
        else
        {
            setQuizCount(0);
            setRunning(false);
        }
    }

    const quizOK = () => {
        audioOK.play();
        incQuiz();
    }

    const quizNG = () => {
        audioNG.play();
        incQuiz();
    }

    const incQuiz = () => {
        if (quizCount < 3)
        {
            setQuizCount(quizCount + 1);
        }
        else
        {
            setQuizCount(0);
            setRunning(false);
        }
    }

    return (
        <>
            <Button onClick={() => changeRunning()} >
                { running ? "STOP" : "START" }
            </Button>
            <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <TimerComponent 
                    running={ running }
                    enabled={ quizCount === 0 ? true : false }
                    seconds={ seconds }
                    callbackOK={quizOK}
                    callbackNG={quizNG}
                />
                <TimerComponent 
                    running={ running }
                    enabled={ quizCount === 1 ? true : false }
                    seconds={ seconds }
                    callbackOK={quizOK}
                    callbackNG={quizNG}
                />
                <TimerComponent 
                    running={ running }
                    enabled={ quizCount === 2 ? true : false }
                    seconds={ seconds }
                    callbackOK={quizOK}
                    callbackNG={quizNG}
                />
                <TimerComponent 
                    running={ running }
                    enabled={ quizCount === 3 ? true : false }
                    seconds={ seconds }
                    callbackOK={quizOK}
                    callbackNG={quizNG}
                />
            </Stack>
        </>
    );
}

export default TimerManager;