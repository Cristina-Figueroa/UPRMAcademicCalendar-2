'use client';


import React, { useEffect, useState } from 'react';
import { Box, Button, Container, } from '@mui/material';
import BasicSelect from './BasicSelect';
import DatePickerComponent from './DatePicker';
import ButtonComponent from './Button';
import DescriptionAlerts from './Alert';
import CircularSpinner from './LoadingSpinner';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ConfirmationModal from './ConfirmDelete';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';
import { Suspense } from 'react';


import {
  TableContainer,
  StyledTable,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  DateCell,
  DescriptionCell,
  ActionCell,
  EditRowButton,
  DeleteButton,
  EditButton,
  Notification,
  AddButton,
  CancelRowButton,
  DownloadButton,
  CancelButton,
} from './DatesTableStyles';

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
  margin-top: -40px;
  color: ${({ theme }) =>
  theme.palette.mode === 'dark'
    ? theme.palette.text.primary
    : theme.palette.text.primary};
`;

const Header = styled.h1`
  color: ${({ theme }) =>
  theme.palette.mode === 'dark'
    ? theme.palette.text.primary
    : theme.palette.text.primary};
  margin-bottom: 20px;
  margin-top: 10px;
`;

const SubHeader = styled.h2`
  color: ${({ theme }) =>
  theme.palette.mode === 'dark'
    ? theme.palette.text.primary
    : theme.palette.text.primary};
  margin-top: 20px;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the content horizontally */
  justify-content: center; /* Centers the content vertically */
