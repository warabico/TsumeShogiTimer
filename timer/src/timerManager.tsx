import React from 'react';
import * as ExcelJS from 'exceljs'
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

    const changeAnswerStatus = (idx: number) => {
        setAnswerList( (prevState: boolean[]) => prevState.map((value: boolean, index: number) => (index === idx ? !value : value)))
    }
    
    const resetList = () => {
        setSecondsList( [] );
        setAnswerList( [] );
    }

    const outputExcel = async() => {
        const workbook = new ExcelJS.Workbook();

        // Workbookに新しいWorksheetを追加
        workbook.addWorksheet('result');

        // ↑で追加したWorksheetを参照し変数に代入
        const worksheet = workbook.getWorksheet('result');
        // 列を定義
        worksheet.columns = [
        { header: '#', key: 'id' },
        { header: 'time', key: 'time' },
        { header: 'answer', key: 'answer' },
        ];

        for (let idx = 0; idx < secondsList.length; idx++)
        {
            worksheet.addRow({
                id: ( '000' + ( idx + 1) ).slice(-3),
                time: ( '00' + Math.floor(secondsList[idx] / 60) ).slice( -2 ) + ":" + ( '00' + (secondsList[idx]) ).slice( -2 ),
                answer: ( answerList[idx] ? "OK" : "NG" )
            });
        }

        // UInt8Arrayを生成
        const uint8Array = await workbook.xlsx.writeBuffer();

        // filename
        const now = new Date();
        const filename = 
            'tsumeshogi_' + 
            now.getFullYear() + 
            ('00' + (now.getMonth() + 1)).slice(-2) +
            ('00' + (now.getDay() + 1)).slice(-2) + 
            '_' +
            ('00' + now.getHours()).slice(-2) +
            ('00' + now.getMinutes()).slice(-2) +
            '.xlsx';

        // Blob
        const blob = new Blob([uint8Array], {type: 'application/octet-binary'});
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        // ダウンロード後は不要なのでaタグを除去
        a.remove();
    }

    return (
        <>
            <hr style={{width:"90%"}} />
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
                <Button disabled={ running } variant="contained" onClick={() => outputExcel()} size={"large"}  >
                    Download Excel
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
                callbackChangeAnswer={ changeAnswerStatus }
            />
        </>
    );
}

export default TimerManager;