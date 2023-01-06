import React from 'react';
import { useTimer } from 'react-timer-hook';

interface CallbackOnExpireType
{
    (): void;
}

interface UseCountDownPropsType
{
    seconds: number;
    callbackOnExpire: CallbackOnExpireType;
}

const useQuizTimer = ( props: UseCountDownPropsType ) => {
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
    } = useTimer({ expiryTimestamp: new Date(), autoStart: false, onExpire: () => props.callbackOnExpire() });

    const startQuiz = () => {
        const time = new Date();
        time.setSeconds( time.getSeconds() + props.seconds );
        restart( time );
    }

    const answerQuiz = () => {
        pause();
    }

    const pauseQuiz = () => {
        pause()
    }

    const resumeQuiz = () => {
        resume()
    }

    return { seconds, minutes, isRunning, startQuiz, answerQuiz, pauseQuiz, resumeQuiz };
}

export default useQuizTimer;
