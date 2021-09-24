import Calendar from 'react-calendar';
import { Typography } from '@mui/material';
import './CustomCalendar.css';

let PatientCalendar = () => {
    return (
        <div>
            <Typography variant='h6' align='center'>
                Weekly session bookings
            </Typography>
            <Calendar showFixedNumberOfWeeks />
        </div>
    )
}

export default PatientCalendar;