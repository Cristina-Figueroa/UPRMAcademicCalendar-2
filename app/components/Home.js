'use client';


import React, { useEffect, useState, useCallback } from 'react';
import { Box, Button, } from '@mui/material';
import BasicSelect from './BasicSelect';
import DatePickerComponent from './DatePicker';
import ButtonComponent from './Button';
import DescriptionAlerts from './Alert';
import CircularSpinner from './LoadingSpinner';
import PaginationComponent from './Pagination';
import RowsPerPage from './RowsPerPage'; 
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
  StyledInput,
  TableFooter,
  TableFooterRow,
  TableFooterCell,
  Right,
  Container,

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


    // Table Components - Rows per Page and Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Set 5 as default number of rows per page
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentEvents = importantDates.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(importantDates.length / rowsPerPage);

    const handlePageChange = useCallback((newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    }, [totalPages]);

    const handleRowsPerPageChange = useCallback((event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setCurrentPage(1);
    }, []);



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
    let academicPeriodFrontEnd = '';
    

    // Check the month and determine the period and weeks
    if (month === 7 && academicPeriod === 'fall' || month === 8 && academicPeriod === 'fall') { // August (7) or September (8)
      weeks = 15;
      academicPeriodFrontEnd = "Primer Semestre";
      // weeks = 75;
    } else if (month === 0 && academicPeriod === 'spring'|| month === 1 && academicPeriod === 'spring') { // January (0) or February (1)
      weeks = 15;
      academicPeriodFrontEnd = "Segundo Semestre";
      // weeks = 75;
    } else if (month === 4 && academicPeriod === 'summerV1'|| month === 5 && academicPeriod === 'summerV1') { // May (4) or June (5)
      weeks = 4;
      academicPeriodFrontEnd = "Primera Sesión de Cuatro Semanas de Verano";
      // weeks = 19;
    } else if (month === 4 && academicPeriod === 'summerExtended'|| month === 5 && academicPeriod === 'summerExtended') { // May (4) or June (5)
      weeks = 6;
      academicPeriodFrontEnd = "Verano Extendido";
      // weeks = 30;
    } else if (month === 5 && academicPeriod === 'summerV2'|| month === 6 && academicPeriod === 'summerV2') { // May (4) or June (5)
      weeks = 4;
      academicPeriodFrontEnd = "Segunda Sesión de Cuatro Semanas de Verano";
      // weeks = 19;
    } else {
      period = 'unknown';
      weeks = 0;
      setErrorMessage('Invalid start date for academic period. Please select another date for calendar.');
      return; // Exit if the date is invalid
    }
    setErrorMessage('');

    // Format day in Mon, DD MM YYYY

      // Creating date value for important_dates table (Mon, 02 Jan 2025)
      const inputDate = startDate; // e.g. "2025-01-02"
      const utcDateStr = inputDate + "T00:00:00Z"; 
      const parsedDate = new Date(utcDateStr);
      const utcDay = parsedDate.getUTCDate();       // Day of month (1-31)
      const utcMonth = parsedDate.getUTCMonth();    // Month (0-11)
      const utcYear = parsedDate.getUTCFullYear();  // Full year
      const utcWeekday = parsedDate.getUTCDay();    // Day of week (0-6, Sun=0)
      const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          
      const dayOfWeek = weekdays[utcWeekday];
      const displayDay = String(utcDay).padStart(2, '0'); // e.g., "02"
      const displayMonth = months[utcMonth];
      
      const dateformatted = `${dayOfWeek}, ${displayDay} ${displayMonth} ${utcYear}`;
      console.log("dateformatted in Adding Date Function:", {
        date: dateformatted
      });


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
          'Dia de Comienzo de Clases: ' + dateformatted + ' |    Periodo Academico Elegido: ' + academicPeriodFrontEnd
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

      // Creating date value for important_dates table (Mon, 02 Jan 2025)
      const inputDate = newEvent.formatted_date; // e.g. "2025-01-02"
      const utcDateStr = inputDate + "T00:00:00Z"; 
      const parsedDate = new Date(utcDateStr);
      const utcDay = parsedDate.getUTCDate();       // Day of month (1-31)
      const utcMonth = parsedDate.getUTCMonth();    // Month (0-11)
      const utcYear = parsedDate.getUTCFullYear();  // Full year
      const utcWeekday = parsedDate.getUTCDay();    // Day of week (0-6, Sun=0)
      const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          
      const dayOfWeek = weekdays[utcWeekday];
      const displayDay = String(utcDay).padStart(2, '0'); // e.g., "02"
      const displayMonth = months[utcMonth];
      
      const dateformatted = `${dayOfWeek}, ${displayDay} ${displayMonth} ${utcYear}`;
      console.log("dateformatted in Adding Date Function:", {
        date: dateformatted
      });
    
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
        console.log("Adding Event to the DB:", {
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
        const response = await fetch("https://calendaruprm-0b385eeb2b1e.herokuapp.com/submit-academic-period/get-important-dates");
        const data = await response.json();
        // setImportantDates(data);
        setImportantDates(data.important_dates);

      } catch (error) {
        console.error("Error refreshing important_dates:", error);
      }
    };
    
    const handleSaveCancel = () => {
      setIsAdding(false);
      setErrors(false);
      setNewEvent({  date: '', event: '', formatted_date: ''});
    };








    const [editDate, setEditDate] = useState(null); // holds the currently editing date object
    const [isRowEditing, setIsRowEditing] = useState(false); // edit row

    const handleEditClick = (date) => {
      setEditDate({ ...date }); // clone the object so we can edit fields independently
    };
  
    const handleEditCancel = () => {
      setEditDate(null);
    };
  
    const handleEditSave = async (updatedDate) => {
      try {
        // Calculate date (Mon, DD MM YYYY)
        const inputDate = updatedDate.formatted_date; // "YYYY-MM-DD"
        const utcDateStr = inputDate + "T00:00:00Z"; 
        const parsedDate = new Date(utcDateStr);

        const utcDay = parsedDate.getUTCDate();       
        const utcMonth = parsedDate.getUTCMonth();    // 0-11
        const utcYear = parsedDate.getUTCFullYear();  
        const utcWeekday = parsedDate.getUTCDay();    // 0 (Sun) - 6 (Sat)

        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const dayOfWeek = weekdays[utcWeekday];
        const displayDay = String(utcDay).padStart(2, '0'); // e.g. "02"
        const displayMonth = months[utcMonth];

        const dateformatted = `${dayOfWeek}, ${displayDay} ${displayMonth} ${utcYear}`;
        console.log("dateformatted in Updating Function:", {
          date: dateformatted
        });

        const response = await fetch(
          `https://calendaruprm-0b385eeb2b1e.herokuapp.com/submit-academic-period/get-important-dates/${updatedDate.id}`, 
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              date: dateformatted,
              event: updatedDate.event,
              formatted_date: updatedDate.formatted_date,
            }),
          });
          console.log("Updating this Event in the DB:", {
            date: dateformatted,
            event: updatedDate.event,
            formatted_date: updatedDate.formatted_date,
          });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // If you have a notification function, call it here
        showNotification("Important date updated successfully!", "success");
    
        // Update the local state so the UI reflects the changes
        setImportantDates((prevDates) =>
          prevDates.map((date) =>
            date.id === updatedDate.id
        ? { ...date, date: dateformatted, event: updatedDate.event, formatted_date: updatedDate.formatted_date }
        : date
          )
        );
        setEditDate(null);
      } catch (err) {
        console.error('Error saving date:', err);
        showNotification("Failed to update the date. Please try again.", "error");
      }
      // Refresh the important_dates list
      try {
        const response = await fetch("https://calendaruprm-0b385eeb2b1e.herokuapp.com/submit-academic-period/get-important-dates");
        const data = await response.json();
        // setImportantDates(data);
        setImportantDates(data.important_dates);

      } catch (error) {
        console.error("Error refreshing important_dates:", error);
      }
    };
    
    const handleInputChange = (field, value) => {
      setEditDate((prev) => ({
        ...prev,
        [field]: value,
      }));
    };










    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [dateToDelete, setDateToDelete] = useState(null);

    const handleDeleteClick = (id) => {
      setDateToDelete(id);
      setIsDeleteModalOpen(true);

    };


    const handleConfirmDelete = async () => {
      try {
          const response = await fetch(
            `https://calendaruprm-0b385eeb2b1e.herokuapp.com/submit-academic-period/get-important-dates/${dateToDelete}`, 
            {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        showNotification("Event deleted successfully!", "success");
        setImportantDates((prevDates) =>
          prevDates.filter((date) => date.id !== dateToDelete)
        );
      } catch (error) {
        console.error('Error deleting event:', error);
        showNotification("Failed to delete the event. Please try again.", "error");
      } finally {
        setIsDeleteModalOpen(false); // Close the modal
        setDateToDelete(null);
      }

      // Refresh the important_dates list
      try {
        const response = await fetch("https://calendaruprm-0b385eeb2b1e.herokuapp.com/submit-academic-period/get-important-dates");
        const data = await response.json();
        // setImportantDates(data);
        setImportantDates(data.important_dates);
      } catch (error) {
        console.error("Error refreshing important_dates:", error);
      }

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
      
    
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

    // Open modal confirmation
    const openModal = () => {
      setIsDownloadModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
      setIsDownloadModalOpen(false);
    };

  
  return (
    <>


            {notification && (
              <Notification type={notificationType}>
                {notification}
              </Notification>
            )}

          {isDeleteModalOpen && (
            <ConfirmationModal
              open={isDeleteModalOpen}
              onClose={() => setIsDeleteModalOpen(false)}
              onConfirm={handleConfirmDelete}
              message="Are you sure you want to delete this event? This action cannot be undone."
            />
          )}
          {showConfirmLeave && (
            <ConfirmationModal
              open={showConfirmLeave}
              onClose={cancelLeave}
              onConfirm={handleGenerateNewPeriod}
              message="Are you sure you want to discard this generation?"
            />
          )}
          {/* {isDownloadModalOpen && (
            <ConfirmationModal
              open={isDownloadModalOpen}
              onClose={closeModal}
              onConfirm={handleDownload}
              message="Are you sure you want to download the data?"
            />
          )} */}


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
                </Center>



                {!isLoading && isSubmitPressed && (
              <>
                    {responseMessage && <h3>{responseMessage}</h3>}

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
                                        <StyledInput
                                        hasError={errors.formatted_date}
                                        type="date"
                                        value={newEvent.formatted_date}
                                        onChange={(e) => setNewEvent({ ...newEvent, formatted_date: e.target.value })}
                                        // style={{ borderColor: errors.formatted_date ? 'red' : undefined }}
                                      />

                                    </DateCell>
                                    <TableCell theme={theme}>
                                            <StyledInput
                                          hasError={errors.event}
                                          type="text"
                                          placeholder="Event Name"
                                          value={newEvent.event}
                                          onChange={(e) => setNewEvent({ ...newEvent, event: e.target.value })}
                                          // style={{ borderColor: errors.event ? 'red' : undefined }}
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



                                  {currentEvents.map((date, index) => (
                                    <TableRow key={date.id} theme={theme}>
                                      {editDate && editDate.id === date.id ? (
                                                  // Editing mode
                                                  <>
                                                    <TableCell theme={theme}>
                                                      <StyledInput
                                                        type="date"
                                                        value={editDate.formatted_date || ""}
                                                        onChange={(e) => handleInputChange('formatted_date', e.target.value)}
                                                      />
                                                    </TableCell>
                                                    <TableCell theme={theme}>
                                                      <StyledInput
                                                        type="text"
                                                        value={editDate.event || ""}
                                                        onChange={(e) => handleInputChange('event', e.target.value)}
                                                      />
                                                    </TableCell>
                                                    <ActionCell theme={theme}>
                                                      <Button onClick={() => handleEditSave(editDate)}>Save</Button>
                                                      <Button onClick={handleEditCancel}>Cancel</Button>
                                                    </ActionCell>
                                                  </>
                                                ) : (
                                                  // View mode
                                                  <>
                                                    <DateCell theme={theme}>{date.date}</DateCell>
                                                    <DescriptionCell theme={theme}>{date.event}</DescriptionCell>
                                                    <ActionCell theme={theme}>
                                                      <EditRowButton theme={theme} onClick={() => handleEditClick(date)}>
                                                        <EditIcon />
                                                      </EditRowButton>
                                                      <DeleteButton
                                                        theme={theme}
                                                        onClick={() => handleDeleteClick(date.id)}
                                                        style={{ color: 'red' }}
                                                      >
                                                        <DeleteIcon />
                                                      </DeleteButton>
                                                    </ActionCell>
                                                  </>
                                                )}
                                    </TableRow>
                                  ))}
                                </TableBody>

                                <TableFooter theme={theme}>
            <TableFooterRow >
                <TableFooterCell colSpan={3} theme={theme}>
                  <Container>
                    <RowsPerPage
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleRowsPerPageChange}
                      />
                    <Right>
                        <PaginationComponent
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                          /> 
                    </Right>
                </Container>
                </TableFooterCell>
            </TableFooterRow>
          </TableFooter>




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




                </>

                  )}



        </Suspense>

      {/* Modal for download confirmation */}
      {isDownloadModalOpen && (
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
          <h2>You are downloading the data. Press Yes, Download to continue.</h2>
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




    </>     
  );
}

export default Home;
// Let's add edit and delete to our API Endpoints for important_dates