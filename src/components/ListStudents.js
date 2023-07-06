import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const students = [{name: "Hieu", age: 22, address: "Hanoi"},
    {name: "Hieu2", age: 23, address: "Hanoi"},
    {name: "Hieu3", age: 24, address: "Hanoi"},
    {name: "Hieu4", age: 25, address: "Hanoi"},
    {name: "Hieu5", age: 26, address: "Hanoi"},]

export default function ListStudents({props}) {
    return (
        <div>
            <h2>{props}</h2>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">Age</StyledTableCell>
                            <StyledTableCell align="center">Address</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((item, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {index + 1}
                                </StyledTableCell>
                                <StyledTableCell align="center">{item.name}</StyledTableCell>
                                <StyledTableCell align="center">{item.age}</StyledTableCell>
                                <StyledTableCell align="center">{item.address}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}