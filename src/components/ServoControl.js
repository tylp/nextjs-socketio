import React, { useState } from 'react';
import CircularSlider from '@jsdev63/advanced_react-circular-slider';
import { Button, Card, CardActions, CardContent, CardHeader, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    slider: {
        paddingTop: '10px',
        paddingBottom: theme.spacing(3)
    }
}));

export default function ServoControl() {

    const [value, setValue] = useState(0);
    const classes = useStyles();

    const theme = useTheme();

    function sliderChange(value) {
        setValue(value);
    }

    return (
        <div className={classes.root}>
            <Card elevation={6}>
                <CardHeader
                    title="Servo Controller"
                    subheader="Angular rotation to execute"
                />
                <CardContent>
                    <CircularSlider
                        width={400}
                        max={180}
                        limit={180}
                        offsetAngle={-45}
                        labelOffset={20}
                        direction={1}
                        label="Angle"
                        labelColor={theme.palette.text.primary}
                        knobPosition="bottom"
                        valueFontSize="2rem"
                        progressLineCap="flat"
                        progressSize={16}
                        renderLabelValue={value}
                        doubleLineColor="null"
                        trackSize={16}
                        knobSize={40}
                        onChange={sliderChange}
                    />
                </CardContent>
            <CardActions>
                        <Button variant="contained" color="primary">Execute</Button>
                    </CardActions>
            </Card>
        </div >
    )
}