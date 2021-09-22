import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import PatientCard from './patientCard/PatientCard';
import { Typography } from '@mui/material';

let PatientsDashboard = (props) => {
    let kids = [];

    for (let i = 0; i < 10; i++) {
        kids.push(
            <Grid item xs={3}>
                <PatientCard />
            </Grid>
        )
    }

    return (
        <Box sx={{ flexGrow: 1, padding: '20px' }}>
            <Typography variant="h3" sx={{ paddingBottom: '30px' }}>
                Patients
            </Typography>
            <Grid container spacing={2} rowSpacing={4}>
                {kids}
            </Grid>

        </Box>
    );
}

export default PatientsDashboard;