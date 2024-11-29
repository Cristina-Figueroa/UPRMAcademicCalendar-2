'use client';

import React, { useEffect, useState , useCallback} from 'react';
import { useTheme } from '@mui/material/styles';
import PaginationComponent from './Pagination';
import RowsPerPage from './RowsPerPage'; 
import AddHolidayModal from './AddModal';
import EditHolidayModal from './UpdateFormModal';
import DeleteHoliday from './Delete';
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TableFilters from './HolidayFiltering';
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
} from './TableStyles';




const HolidaysTable = () => {
    const [holidays, setHolidays] = useState([]);
    const [error, setError] = useState(null);

    const theme = useTheme(); 
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Set 5 as default number of rows per page
    // const rowsPerPage = 5; // Number of rows per page

    // Calculate the current holidays to display
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
  
    const [isAdding, setIsAdding] = useState(false); // Toggle for input row
    const [newHoliday, setNewHoliday] = useState({ date: '', description: '', formattedDate: ''}); // Temp state for new holiday
  
    const handleAddClick = () => {
      setIsAdding(true);
    };

    const handleCancelClick = () => {
      setNewHoliday({ month: "", day: "", description: "" }); // Reset the newHoliday state
      setErrors({ month: false, day: false, description: false }); // Clear any validation errors
      setIsAdding(false); // Exit the add mode
    };
    
    const getDaysInMonth = (month, year) => {
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

    const handleInputChange = (field, value) => {
      setNewHoliday((prev) => ({ ...prev, [field]: value }));
    };

    // Notification for Adding Holiday 
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
    

      // Filtering Holidays
      const [filters, setFilters] = useState({
        academicPeriod: "",
        month: "",
        search: "",
      });
    
      const filteredHolidays = currentHolidays.filter((holiday) => {
        const { academicPeriod, month, search } = filters;
    
        // Filter by academic period
        if (academicPeriod) {
          const academicPeriodMonths = {
            Spring: [1, 2, 3, 4, 5], // January to May
            Summer: [6, 7, 8],       // June to August
            Fall: [9, 10, 11, 12],   // September to December
          };
    
          if (!academicPeriodMonths[academicPeriod].includes(parseInt(holiday.month))) {
            return false;
          }
        }
    
        // Filter by month
        if (month && parseInt(holiday.month) !== parseInt(month)) {
          return false;
        }
    
        // Filter by description (case-insensitive search)
        if (search && !holiday.description.toLowerCase().includes(search.toLowerCase())) {
          return false;
        }
    
        return true; // Include the holiday if all criteria match
      });



    return (
      <>
        {notification && (
          <Notification type={notificationType}>
            {notification}
          </Notification>
        )}
      <TableFilters filters={filters} setFilters={setFilters} />

      <TableContainer theme={theme}>
        <StyledTable>
          <TableHeader theme={theme}>
            <TableHeaderRow>
              <TableHeaderCell theme={theme}>Date</TableHeaderCell>
              <TableHeaderCell theme={theme}>Description</TableHeaderCell>
              <TableHeaderActionCell theme={theme}>Actions 

              </TableHeaderActionCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>


            { isAdding && (
              <TableRow theme={theme}>
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
                </TableCell>
                <SaveButtonCell>
                  <Button onClick={handleSaveClick}>Save</Button>
                </SaveButtonCell>
              </TableRow>)}



            {filteredHolidays.map((holiday, index) => (
              <TableRow key={index} theme={theme}>
                <DateCell theme={theme}>{holiday[1]}</DateCell> {/* Date */}
                <DescriptionCell theme={theme}>{holiday[2]}</DescriptionCell> {/* Description */}
                {/* <TableCell theme={theme}>{holiday[3]}</TableCell> Description */}
                <ActionCell  theme={theme} >
                  <Container>
                    {/* <AddHolidayModal isOpen={open} holidayrow={index}/>   */}
                    <EditHolidayModal isOpen={open} holidayrow={index}/>  
                    <DeleteHoliday isOpen={open} holidayrow={index}/>
                  </Container>
                </ActionCell>
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


      {!isAdding ? (
                                  <Button
                                    onClick={handleAddClick}
                                    variant="contained"
                                    style={{
                                      marginLeft: '10px',
                                      position: 'absolute',
                                      bottom: 50,
                                      right: 50,
                                      fontSize: '30px',
                                      borderRadius: '100px',
                                      height: '40px',
                                      minWidth: '40px',
                                    }}
                                  >
                                    +
                                  </Button>
                                ) : (
                                  <Button
                                    onClick={handleCancelClick}
                                    variant="contained"
                                    style={{
                                      marginLeft: '10px',
                                      position: 'absolute',
                                      bottom: 50,
                                      right: 50,
                                      fontSize: '20px',
                                      borderRadius: '100px',
                                      height: '40px',
                                      minWidth: '40px',
                                      backgroundColor: '#ff6b6b', // Optional: Set a red color for cancel button
                                    }}
                                  >
                                    ✕
                                  </Button>
                                )}

      </>    
      );
};

export default HolidaysTable;