import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PatientInfo from './patientInfo/PatientInfo';
import { Typography } from '@mui/material';

let PatientDashboard = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" sx={{ paddingBottom: "20px" }}>
                Patient Information - Firstname Lastname
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <PatientInfo />
                </Grid>
            </Grid>
        </Box>
    );
}

export default PatientDashboard;