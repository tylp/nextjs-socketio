import React, { useEffect, useState } from 'react';
import useSocket from '../hooks/useSocket';
import { Grid } from '@material-ui/core';
import ServoControl from '../components/ServoControl';
import CustomAppBar from '../components/CustomAppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    }
}));

export default function Index() {

    const classes = useStyles();

    return (
        <>
            <CustomAppBar />
            <Grid container className={classes.root}>
                <Grid item xs={4}>
                    <ServoControl />
                </Grid>
            </Grid>
        </>

    );
}