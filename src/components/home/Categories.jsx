

import React from 'react';
import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { categories } from '../constants/data';

const useStyle=makeStyles({
    create:{
        margin:20,
        background:'#6496ED',
        color:'#fff',
        width:'86%'
    },
    table:{
        border: '1px solid rgba(224, 224, 224, 1)',
        width:'100%',
        objectFit:'cover'

    },
    width:{
        objectFit:'cover'
    }
})

const Categories = () => {
    const classes=useStyle();
    return (
        <>
            <Button variant='contained' className={classes.create}>Create Blog</Button>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>All categories</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {
                            categories.map(categories=>(
                                <TableRow >
                                    <TableCell>{   categories }</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
            </Table>
        </>
    );
}

export default Categories;
