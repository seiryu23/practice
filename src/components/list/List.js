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
            {props.dispData.map((data, index)=>(
                <TableRow key={data.id}>
                    <TableCell component="th" scope="row">{data.id}</TableCell>
                    <TableCell align="right">{data.username}</TableCell>
                    <TableCell align="right">{data.mail_address}</TableCell>
                    <TableCell align="right">{data.belongCode}</TableCell>
                    <TableCell align="right">{data.areaCode}</TableCell>
                </TableRow>
            ))}
            <TableRow key={props.searchResult.id}>
                <TableCell component="th" scope="row">
                 {props.searchResult.id}
                </TableCell>
                <TableCell align="right">{props.searchResult.username}</TableCell>
                <TableCell align="right">{props.searchResult.mail_address}</TableCell>
                <TableCell align="right">{props.searchResult.belongCode}</TableCell>
                <TableCell align="right">{props.searchResult.areaCode}</TableCell>
            </TableRow>
        </TableBody>
    ) : null;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">ユーザ名</TableCell>
                        <TableCell align="right">メールアドレス</TableCell>
                        <TableCell align="right">所属コード</TableCell>
                        <TableCell align="right">担当地区コード</TableCell>
                    </TableRow>
                </TableHead>
                {tableBody}
            </Table>
        </TableContainer>
    );
}