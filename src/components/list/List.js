import React from 'react'
import { Table } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableContainer } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';


export default function List(props) {

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });
    const classes = useStyles();

    const tableBody = props.displayFlag ? (
        <TableBody>
            <TableRow key={props.searchResult.title}>
                <TableCell component="th" scope="row">
                 {props.searchResult.title}
                </TableCell>
                <TableCell align="right">{props.searchResult.category}</TableCell>
                <TableCell align="right">{props.searchResult.volume}</TableCell>
                <TableCell align="right">{props.searchResult.story}</TableCell>
            </TableRow>
        </TableBody>
    ) : null;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>タイトル</TableCell>
                        <TableCell align="right">ジャンル</TableCell>
                        <TableCell align="right">巻数</TableCell>
                        <TableCell align="right">話数</TableCell>
                    </TableRow>
                </TableHead>
                {tableBody}
            </Table>
        </TableContainer>
    );
}