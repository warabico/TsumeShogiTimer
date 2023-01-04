import React from 'react';
import { Box, Button } from '@mui/material';
import { useTimer } from 'react-timer-hook';
import { bgcolor } from '@mui/system';

interface callbackOKType {
    (argv: number): void;
};
interface callbackNGType {
    (): void;
};

interface TimerProps {
    running: boolean;
    enabled: boolean;
    seconds: number;
    callbackOK: callbackOKType;
    callbackNG: callbackNGType;
};

const TimerComponent = (props: TimerProps) => {
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
    } = useTimer({ expiryTimestamp: new Date(), autoStart: false, onExpire: () => timeup() });

    const myRef = React.useRef<HTMLInputElement>(null!);

    const [started, setStarted] = React.useState(false);
    const [cleared, setCleared] = React.useState(false);
    const [quizResult, setQuizResult] = React.useState(0);

    const [open, setOpen] = React.useState(false);

    const startedRef = React.useRef<boolean>();
    const enabledRef = React.useRef<boolean>();
    const runningRef = React.useRef<boolean>();
    startedRef.current = started;
    enabledRef.current = props.enabled;
    runningRef.current = props.running;

    if (props.running === true) {
        if (props.enabled === true) {
            if (started === false) {
                const time = new Date();
                time.setSeconds(time.getSeconds() + props.seconds);
                restart(time);
                setStarted(true);
                setOpen(true);
                myRef.current.focus();
            }
        }

        if (cleared === false) {
            setQuizResult(3);
            setCleared(true);
        }
    }
    else {
        if (quizResult === 3) {
            setQuizResult(0);
        }
        if (isRunning == true) {
            pause();
            setStarted(false);
        }
        if (cleared === true) {
            setCleared(false);
        }
    }

    const gonext = () => {
        if (startedRef) {
            pause();
            setStarted(false);
            setQuizResult(1);
            props.callbackOK(props.seconds - (minutes * 60 + seconds));
        }
    }

    const timeup = () => {
        setStarted(false);
        setQuizResult(2);
        props.callbackNG();
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        console.log("fire")
        if (e.key === 'Escape' && open) {
            if (enabledRef && runningRef && startedRef) {
                console.log("a");
                gonext();
            }
            setOpen(false);
        }
    };

    return (
        <>
            <div>
                <input type="text" style={{height: 0, background: "#1a2f52", border: "none" }} onKeyDown={handleKeyDown} ref={myRef} />
                {props.enabled && props.running ? (
                    <Box sx={{ width: "100%" }}>
                        <div style={{ color: quizResult === 2 ? "red" : "white" }} >
                            {quizResult === 0 ? "-" : quizResult === 3 ? "-" : quizResult === 1 ? "OK" : "NG"}
                        </div>
                        <div style={{ fontSize: '100px' }}>
                            <span>{('00' + minutes).slice(-2)}</span>:<span>{('00' + seconds).slice(-2)}</span>
                        </div>
                        <div style={{ fontSize: '40px', color: "gray" }}>
                            <span>{('00' + (Math.floor(props.seconds / 60) - minutes)).slice(-2)}</span>:<span>{('00' + (props.seconds - seconds)).slice(-2)}</span>
                        </div>
                        <Button variant="outlined" onClick={() => gonext()} sx={{ width: "100%" }}>NEXT</Button>
                    </Box>
                ) : (
                    <Box sx={{ width: "100%" }}>
                        <div style={{ color: quizResult === 2 ? "red" : "white" }} >
                            {quizResult === 0 ? "-" : quizResult === 3 ? "-" : quizResult === 1 ? "OK" : "NG"}
                        </div>
                        {quizResult === 3 ? (
                            <div style={{ fontSize: '100px', color: "gray" }}>
                                <span>{('00' + Math.floor(props.seconds / 60)).slice(-2)}</span>:<span>{('00' + (props.seconds % 60)).slice(-2)}</span>
                            </div>
                        ) : (
                            <div style={{ fontSize: '100px', color: "gray" }}>
                                <span>{('00' + minutes).slice(-2)}</span>:<span>{('00' + seconds).slice(-2)}</span>
                            </div>
                        )}
                        {quizResult === 3 ? (
                            <div style={{ fontSize: '40px' }}>
                                <span>00</span>:<span>00</span>
                            </div>
                        ) : (
                            <div style={{ fontSize: '40px' }}>
                                <span>{('00' + (Math.floor(props.seconds / 60) - minutes)).slice(-2)}</span>:<span>{('00' + (props.seconds - seconds)).slice(-2)}</span>
                            </div>
                        )}
                        <Button disabled={true} variant="outlined" onClick={() => gonext()} sx={{ width: "100%" }}>-</Button>
                    </Box>
                )}
            </div>
        </>
    );
}

export default TimerComponent;