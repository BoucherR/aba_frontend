import React from 'react';
import { Box, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['Mar 21', 'Mar 23', 'Mar 25', 'Apr 2', 'Apr 5', 'Apr 7'],
    datasets: [
        {
            label: 'Daily Progress',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(11, 156, 71)',
            borderColor: 'rgba(11, 156, 71, 0.2)',
        },
    ],
};



const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

let PatientProgGraph = () => (
    <Box sx={{ padding: '20px' }}>
        <p>
            <Typography variant="h7">
                ABA Program 1
            </Typography>
        </p>
        <p>
            <Typography variant="h8">
                Firstname Lastname
            </Typography>
        </p>

        <Line data={data} options={options} />
    </Box>
);

export default PatientProgGraph;