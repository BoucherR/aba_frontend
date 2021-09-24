import React from 'react';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { Box, Divider, Paper, Typography, Grid } from '@mui/material';

let JournalEntry = () => {
    let theme = useTheme();

    return (
        <Paper variant="outlined" elevation={3} sx={{ padding: '20px', backgroundColor: '#bfe3ce' }} >
            <Box sx={{ padding: '20px', backgroundColor: '#ffffff' }}>
                <Typography variant='h6' align='right'>
                    Mar 21 2021
                </Typography>
                <Typography variant='h6' display='inline' align='left'>
                    Firstname Lastname Report
                </Typography>
                <Divider />
                <Typography variant='subtitle1'>
                    Therapist: Carl Jung
                </Typography>
                <Typography variant='subtitle2'>
                    Role: Intern Therapist
                </Typography>
                <Divider />
                <p>Mr and Mrs Smith, </p>
                <p>Today, Firstname Lastname was very well behaved! He achieved milestones 1, 2, and 3, and is making progress learning shapes and colours.</p>
                <p>We had a minor mishap with the bathroom, but apart from that, we are seeing excellent daily progress through our socialization program.</p>
                <p>With progress on this trajectory, we'll be able to upgrade to our socialization level II program very soon.</p>
                <p>Regards, </p>
                <p>Carl Jung, PhD</p>
                <Divider />
            </Box>
        </Paper >
    );
}

export default JournalEntry;

{/* <Grid container>
                    <Grid item xs={6}>
                        <Typography variant='h6'>
                            Firstname Lastname Report
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h6' sx={{ marginLeft:'auto'}}>
                            Mar 26 2021
                        </Typography>
                    </Grid>
                </Grid> */}

