import * as React from 'react';
import { Button, Card, CardContent, CardHeader, TextField, Grid, FormControl, InputLabel, Select, MenuItem, CardActions, } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/lab'

import AdapterDateFns from '@mui/lab/AdapterDateFns/'

let GraphingDashboard = () => {
    const [addDate, setAddDate] = React.useState(new Date());
    const [patient, setPatient] = React.useState('');
    const [sheetName, setSheetName] = React.useState('');
    const [value, setValue] = React.useState(null);

    const [newSheetName, setNewSheetName] = React.useState('');

    const handlePatientChange = (event) => {
        setPatient(event.target.value);
    };
    const handleSheetNameChange = (event) => {
        setSheetName(event.target.value);
    };
    const handleValueChange = (event) => {
        setValue(event.target.value);
    };
    const handleNewSheetNameChange = (event) => {
        setNewSheetName(event.target.value);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Card>
                    <CardHeader title="Logging - Add Entry" />
                    <CardContent>
                        <FormControl variant="standard" required sx={{ m: 1, minWidth: 120 }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    disableFuture
                                    label="Date"
                                    openTo="year"
                                    views={['year', 'month', 'day']}
                                    addDate={addDate}
                                    onChange={(newAddDate) => {
                                        setAddDate(newAddDate);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </FormControl>
                        <FormControl required sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Patient</InputLabel>
                            <Select
                                id="demo-simple-select-standard"
                                value={patient}
                                onChange={handlePatientChange}
                                label="Patient Name"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Patient 1'}>Patient 1</MenuItem>
                                <MenuItem value={'Patient 2'}>Patient 2</MenuItem>
                                <MenuItem value={'Patient 3'}>Patient 3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl required sx={{ m: 1, minWidth: 150 }}>
                            <InputLabel id="demo-simple-select-standard-label">Sheet Name</InputLabel>
                            <Select
                                id="demo-simple-select-standard"
                                value={sheetName}
                                onChange={handleSheetNameChange}
                                label="Sheet Name"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Sheet 1'}>Sheet 1</MenuItem>
                                <MenuItem value={'Sheet 2'}>Sheet 2</MenuItem>
                                <MenuItem value={'Sheet 3'}>Sheet 3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl required sx={{ m: 1, minWidth: 150 }}>
                            <TextField
                                id="outlined-number"
                                label="Value"
                                type="number"
                                value={value}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder={'Insert Value'}
                                onChange={handleValueChange}
                            />
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained'>Add Entry</Button>
                    </CardActions>
                </Card >
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardHeader title="Logging - Create Sheet" />
                    <CardContent>
                        <FormControl required sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Patient</InputLabel>
                            <Select
                                id="demo-simple-select-standard"
                                value={patient}
                                onChange={handlePatientChange}
                                label="Patient Name"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Patient 1'}>Patient 1</MenuItem>
                                <MenuItem value={'Patient 2'}>Patient 2</MenuItem>
                                <MenuItem value={'Patient 3'}>Patient 3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl required sx={{ m: 1, minWidth: 150 }}>
                            <TextField
                                label="New Sheet Name"
                                placeholder="Sheet Name"
                                value={newSheetName}
                                onChange={handleNewSheetNameChange} />
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained'>Create Sheet</Button>
                    </CardActions>
                </Card >
            </Grid>
        </Grid>
    );
}

export default GraphingDashboard;