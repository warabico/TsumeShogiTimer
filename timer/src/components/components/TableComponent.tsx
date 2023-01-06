import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableBody, TableCell, Paper, Button } from '@mui/material';

import { ResultType } from '../TsumeShogiTimer';

interface TableComponentPropsType
{
    resultList: ResultType[];
}

const TableComponent = ( props: TableComponentPropsType ) => {
    const tableBody = () => {
        return (
            <TableBody>
                { props.resultList.map( ( result: ResultType, idx: number ) => (
                    <TableRow key={idx}>
                        <TableCell align="center">{ '#' + ( '000' + ( idx + 1 ) ).slice(-3) }</TableCell>
                        <TableCell align="center">{ ( '00' + result.minutes ).slice( -2 ) + ":" + ( '00' + (result.seconds) ).slice( -2 ) }</TableCell>
                        <TableCell align="center">{ result.result === 0 ? "-" : result.result === 1 ? "OK" : "NG" }</TableCell>
                        <TableCell align="center">
                            <Button variant="outlined" onClick={ () => console.log(idx) } >DEBUG</Button>
                        </TableCell>
                    </TableRow> 
                ) ) }
            </TableBody>
        );
    }

    return (
        <>
        <TableContainer style={{width:"90%", fontSize:"16px"}} component={Paper}>
            <Table aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">#</TableCell>
                        <TableCell align="center">Time</TableCell>
                        <TableCell align="center">Answer</TableCell>
                        <TableCell align="center">Change Answer</TableCell>
                    </TableRow>
                </TableHead>
                { tableBody() }
            </Table>
        </TableContainer>
        </>
    );
}

export default TableComponent;
