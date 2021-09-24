import * as React from 'react';

import { Box, Grid, Typography, Card, CardHeader } from '@mui/material';

import PatientInfo from './patientInfo/PatientInfo';
import PatientProgGraph from './patientProgGraph/PatientProgGraph'
import JournalList from '../journalList/JournalList';

let PatientDashboard = (props) => {
    return (
        <Box variant="outline" sx={{ flexGrow: 1, padding: '20px', }}>
            <Grid container spacing={4} >
                <Grid item xs={7} sx={{ height: '890px' }}>
                    <Card sx={{ height: '100%', overflow: 'auto', }}>
                        <CardHeader title="Information - Firstname Lastname" />
                        <PatientInfo />
                    </Card>
                </Grid>
                <Grid item xs={5} sx={{ height: '890px', }}>
                    <Card sx={{ height: '100%', overflow: 'auto', }}>
                        <CardHeader title="Session Reports" />
                        <JournalList />
                    </Card>
                </Grid>
                <Grid item xs={7}>
                    <Card>
                        <CardHeader title="Progress - Firstname Lastname" />
                        <PatientProgGraph />
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default PatientDashboard;