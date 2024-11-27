'use client';

import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import Box from '@mui/material/Box';
import UpdateForm from './UpdateForm'

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

const EditHolidayModal = ({isOpen, holidayrow}) => {

    const theme = useTheme();

    const [selectedHoliday, setSelectedHoliday] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
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
        {/* <Button onClick={handleOpen}>Edit</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal> */}




        
      {/* Modal for editing */}
        <Button onClick={handleOpen}>Edit</Button>

        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style} >

              <UpdateForm closeEvent={handleClose}/>

            </Box>
            
          {/* <ModalContent>
            <h2>Edit Holiday</h2>
            <form onSubmit={handleSave}>
              <div>
                <label>Date:</label>
                <input
                  type="date"
                  value={selectedHoliday[1] || ''}
                  onChange={(e) =>
                    setSelectedHoliday({ ...selectedHoliday, 1: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Description:</label>
                <input
                  type="text"
                  value={selectedHoliday[2] || ''}
                  onChange={(e) =>
                    setSelectedHoliday({
                      ...selectedHoliday,
                      2: e.target.value,
                    })
                  }
                />
              </div>
              <ModalButtons>
                <Button type="submit">Save</Button>
                <Button
                  onClick={() => setModalOpen(false)}
                  style={{ marginLeft: '10px' }}
                >
                  Cancel
                </Button>
              </ModalButtons>
            </form>
          </ModalContent> */}
        </Modal>
      

    </>
    );
};

export default EditHolidayModal;
