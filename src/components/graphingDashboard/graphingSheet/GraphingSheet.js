import React from 'react';
import { Card, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';


let GraphingSheet = () => {
    const data = {
        labels: ['Mar 21', 'Mar 23', 'Mar 25', 'Apr 2', 'Apr 5', 'Apr 7', 'Apr 10', 'Apr 12', 'Apr 14', 'Apr 17', 'Apr 19', 'Apr 21', 'Apr 23', 'Apr 26', 'Apr 28', 'Apr 30', 'Jun 2', 'June 4'],
        datasets: [
            {
                label: 'Session Progress',
                data: [23, 6, 39, 79, 95, 27, 45, 22, 7, 91, 60, 70, 75, 41, 99, 33, 47, 10, 32, 36, 0],
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

    return (
        <Card variant="outlined" sx={{ padding: '40px' }}>
            <Typography variant="h6">
                ABA Program 1
            </Typography>
            <Typography display="block" variant="h8">
                Firstname Lastname
            </Typography>

            <Line data={data} options={options} />
        </Card>
    )
};

export default GraphingSheet;