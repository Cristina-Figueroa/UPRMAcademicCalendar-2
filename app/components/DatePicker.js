import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  margin-left: 10px;

  // width: 50%; /* Half the width of the page */
  // max-width: 600px; /* Optional: Restrict the max width */
  // margin: 0 auto; /* Horizontally center */
  box-sizing: border-box;
  align-items: space-between; /* Centers the content horizontally */
  justify-content: center; /* Centers the content vertically */
  border-radius: 8px;
  // box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
  padding: 8px 12px;
  font-size: 1rem; /* Relative to container size */
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 0 4px ${({ theme }) => theme.palette.primary.light};
  }
`;

const DatePickerComponent = ({ startDate, setStartDate }) => {
  const theme = useTheme();

  const [selectedDate, setSelectedDate] = useState(startDate || "");

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    setStartDate(date);
    console.log(date); // Handle the date input to the backend
  };
  
  return (
    <Container theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <div>
                <Label>Select a Start Date</Label>
                <input
                  className="datepicker-input"
                  type="date" //YYYY-MM-DD
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div> */}
              <div>
              {/* <Label>Select a Start Date</Label> */}

              <StyledInput
            theme={theme}
            type="date" // YYYY-MM-DD
            value={selectedDate}
            onChange={handleDateChange}
            
          />
              </div>
    </LocalizationProvider>
    
    
    </Container>
  );
}

export default DatePickerComponent;
