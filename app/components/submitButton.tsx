import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';
// npm i date-fns, npm install @mui/x-date-pickers, npm install dayjs


const SubHeader = styled.h2`
  // color: #34495e;
  color: ${({ theme }) =>
  theme.palette.mode === 'dark'
    ? theme.palette.text.primary
    : theme.palette.text.primary};
  margin-top: 20px;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 15px;
`;

export default function SubmitButton() {


  return (    
    <LocalizationProvider >

              <div>
              <Label>Start Date</Label>

                <label className="textfont">Start Date</label>
                <input
                  className="datepicker-input"
                  type="date" //YYYY-MM-DD
                //   value={}
                //   onChange={(e) => setStartDate(e.target.value)}
                />
              </div>


      <button>Submit</button>
      
      
      </LocalizationProvider>
  );
}
