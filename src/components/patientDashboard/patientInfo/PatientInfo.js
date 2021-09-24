import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import PatientCard from '../../patientsDashboard/patientCard/PatientCard';
import TherapistCard from '../../therapistCard/TherapistCard';
import PatientCalendar from '../patientCalendar/PatientCalendar';

let PatientInfo = (props) => {

    return (
        <Box sx={{ flexGrow: 1, }}>
            <Grid container spacing={2}>
                <Grid item xs={5} >
                    <Box sx={{ padding: '20px' }}>
                        <PatientCard />
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box sx={{ padding: '20px' }}>
                        <PatientCalendar />
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="h5" sx={{ paddingBottom: "20px", paddingTop: "20px", paddingLeft: "20px" }}>
                Current Therapist(s)
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} >
                    <Box sx={{ padding: '20px' }}>
                        <TherapistCard />
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <Box sx={{ padding: '20px' }}>
                        <TherapistCard />
                    </Box>
                </Grid>
            </Grid >
        </Box >
    );
}

export default PatientInfo;