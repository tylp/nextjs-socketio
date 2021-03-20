import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../components/Link';
import CircularSlider from '@fseehawer/react-circular-slider';
import useSocket from '../hooks/useSocket';
import { Button } from '@material-ui/core';

export default function Index() {

    const [value, setValue] = useState(0);
    const socket = useSocket();

    useEffect(() => {
        if (socket) {
            socket.on("hello-room", message => {
				console.log(message)
			});
        }
    }, [socket]);

    function sliderChange(value) {
        setValue(value)
    }

    function emmitData() {
        socket &&
			socket.emit("hello-room", {
				id: new Date().getTime(),
				value: value
			});
    }

    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>
                <Link href="/about" color="secondary">
                    Go to the about page
                </Link>
            </Box>
            <Box my={4}>
                <CircularSlider
                    max={180}
                    label="Angular rotation"
                    labelColor="#005a58"
                    knobColor="#005a58"
                    progressColorFrom="#00bfbd"
                    progressColorTo="#009c9a"
                    progressSize={24}
                    trackColor="#eeeeee"
                    trackSize={24}
                    dataIndex={10}
                    onChange={sliderChange}
                />
            </Box>
            <Box>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={emmitData}
                >
                    Execute
                </Button>
            </Box>
        </Container>
    );
}