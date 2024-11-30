'use client';

import React, { useEffect, useState , useCallback} from 'react';
import { useTheme } from '@mui/material/styles';
import PaginationComponent from './Pagination';
import RowsPerPage from './RowsPerPage'; 
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TableFilters from './HolidayFiltering';
import ConfirmationModal from './ConfirmDelete';
import {
  TableContainer,
  StyledTable,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableHeaderActionCell,
  TableBody,
  TableRow,
  TableCell,
  DateCell,
  DescriptionCell,
  ActionCell,
  SaveButtonCell,
  TableFooter,
  TableFooterRow,
  TableFooterCell,
  Container,
  Center,
  Right,
  Notification,
  StyledSelect,
  StyledInput,
  AddButton,
  CancelRowButton,
  EditRowButton,
  DeleteButton,
  EditButton,
  CancelButton,
} from './HolidayTableStyles';




const HolidaysTable = () => {
    const [holidays, setHolidays] = useState([]); //State to get holidays
    const [error, setError] = useState(null);

    const theme = useTheme(); 


    // Table Components
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Set 5 as default number of rows per page
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentHolidays = holidays.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(holidays.length / rowsPerPage);

    const handlePageChange = useCallback((newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    }, [totalPages]);

    const handleRowsPerPageChange = useCallback((event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setCurrentPage(1);
    }, []);
    
    const [loading, setLoading] = useState(true);


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
    

    // Toggle Editing Mode
    const [isEditing, setIsEditing] = useState(false);
    const [showConfirmLeaveEdit, setShowConfirmLeaveEdit] = useState(false); 
    const [editRowIndex, setEditRowIndex] = useState(null);  

    const toggleEditingMode = () => {
      if (editRowIndex !== null) {
        setShowConfirmLeaveEdit(true); // Show confirmation dialog if a row is being edited
      } else {
        setIsEditing((prev) => !prev); // Toggle directly if no row is being edited
      }
    };

    // Confirm leave editing mode
    const confirmLeaveEditingMode = () => {
      setShowConfirmLeaveEdit(false); // Close the confirmation dialog
      setEditRowIndex(null); // Exit editing mode for the row
      setEditHoliday({}); // Reset the edited guideline
      setIsEditing(false); // Exit overall editing mode
    };

    // Cancel leaving editing mode
    const cancelLeaveEditingMode = () => {
      setShowConfirmLeaveEdit(false); // Close the confirmation dialog
    };

    // Filtering Holidays








    // Fetch Holidays from DB
    useEffect(() => {
      const fetchHolidays = async () => {
        setLoading(true);
          try {
              const response = await fetch('http://127.0.0.1:5000/holidays/', {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json',
                  },
              });
  
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
  
              const data = await response.json();
              setHolidays(data); // Save fetched holidays to state
          } catch (err) {
              console.error('Error fetching holidays:', err);
              setError(err.message); // Save error to state for display
          } finally {
            setLoading(false);
          }
      };
  
      fetchHolidays();
  }, []);
  


    // Delete Holiday
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [holidayToDelete, setHolidayToDelete] = useState(null);
    
    const handleDeleteClick = (holidayId) => {
      setHolidayToDelete(holidayId);
      setIsModalOpen(true);
    };
    
    const handleConfirmDelete = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/holidays/${holidayToDelete}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        showNotification("Holiday deleted successfully!", "success");
    
        // Refresh holidays in state after deletion
        setHolidays((prevHolidays) =>
          prevHolidays.filter((holiday) => holiday[0] !== holidayToDelete)
        );
      } catch (error) {
        console.error('Error deleting holiday:', error);
        showNotification("Failed to delete the holiday. Please try again.", "error");
      } finally {
        setIsModalOpen(false); // Close the modal
        setHolidayToDelete(null);
      }
    };


    // Add a Holiday
    const [isAdding, setIsAdding] = useState(false); // Toggle for input row
    const [newHoliday, setNewHoliday] = useState({ date: '', description: '', formattedDate: ''}); // Temp state for new holiday
  
    // Open Inline Adding feature
    const handleAddClick = () => {
      setIsAdding(true);
    };

    const handleCancelClick = () => {
      setNewHoliday({ month: "", day: "", description: "" }); // Reset the newHoliday state
      setErrors({ month: false, day: false, description: false }); // Clear any validation errors
      setIsAdding(false); // Exit the add mode
    };
    
    const getDaysInMonth = (month, year = new Date().getFullYear()) => {
      // Month is 1-based: January = 1, February = 2, etc.
      return new Date(year, month, 0).getDate();
    };

    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default to the current year

    const [maxDays, setMaxDays] = useState(31); // Default to 31 days

    useEffect(() => {
      if (newHoliday.month && selectedYear) {
        const daysInMonth = getDaysInMonth(newHoliday.month, selectedYear);
        setMaxDays(daysInMonth); // Update maxDays based on the selected month and year
      }
    }, [newHoliday.month, selectedYear]);

    // Variables for Select Components for Month & Day
    const handleMonthChange = (value) => {
      setNewHoliday((prev) => ({ ...prev, month: value, day: "" })); // Reset day when month changes
      const daysInMonth = getDaysInMonth(value);
      setMaxDays(daysInMonth); // Update maxDays based on the selected month
    };
    
    const handleDayChange = (value) => {
      setNewHoliday((prev) => ({ ...prev, day: value }));
    };  

    useEffect(() => {
      if (newHoliday.month && newHoliday.day) {
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const monthName = monthNames[newHoliday.month - 1]; // Convert month number to name
        const formattedMonth = String(newHoliday.month).padStart(2, "0");
        const formattedDay = String(newHoliday.day).padStart(2, "0");
    
        setNewHoliday((prev) => ({
          ...prev,
          holiday_date: `${monthName} ${newHoliday.day}`, // e.g., "November 2"
          formattedDate: `${formattedMonth}-${formattedDay}`, // e.g., "11-02"
        }));
      }
    }, [newHoliday.month, newHoliday.day]);


    const [errors, setErrors] = useState({
      month: false,
      day: false,
      description: false,
    });

    const handleSaveClick = async () => {

      const newErrors = {
        month: !newHoliday.month,
        day: !newHoliday.day,
        description: !newHoliday.description,
      };

        // Validate the day against the selected month
      if (newHoliday.month && newHoliday.day) {
        const daysInMonth = getDaysInMonth(newHoliday.month);
        if (newHoliday.day > daysInMonth) {
          newErrors.day = true;
        }
      }

      setErrors(newErrors);

      // If any errors exist, prevent submission
      if (Object.values(newErrors).some((error) => error)) {
        showNotification("Please fill in all required fields.", "error");
        return;
      }
    
      try {
        // Send POST request to Flask API
        const response = await fetch('http://127.0.0.1:5000/holidays/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            holiday_date: newHoliday.holiday_date,
            holiday_name: newHoliday.description,
            formatted_date: newHoliday.formattedDate,
          }),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // Parse the response
        const responseData = await response.json();


        // Map the backend response to match frontend keys
        const newHolidayData = {
          date: responseData.holiday_date || newHoliday.holiday_date,
          description: responseData.holiday_name || newHoliday.description,
          formattedDate: responseData.formatted_date || newHoliday.formattedDate,
        };

        // Update the state to include the new holiday
        setHolidays((prevHolidays) => [...prevHolidays, newHolidayData]);
    
        // Reset form and close adding mode
        setNewHoliday({ month: '', day: '', description: '' });
        setErrors({ month: false, day: false, description: false }); // Reset errors
        setIsAdding(false);
        showNotification("Holiday added successfully!", "success");

      } catch (error) {
        console.error('Error saving holiday:', error);
        showNotification("Failed to save the holiday. Please try again.", "error");

      }

      try {
        const response = await fetch("http://127.0.0.1:5000/holidays/");
        const data = await response.json();
        setHolidays(data);
      } catch (error) {
        console.error("Error refreshing holidays:", error);
      }
    };

    const handleSaveCancel = () => {
      setIsAdding(false);
      setErrors(false);
    };

    const handleInputChange = (field, value) => {
      setNewHoliday((prev) => ({ ...prev, [field]: value }));
    };




    // Editing a Holiday
    const [editHoliday, setEditHoliday] = useState(null); // State for the holiday being edited


    const monthNames = [
      "January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October",
      "November", "December"
  ];


    // Handle editing a specific row
    const handleEditClick = (holiday,index) => {
      const [monthName, day] = holiday[1].split(' '); // Assuming holiday[1] is "November 2"
      const monthIndex = monthNames.findIndex((m) => m === monthName) + 1;
      
      setEditRowIndex(index); // Track the currently edited row
      setEditHoliday({
        ...holiday,
        month: monthIndex, // Store as 1-based month index
        day: parseInt(day),
      });
    };

    const handleEditMonthChange = (value) => {
      setEditHoliday((prev) => ({
        ...prev,
        month: value, // Update month
        day: prev.day > getDaysInMonth(value, selectedYear) ? 1 : prev.day, // Reset day if it exceeds max days
      }));
    };
    
    const handleEditDayChange = (value) => {
      setEditHoliday((prev) => ({
        ...prev,
        day: value, // Update day
      }));
    };

    useEffect(() => {
      if (editHoliday?.month && selectedYear) {
        const daysInMonth = getDaysInMonth(editHoliday.month, selectedYear);
        setMaxDays(daysInMonth); // Update maxDays based on the selected month and year
      }
    }, [editHoliday?.month, selectedYear]);

    const handleEditSave = async (updatedHoliday) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/holidays/${updatedHoliday[0]}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  holiday_date: `${monthNames[updatedHoliday.month - 1]} ${updatedHoliday.day}`,
                  holiday_name: updatedHoliday[2],
                  formatted_date: `${String(updatedHoliday.month).padStart(2, '0')}-${String(updatedHoliday.day).padStart(2, '0')}`,
              }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            showNotification("Holiday updated successfully!", "success");

            // Refresh the holidays list
            const refreshedHolidays = await response.json();
            setHolidays((prev) =>
                prev.map((holiday) =>
                    holiday[0] === updatedHoliday[0] ? updatedHoliday : holiday
                )
            );
            setEditHoliday(null); // Exit edit mode
        } catch (err) {
            console.error('Error saving holiday:', err);
        }
        try {
          const response = await fetch("http://127.0.0.1:5000/holidays/");
          const data = await response.json();
          setHolidays(data);
        } catch (error) {
          console.error("Error refreshing holidays:", error);
          showNotification("Failed to update the holiday. Please try again.", "error");
        }
    };

    const handleEditCancel = () => {
        setEditHoliday(null); // Exit edit mode without saving
        setEditRowIndex(null); // Exit editing mode without saving
    };



    return (
      <>
        {notification && (
          <Notification type={notificationType}>
            {notification}
          </Notification>
        )}
      {/* <TableFilters filters={filters} setFilters={setFilters} /> */}

      {isModalOpen && (
        <ConfirmationModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirmDelete}
          message="Are you sure you want to delete this holiday? This action cannot be undone."
        />
      )}
      {showConfirmLeaveEdit && (
        <ConfirmationModal
          open={showConfirmLeaveEdit}
          onClose={cancelLeaveEditingMode}
          onConfirm={confirmLeaveEditingMode}
          message="You have unsaved changes. Are you sure you want to leave editing mode?"
        />
      )}

      <TableContainer theme={theme}>
        <StyledTable>
          <TableHeader theme={theme}>
            <TableHeaderRow>
              <TableHeaderCell theme={theme}>Fechas</TableHeaderCell>
              <TableHeaderCell theme={theme}>Descripción</TableHeaderCell>
              {isEditing && <TableHeaderActionCell theme={theme}>Acciones</TableHeaderActionCell> } {/* Conditionally render action column */}

            </TableHeaderRow>
          </TableHeader>
          <TableBody>


            { isAdding && (<TableRow theme={theme}>
              <TableCell theme={theme}>
                <StyledSelect
                  hasError={errors.month}
                  value={newHoliday.month || ""}
                  onChange={(e) => handleMonthChange(e.target.value)}
                >
                  <option value="" disabled>Select Month</option>
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((month, index) => (
                    <option key={index} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </StyledSelect>
                <StyledSelect
                  hasError={errors.day}
                  value={newHoliday.day || ""}
                  onChange={(e) => handleDayChange(e.target.value)}
                >
                  <option value="" disabled>Select Day</option>
                  {Array.from({ length: maxDays }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </StyledSelect>
              </TableCell>
              <TableCell>
                <StyledInput
                  hasError={errors.description}
                  value={newHoliday.description}
                  onChange={(e) =>
                    handleInputChange('description', e.target.value)
                  }
                  placeholder="Description"
                />

                {!isEditing && (
                  // Render buttons inside Description Cell in non-editing mode
                  <div style={{ display: "flex", flexDirection:'row', justifyContent: 'flex-end'}}>
                  <Button onClick={handleSaveClick}>Save</Button>
                  <CancelRowButton onClick={handleSaveCancel} sx={{color:'red', fontWeight:'bold'}}>Cancel</CancelRowButton>                    
                  </div>
                )}
              </TableCell>

        
              {/* Action Cell for Editing Mode */}
              {isEditing && (
                <TableCell theme={theme}>
                <div style={{ display: "flex", flexDirection:'row', marginLeft: '-30px'}}>
                <Button onClick={handleSaveClick}>Save</Button>
                <CancelRowButton onClick={handleSaveCancel} sx={{color:'red', fontWeight:'bold'}}>Cancel</CancelRowButton>                    
                </div>
                </TableCell>
              )}
              </TableRow>)}





            {currentHolidays.map((holiday, index) => (
              <TableRow key={index} theme={theme}>

                  {editHoliday && editHoliday[0] === holiday[0] ? (
                                    <>
                                    {/* Add Holiday */}
                                        <TableCell>
                                        <StyledSelect
                                          value={editHoliday.month || ""}
                                          onChange={(e) => handleEditMonthChange(e.target.value)}
                                        >
                                          <option value="" disabled>Select Month</option>
                                          {monthNames.map((month, index) => (
                                            <option key={index} value={index + 1}>
                                              {month}
                                            </option>
                                          ))}
                                        </StyledSelect>
                                        <StyledSelect
                                          value={editHoliday.day || ""}
                                          onChange={(e) => handleEditDayChange(e.target.value)}
                                        >
                                          <option value="" disabled>Select Day</option>
                                          {Array.from({ length: maxDays }, (_, i) => i + 1).map((day) => (
                                            <option key={day} value={day}>
                                              {day}
                                            </option>
                                          ))}
                                        </StyledSelect>

                                        </TableCell>
                                        <TableCell>
                                            <StyledInput
                                                value={editHoliday[2]}
                                                onChange={(e) =>
                                                    setEditHoliday((prev) => ({
                                                        ...prev,
                                                        [2]: e.target.value,
                                                    }))
                                                }
                                            />


                                        </TableCell>
                                        <ActionCell>
                                            <Button
                                                onClick={() => handleEditSave(editHoliday)}
                                            >
                                                Save
                                            </Button>
                                            <Button onClick={handleEditCancel}>Cancel</Button>
                                        
                                        </ActionCell>
                                    </>
                                ) : (
                                    <>
                                    {/* View Holiday */}
                                        <DateCell>{holiday[1]}</DateCell>
                                        <DescriptionCell>{holiday[2]}</DescriptionCell>
                                        
                                        {isEditing && (

                                        <ActionCell>
                                            <EditRowButton
                                                onClick={() => handleEditClick(holiday)}
                                            >
                                              Edit
                                                {/* <EditIcon/> */}
                                            </EditRowButton>
                                            <DeleteButton 
                                                onClick={() => handleDeleteClick(holiday[0])} 
                                                style={{ color: 'red' }}
                                              >
                                              <DeleteIcon/>
                                            </DeleteButton>

                                        </ActionCell>
                                      )}
                                    </>
                                )}
              </TableRow>
            ))}


          </TableBody>
          <TableFooter theme={theme}>
            <TableFooterRow >
                <TableFooterCell colSpan={isEditing ? 3 : 2} theme={theme}>
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


          {/* Floating Button - Edit*/}
          <EditButton
            theme={theme}
            variant='contained'
            style={{
              color: 'white',
              backgroundColor: isEditing
                ? 'red' // Red background when in editing mode
                : theme.palette.mode === 'dark'
                ? theme.palette.primary.main
                : theme.palette.primary.main,
            }}
            onClick={toggleEditingMode}
          >
            {isEditing ? <> <ArrowBackIcon sx={{fontSize:'xxlarge'}}/> 
            </> : <EditIcon/>}
          </EditButton>



            {/* Floating Button - Add*/}
            {!isAdding ? ( <AddButton
                  theme={theme}
                  onClick={handleAddClick}
                  variant="contained"
                  style={{
                    color: 'white',
                    backgroundColor: isAdding
                      ? 'red' // Red background when in editing mode
                      : theme.palette.mode === 'dark'
                      ? theme.palette.primary.main
                      : theme.palette.primary.main,
                  }}
                  
                >
                  +
                </AddButton>
              ) : (
                <CancelButton
                  onClick={handleCancelClick}
                  variant="contained"
                  sx = {{backgroundColor: 'red', color: 'white'}}
                >
                  ✕
                </CancelButton>
              )}

      </>    
      );
};

export default HolidaysTable;