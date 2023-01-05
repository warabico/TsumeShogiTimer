import React from 'react';

import { Table, TableContainer, TableHead, TableRow, TableBody, TableCell, Paper, Button } from '@mui/material';

interface CallbackChangeAnswerType {
    (argv: number): void;
}

interface ResultTableProps {
    secondsList: number[];
    answerList: boolean[];
    callbackChangeAnswer: CallbackChangeAnswerType
};

const ResultTableComponent = (props: ResultTableProps) => {
    const sxAnswerOK = {
        color: "black"
    };
    const sxAnswerNG = {
        color: "red",
        fontWeight: "bold"
    };

    return (
        <>
            <TableContainer style={{width:"50%"}} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">#</TableCell>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="center">Answer</TableCell>
                            <TableCell align="center">Change Answer</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.secondsList.map((seconds: number, index: number) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" component="th" sx={ props.answerList[index] ? sxAnswerOK : sxAnswerNG } >
                                    {"#" + ( '000' + ( index + 1) ).slice(-3) }
                                </TableCell>
                                <TableCell align="center" sx={ props.answerList[index] ? sxAnswerOK : sxAnswerNG } >
                                    { ( '00' + Math.floor(seconds / 60) ).slice( -2 ) + ":" + ( '00' + (seconds) ).slice( -2 ) }
                                </TableCell>
                                <TableCell align="center" sx={ props.answerList[index] ? sxAnswerOK : sxAnswerNG } >
                                    { props.answerList[index] ? "OK" : "NG" }
                                </TableCell>
                                <TableCell align="center" >
                                    <Button variant="outlined" onClick={() => props.callbackChangeAnswer(index)}>Change</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ResultTableComponent;