import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import useAudio from './hooks/AudioHook';
import TimerComponent from './components/TimerComponent';
import QuizComponent from './components/QuizComponent';
import TableComponent from './components/TableComponent';

const audioOKUrl = process.env.PUBLIC_URL + '/audio/sound_ok.mp3';
const audioNGUrl = process.env.PUBLIC_URL + '/audio/sound_ng.mp3';

export interface ResultType {
    minutes: number;
    seconds: number;
    result: number;
}

interface QuizStatusType {
    active: boolean;
    result: ResultType;
}

const TsumeShogiTimer = () => {
    // Status
    const [running, setRunning] = React.useState(false);
    const [quizCount, setQuizCount] = React.useState(0);

    // Results
    const [quizStatus1, setQuizStatus1] = React.useState<QuizStatusType>( { active: false, result: { minutes: 0, seconds: 0, result: 0 } } );
    const [quizStatus2, setQuizStatus2] = React.useState<QuizStatusType>( { active: false, result: { minutes: 0, seconds: 0, result: 0 } } );
    const [quizStatus3, setQuizStatus3] = React.useState<QuizStatusType>( { active: false, result: { minutes: 0, seconds: 0, result: 0 } } );
    const [quizStatus4, setQuizStatus4] = React.useState<QuizStatusType>( { active: false, result: { minutes: 0, seconds: 0, result: 0 } } );
    
    const [resultList, setResultList] = React.useState<ResultType[]>([]);

    // Audio
    const audioOK = useAudio({ url: audioOKUrl });
    const audioNG = useAudio({ url: audioNGUrl });

    // Functions
    const begin = () => {
        setQuizStatus4( ( prevState: QuizStatusType ) => ( { active: false, result: prevState.result } ) );
        setRunning(true);
        audioOK.load();
        audioNG.load();
    }

    const answer = (result: ResultType) => {
        switch (quizCount) {
            case 0:
                setQuizStatus4( ( prevState: QuizStatusType ) => ( { active: false, result: prevState.result } ) );
                setQuizStatus1( ( prevState: QuizStatusType ) => ( { active: true, result: prevState.result } ) );
                break;
            case 1:
                setQuizStatus1( ( prevState: QuizStatusType ) => ( { active: false, result: prevState.result } ) );
                setQuizStatus2( ( prevState: QuizStatusType ) => ( { active: true, result: prevState.result } ) );
                break;
            case 2:
                setQuizStatus2( ( prevState: QuizStatusType ) => ( { active: false, result: prevState.result } ) );
                setQuizStatus3( ( prevState: QuizStatusType ) => ( { active: true, result: prevState.result } ) );
                break;
            case 3:
                setQuizStatus3( ( prevState: QuizStatusType ) => ( { active: false, result: prevState.result } ) );
                setQuizStatus4( ( prevState: QuizStatusType ) => ( { active: true, result: prevState.result } ) );
                break;
            default:
                break;
        }
        audioOK.load();
        audioOK.play();
        addResult(result);
        setRunning(false);
    }

    const finish = (result: ResultType) => {
        switch (quizCount) {
            case 0:
                setQuizStatus4( ( prevState: QuizStatusType ) => ( { active: false, result: prevState.result } ) );
                setQuizStatus1( { active: true, result: result } );
                break;
            case 1:
                setQuizStatus1( ( prevState: QuizStatusType ) => ( { active: false, result: prevState.result } ) );
                setQuizStatus2( { active: true, result: result } );
                break;
            case 2:
                setQuizStatus2( ( prevState: QuizStatusType ) => ( { active: false, result: prevState.result } ) );
                setQuizStatus3( { active: true, result: result } );
                break;
            case 3:
                setQuizStatus3( ( prevState: QuizStatusType ) => ( { active: false, result: prevState.result } ) );
                setQuizStatus4( { active: true, result: result } );
                break;
            default:
                break;
        }
        audioNG.load();
        audioNG.play();
        addResult(result);
        setRunning(false);
    }

    const addResult = (result: ResultType) => {
        switch (quizCount) {
            case 0:
                setQuizStatus4( ( prevState: QuizStatusType ) => ( { active: false, result: prevState.result } ) );
                setQuizStatus1( { active: true, result: result } );
                break;
            case 1:
                setQuizStatus1( ( prevState: QuizStatusType ) => ( { active: false, result: prevState.result } ) );
                setQuizStatus2( { active: true, result: result } );
                break;
            case 2:
                setQuizStatus2( ( prevState: QuizStatusType ) => ( { active: false, result: prevState.result } ) );
                setQuizStatus3( { active: true, result: result } );
                break;
            case 3:
                setQuizStatus3( ( prevState: QuizStatusType ) => ( { active: false, result: prevState.result } ) );
                setQuizStatus4( { active: true, result: result } );
                break;
            default:
                break;
        }
        setQuizCount((quizCount + 1) % 4);
        setResultList((prevState: ResultType[]) => [...prevState, result]);
    }

    // Rendering
    return (
        <>
            <hr style={{ width: "90%" }} />
            <TimerComponent seconds={30} continueQuiz={ quizCount < 3 } callbackOnStart={begin} callbackOnTimeUp={finish} callbackOnAnswer={answer} />
            <hr style={{ width: "90%" }} />
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <QuizComponent show={true} active={quizStatus3.active} result={quizStatus3.result} />
                </Grid>
                <Grid xs={6}>
                    <QuizComponent show={true} active={quizStatus1.active} result={quizStatus1.result} />
                </Grid>
                <Grid xs={6}>
                    <QuizComponent show={true} active={quizStatus4.active} result={quizStatus4.result} />
                </Grid>
                <Grid xs={6}>
                    <QuizComponent show={true} active={quizStatus2.active} result={quizStatus2.result} />
                </Grid>
            </Grid>
            <hr style={{ width: "90%" }} />
            <TableComponent resultList={resultList} />
            <hr style={{ width: "90%" }} />
        </>
    );
}

export default TsumeShogiTimer;
