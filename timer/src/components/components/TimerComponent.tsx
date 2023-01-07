import React, { useEffect } from 'react';
import useQuizTimer from '../hooks/QuizTimerHook';
import TimerIcon from '@mui/icons-material/Timer';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Button, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import TimerModule from './modules/TimerModule';
import { ResultType } from '../TsumeShogiTimer';

interface CallbackType {
    (): void;
}

interface CallbackAddResultType {
    (argv: ResultType): void;
}

interface TimeComponentPropsType {
    seconds: number;
    continueQuiz: boolean;
    callbackOnStart: CallbackType;
    callbackOnTimeUp: CallbackAddResultType;
    callbackOnAnswer: CallbackAddResultType;
}

const TimerComponent = (props: TimeComponentPropsType) => {
    const [timerActive, setTimerActive] = React.useState(false);
    const [quizMinutes, setQuizMinutes] = React.useState(Math.floor(props.seconds / 60));
    const [quizSeconds, setQuizSeconds] = React.useState(props.seconds % 60);

    const quizTimer = useQuizTimer({ seconds: quizSeconds, callbackOnExpire: () => timeup() });

    const answerButtonRef = React.useRef<HTMLButtonElement>(null!);

    const timerStart = () => {
        if (!quizTimer.isRunning) {
            setTimerActive(true);
            setQuizMinutes(Math.floor(props.seconds / 60));
            setQuizSeconds(props.seconds % 60);
            quizTimer.startQuiz();
            props.callbackOnStart();
            answerButtonRef.current.focus();
        }
        else {
            quizTimer.startQuiz();
        }
    }

    const answer = () => {
        if (timerActive) {
            quizTimer.answerQuiz();
            checkContinue();
            props.callbackOnAnswer({
                minutes: (quizMinutes - quizTimer.minutes),
                seconds: (quizSeconds - quizTimer.seconds),
                result: 1
            });
        }
    }
    const timeup = () => {
        checkContinue();
        props.callbackOnTimeUp({
            minutes: quizMinutes,
            seconds: quizSeconds,
            result: 2
        });
    }

    const checkContinue = () => {
        if (props.continueQuiz) {
            setTimeout( () => timerStart(), 10);
        }
        else {
            setTimerActive(false);
        }
    }

    return (
        <>
            <Grid container spacing={2} width="100%">
                <Grid xs={10} xsOffset={1} >
                    <Grid container spacing={2} width="100%">
                        <Grid xs={6}>
                            <Button
                                fullWidth={true}
                                size="large"
                                variant={ timerActive ? 'outlined' : 'contained' }
                                startIcon={<TimerIcon />}
                                onClick={ timerActive ? () => {} : () => timerStart() }
                            >START</Button>
                        </Grid>
                        <Grid xs={6}>
                            <Button
                                fullWidth={true}
                                size="large"
                                variant={ timerActive ? 'contained' : 'outlined' }
                                startIcon={<LightbulbIcon />}
                                onClick={() => answer()}
                                ref={answerButtonRef}
                            >ANSWER</Button>
                        </Grid>
                        <Grid xs={12}>
                            <TimerModule
                                show={timerActive}
                                active={timerActive}
                                minutes={quizTimer.minutes}
                                seconds={quizTimer.seconds}
                                fontSize={'48px'}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default TimerComponent;
