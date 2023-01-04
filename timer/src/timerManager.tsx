import React from 'react';
import { Button, Stack } from '@mui/material';

import TimerComponent from './timerComponent';
import ResultTableComponent from './resultTableComponent';

interface resultType {
    idx: number;
    second: number;
};

const audioOKUrl = process.env.PUBLIC_URL + '/audio/sound_ok.mp3';
const audioNGUrl = process.env.PUBLIC_URL + '/audio/sound_ng.mp3';

const TimerManager = () => {
    const [ audioOK ] = React.useState( new Audio(audioOKUrl) );
    const [ audioNG ] = React.useState( new Audio(audioNGUrl) );
    const [ quizCount, setQuizCount ] = React.useState( 0 );
    const [ running, setRunning ] = React.useState( false );
    const [ seconds, setSeconds ] = React.useState( 30 );

    const [ secondsList, setSecondsList ] = React.useState<number[]>( [] );
    const [ answerList, setAnswerList ] = React.useState<boolean[]>( [] );

    const changeRunning = () => {
        if ( running === false )
        {
            setQuizCount(0);
            setRunning(true);
        }
        else
        {
            for (let i = quizCount; i < 4; i++)
            {
                addList( seconds, false );
            }
            setQuizCount(0);
            setRunning(false);
        }
    }

    const quizOK = ( resultSeconds: number ) => {
        audioOK.play();
        incQuiz();
        addList( resultSeconds, true );
    }

    const quizNG = () => {
        audioNG.play();
        incQuiz();
        addList( seconds, false );
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

    const addList = (seconds: number, answer: boolean) => {
        setSecondsList( (prevState: number[]) => [...prevState, seconds] );
        setAnswerList( (prevState: boolean[]) => [...prevState, answer] );
    }
    
    const resetList = () => {
        setSecondsList( [] );
        setAnswerList( [] );
    }

    return (
        <>
            <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Button variant="contained" onClick={() => changeRunning()} size={"large"} >
                    { running ? "STOP" : "START" }
                </Button>
                <Button disabled={ running } variant="contained" onClick={() => resetList()} size={"large"}  >
                    Reset
                </Button>
            </Stack>
            <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <TimerComponent 
                    running={ running }
                    enabled={ quizCount === 0 ? true : false }
                    seconds={ seconds }
                    callbackOK={ quizOK }
                    callbackNG={ quizNG }
                />
                <TimerComponent 
                    running={ running }
                    enabled={ quizCount === 1 ? true : false }
                    seconds={ seconds }
                    callbackOK={ quizOK }
                    callbackNG={ quizNG }
                />
                <TimerComponent 
                    running={ running }
                    enabled={ quizCount === 2 ? true : false }
                    seconds={ seconds }
                    callbackOK={ quizOK }
                    callbackNG={ quizNG }
                />
                <TimerComponent 
                    running={ running }
                    enabled={ quizCount === 3 ? true : false }
                    seconds={ seconds }
                    callbackOK={ quizOK }
                    callbackNG={ quizNG }
                />
            </Stack>
            <hr style={{width:"90%"}} />
            <ResultTableComponent
                secondsList={ secondsList }
                answerList={ answerList }
            />
        </>
    );
}

export default TimerManager;