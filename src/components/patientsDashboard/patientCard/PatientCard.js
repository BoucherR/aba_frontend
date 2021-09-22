import * as React from 'react';

import { Redirect, useHistory } from 'react-router-dom'

import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material'

let fakeKid = () => {
    return {
        id: 123,
        name: "Firstname Lastname",
        age: 4,
        status: "active",
        program: "ABA 1",
        location: "123 Fake House Rd",
    }
}

let PatientCard = () => {
    let history = useHistory();

    let props = fakeKid();

    let redirectPatientInfo = () => {
        history.push("/patient");
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                width="140"
                image="/images/childPlaceholder.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Grid container rowSpacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                            Age: {props.age}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                            Current Status: {props.status}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                            Program: {props.program}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                            Location: {props.location}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={redirectPatientInfo}>Programs</Button>
                <Button size="small">Progress</Button>
            </CardActions>
        </Card>
    );
}

export default PatientCard;
