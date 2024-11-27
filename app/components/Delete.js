'use client';

import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    boxShadow: 4,
    p: 4,
  };

const DeleteHoliday = ({holidayrow}) => {

    const theme = useTheme();

    const [selectedHoliday, setSelectedHoliday] = useState(null);

    const handleEditClick = (holiday) => {
      setSelectedHoliday(holiday);
      setModalOpen(true);
    };


    const handleSave = (e) => {
      e.preventDefault();

      // Update the holidays list locally
      setHolidays((prevHolidays) =>
        prevHolidays.map((holiday) =>
          holiday[0] === selectedHoliday[0] ? selectedHoliday : holiday
        )
      );

    // Optionally, send updated holiday to the backend
    fetch(`http://127.0.0.1:5000/holidays/${selectedHoliday[0]}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: selectedHoliday[1],
        description: selectedHoliday[2],
      }),
    }).catch((error) => console.error('Error saving holiday:', error));

    setModalOpen(false); // Close the modal
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    return (
        <>        
        
        
      {/* Modal for editing */}
        <Button onClick={handleOpen}>
          <DeleteForeverIcon/>
        </Button>

        <Modal
            open={open}
            onClick={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style} >

              {/* <AddForm closeEvent={handleClose}/> */}

            </Box>
            
        </Modal>
      

    </>
    );
};

export default DeleteHoliday;