`;

function Home() {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [academicPeriod, setAcademicPeriod] = useState('fall');  // Default to 'fall'
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  // For displaying error messages
  const [holidays, setHolidays] = useState([]); //State to get holidays
  const [importantDates, setImportantDates] = useState([]);


  // Notification
  const [notification, setNotification] = useState(null); // Pop-up notification state
  const [notificationType, setNotificationType] = useState(""); // 'success' or 'error'

  const showNotification = (message, type) => {
    setNotification(message);
    setNotificationType(type);
  
    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
      setNotificationType("");
    }, 3000);
  };


/**
 * Handles the operations of selecting an academic period and a
 * startDate, passing them to Flask and returning them to frontend
 * @returns academicPeriod, startDate
 */

  const submitDates = () => {

    setIsLoading(true);
    // Handle Errors
    if (!startDate) {
      setErrorMessage('Please select a start date');
      return;
    }

    // Convert startDate to a Date object (if it's not already one)
    const dateObject = new Date(startDate);

    // Extract the month (0-based, so January is 0, December is 11)
    const month = dateObject.getMonth(); 
    let period = academicPeriod; // To store the academic period
    let weeks = 0;   // To store the number of weeks

    

    // Check the month and determine the period and weeks
    if (month === 7 && academicPeriod === 'fall' || month === 8 && academicPeriod === 'fall') { // August (7) or September (8)
      weeks = 15;
      // weeks = 75;
    } else if (month === 0 && academicPeriod === 'spring'|| month === 1 && academicPeriod === 'spring') { // January (0) or February (1)
      weeks = 15;
      // weeks = 75;
    } else if (month === 4 && academicPeriod === 'summerV1'|| month === 5 && academicPeriod === 'summerV1') { // May (4) or June (5)
      weeks = 4;
      // weeks = 19;
    } else if (month === 4 && academicPeriod === 'summerExtended'|| month === 5 && academicPeriod === 'summerExtended') { // May (4) or June (5)
      weeks = 6;
      // weeks = 30;
    } else if (month === 5 && academicPeriod === 'summerV2'|| month === 6 && academicPeriod === 'summerV2') { // May (4) or June (5)
      weeks = 4;
      // weeks = 19;
    } else {
      period = 'unknown';
      weeks = 0;
      setErrorMessage('Invalid start date for academic period. Please select another date for calendar.');
      return; // Exit if the date is invalid
    }
    setErrorMessage('');
    fetch('https://calendaruprm-0b385eeb2b1e.herokuapp.com/submit-academic-period/', {
    // fetch('http://127.0.0.1:5000/submit-academic-period/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate: startDate,
        academicPeriod: period,
        weeks: weeks,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Response from Flask:', data);
        setResponseMessage(
          // data.message + ' - Date:' + startDate + ' , Period: ' + period + ' , Weeks: ' + weeks
        );
        const processedDates = data.important_dates.map((dateItem) => {
          return {
            ...dateItem,
            // No need to remove formatted_date, just keep it available
          };
        });

        setImportantDates(processedDates); 
        console.log('Updated responseMessage:', processedDates); 
        // Fetch important dates from the database after inserting them
        fetchImportantDates(period, startDate); 
        handleSubmitDates();
        setIsLoading(false);

      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage(error.message);
      });
  };




/**
 * Handles Fetching the generated date from the database
 * @returns list of important_dates
 */

  useEffect(() => {
    // Fetch data when component mounts
    fetchImportantDates();
  }, []);

  const fetchImportantDates = async () => {
    const response = await fetch('https://calendaruprm-0b385eeb2b1e.herokuapp.com/submit-academic-period/get-important-dates');
    // const response = await fetch('http://127.0.0.1:5000/submit-academic-period/get-important-dates');
    const data = await response.json();
    setImportantDates(data.important_dates);
  };




/**
 * Add an event to Dates List
 * @param {*} id 
 */

  const [isAdding, setIsAdding] = useState(false); // Toggle for input row
  const [newEvent, setNewEvent] = useState({ date: '', event: '', formatted_date: ''}); // Temp state for new event
  // const [newEvent, setNewEvent] = useState({ event: '', formatted_date: ''}); // Temp state for new event
  const [errors, setErrors] = useState({ event: false, formatted_date: false });

    // Open Inline Adding feature
    const handleAddClick = () => {
      setIsAdding(true);
    };

    const handleCancelClick = () => {
      setNewEvent({ date: '', event: '', formatted_date: ''}); // Reset the newEvent state
      setErrors({event: false, formatted_date: false}); // Clear any validation errors
      setIsAdding(false); // Exit the add mode
    };

    const handleSaveClick = async () => {
      const newErrors = {
        // date: !newEvent.date,
        event: !newEvent.event,
        formatted_date: !newEvent.formatted_date
      };
    
      setErrors(newErrors);
    
      // If any errors exist, prevent submission
      if (Object.values(newErrors).some((error) => error)) {
        showNotification("Please fill in all required fields.", "error");
        return;
      }

      // Suppose newEvent.formatted_date is "2025-01-02"
      const [yearStr, monthStr, dayStr] = newEvent.formatted_date.split("-");
      const year = parseInt(yearStr, 10);
      const month = parseInt(monthStr, 10) - 1; // zero-based index for months
      const day = parseInt(dayStr, 10);

      // Create a date in local time without time zone offset issues
      const selectedDate = new Date(year, month, day);

      // Format date value
      // const selectedDate = new Date(newEvent.formatted_date);
      const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      // Extract parts of the date
      const dayOfWeek = weekdays[selectedDate.getDay()];  // "Mon"
      const day = String(selectedDate.getDate()).padStart(2, '0'); // "26"
      const month = months[selectedDate.getMonth()]; // "Aug"
      const year = selectedDate.getFullYear(); // "2024"

      // Construct the desired format: "Mon, 26 Aug 2024"
      const dateformatted = `${dayOfWeek}, ${day} ${month} ${year}`;
      console.log(dateformatted);

    
      try {
        // Send POST request to Flask API
        const response = await fetch('https://calendaruprm-0b385eeb2b1e.herokuapp.com/submit-academic-period/get-important-dates', {
        // const response = await fetch('http://127.0.0.1:5000/submit-academic-period/add-important_dates', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            date: dateformatted,
            event: newEvent.event,
            formatted_date: newEvent.formatted_date,
          }),
        });
        console.log("Sending Date:", {
          date: dateformatted,
          event: newEvent.event,
          formatted_date: newEvent.formatted_date,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // Parse the response
        const responseData = await response.json();
    
        // Add the new event to the state
        setImportantDates((prevDates) => [...prevDates, responseData]);
    
        // Reset form and exit adding mode
        setNewEvent({ date: '', event: '', formatted_date: ''}); // Reset the newEvent state
        setErrors({  event: false, formatted_date: false });
        setIsAdding(false);
        showNotification("Event added successfully!", "success");

      } catch (error) {
        console.error('Error saving event:', error);
        showNotification("Failed to save the event. Please try again.", "error");
      }
    
      // Refresh the important_dates list
      try {
        const response = await fetch('https://calendaruprm-0b385eeb2b1e.herokuapp.com/submit-academic-period/get-important-dates');
        // const response = await fetch("http://127.0.0.1:5000/submit-academic-period/get-important-dates/");
        const data = await response.json();
        setImportantDates(data);
      } catch (error) {
        console.error("Error refreshing important_dates:", error);
      }
    };
    
    const handleSaveCancel = () => {
      setIsAdding(false);
      setErrors(false);
      setNewEvent({  date: '', event: '', formatted_date: ''});
    };



  const handleEdit = (id) => {
    // Call a backend API to edit the item with the given id
    console.log('Edit item with ID:', id);
  };

  const handleDelete = (id) => {
    // Call a backend API to delete the item with the given id
    console.log('Delete item with ID:', id);
  };


  const [isSubmitPressed, setIsSubmitPressed] = useState(false);  // State to track if SubmitDates has been pressed
  const [showConfirmLeave, setShowConfirmLeave] = useState(false); // State for showing the confirmation modal

  // Function to handle SubmitDates button click
  const handleSubmitDates = () => {
    setIsSubmitPressed(true);  // Mark as pressed when SubmitDates is clicked
  };

  // Function to reset visibility and form inputs (if necessary)
  const handleGenerateNewPeriod = () => {
    setIsSubmitPressed(false);
    setShowConfirmLeave(false); // Close the confirmation modal after confirming
    setStartDate("");  
    setAcademicPeriod("fall");  
  };

  // Open the confirmation modal
  const openConfirmLeave = () => {
    setShowConfirmLeave(true); // Show the modal when "Generate Another Period" is clicked
  };

  // Cancel leaving and close the confirmation modal
  const cancelLeave = () => {
    setShowConfirmLeave(false); // Close the confirmation dialog
  };

  // Function to trigger the download when the button is clicked
  const handleDownload = async () => {
    const response = await fetch('https://calendaruprm-0b385eeb2b1e.herokuapp.com/download', {
    // const response = await fetch('http://127.0.0.1:5000/download', {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      },
    });

    if (response.ok) {
      const blob = await response.blob(); // Create a Blob from the response
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob); // Create an object URL for the Blob
      link.download = 'dias-de-calendario.xlsx'; // Set the file name
      link.click(); // Trigger the download
    } else {
      alert('Failed to download the file.');
    }
  };
    
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal confirmation
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  return (
    <>


            {notification && (
              <Notification type={notificationType}>
                {notification}
              </Notification>
            )}

          {/* {isModalOpen && (
            <ConfirmationModal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onConfirm={handleConfirmDelete}
              message="Are you sure you want to delete this holiday? This action cannot be undone."
            />
          )} */}
          {showConfirmLeave && (
            <ConfirmationModal
              open={showConfirmLeave}
              onClose={cancelLeave}
              onConfirm={handleGenerateNewPeriod}
              message="Are you sure you want to discard this generation?"
            />
          )}

      <Suspense fallback={<CircularSpinner loading={isLoading} />}>  
            {!isSubmitPressed && (
              <>
                <SubHeader theme={theme}>
                  Select a start date to get started
                </SubHeader>

                {/* Date Picker */}
                <Center>
                  <DatePickerComponent startDate={startDate} setStartDate={setStartDate}/>
                </Center>
                 
                {/* BasicSelect */}
                <Center>
                  <BasicSelect academicPeriod={academicPeriod} setAcademicPeriod={setAcademicPeriod}/>
                </Center>

                {/* Button */}
                <Center>
                <ButtonComponent handleClick={submitDates}/>     
                </Center>              
              </>
            )}

            

                {/* Messages */}
                <Center>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {responseMessage && <p>{responseMessage}</p>}
                </Center>


                {/* {isLoading && (
                  <CircularSpinner loading={isLoading}/>
                )} */}


        {/* <> */}


                {!isLoading && isSubmitPressed && (

              <>
                  {/* Important Dates */}
                              <TableContainer theme={theme}>
                              <StyledTable theme={theme}>
                                <TableHeader theme={theme}>
                                  <TableHeaderRow theme={theme}>
                                    {/* <TableHeaderCell theme={theme}>ID</TableHeaderCell> */}
                                    <TableHeaderCell theme={theme}>Date</TableHeaderCell>
                                    <TableHeaderCell theme={theme}>Event</TableHeaderCell>
                                    <TableHeaderCell theme={theme}>Actions</TableHeaderCell>
                                  </TableHeaderRow>
                                </TableHeader>
                                <TableBody>


                              {isAdding && ( 
                                <TableRow theme={theme}>
                                    <DateCell theme={theme}>
                                        <input
                                        type="date"
                                        value={newEvent.formatted_date}
                                        onChange={(e) => setNewEvent({ ...newEvent, formatted_date: e.target.value })}
                                        style={{ borderColor: errors.formatted_date ? 'red' : undefined }}
                                      />

                                    </DateCell>
                                    <TableCell theme={theme}>
                                            <input
                                          type="text"
                                          placeholder="Event Name"
                                          value={newEvent.event}
                                          onChange={(e) => setNewEvent({ ...newEvent, event: e.target.value })}
                                          style={{ borderColor: errors.event ? 'red' : undefined }}
                                        />
                                    </TableCell>  
                                    <ActionCell theme={theme}>
                                                  <div style={{ display: "flex", flexDirection:'row', marginLeft: '-30px'}}>
                                                  <Button 
                                                  onClick={handleSaveClick}
                                                  >
                                                    Save</Button>
                                                  <CancelRowButton 
                                                  onClick={handleSaveCancel} 
                                                  sx={{color:'red', fontWeight:'bold'}}>Cancel</CancelRowButton>                    
                                                  </div>

                                    </ActionCell>
                                  </TableRow>
                                  )}



                                  {importantDates.map((date, index) => (
                                    <TableRow key={index} theme={theme}>

                                      {/* <TableCell theme={theme}>{date.id}</TableCell> */}
                                      <DateCell theme={theme}>{date.date}</DateCell>
                                      <DescriptionCell theme={theme}>{date.event}</DescriptionCell>
                                      <ActionCell theme={theme}>
                                        <EditRowButton theme={theme}><EditIcon/></EditRowButton>
                                        <DeleteButton theme={theme}><DeleteIcon/></DeleteButton>

                                      </ActionCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </StyledTable>
                              </TableContainer>


                          {/* Floating Button - Add*/}
                            {!isAdding ? ( 
                              <AddButton 
                                theme={theme}
                                onClick={handleAddClick}
                                variant="contained"
                                style={{
                                  color: 'white',
                                }}
                              >+</AddButton>              
      
                    
                              ) : (
                                <CancelButton
                                  onClick={handleCancelClick}
                                  variant="contained"
                                  sx = {{backgroundColor: 'red', color: 'white'}}
                                >
                                  ✕
                                </CancelButton>
                              )}



                            {/* Floating Button */}
                            <EditButton
                              variant="contained"
                              onClick={openConfirmLeave} 
                              theme={theme}
                              style={{                                
                                display: isSubmitPressed ? "block" : "none", // Only show when submit is pressed
                                color: 'white',
                                backgroundColor: 'red'

                              }}
                            >
                              <ArrowBackIcon sx={{fontSize:'xxlarge'}}/>
                            </EditButton>


                              <DownloadButton 
                                theme={theme}
                                style={{
                                  color: 'white',   
                                  backgroundColor: theme.palette.mode === 'dark' 
                                  ? theme.palette.primary.main 
                                  : theme.palette.primary.main, 
                                }}
                                onClick={openModal}
                              >
                                <DownloadIcon/>
                                </DownloadButton>








                            {/* {isEditing ? <> <ArrowBackIcon sx={{fontSize:'xxlarge'}}/> 
                            </> : <EditIcon/>} */}

                </>

                  )}



        </Suspense>

      {/* Modal for download confirmation */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '55%',
          transform: 'translate(-50%, -50%)',
          border: `1px solid ${theme.palette.mode === 'dark' ? '#555' : 'grey'}`,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.palette.mode === 'dark' ? '0px 4px 6px rgba(0, 0, 0, 0.7)' : '0px 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 1000,
      }}>
          <h2>Are you sure you want to download the data?</h2>
          <Button onClick={handleDownload} 
          style={{
            backgroundColor: theme.palette.mode === 'dark' 
            ? theme.palette.primary.main 
            : theme.palette.primary.main,
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px',

          }}
          >Yes, Download</Button>
          <Button onClick={closeModal} 
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          >Cancel</Button>
        </div>
      )}



        {/* </>                */}

    </>     
  );
}

export default Home;
// Let's add edit and delete to our API Endpoints for important_dates