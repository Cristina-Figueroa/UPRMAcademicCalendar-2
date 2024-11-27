'use client';

import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';




const SubHeader = styled.h3`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UpdateForm = ({closeEvent}) => {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [formattedDate, setFormattedDate] = useState("");

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleDesChange = (event) => {
        setDescription(event.target.value);
    };

    const handleFormDateChange = (event) => {
        setFormattedDate(event.target.value);
    };
    const addHoliday = () => {

    };

    return (
        <> 
        <Box sx={{m:2}} />
        <IconButton
            sx={{position: 'absolute' , top: '0', right: '0'}}
            onClick={closeEvent}
            >
                <CloseRoundedIcon/>
        </IconButton>

        {/* <SubHeader>Change Holiday</SubHeader> */}

        <Grid  spacing={2}>

            <Grid item xs={12}>
                <TextField 
                    id="outlined-basic" 
                    label="Date" 
                    variant="outlined" 
                    size='small' 
                    onChange={handleDateChange}
                    value={date}
                    sx={{minWidth:'100%'}}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    id="outlined-basic" 
                    label="Description" 
                    variant="outlined" 
                    size='small' 
                    onChange={handleDesChange}
                    value={description}
                    sx={{minWidth:'100%'}}
                />
            </Grid>
            {/* <Grid item xs={6}>
                <TextField 
                    id="outlined-basic" 
                    // label="MM-DD" 
                    variant="outlined"
                    type='date'
                    size='small' 
                    onChange={handleFormDateChange}
                    value={formattedDate}
                    sx={{minWidth:'100%'}}
                />
            </Grid> */}
        </Grid>

        <Grid item xs={12}>
            <Typography variant='h5' align='right'>
                <Button variant='contained' 
                    onClick={addHoliday} 
                    sx={{borderRadius: 10, marginTop:2}}> 
                Submit 
                </Button>
            </Typography>
        </Grid>
        
        <Box sx={{m:4}} />

    </>
    );
};

export default UpdateForm;
