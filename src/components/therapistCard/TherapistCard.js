import * as React from 'react';

import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material'

let fakeTherapist = () => {
    return {
        id: 456,
        name: "Firstname Lastname",
        status: "active",
        role: "Intern Therapist"
    }
}

let TherapistCard = () => {

    let props = fakeTherapist();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                width="140"
                image="/images/therapistPlaceholder.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Grid container rowSpacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                            Current Status: {props.status}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                            Role: {props.role}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button size="small">Programs</Button>
                <Button size="small">Progress</Button>
            </CardActions>
        </Card>
    );
}

export default TherapistCard;
