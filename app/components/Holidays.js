'use client';

import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';
import PaginationComponent from './Pagination';
import RowsPerPage from './RowsPerPage'; 
import AddHolidayModal from './AddModal';
import EditHolidayModal from './UpdateFormModal';
import DeleteHoliday from './Delete';
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const TableContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  margin-top: -30px;
  border-radius: 10px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Arial', sans-serif;
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.thead`
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? theme.palette.primary.main
      : theme.palette.primary.main};
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? theme.palette.text.primary
      : theme.palette.text.primary};
`;

const TableHeaderRow = styled.tr`
  text-align: left;
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TableHeaderCell = styled.th`
  padding: 20px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  /* Set specific widths */
  &:nth-child(1) {
    width: 25%; /* Date column */
  }
  &:nth-child(3) {
    width: 30%; /* Actions column */
  }
`;

const TableHeaderActionCell = styled(TableHeaderCell)`
  display: flex; /* Enable Flexbox */
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* Horizontally center the content */
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`

`;

const TableCell = styled.td`
  padding: 18px 18px;
  font-size: 14px;
  font-weight: normal;
`;

const DateCell = styled(TableCell)`
  font-weight: bold;
`;

const ActionCell = styled(TableCell)`
  display: flex; /* Enable Flexbox */
  justify-content: left; /* Horizontally center the content */
`;

const TableFooter = styled.tfoot`
  background-color: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? theme.palette.text.primary
      : theme.palette.text.primary};
`;

const TableFooterRow = styled.tr`
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TableFooterCell = styled.th`
  padding: 14px 28px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Center = styled.div`
  display: flex;
  // flex-direction: row;
  justify-content: center;
`;

const Right = styled.div`
  display: flex;
  justify-content: right; 
`;



const HolidaysTable = () => {
    const [holidays, setHolidays] = useState([]);
    const [error, setError] = useState(null);

    const theme = useTheme(); 
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10); // Set 5 as default number of rows per page
    // const rowsPerPage = 5; // Number of rows per page

    // Calculate the current holidays to display
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentHolidays = holidays.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(holidays.length / rowsPerPage);

    const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    };

    const handleRowsPerPageChange = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setCurrentPage(1); // Reset to the first page
    };
    

    useEffect(() => {
        // Fetch holidays from the backend
        fetch('http://127.0.0.1:5000/holidays', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status:nnn ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setHolidays(data); // Save the data to state
            })
            .catch(error => {
                console.error('Error fetching holidays:', error);
                setError(error.message); // Save error to state
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }


    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');  // For displaying error messages
  
    const [isAdding, setIsAdding] = useState(false); // Toggle for input row
    const [newHoliday, setNewHoliday] = useState({ date: '', description: '', formattedDate: ''}); // Temp state for new holiday
  

    const handleAddClick = () => {
      setIsAdding(true);
    };
  
    const handleSaveClick = () => {
      if (!newHoliday.date || !newHoliday.description  || !newHoliday.formattedDate) {
        alert('Please fill out all fields.');
        return;
      }
  
      // Add the new holiday locally
      const updatedHolidays = [...holidays, newHoliday];
      setHolidays(updatedHolidays);
  
      // Save the new holiday to the backend
      fetch('http://127.0.0.1:5000/holidays', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: newHoliday.date,
          description: newHoliday.description,
          formatted_date: newHoliday.formattedDate,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to save holiday');
          }
          return response.json();
        })
        .then((data) => {
          setIsAdding(false); // Close input row
          setNewHoliday({ date: '', description: '', formattedDate: '' }); // Clear input state
          setResponseMessage(
            data.message + ' - ' + data.date + ' , Description: ' + description + ' , FormattedDate: ' + formattedDate
          );
        })
        .catch((error) =>{
          console.error('Error saving holiday:', error);
          setErrorMessage(error.message);

        })
    };
  
    const handleInputChange = (field, value) => {
      setNewHoliday((prev) => ({ ...prev, [field]: value }));
    };














    return (
      <>
      

      <TableContainer theme={theme}>
        <StyledTable>
          <TableHeader theme={theme}>
            <TableHeaderRow>
              <TableHeaderCell theme={theme}>Date</TableHeaderCell>
              <TableHeaderCell theme={theme}>Description</TableHeaderCell>
              <TableHeaderActionCell theme={theme}>Actions 
                  {/* <AddHolidayModal isOpen={open}/>   */}
                  {!isAdding && (<Button onClick={handleAddClick} 
                                          variant='contained'
                                          style={{ marginLeft: '10px', position: 'absolute', bottom: 50 , right: 50,
                                          fontSize:'30px', borderRadius:'100px', height: '40px',
                                          minWidth: '40px'
                                          }}>
                    
                    
                    +
                    
                    </Button>)}
              </TableHeaderActionCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>


            { isAdding && (<TableRow>

              <TableCell>
                <input
                  value={newHoliday.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  placeholder="Month Day"
                />
              </TableCell>
              <TableCell>
                <input
                  value={newHoliday.description}
                  onChange={(e) =>
                    handleInputChange('description', e.target.value)
                  }
                  placeholder="Description"
                />
              </TableCell>
              <TableCell>
                <input
                  value={newHoliday.formattedDate}
                  onChange={(e) =>
                    handleInputChange('formattedDate', e.target.value)
                  }
                  placeholder="MM-YY"
                />
              </TableCell>
              <ActionCell>
                <Button onClick={handleSaveClick}>Save</Button>
              </ActionCell>
              </TableRow>)}




            {currentHolidays.map((holiday, index) => (
              <TableRow key={index} theme={theme}>
                <DateCell theme={theme}>{holiday[1]}</DateCell> {/* Date */}
                <TableCell theme={theme}>{holiday[2]}</TableCell> {/* Description */}
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
      <Center>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                {/* Display message if validation is passed */}
                {responseMessage && <p>{responseMessage}</p>}
                </Center>
      </>    
      );
};

export default HolidaysTable;
