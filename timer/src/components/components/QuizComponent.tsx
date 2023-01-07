import React from 'react';
import { Box } from '@mui/system';

import TimerModule from './modules/TimerModule';
import { ResultType } from '../TsumeShogiTimer';
import { Button } from '@mui/material';

interface QuizComponentPropsType
{
    show: boolean;
    active: boolean;
    result: ResultType;
}

const QuizComponent = ( props: QuizComponentPropsType ) => {
    const resultTag = () => {
        if ( props.show )
        {
            if ( props.active )
            {
                switch ( props.result.result )
                {
                    case 1:
                        return (
                            <div style={{ color: 'white', fontSize: '16px' }} >OK</div>
                        );
                        break;
                    case 2:
                        return (
                            <div style={{ color: 'red', fontSize: '16px' }} >NG</div>
                        );
                        break;
                    case 0:
                    default:
                        return (
                            <div style={{ color: 'white', fontSize: '16px' }} >-</div>
                        );
                        break;
                }
            }
            else
            {
                switch ( props.result.result )
                {
                    case 1:
                        return (
                            <div style={{ color: 'gray', fontSize: '16px' }} >OK</div>
                        );
                        break;
                    case 2:
                        return (
                            <div style={{ color: 'gray', fontSize: '16px' }} >NG</div>
                        );
                        break;
                    case 0:
                    default:
                        return (
                            <div style={{ color: 'gray', fontSize: '16px' }} >-</div>
                        );
                        break;
                }
            }
        }
        else
        {
            if ( props.active )
            {
                return (
                    <div style={{ color: 'white', fontSize: '16px' }} >-</div>
                )
            }
            else
            {
                return (
                    <div style={{ color: 'gray', fontSize: '16px' }} >-</div>
                );
            }
        }
    }

    return (
        <>
            <Box>
                { resultTag() }
                <TimerModule 
                    show={props.show}
                    active={props.active}
                    minutes={props.result.minutes}
                    seconds={props.result.seconds}
                    fontSize={'20px'}
                />
            </Box>
        </>
    )
}

export default QuizComponent;
