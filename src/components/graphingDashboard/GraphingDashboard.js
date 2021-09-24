import * as React from 'react';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';

import GraphingForm from './graphingForm/GraphingForm'
import GraphingSheet from './graphingSheet/GraphingSheet';


let GraphingDashboard = () => {
    return (
        <Card sx={{ minWidth: 275, backgroundColor: '#c7ffc4' }}>
            <CardHeader title="Session Graphing" />
            <Box sx={{ padding: '20px' }} >
                <GraphingForm />
            </Box>
            <Box sx={{ padding: '20px' }} >
                <GraphingSheet />
            </Box>

        </Card >
    );
}

export default GraphingDashboard;