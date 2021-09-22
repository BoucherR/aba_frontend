import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import PatientCard from '../../patientsDashboard/patientCard/PatientCard';
import TherapistCard from '../../therapistCard/TherapistCard';

let PatientInfo = (props) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} >
                    <PatientCard />
                </Grid>
            </Grid>
            <Typography variant="h5" sx={{ paddingBottom: "20px", paddingTop: "20px" }}>
                Current Therapist(s)
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} >
                    <TherapistCard />
                </Grid>
                <Grid item xs={6} >
                    <TherapistCard />
                </Grid>
            </Grid>
        </Box>
    );
}

export default PatientInfo;