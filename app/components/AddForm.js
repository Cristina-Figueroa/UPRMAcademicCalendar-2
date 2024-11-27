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


// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// //   margin-top: 0px;
// `;


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 4,
    p: 4,
  };

  const Header = styled.h2`
  // color: #2c3e50;
  // text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const SubHeader = styled.h3`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
`;

const AddForm = ({closeEvent, refreshTable}) => {
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
        if (!date || !description || !formattedDate) {
            alert("Please fill out all fields!");
            return;
          }
      
          const holidayData = {
            date: date,
            description: description,
            formatted_date: formattedDate,
          };
      
          try {
            const response = fetch("http://127.0.0.1:5000/insert", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(holidayData),
            });
      
            const result = response.json();
            if (response.ok) {
              alert(result.message);
              refreshTable(); // Call to refresh the table after successful submission
              closeEvent(); // Close the modal
            } else {
              alert(result.error || "An error occurred");
            }
          } catch (error) {
            console.error("Error adding holiday:", error);
            alert("Failed to add holiday. Please try again.");
          }
    };


    return (
        <> 
        <Box sx={{m:2}} />
        <IconButton sx={{position: 'absolute' , top: '0', right: '0'}} onClick={closeEvent}>
            <CloseRoundedIcon/>
        </IconButton>

        <SubHeader>Add Holiday</SubHeader>

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
            <Grid item xs={6}>
                <TextField 
                    id="outlined-basic" 
                    label="MM-DD" 
                    variant="outlined"
                    // type='date'
                    size='small' 
                    onChange={handleFormDateChange}
                    value={formattedDate}
                    sx={{minWidth:'100%'}}
                />
            </Grid>
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

export default AddForm;
