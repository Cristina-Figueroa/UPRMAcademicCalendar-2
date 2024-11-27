import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { Container } from '@mui/material';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';


const Container = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  // margin: 0;
  margin-top: -10px;
`;

const Label = styled.label`
  margin-bottom: 15px;
`;


const BasicSelect = ({ academicPeriod, setAcademicPeriod }) => {
  const theme = useTheme();


  return (

    <Container >
      <Label>Select an Academic Period</Label>   

        <Box className='select'>

          <FormControl fullWidth sx={{ minWidth: 180 }}>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={academicPeriod}
              onChange={(e) => setAcademicPeriod(e.target.value)}
              sx={{maxWidth: 400}}
            >
              <MenuItem value="fall">Fall Semester</MenuItem>
              <MenuItem value="spring">Spring Semester</MenuItem>
              <MenuItem value="summerV1">Summer V1 Session</MenuItem>
              <MenuItem value="summerV2">Summer V2 Session</MenuItem>
              <MenuItem value="summerExtended">Summer Extended Session</MenuItem>

            </Select>
          </FormControl>
        </Box>
    </Container>
  );
}
export default BasicSelect;